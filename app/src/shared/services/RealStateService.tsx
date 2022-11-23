import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React from "react";
import { cos } from "react-native-reanimated";


export class RealState {
    
    url ='http://192.168.133.187:8000/api/realstate/all';

    getAll = async () =>{


       let all =await axios.get('http://192.168.133.187:8000/api/realstate/all')
        .then(res=>{
              return res.data
        });

        AsyncStorage.removeItem("realstate");
        AsyncStorage.setItem("realstate", JSON.stringify(all));
    
        // http://192.168.133.187:8000/
    }






}