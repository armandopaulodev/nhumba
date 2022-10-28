import React from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Divider,
  Switch,
  useColorMode,
  NativeBaseProvider,StatusBar,Icon,
  extendTheme,
  Stack,AspectRatio, ScrollView,IconButton, useToast,
  Box, Image, Toast, FlatList, 
} from "native-base";

import { MaterialIcons, Ionicons, FontAwesome } from "@expo/vector-icons";
import { Alert, TouchableOpacity, ActivityIndicator } from 'react-native';
import LocalDataBase from "../../../database/localDatabase";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });
type MyThemeType = typeof theme;
declare module "native-base" {
  interface ICustomTheme extends MyThemeType {}
}
export default function Home({navigation}: {navigation: any}) {

  const imoveis = LocalDataBase();
  
  return (
    <NativeBaseProvider>

            
             <ScrollView mt={2}>



                  <ActivityIndicator color="blue" size="large"></ActivityIndicator>
                

                 <Heading size="md" mb={1} ml={1}>Categorias</Heading>
                  <HStack space={3} mb={2} justifyContent="center">
                    <ScrollView horizontal={true}>
                        <Center h="20" w="20" bg="primary.300" rounded="md" shadow={3} ml={1} mr={1}/>
                        <Center h="20" w="20" bg="primary.500" rounded="md" shadow={3} ml={1} mr={1} />
                        <Center h="20" w="20" bg="primary.700" rounded="md" shadow={3} ml={1} mr={1}/>
                        <Center h="20" w="20" bg="primary.500" rounded="md" shadow={3} ml={1} mr={1}/>
                        <Center h="20" w="20" bg="primary.700" rounded="md" shadow={3} ml={1} mr={1}/>
                        <Center h="20" w="20" bg="primary.500" rounded="md" shadow={3} ml={1} mr={1}/>
                        <Center h="20" w="20" bg="primary.700" rounded="md" shadow={3} ml={1} mr={1}>ol</Center>
                    </ScrollView>
                  </HStack>
                  <FlatList data={imoveis} 
                    renderItem={({item})=>
                    <Box alignItems="center" mb={2}>
                              <Box maxW="full" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                            borderColor: "coolGray.600",
                            backgroundColor: "gray.700"
                          }} _web={{
                            shadow: 2,
                            borderWidth: 0
                          }} _light={{
                            backgroundColor: "gray.50"
                          }}>
                          <Box>
                            <TouchableOpacity  onPress={() => {navigation.navigate('Details', item)}}>
                                <AspectRatio w="100%" ratio={16 / 9}>
                                  <Image source={{
                                  uri: item.uri
                                }} alt="image" />
                                </AspectRatio>
                                <Center bg="violet.500" _dark={{
                                bg: "violet.200"
                              }} _text={{
                                color: "warmGray.50",
                                fontWeight: "700",
                                fontSize: "xs"
                              }} position="absolute" bottom="0" px="3" py="1.5">
                                  {item.capital}
                                </Center>
                            </TouchableOpacity>
                          </Box>
                          <Stack p="4" space={3}>
                            <Stack space={2}>
                              <Heading size="md" ml="-1">
                              {item.province}
                              </Heading>
                              <Text fontSize="xs" _light={{
                              color: "violet.500"
                            }} _dark={{
                              color: "violet.200"
                            }} fontWeight="500" ml="-0.5" mt="-1">
                                The Silicon Valley of India.
                              </Text>
                            </Stack>
                            <Text fontWeight="200">
                            {item.description}
                            </Text>
                            <HStack alignItems="center" space={4} justifyContent="space-between">
                              <HStack alignItems="center">
                                <Text color="coolGray.600" _dark={{
                                color: "warmGray.200"
                              }} fontWeight="200">
                                  9 mins ago
                                </Text>
                                <Icon as={Ionicons} name="star" color="amber.200" ml={1}></Icon>  
                                <Icon as={Ionicons} name="star" color="amber.200" ml={1}></Icon>
                                <Icon as={Ionicons} name="star" color="amber.200" ml={1}></Icon>  
                                <Icon as={Ionicons} name="star" color="amber.200" ml={1}></Icon>
                              </HStack>
                            </HStack>
                          </Stack>
                        </Box>
                    </Box>  
                  }
                  />

             </ScrollView>
         
    </NativeBaseProvider>
  );
}

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark Mode</Text>
      <Switch
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Light Mode</Text>
    </HStack>
  );
}
