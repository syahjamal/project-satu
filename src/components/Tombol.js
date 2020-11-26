import React, { Component } from 'react';
import axios from 'axios';

const api = axios.create({
    baseURL:'http://localhost:9000'
})


class Tombol extends Component{ 

  constructor(){
      super();
      
    
    //   this.handleClick = this.handleClick.bind(this)
    }

    handleClick = async () =>{
        api.get('/').then(
            res => {console.log("error :" + res)}
            ).then(
                alert('Press ok to proceed')
            )
    }
  

}

const tombol = new Tombol();
export default tombol;