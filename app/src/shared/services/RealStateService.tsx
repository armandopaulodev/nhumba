import axios from "axios";
import React from "react";


export class RealState {




    getAll = () =>{


       let all = axios.get('http://192.168.133.187:8000/api/realstate/all')
        .then(res=>{
              return res.data
        });


        return all;
    
        // http://192.168.133.187:8000/
    }






}