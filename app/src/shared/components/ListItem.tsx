import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { NativeBaseProvider, Box, HStack, VStack, Text, Pressable, Image, Center, Icon, Spacer } from 'native-base';

import { MaterialIcons, Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";

const ListItem = ({ data }) => {
  return (
    

            <Box bg="gray.50" shadow={1} borderRadius="5" rounded="xl"   mb={2} ml={3} mr={3}>
              <TouchableOpacity >
                  <Box  py="2" px="2">
                      <HStack >
                          
                          <Image source={{
                          uri: data.avatar 
                          }} alt='logo' height="60" rounded="full" width="60" />

                          <Box ml={5}>
                              <VStack >
                                      <Text fontSize="sm" color="warning.400">
                                          Corrector
                                      </Text>
                                      <Text color="black" fontSize="md">
                                          {data.name} 
                                      </Text>
                              </VStack>
                              
                              <Text textAlign="justify">
                              <Icon color="dark.200" as={Ionicons} name="mail" size={4} />
                                {data.email}
                              </Text>
                          </Box>
                      
                      </HStack>
                  </Box>
              </TouchableOpacity>
            </Box>
          

             

    

  
  );
};



export default ListItem;
