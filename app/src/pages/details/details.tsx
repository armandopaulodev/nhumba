import  React , { useState }  from 'react';
import {  Text, View, ScrollView} from 'react-native';

import {

    DefaultTheme as NavigationDefaultTheme,

  } from '@react-navigation/native';

  import { NativeBaseProvider } from 'native-base';

export default function Details({ route } : {route: any}){


    const {id, capital, province, uri}=route.params;


return (

    <NativeBaseProvider>

          
            <ScrollView>

                <View>
                    <Text>{id}</Text>
                    <Text>{capital}</Text>
                </View>



            </ScrollView>  
   

    </NativeBaseProvider>

    
);

}