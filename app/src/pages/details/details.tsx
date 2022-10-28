import React, { useCallback, useMemo, useRef } from 'react';
import {  View, Animated, Dimensions, StyleSheet } from 'react-native';
import {NativeBaseProvider,FlatList, Image, Text} from "native-base";
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';


const {width, height} = Dimensions.get('screen');

const ITEM_WIDTH = width;
const ITEM_HEIGHT = height * .75;

const images = [
    'https://static.zara.net/photos///2020/I/1/1/p/6543/610/091/2/w/2460/6543610091_1_1_1.jpg?ts=1606727905128',
    'https://static.zara.net/photos///2020/I/1/1/p/6543/610/091/2/w/2460/6543610091_2_1_1.jpg?ts=1606727908993',
    'https://static.zara.net/photos///2020/I/1/1/p/6543/610/091/2/w/2460/6543610091_2_2_1.jpg?ts=1606727889015',
    'https://static.zara.net/photos///2020/I/1/1/p/6543/610/091/2/w/2460/6543610091_2_3_1.jpg?ts=1606727896369',
    'https://static.zara.net/photos///2020/I/1/1/p/6543/610/091/2/w/2460/6543610091_2_4_1.jpg?ts=1606727898445',
    'https://www.holidify.com/images/cmsuploads/compressed/00998352Fatehpur_Sikri_Main_20171124223815.jpg'
];

const product = {
    title: 'SOFT MINI CROSSBODY BAG WITH KISS LOCK',
    description: [
        'Mini crossbody bag available in various colours. Featuring two compartments. Handles and detachable crossbody shoulder strap. Lined interior. Clasp with two metal pieces.',
        'Height x Length x Width: 14 x 21.5 x 4.5 cm. / 5.5 x 8.4 x 1.7"'
    ],
    price: '29.99£'
}


export default function Details({ route } : {route: any}) {

    //getting route params
    const {id, capital, province, uri}=route.params;

    const scrollY = React.useRef(new Animated.Value(0)).current;
     // variables
     const snapPoints = useMemo(() => ['45%', '80%'], []);

    return (
     
        <NativeBaseProvider>
                        <View style={{ height: ITEM_HEIGHT, overflow:"hidden" }}>
                            
                                <Animated.FlatList                           
                                        data={images}
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
                                            <Text>{province}</Text>
                                            <Text>  
                                                    Expo Pass Application Clear Cache & Data Instructions: Android
                                                    Log out of the app.
                                                    From a Phone Home screen, navigate: Apps icon > Settings > Apps (Phone section)
                                                    Tap Application Manage.
                                                    From the Dropdown menu ensure All apps is selected, then locate and tap Expo Pass app.
                                                    Tap Storge.
                                                    Tap CLEAR CACHE.
                                            </Text>

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