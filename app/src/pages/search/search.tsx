import React from 'react';

import { VStack, NativeBaseProvider,Icon, Box, Divider,Input, Heading, Text, Center } from 'native-base';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';



export default function Search(){


return (
        <NativeBaseProvider>
                          <VStack w="100%" space={5} alignSelf="center">
                            <Heading fontSize="lg">Cupertino</Heading>
                            <Input placeholder="Search" variant="filled" width="100%" borderRadius="10" py="1" px="2" borderWidth="1" borderColor="black"
                             InputLeftElement={<Icon ml="2" size="4" color="gray.400" as={<Ionicons name="ios-search" />} />} />
                         </VStack>
        </NativeBaseProvider>
);

}