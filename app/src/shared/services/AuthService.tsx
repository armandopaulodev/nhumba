import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { Alert } from 'react-native';

export interface user {
      email: String,
      password: String
}

export class AuthService{

unsername =''; 


login = async(user: user) => {

                await axios.post('http://192.168.133.187:8000/api/user/login',
                {
                'email': "armandopaulo@netware.co.mz",
                'password': 12345678
                }
                ).then((res)=>{
                  this.unsername=res.data['user'].name;
                  AsyncStorage.setItem('user',res.data['user'] ); //criando o usuario local
                }).catch(error=>console.log(error));


                return this.unsername;

  }


  logout = async () => {

       await AsyncStorage.removeItem('user');

  }





 //verificar ususario 
getUser = async() =>{

  let user = await  AsyncStorage.getItem('user').then((data: any)=>{
    let a = JSON.parse(data);
    this.unsername = a.name;
  });

  return this.unsername;
}


}


