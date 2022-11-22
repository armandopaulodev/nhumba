import { useState, useEffect } from 'react';

import { Formik } from 'formik';
import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  HStack,
  Icon,
  Image,
  Input,
  Link,
  NativeBaseProvider,
  Text,
  VStack,
} from 'native-base';
import {
  Alert,
  StyleSheet,
  View,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { AuthService } from '../../shared/services/AuthService';



export default function Perfil(){

const[user, setUser] =useState("");
let auth = new AuthService;
  

useEffect(()=>{
    auth.getUser().then((name)=>{
        if(name!=null){
          setUser(name);
        }
    });
});



const login = async(user: any)=>{
 
     auth.login(user).then((name)=>{

      setUser(name);

     });



 }


 const logout = async() => {
  Alert.alert(
    "Logout",
    "Tem de certeza que deseja terminar sessao",
    [
      {
        text: "Cancelar",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "Sim", onPress: () => auth.logout().then(()=>{
          setUser('');
      }) 
    }

    ]);
 }


return (
        <NativeBaseProvider>
          


                      {
                                            user=="" ? 
                                            <Center w="100%">
                                            <Box safeArea p="2" py="8" w="90%" maxW="290">
                            
                                              <Box alignItems="center">
                            
                                                    <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
                                                    color: "warmGray.50"
                                                    }}>
                            
                                                    NHUMBA
                            
                                                    </Heading>
                            
                                                    <Heading mt="1" _dark={{
                                                    color: "warmGray.200"
                                                  }} color="coolGray.600" fontWeight="medium" size="xs">
                                                      Entrar como corrector!
                                                    </Heading>
                                              </Box>
                            
                                              <VStack space={3} mt="5">
                                              <Formik initialValues={{ email: '', password: '' }}
                                                  onSubmit={(values) => {

                                                       login(values);

                                                  } }

                                                  >
                                                  {props => (
                                                    <View>

                                                      <FormControl>
                                                      <FormControl.Label>Nome</FormControl.Label>
                                                      <Input type="text"
                                                       placeholder='Email'
                                                       onChangeText={props.handleChange('email')}
                                                       value={props.values.email}/>
                                                      </FormControl>

                                                      <FormControl>
                                                      <FormControl.Label>Senha</FormControl.Label>
                                                      <Input 
                                                        // multiline
                                                        type="password"
                                                        autoCorrect={false}
                                                        secureTextEntry={true}
                                                        placeholder='Password'
                                                        placeholderTextColor="silver"
                                                        onChangeText={props.handleChange('password')}
                                                        value={props.values.password}/>
                                                      </FormControl>
                                                          

                                    

                                                    
                                                      <Button mt="5" colorScheme="amber" onPress={props.handleSubmit}>
                                                       Entrar                                          
                                                      </Button>
                                                    </View>
                                                  )}
                                                  </Formik>
                                              
                                                <HStack mt="6" justifyContent="center">
                                                  <Text fontSize="sm" color="amber.600" _dark={{
                                                  color: "warmGray.200"
                                                }}>
                                                   Gostaria de tornar um?.{" "}
                                                  </Text>
                                                  <Link _text={{
                                                  color: "indigo.500",
                                                  fontWeight: "medium",
                                                  fontSize: "sm"
                                                }} href="https://www.netware.co.mz">
                                                    Criar uma
                                                  </Link>
                                                </HStack>
                                              </VStack>
                                            </Box>
                                        </Center>
                                            : 
                                            <Center w="100%">
                                            <Box safeArea p="2" py="8" w="90%" maxW="290">
                            
                                              <Box alignItems="center">
                                              <Image source={{
                                                    uri: 'https://media.vanityfair.com/photos/5ba12e6d42b9d16f4545aa19/3:2/w_1998,h_1332,c_limit/t-Avatar-The-Last-Airbender-Live-Action.jpg'
                                                    }} alt='logo' height="100" rounded="full" width="100" />
                                              <Text fontWeight="bold" fontSize="md" mt={1}>{user}</Text>
                                              </Box>
                                           
                                              <VStack space={4} alignItems="center">
                                                    <Box shadow="9"  width="full" height={5}><Text>Privacidade</Text></Box>
                                              </VStack>
                                              
                            
                                          
                                            </Box>

                                            {/* Exit */}
                                            <Icon   as={Ionicons} 
                                            name="exit-outline"  
                                            size={6} style={{ position: 'absolute', top: 38, right: 10 }}
                                            onPress={()=>logout()}
                                            >   
                                           </Icon>

                                       

                                        </Center>

                                       
                                           
                                         
                        }

          
        </NativeBaseProvider>
);

}

const styles = StyleSheet.create({

  foto: {
        alignItems: 'center'
  },
  modal:{
      marginHorizontal: 5
  },
  btn:{
       marginTop: 15
  }

})