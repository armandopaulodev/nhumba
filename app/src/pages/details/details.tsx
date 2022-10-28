import React, { useCallback, useMemo, useRef, useState, useEffect } from 'react';
import {  View, Animated, Dimensions, StyleSheet } from 'react-native';
import {NativeBaseProvider,FlatList, Image, Text, Heading, Box} from "native-base";
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';


const {width, height} = Dimensions.get('screen');

const ITEM_WIDTH = width;
const ITEM_HEIGHT = height * .75;


export default function Details({ route } : {route: any}) {

    const [imagens, setimagens] = useState([]);
    //getting route params
    const {id, capital, province, uri, imgs}=route.params;

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
                                        onScroll={Animated.event(
                                            [{nativeEvent: { contentOffset: {y: scrollY}}}],
                                            {useNativeDriver: true}
                                        )}
                                        renderItem={({item})=>
                                            <View>
                                                <Image source={{ uri: item }} style={styles.imagens}/>
                                            </View>
                                        }
                                />
                        </View>
                        <BottomSheet snapPoints={snapPoints} >
                            <BottomSheetScrollView>

                                            <Box alignContent="flex-start" ml={2}>

                                                <Heading>{province}</Heading>

                                            </Box>

                            </BottomSheetScrollView>
                        </BottomSheet>
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