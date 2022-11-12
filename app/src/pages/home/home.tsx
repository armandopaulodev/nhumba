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
  NativeBaseProvider,StatusBar,Icon,Select,CheckIcon,
  extendTheme,
  Stack,AspectRatio, ScrollView,Flex,
  Box, Image, Toast, FlatList, Spacer, View, VStack, Actionsheet, useDisclose,
} from "native-base";

import { MaterialIcons, Ionicons, FontAwesome } from "@expo/vector-icons";
import { Alert, TouchableOpacity, Dimensions } from 'react-native';
import LocalDataBase from "../../../database/localDatabase";
import GridFlatList from 'grid-flatlist-react-native';



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
  const { isOpen, onOpen, onClose } = useDisclose();
  const {width, height} = Dimensions.get('screen');
  const [service, setService] = React.useState("");

 
  
  
  return (
    <NativeBaseProvider>

            
             <ScrollView mt={2}>

                  

                        <VStack w="100%" space={5}  mt={10} maxW='full'>

                              <Box ml={2} mr={2} >
                                  
                                  <Stack direction="row" mb="2.5" mt="1.5" space={3}>
                                    
                                       <Heading color="primary.900" fontSize={18} fontFamily='Roboto'>Nhumba</Heading>
                
                                        <Flex direction="row-reverse" mr={3} mb="2.5" mt="1.5" style={{ position: 'absolute',top:-20,  right: -4 }}>
                                              <Box ml={5}>
                                                <Icon onPress={onOpen} as={Ionicons} name="filter-sharp" size={7} mt={3} />
                                              </Box>
                                              <Box >
                                              <Icon as={Ionicons} name="search" size={7} mt={3} onPress={() => {navigation.navigate('Buscar')}} />
                                              </Box>
                                              
                                        </Flex>

                                  </Stack>
                              </Box>

                        </VStack>



                        <Actionsheet  isOpen={isOpen} onClose={onClose}>
                        <Actionsheet.Content>
                        <Heading>Filtrar Imoveis</Heading>
                        <Actionsheet.Item>
                         
                        <Select selectedValue={service} minWidth="200" accessibilityLabel="Choose Service" placeholder="Aluguer" _selectedItem={{
                          bg: "warning.600",
                          endIcon: <CheckIcon size="5" />
                        }} mt={1} onValueChange={itemValue => setService(itemValue)}>
                            <Select.Item label="Venda" value="venda" />
                            <Select.Item label="Aluguer" value="aluguer" />
                          </Select>
                          
                        </Actionsheet.Item>
                        <Actionsheet.Item>Option 2</Actionsheet.Item>
                        <Actionsheet.Item>Option 3</Actionsheet.Item>
                        <Actionsheet.Item color="red.500">Delete</Actionsheet.Item>
                        </Actionsheet.Content>
                        </Actionsheet>

              

                
                
                        {/* <FlatList data={imoveis} 
                          renderItem={({item})=> 
                        }
                        />   */}

                      <GridFlatList data={imoveis}
                        renderItem={(item : any) => 
                          <Box alignItems="center" mb={2}>
                                <Box maxW="full"  overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
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
                                      <Center bg="warning.400" _dark={{
                                      bg: "warning.400"
                                    }} _text={{
                                      color: "warmGray.50",
                                      fontWeight: "700",
                                      fontSize: "xs"
                                    }} position="absolute" bottom="0" px="3" py="1.5">
                                        {item.city}
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
                                      {item.wood}
                                    </Text>
                                  </Stack>
                      
                                  <HStack alignItems="center" space={4} justifyContent="space-between">
                                    <HStack alignItems="center">
                                      <Text color="coolGray.600" _dark={{
                                      color: "warning.400"
                                    }} fontWeight="200">
                                        Tipo <Spacer/>
                                        {item.type}
                                      </Text>
                                      <Icon as={Ionicons} name="star" color="warning.400" ml={1}></Icon>  
                                      <Icon as={Ionicons} name="star" color="warning.400" ml={1}></Icon>
                                      <Icon as={Ionicons} name="star" color="warning.400" ml={1}></Icon>  
                                      <Icon as={Ionicons} name="star" color="warning.400" ml={1}></Icon>
                                    </HStack>
                                  </HStack>
                                </Stack>
                              </Box>
                          </Box> 
                        }
                        gap={6}
                        paddingHorizontal={4} // Shadow around elements will not be clipped
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
