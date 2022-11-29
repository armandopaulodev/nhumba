import {
  useEffect,
  useState,
} from 'react';

import { Formik } from 'formik';
import {
  Box,Fab,Select,
  Button,
  Center,
  FormControl,WarningOutlineIcon,
  Heading,
  HStack,
  Icon,
  Image,
  Input,
  Link,
  NativeBaseProvider,CheckIcon,
  Text,
  VStack,
  Container,
  TextArea,
} from 'native-base';


import { RealState } from '../../shared/services/RealStateService';
import React from 'react';
import * as ImagePicker from 'expo-image-picker';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';



export default function Create({navigation}: {navigation: any}) {
  const [imageFront, setImageFront] = useState(null);
  let realstate = new RealState;


  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result : any = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImageFront(result.assets[0].uri);
      formdata.uri = result.assets[0].uri;
    }
  };

let formdata = {

                'uri' : '',
                'imgs' : [],
                'adress': '',
                'wood': '',
                'city' : '',
                'type': '',
                'condition': '',
                'rooms' : Number,
                'badrooms': Number,
                'utility': '',
                'price': Number,
                'province': '',
                'description': '',
}


const store = async(data: any) =>{
       
    let token = await AsyncStorage.getItem('token').then((res: any)=>{
      return JSON.parse(res);
    }).then((res)=>{
        return res
    });


    //store realstate

    // fetch(realstate.url_store,{
    //   method:"POST",
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'multipart/form-data',
    //     'Authorization': token,
    //   }, 
    //   body: JSON.stringify({name: 'vas', paulo: 'yop'})
    // }).then(res=>{
    //     console.log(res);
    // });

  await  axios.post(realstate.url_store,data,
    {
      headers: {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data',
            'Authorization': token,
          }
    }
    ).then(res=>{
        console.log(res.data);
        navigation.navigate('Perfil');
    }).catch(error=>{
          console.log(error);
    })
}




  return (
   <NativeBaseProvider>
            <Formik initialValues={formdata}
                                                  onSubmit={(values) => {

                                                          store(values);

                                                  } }

                                                  >

                                    {props =>(


                                            <ScrollView>
                                                <Center mx={2}>
                                                    <FormControl w="3/4"  width="full" isRequired >
                                                    <FormControl.Label>Provincia</FormControl.Label>
                                                    <Select minWidth="200" accessibilityLabel="Choose Service" placeholder="Choose Service" _selectedItem={{
                                                    
                                                    endIcon: <CheckIcon size={5} />
                                                  }} mt="1" onValueChange={props.handleChange('province')}>
                                                      <Select.Item label="Maputo" value="Maputo" />
                                                      <Select.Item label="Sofala" value="Sofala" />
                                                      <Select.Item label="Manica" value="Manica" />
                                                    </Select>

                                                  </FormControl>

                                                  <FormControl w="3/4"  width="full" isRequired >
                                                    <FormControl.Label>Cidade</FormControl.Label>
                                                    <Select minWidth="200" accessibilityLabel="Choose Service" placeholder="Choose Service" _selectedItem={{
                                                    
                                                    endIcon: <CheckIcon size={5} />
                                                  }} mt="1" onValueChange={props.handleChange('city')}>
                                                      <Select.Item label="Beira" value="Beira" />
                                                      <Select.Item label="Maputo" value="Maputo" />
                                                      <Select.Item label="Chimoio" value="chimoio" />
                                                    </Select>
                                                    <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                                                      
                                                    </FormControl.ErrorMessage>
                                                  </FormControl>

                                                  <FormControl w="3/4"  width="full" isRequired >
                                                    <FormControl.Label>Bairro</FormControl.Label>
                                                    <Select minWidth="200" accessibilityLabel="Choose Service" placeholder="Choose Service" _selectedItem={{
                                                    
                                                    endIcon: <CheckIcon size={5} />
                                                  }} mt="1" onValueChange={props.handleChange('wood')}>
                                                      <Select.Item label="Matacuane" value="Matacuane" />
                                                      <Select.Item label="Pontagea" value="Pontagea" />
                                                      <Select.Item label="Macurungo" value="Macurungo" />
                                                      <Select.Item label="Xipamanine" value="Xipamanine" />
                                                    </Select>
                                                    <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                                                      
                                                    </FormControl.ErrorMessage>
                                                  </FormControl>

                                                  
                                                  <FormControl w="3/4"  width="full" isRequired >
                                                    <FormControl.Label>Tipo do imovel</FormControl.Label>
                                                    <Select minWidth="200" accessibilityLabel="Choose Service" placeholder="Choose Service" _selectedItem={{
                                                    
                                                    endIcon: <CheckIcon size={5} />
                                                  }} mt="1" onValueChange={props.handleChange('type')}>
                                                      <Select.Item label="2" value="2" />
                                                      <Select.Item label="3" value="3" />
                                                      <Select.Item label="duplex" value="Duplex" />
                                                    </Select>
                                                    <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                                                      
                                                    </FormControl.ErrorMessage>
                                                  </FormControl>


                                                  <FormControl w="3/4"  width="full" isRequired>
                                                    <FormControl.Label>Para efeito de ?</FormControl.Label>
                                                    <Select minWidth="200" accessibilityLabel="Choose Service" placeholder="Para que efeito" _selectedItem={{
                                                    
                                                    endIcon: <CheckIcon size={5} />
                                                  }} mt="1"  onValueChange={props.handleChange('utility')}>
                                                      <Select.Item label="Venda" value="Venda" />
                                                      <Select.Item label="Renda" value="Renda" />
                                                    </Select>
                                                    <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                                                      
                                                    </FormControl.ErrorMessage>
                                                  </FormControl>


                                                  <FormControl w="3/4"  width="full" isRequired >
                                                    <FormControl.Label>Preco</FormControl.Label>
                                                    <Input  placeholder="Preco" w="100%" type='number'minWidth="200"
                                                      placeholderTextColor="silver"
                                                      onChangeText={props.handleChange('price')}
                                                    />
                                                    <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                                                      
                                                    </FormControl.ErrorMessage>
                                                  </FormControl>

                                                  <FormControl w="3/4"  width="full" isRequired >
                                                    <FormControl.Label>Numero de Quartos</FormControl.Label>
                                                    <Input  placeholder="Numero de Quartos" w="100%" type='number'minWidth="200"
                                                      placeholderTextColor="silver"
                                                      onChangeText={props.handleChange('rooms')}
                                                    />
                                                    <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                                                      
                                                    </FormControl.ErrorMessage>
                                                  </FormControl>

                                                  <FormControl w="3/4"  width="full" isRequired >
                                                    <FormControl.Label>Numero de Quartos de banho</FormControl.Label>
                                                    <Input  placeholder="Quartos de banho" w="100%" type='number'minWidth="200"
                                                      placeholderTextColor="silver"
                                                      onChangeText={props.handleChange('badrooms')}
                                                    />
                                                    <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                                                      
                                                    </FormControl.ErrorMessage>
                                                  </FormControl>

                                                  <FormControl w="3/4"  width="full" isRequired >
                                                    <FormControl.Label>Endereco (Algum ponto de referencia)</FormControl.Label>
                                                    <Input  placeholder="endereco" w="100%" type='number'minWidth="200" width="full"
                                                      placeholderTextColor="silver"
                                                      onChangeText={props.handleChange('adress')}
                                                    />
                                                    <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                                                      
                                                    </FormControl.ErrorMessage>
                                                  </FormControl>

                                                  <FormControl w="3/4"  width="full" isRequired >
                                                    <FormControl.Label>Condicoes do imovel</FormControl.Label>
                                                   
                                                     <TextArea h={20} placeholder="Nova/ Semi nova ou outra sistuacao" w="75%" maxW="300"
                                                     onChangeText={props.handleChange('condition')} autoCompleteType={undefined} />
                                                    <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                                                      
                                                    </FormControl.ErrorMessage>
                                                  </FormControl>

                                                  <FormControl w="3/4"  width="full" isRequired >
                                                    <FormControl.Label>Descricao</FormControl.Label>
                                                   
                                                     <TextArea h={20} placeholder="TDeescreva o imovel" w="75%" maxW="300"
                                                     onChangeText={props.handleChange('description')} autoCompleteType={undefined} />
                                                    <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                                                      
                                                    </FormControl.ErrorMessage>
                                                  </FormControl>

                                                  <FormControl w="3/4"  width="full" isRequired >
                                                    <FormControl.Label>Imagem de Capa</FormControl.Label>
                                                   
                                                    <Button  onPress={pickImage} variant="outline" width="sm" p={5}>Imagem de capa</Button>
                                                    {imageFront && <Image source={{ uri: imageFront }} style={{ width: 70, height: 70 }} alt="IMagem de capa" />}
                                                    <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                                                      
                                                    </FormControl.ErrorMessage>
                                                  </FormControl>


                                                      <Button  mt="5" colorScheme="amber" onPress={props.handleSubmit} width="full">
                                                       Finalizar                                         
                                                      </Button>
                                              </Center>
                                            </ScrollView>
                                                
                                             



                                          



                                    )}
            </Formik>
   </NativeBaseProvider>
  );
}
