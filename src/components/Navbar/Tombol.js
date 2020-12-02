import React, { Component } from 'react';
import axios from 'axios';

const api = axios.create({
    baseURL:'http://localhost:8080'
})


class Tombol extends Component{ 

  constructor(){
      super();
      
    
    //   this.handleClick = this.handleClick.bind(this)
    }

    handleClick = async () =>{
        api.get('/file').then(
            res => {console.log("error :" + res)}
            ).then(
                alert('Press ok to proceed')
            )
    }
  

}

const tombol = new Tombol();
export default tombol;