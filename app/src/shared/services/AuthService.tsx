  import React from 'react';

  function login() {
    fetch('http://192.168.133.187:8000/api/user/login', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "provider": "username",
        "data": {
        "email": "armandopaulo@netware.co.mz",
        "password": 12345678
        }
        })
    }).then((response) => response.json())
    .then((res) => {
      if(typeof(res.message) != "undefined"){
      console.log("opha");
        }
      else{
      console.log("bommm")
      }
    }).catch((error) => {
    console.error(error);
    });
   }


