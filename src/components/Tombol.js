import React, { Component } from 'react';
import axios from 'axios';

const api = axios.create({
    baseURL:'http://localhost:9000/file'
})


class Tombol extends Component{ 

  constructor(){
      super();
      
    
    //   this.handleClick = this.handleClick.bind(this)
    }

    handleClick = async () =>{
        api.get('/').then(
            res => {console.log("error :" + res)}
            )
    }
  

}

const tombol = new Tombol();
export default tombol;