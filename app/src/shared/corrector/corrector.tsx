import * as React from 'react';
import { NativeBaseProvider, Box, HStack, VStack, Text, Pressable, Image, Center, Icon } from 'native-base';

import { MaterialIcons, Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";
import {Linking} from 'react-native';

export interface correctorInterface {
     nome : String,
     telefone: Number,
     email: String
}

export default function Corrector({owner}: {owner: correctorInterface}){

    const msg = "Ola estou interresado em um dos seus imoveis";

    return (
        <Box bg="warning.100" py="4" px="3" borderRadius="5" rounded="md" mt={2} width={375} maxWidth="100%">
        <HStack >
            
            <Image source={{
            uri: 'https://media.vanityfair.com/photos/5ba12e6d42b9d16f4545aa19/3:2/w_1998,h_1332,c_limit/t-Avatar-The-Last-Airbender-Live-Action.jpg'
            }} alt='logo' height="100" rounded="full" width="100" />

            <Box ml={5}>
                <VStack >
                        <Text fontSize="sm" color="warning.400">
                            Corrector
                        </Text>
                        <Text color="black" fontSize="xl">
                            {owner.nome}
                        </Text>
                </VStack>

                <HStack mt={3} alignContent="flex-start" justifyContent="space-between">

                    <Pressable borderRadius="20" rounded="xl" bg="primary.600" alignSelf="flex-start" py="1" px="3" onPress={()=>Linking.openURL(`tel:${owner.telefone}`)}>
                         <Icon color="white" as={Ionicons} name="call" size={25} />
                    </Pressable>

                    <Pressable borderRadius="20" rounded="xl" bg="info.600" alignSelf="flex-start" py="1" px="3" mr={3} ml={3} onPress={()=>Linking.openURL(`mailto:${owner.email}`)}>
                        <Icon color="white" as={Ionicons} name="mail" size={25} />
                    </Pressable>

                    <Pressable borderRadius="20" rounded="xl" bg="success.600" alignSelf="flex-start" py="1" px="3" mr={3} onPress={()=>Linking.openURL(`whatsapp://send?text=${msg}&phone=${owner.telefone}`)}>
                        <Icon color="white" as={Ionicons} name="logo-whatsapp" size={25} />
                    </Pressable>

                </HStack>
                <Text textAlign="justify" mt={5}>Ver Perfil completo</Text>
            </Box>
        </HStack>
     </Box>
    )
}