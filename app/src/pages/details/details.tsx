import React, { useCallback, useMemo, useRef, useState, useEffect } from 'react';
import { View, Animated, Dimensions, StyleSheet, Alert, Linking } from 'react-native';
import {NativeBaseProvider,FlatList, Image, Text, Heading, Box, Icon, HStack,Fab,Center,
Link, Spacer, Badge, Flex, Spinner, Pressable, VStack} from "native-base";
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import { MaterialIcons, Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";
import Corrector from '../../shared/corrector/corrector';


const {width, height} = Dimensions.get('screen');

const ITEM_WIDTH = width;
const ITEM_HEIGHT = height * .55;


export default function Details({navigation, route}) {

    const [imagens, setimagens] = useState([]);

    //getting route params
    const {id, type, utility, province, currence, description, adress, wood,city,
        uri, imgs, corrector, price}=route.params;

    useEffect(() => {

        setimagens(imgs); //pegando todas imagens proveniente da routa

    });
    

     const scrollY = React.useRef(new Animated.Value(0)).current;

     // variables bottom sheet
     const snapPoints = useMemo(() => ['45%', '80%'], []);

     //Spinner

     const [loader, setLoading] = useState(false);

     const loadSpinner = ()=>{
         setLoading(!loader);
     }

    return (
     
        <NativeBaseProvider>

                        <View style={{ height: ITEM_HEIGHT, overflow:"hidden" }}>
                            
                                <Animated.FlatList                           
                                        data={imagens}
                                        keyExtractor={(_,index)=> index.toString()}
                                        snapToInterval={ITEM_HEIGHT}
                                        decelerationRate="fast"
                                        showsVerticalScrollIndicator={false}
                                        bounces={false}
                                        onScroll={Animated.event(
                                            [{nativeEvent: { contentOffset: {y: scrollY}}}],
                                            {useNativeDriver: true}
                                        )}
                                        renderItem={({item})=>
                                            <View>
                                                <Image source={{ uri: item }} style={styles.imagens} alt="imoveis"
                                                 onLoadStart={()=>loadSpinner()} onLoadEnd={()=>loadSpinner()}/>
                                            </View>
                                        }
                                />
                        </View>

                        {/* icon exit */}
                        <Icon   as={Ionicons} 
                                name="close" color="warning.400" 
                                size={30} style={{ position: 'absolute', top: 35, right: 25 }}
                                onPress={()=>navigation.goBack()}>   
                        </Icon>

                        {/* Spinner */}
                        {
                                            loader ? 
                                            <HStack  space={8} justifyContent="center"  style={{ backgroundColor: 'transparent', position: 'absolute', top: ITEM_HEIGHT/2}}>
                                                <Spinner color="warning.500" size={50} width={ITEM_WIDTH} />
                                            </HStack>
                                            : 
                                            null
                        }
                        

                        {/* bottom sheet area */}

                        <BottomSheet snapPoints={snapPoints}>
                            <BottomSheetScrollView>

                            

                                <Box  mx={3}>

                                        <HStack alignItems="center">
                                            <Badge colorScheme="warning" _text={{
                                            color: "white"
                                        }} variant="solid" rounded="4">
                                            {utility}
                                            </Badge>
                                            <Spacer />
                                            <Text fontSize={15} color="coolGray.800">
                                             {currence} <Spacer/>
                                             {price.toFixed(2)} 
                                            </Text>
                                        </HStack>
                                        <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
                                            Tipo <Spacer/> {type}
                                        </Text>
                                        <Text mt="2" fontSize="sm" color="coolGray.700">
                                            {description}
                                        </Text>

                                        <Flex  pt={3}>
                                           
                                            <Text mt="2" fontSize={18} fontWeight="medium" color="darkBlue.600">
                                            <Icon   as={Ionicons} 
                                                name="location" color="black" size={26} 
                                                onPress={()=>navigation.goBack()}>   
                                            </Icon>
                                              Localização
                                            </Text>
                                           
                                            <HStack pt={3} ml={1}>
                                                <Text>
                                                    <Icon   as={Ionicons} 
                                                        name="home" color="black" size={4} 
                                                        onPress={()=>navigation.goBack()}>   
                                                    </Icon>
                                                    <Spacer/> <Spacer/>
                                                    {adress},
                                                    <Spacer/> <Spacer/>
                                                    {wood},
                                                    <Spacer/> <Spacer/>
                                                    {city}
                                                </Text>
                                            </HStack>
                                        </Flex>

                                        {/* correcto */}

                                        <Corrector owner={corrector}/>

                                </Box>
                          
                              

                            </BottomSheetScrollView>
                            
                        </BottomSheet>
                        
                        {/* button floating fab */}

                        <Fab renderInPortal={false} shadow={2} size="sm" colorScheme="warning"
                         icon={<Icon color="white" as={Ionicons} name="call" size={25} />} 
                         onPress={()=>Linking.openURL(`tel:${corrector.telefone}`)} />


        </NativeBaseProvider>            

    );
  }



const styles = StyleSheet.create({
    imagens: {
            width: ITEM_WIDTH,
            height: ITEM_HEIGHT,
            resizeMode: 'cover'
    }
})