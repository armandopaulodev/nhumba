import AsyncStorage from '@react-native-async-storage/async-storage';

export interface user {
      email: String,
      password: String
}

export class AuthService{

unsername =''; 


login = async(user: user) => {

                await fetch('http://192.168.133.187:8000/api/user/login',
                {
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                  },
                  body : JSON.stringify({
                    'email': user.email,
                     'password':user.password
                  }),
                 
                }
                ).then(res=>{
                    return res.json();
                }).then(res=>{
                           
                           this.unsername = res.user.name;
                           AsyncStorage.setItem('user',JSON.stringify(res.user));//criando o usuario local
                           AsyncStorage.setItem('token',JSON.stringify(res.token));
                           AsyncStorage.setItem('mystates',JSON.stringify(res.realstates));
                }).catch(error=>{
                  console.log(error)
                })

        

                return this.unsername;

  }


  logout = async () => {

       await AsyncStorage.removeItem('user');
       await AsyncStorage.removeItem('token');

  }





 //verificar ususario 
getUser = async() =>{

  let user = await  AsyncStorage.getItem('user').then((data: any)=>{
    let a = JSON.parse(data);
    if(a!=null){
      this.unsername = a.name;
    }
  });

  return this.unsername;
}






}


