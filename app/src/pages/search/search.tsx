import React from 'react';

import { VStack, NativeBaseProvider,Icon, Box, Divider,Input,
Heading, Stack, Center, Button, Actionsheet,Skeleton, HStack, useDisclose }
from 'native-base';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Alert } from 'react-native';
import { Platform } from 'react-native';



export default function Search(){
const { isOpen, onOpen, onClose } = useDisclose();
let valor:boolean = true;
return (
        <NativeBaseProvider>
                        <VStack w="100%" space={5} alignSelf="center" mt={10}>

                                <Box mx={5}>
                                    <Heading color="primary.900" fontSize={18} fontFamily='Roboto'>Buscar imóveis</Heading>

                                    <Stack direction="row" mb="2.5" mt="1.5" space={3}>
                                        <Box width={280}>
                                              <Input mt={3} placeholder="Buscar imóveis" variant="filled" width="100%" borderRadius="10" py="1" px="2" borderWidth="1"
                                              InputLeftElement={<Icon ml="2" size="4" color="gray.400" as={<Ionicons name="ios-search" />} />} />
                                        </Box>
                                        <Box>

                                          <Icon onPress={onOpen} as={Ionicons} name="filter-sharp" size={10} mt={3} />

                                        </Box>
                                    </Stack>



                                    <HStack w="90%" maxW="400" borderWidth="1" space={8} rounded="md" _dark={{
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
        </NativeBaseProvider>
);

}