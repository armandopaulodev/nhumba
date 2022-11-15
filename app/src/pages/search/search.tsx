import React, {useState, useEffect}  from 'react';

import { VStack, NativeBaseProvider,Icon, Box, Divider,Input,
Heading, Stack, Center, Button,FlatList,
 Actionsheet,Skeleton, HStack, useDisclose,
  Avatar,  Text, Spacer, ScrollView   }
from 'native-base';

import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import axios from 'axios';
import { Alert } from 'react-native';




export default function Search(){
const[skeleton, setSkeleton]=useState(true);
const[imoveis, setImoveis]=useState([]);
const { isOpen, onOpen, onClose } = useDisclose();


useEffect(()=>{
        fectUser();
});
const fectUser = async() =>{

    axios.get('http://192.168.133.187:8000/api/test')
    .then(res=>{
        setImoveis(res.data);
    })

    // http://192.168.133.187:8000/
}

return (
        <NativeBaseProvider>
                         <VStack w="100%" space={5}  mt={10} maxW='full'>

                                <Box ml={2} mr={2}>
                                    
                                    <Heading color="primary.900" fontSize={18} fontFamily='Roboto' ml={2}>Buscar imóveis</Heading>

                                    <Stack direction="row" mb="2.5" mt="1.5" space={3} maxW="full">
                                        <Box width={330}>
                                              <Input mt={3} placeholder="Buscar imóveis" variant="filled"  width="100%" borderRadius="10" py="1" px="2" borderWidth="2" borderColor="blue.100"
                                              onChange={()=>setSkeleton(false)} InputLeftElement={<Icon ml="2" size="4" color="gray.400" as={<Ionicons name="ios-search" />} />} />
                                        </Box>
                                        <Box>

                                          <Icon onPress={onOpen} as={Ionicons} name="filter-sharp" size={10} mt={3} />

                                        </Box>
                                    </Stack>
                                </Box>
                         </VStack>

                                        <Actionsheet  isOpen={isOpen} onClose={onClose}>
                                        <Actionsheet.Content>
                                        <Heading>Filtrar Imoveis</Heading>
                                        <Actionsheet.Item>Option 1</Actionsheet.Item>
                                        <Actionsheet.Item>Option 2</Actionsheet.Item>
                                        <Actionsheet.Item>Option 3</Actionsheet.Item>
                                        <Actionsheet.Item color="red.500">Delete</Actionsheet.Item>
                                        </Actionsheet.Content>
                                        </Actionsheet>


                      
                            {
                                skeleton?
                                  <FlatList data={imoveis} keyExtractor={(item: any) => item.id}
                                  renderItem={(item: any) =>
                                    <Text>{item.name}</Text>
                                    }
                              
                                  /> 
                              
                                 :
                                 <Box ml={2} mr={2}>

                                    <HStack w="full" mt={2} maxW="full" borderWidth="1" space={8} rounded="md" _dark={{
                                        borderColor: "coolGray.500"
                                        }} _light={{
                                        borderColor: "coolGray.200"
                                        }} p="4">
                                                <Skeleton flex="1" h="150" rounded="md" startColor="coolGray.100" />
                                                <VStack flex="3" space="4">
                                                <Skeleton startColor="amber.300" />
                                                <Skeleton.Text />
                                                <HStack space="2" alignItems="center">
                                                <Skeleton size="5" rounded="full" />
                                                <Skeleton h="3" flex="2" rounded="full" />
                                                <Skeleton h="3" flex="1" rounded="full" startColor="indigo.300" />
                                                </HStack>
                                                </VStack>
                                    </HStack>

                                    <HStack w="full" mt={2} maxW="full" borderWidth="1" space={8} rounded="md" _dark={{
                                        borderColor: "coolGray.500"
                                        }} _light={{
                                        borderColor: "coolGray.200"
                                        }} p="4">
                                                <Skeleton flex="1" h="150" rounded="md" startColor="coolGray.100" />
                                                <VStack flex="3" space="4">
                                                <Skeleton startColor="darkBlue.400" />
                                                <Skeleton.Text />
                                                <HStack space="2" alignItems="center">
                                                <Skeleton size="5" rounded="full" />
                                                <Skeleton h="3" flex="2" rounded="full" />
                                                <Skeleton h="3" flex="1" rounded="full" startColor="indigo.300" />
                                                </HStack>
                                                </VStack>
                                    </HStack>

                                    <HStack w="full" mt={2} maxW="full" borderWidth="1" space={8} rounded="md"  _dark={{
                                        borderColor: "coolGray.500"
                                        }} _light={{
                                        borderColor: "coolGray.200"
                                        }} p="4">
                                                <Skeleton flex="1" h="150" rounded="md" startColor="coolGray.100" />
                                                <VStack flex="3" space="4">
                                                <Skeleton startColor="yellow.50" />
                                                <Skeleton.Text />
                                                <HStack space="2" alignItems="center">
                                                <Skeleton size="5" rounded="full" />
                                                <Skeleton h="3" flex="2" rounded="full" />
                                                <Skeleton h="3" flex="1" rounded="full" startColor="indigo.300" />
                                                </HStack>
                                                </VStack>
                                    </HStack>

                                    <HStack w="full" mt={2} maxW="full" borderWidth="1" space={8} rounded="md" _dark={{
                                        borderColor: "coolGray.500"
                                        }} _light={{
                                        borderColor: "coolGray.200"
                                        }} p="4">
                                                <Skeleton flex="1" h="150" rounded="md" startColor="coolGray.100" />
                                                <VStack flex="3" space="4">
                                                <Skeleton startColor="cyan.400" />
                                                <Skeleton.Text />
                                                <HStack space="2" alignItems="center">
                                                <Skeleton size="5" rounded="full" />
                                                <Skeleton h="3" flex="2" rounded="full" />
                                                <Skeleton h="3" flex="1" rounded="full" startColor="indigo.300" />
                                                </HStack>
                                                </VStack>
                                    </HStack>
                                

            

                            
                                    </Box>
                            }

                             

                       

        </NativeBaseProvider>
);

}