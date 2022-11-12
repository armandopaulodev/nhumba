import React from 'react';
import { Flex, Center, Heading, ScrollView, VStack, Divider, Box, useColorModeValue, NativeBaseProvider, Spacer } from "native-base";



const Teste = () => {
 
  const bgShade100 = useColorModeValue("primary.100", "primary.400");
  const bgShade200 = useColorModeValue("primary.200", "primary.500");
  const bgShade300 = useColorModeValue("primary.300", "primary.600");
  const bgShade400 = useColorModeValue("primary.400", "primary.700");

  return (
    <NativeBaseProvider>
          <VStack>
          <Heading size="md">column-reverse</Heading>
          <Flex direction="row" mb="2.5" mt="1.5" flex={4} _text={{
          color: "coolGray.800"
        }}>
            <Center size="16" bg={bgShade100}>
              100
            </Center>
            <Spacer/>
            <Center size="16" bg={bgShade200}>
              200
            </Center>
            <Spacer/>
            <Center size="16" bg={bgShade300}>
              300
            </Center>
            <Spacer/>
            <Center size="16" bg={bgShade400}>
              400
            </Center>
            <Spacer/>
            <Center size="16" bg={bgShade400}>
              400
            </Center>
            <Spacer/>
            <Center size="16" bg={bgShade400}>
              400
            </Center>
          </Flex>
          <Divider />
          </VStack>
    </NativeBaseProvider>
  );
};



export default Teste;