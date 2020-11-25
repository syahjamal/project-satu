import React, {useEffect, useState} from 'react';
import axios from "axios";

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

const Coin = ({name,image,symbol,price}) => {
    return (
        <div className='coin-container'>
            <div className='coin-row'>
                <div className='coin'>
                    <img src={image} alt='crypto'/>
                    <h1>{name}</h1>
                    <p className='coin-symbol'>{symbol}</p>
                </div>
                <div className='coin-data'>
                      <p className='coin-price'>${price}</p>
                </div>
            </div>
        </div>
    )
}

export default Coin