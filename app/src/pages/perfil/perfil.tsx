import * as React from "react";
import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider } from "native-base";
import { Alert, ImageBackground  } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface login {
     name: String,
     password: String
}

export default function Perfil(){


const storeData = async (value:login) => {
    try {
      await AsyncStorage.setItem('@storage_Key', value)
    } catch (e) {
      // saving error
    }
  }

return (

        <NativeBaseProvider>
          
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
                          Bem vindo, faca login pra continuar!
                        </Heading>
                  </Box>

                  <VStack space={3} mt="5">
                    <FormControl>
                      <FormControl.Label>Email ID</FormControl.Label>
                      <Input />
                    </FormControl>
                    <FormControl> 
                      <FormControl.Label>Password</FormControl.Label>
                      <Input type="password" />
                      <Link _text={{
                      fontSize: "xs",
                      fontWeight: "500",
                      color: "amber.500"
                    }} alignSelf="flex-end" mt="1">
                        Esqueceu a senha?
                      </Link>
                    </FormControl>
                    <Button mt="2" colorScheme="amber" onPress={()=>{Alert.alert('Atencao', 'Funcao Desactivada! Aguarde')}}>
                      Entrar
                    </Button>
                    <HStack mt="6" justifyContent="center">
                      <Text fontSize="sm" color="amber.600" _dark={{
                      color: "warmGray.200"
                    }}>
                        Nao tem conta?.{" "}
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

        </NativeBaseProvider>
);



}