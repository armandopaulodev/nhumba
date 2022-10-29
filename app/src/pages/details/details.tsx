import React, { useCallback, useMemo, useRef, useState, useEffect } from 'react';
import { View, Animated, Dimensions, StyleSheet, Alert, Linking } from 'react-native';
import {NativeBaseProvider,FlatList, Image, Text, Heading, Box, Icon, HStack,Fab,Center,
Link, Spacer, Badge, Flex} from "native-base";
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import { MaterialIcons, Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";


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
     // variables
     const snapPoints = useMemo(() => ['45%', '80%'], []);

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
                                                <Image source={{ uri: item }} style={styles.imagens} alt="imoveis"/>
                                               
                                            </View>
                                        }
                                />
                        </View>
                        <Icon   as={Ionicons} 
                                name="close" color="warning.400" 
                                size={30} style={{ position: 'absolute', top: 35, right: 25 }}
                                onPress={()=>navigation.goBack()}>   
                        </Icon>

                        {/* bottom sheet area */}

                        <BottomSheet snapPoints={snapPoints}>
                            <BottomSheetScrollView>

                            

                                <Box  ml={3} mr={3}>

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
                                        <Flex>
                                            <Text mt="2" fontSize={12} fontWeight="medium" color="darkBlue.600">
                                            Read More
                                            </Text>
                                        </Flex>

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