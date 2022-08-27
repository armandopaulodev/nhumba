import React from 'react';

import { VStack, NativeBaseProvider,Icon, Box, Divider,Input,
Heading, Stack, Center, Button, Actionsheet, useDisclose }
from 'native-base';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Alert } from 'react-native';
import { Platform } from 'react-native';



export default function Search(){
 const { isOpen, onOpen, onClose } = useDisclose();
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

                                    <Center w="64" h="20" bg="indigo.300" rounded="md" shadow={3} mb={2} />
                                    <Center w="64" h="20" bg="indigo.500" rounded="md" shadow={3} mb={2}  />
                                    <Center w="64" h="20" bg="indigo.700" rounded="md" shadow={3} mb={2}  />
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