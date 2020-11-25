import React, {useEffect, useState} from 'react';
import axios from "axios";
import Coin from './Coin';

function Crypto(){

    const[coins, setCoins]= useState([]);

    useEffect(()=>{
      axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(res =>{
        setCoins(res.data);
      })
      .catch(error => console.log(error))
    },[])
    
    const filteredCoins = coins.filter(coin =>
      coin.name.toLowerCase()
    )
    
    return(
        <>
            {filteredCoins.map(coin => {
                return(
                    <Coin 
                    key={coin.id}
                    name={coin.name}
                    image={coin.image}
                    symbol={coin.symbol}
                    price={coin.current_price} />
                )
            })}
            <h1>tes</h1>
          </>
    )

}

export default Crypto;