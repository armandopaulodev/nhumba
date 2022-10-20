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
  Box, Image, Toast
} from "native-base";

import { MaterialIcons, Ionicons, FontAwesome } from "@expo/vector-icons";
import { Alert, TouchableOpacity } from "react-native";

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
export default function Home() {

  const toast = useToast();
  return (
    <NativeBaseProvider>
           <StatusBar bg="#f472b6"  barStyle="light-content" />
           <Box safeAreaTop bg="pink.400" />
            <HStack bg="pink.400" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%" maxW="full">
              <HStack alignItems="center">
                <IconButton icon={<Icon size="sm" as={MaterialIcons} name="menu" color="white" />} />
                <Text color="white" fontSize="20" fontWeight="bold">
                  Nhumba
                </Text>
              </HStack>
                <HStack>
                <IconButton icon={<Icon as={MaterialIcons} name="favorite" size="sm" color="white" />} />
                <IconButton icon={<Icon as={MaterialIcons} name="search" size="sm" color="white" />} />
                <IconButton icon={<Icon as={MaterialIcons} name="more-vert" size="sm" color="white" />} />
                </HStack>
            </HStack>

          <ScrollView mt={2}>

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
                  <TouchableOpacity  onPress={()=>{Alert.alert('Beira', 'Segunda cidade')}}>
                      <AspectRatio w="100%" ratio={16 / 9}>
                        <Image source={{
                        uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
                      }} alt="image" />
                      </AspectRatio>
                      <Center bg="violet.500" _dark={{
                      bg: "violet.400"
                    }} _text={{
                      color: "warmGray.50",
                      fontWeight: "700",
                      fontSize: "xs"
                    }} position="absolute" bottom="0" px="3" py="1.5">
                        PHOTOS 2
                      </Center>
                  </TouchableOpacity>
                </Box>
                <Stack p="4" space={3}>
                  <Stack space={2}>
                    <Heading size="md" ml="-1">
                    Beira
                    </Heading>
                    <Text fontSize="xs" _light={{
                    color: "violet.500"
                  }} _dark={{
                    color: "violet.400"
                  }} fontWeight="500" ml="-0.5" mt="-1">
                      The Silicon Valley of India.
                    </Text>
                  </Stack>
                  <Text fontWeight="400">
                    Bengaluru (also called Bangalore) is the center of India's high-tech
                    industry. The city is also known for its parks and nightlife.
                  </Text>
                  <HStack alignItems="center" space={4} justifyContent="space-between">
                    <HStack alignItems="center">
                      <Text color="coolGray.600" _dark={{
                      color: "warmGray.200"
                    }} fontWeight="400">
                        6 mins ago
                      </Text>
                      <Icon as={Ionicons} name="star" color="amber.400" ml={1}></Icon>  
                      <Icon as={Ionicons} name="star" color="amber.400" ml={1}></Icon>
                      <Icon as={Ionicons} name="star" color="amber.400" ml={1}></Icon>  
                      <Icon as={Ionicons} name="star" color="amber.400" ml={1}></Icon>
                    </HStack>
                  </HStack>
                </Stack>
              </Box>
            </Box>

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
                      <TouchableOpacity onPress={()=>{Alert.alert('Maputo', 'Primeira cidade')}}>

                            <AspectRatio w="100%" ratio={16 / 9}>
                            <Image source={{
                            uri: "https://www.holidify.com/images/cmsuploads/compressed/00998352Fatehpur_Sikri_Main_20171124223815.jpg"
                          }} alt="image" />
                          </AspectRatio>
                          <Center bg="violet.500" _dark={{
                          bg: "violet.400"
                        }} _text={{
                          color: "warmGray.50",
                          fontWeight: "700",
                          fontSize: "xs"
                        }} position="absolute" bottom="0" px="3" py="1.5">
                            PHOTOS 1
                          </Center>
                      </TouchableOpacity>
                  </Box>
                  <Stack p="4" space={3}>
                    <Stack space={2}>
                      <Heading size="md" ml="-1">
                      Maputo
                      </Heading>
                      <Text fontSize="xs" _light={{
                      color: "violet.500"
                    }} _dark={{
                      color: "violet.400"
                    }} fontWeight="500" ml="-0.5" mt="-1">
                        The Silicon Valley of India.
                      </Text>
                    </Stack>
                    <Text fontWeight="400">
                      Bengaluru (also called Bangalore) is the center of India's high-tech
                      industry. The city is also known for its parks and nightlife.
                    </Text>
                    <HStack alignItems="center" space={4} justifyContent="space-between">
                      <HStack alignItems="center">
                        <Text color="coolGray.600" _dark={{
                        color: "warmGray.200"
                      }} fontWeight="400">
                          6 mins ago
                        </Text>
                      </HStack>
                    </HStack>
                  </Stack>
                </Box>
            </Box>

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
                  <AspectRatio w="100%" ratio={16 / 9}>
                    <Image source={{
                    uri: "https://www.holidify.com/images/cmsuploads/compressed/01-Taramati-Baradari_20180329140448.jpg"
                  }} alt="image" />
                  </AspectRatio>
                  <Center bg="violet.500" _dark={{
                  bg: "violet.400"
                }} _text={{
                  color: "warmGray.50",
                  fontWeight: "700",
                  fontSize: "xs"
                }} position="absolute" bottom="0" px="3" py="1.5">
                    PHOTOS 3
                  </Center>
                </Box>
                <Stack p="4" space={3}>
                  <Stack space={2}>
                    <Heading size="md" ml="-1">
                    Nampula
                    </Heading>
                    <Text fontSize="xs" _light={{
                    color: "violet.500"
                  }} _dark={{
                    color: "violet.400"
                  }} fontWeight="500" ml="-0.5" mt="-1">
                      The Silicon Valley of India.
                    </Text>
                  </Stack>
                  <Text fontWeight="400">
                    Bengaluru (also called Bangalore) is the center of India's high-tech
                    industry. The city is also known for its parks and nightlife.
                  </Text>
                  <HStack alignItems="center" space={4} justifyContent="space-between">
                    <HStack alignItems="center">
                      <Text color="coolGray.600" _dark={{
                      color: "warmGray.200"
                    }} fontWeight="400">
                        6 mins ago
                      </Text>
                    </HStack>
                  </HStack>
                </Stack>
              </Box>
            </Box>
            
          </ScrollView>      
    </NativeBaseProvider>
  );
}

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}
