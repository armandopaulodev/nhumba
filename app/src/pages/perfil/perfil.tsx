import {
  useEffect,
  useState,
} from 'react';

import { Formik } from 'formik';
import {
  Box,Fab,
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
  Container,
  Pressable,
  FlatList,
  Spacer,
} from 'native-base';
import {
  Alert,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { AuthService } from '../../shared/services/AuthService';
import React from 'react';
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Perfil({navigation}: {navigation: any}){

const[user, setUser] =useState("");
const[list, setList]=useState([]);
let auth = new AuthService;
  

useEffect(()=>{
 
    AsyncStorage.getItem('mystates').then((res:any)=>{
    let data = JSON.parse(res);
    setList(data);
    });

    auth.getUser().then((name)=>{
        if(name!=null){
          setUser(name);
        }
    });
});



const login = async(user: any)=>{
 
     auth.login(user).then((name)=>{

      setUser(name);

      AsyncStorage.getItem('mystates').then((res:any)=>{
            let data = JSON.parse(res);
            setList(data);
      });

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
                                           
                                          <Box>
                                          
                                          <Box bg="warning.100" py="4" px="3" borderRadius="5" rounded="md"  pt={10} mt={2} width="full">
                                            <HStack >
                                                
                                                <TouchableOpacity onPress={() => logout()}>
                                                    <Image source={{
                                                  uri: 'https://media.vanityfair.com/photos/5ba12e6d42b9d16f4545aa19/3:2/w_1998,h_1332,c_limit/t-Avatar-The-Last-Airbender-Live-Action.jpg'
                                                  }} alt='logo' height="60" rounded="full" width="60" />
                                                </TouchableOpacity>
                                                
                                    
                                                <Box ml={5}>
                                                    <VStack >
                                                            <Text color="black" fontSize="xl">
                                                                {user}
                                                            </Text>
                                                    </VStack>
                                    
                                                    <HStack mt={3} alignContent="flex-start" justifyContent="space-between">
                                    
                                              
                                    
                                                    </HStack>
                                                   
                                                </Box>
                                            </HStack>
                                            </Box>

                                            <Text ml={2} mb={3}>Meus Imoveis</Text>
                                          <FlatList
                                            data={list}
                                            renderItem={({ item }) => 
                                            <Box bg="gray.50" shadow={1} borderRadius="5" rounded="xl"   mb={2} width="full">
                                            <TouchableOpacity >
                                                <Box  py="2" px="2">
                                                    <HStack >
                                                        
                                                        <Image source={{
                                                        uri: item.uri
                                                        }} alt='logo' height="60" rounded="full" width="60" />
                              
                                                        <Box ml={5}>
                                                            <VStack >
                                                                    <Text fontSize="sm" color="warning.400">
                                                                       {item.wood} <Spacer/> {item.price} <Spacer/> {item.currence}
                                                                    </Text>
                                                                    <Text color="black" fontSize="md">
                                                                        {item.city} <Spacer/> <Spacer/>Quartos: {item.rooms} <Spacer/> Banhos: {item.badrooms}
                                                                    </Text>
                                                            </VStack>
                                                            
                                                            <Text textAlign="justify">
                                                            <Icon color="dark.200" as={Ionicons} name="mail" size={4} />
                                                              {item.utility}
                                                            </Text>

                                                            <Text>
                
                                                            <Icon color="dark.200" as={Ionicons} name="trash" color="red.300" size={4} />
                                                            </Text>
                                                        </Box>
                                                    
                                                    </HStack>
                                                </Box>
                                            </TouchableOpacity>
                                          </Box>
                                             }
                                            keyExtractor={(item) => item.id}
                                           />

                                         
          
          
                                          <Box position="relative" h={100} w="100%">
                                            <Fab position="absolute" onPress={() => { navigation.navigate('create'); } } size="lg" icon={<Icon color="white" as={<AntDesign name="plus" />} size="sm" />} />
                                          </Box>

                                        
                                        
                                      
                                      </Box>
                                          
                                       
                                        



                        

                  
                  
                        

                                       

                                         

                                       
                                           
                                         
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