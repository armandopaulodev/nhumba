import  React , { useState }  from 'react';
import {  Text, View, ScrollView} from 'react-native';

import {

    DefaultTheme as NavigationDefaultTheme,

  } from '@react-navigation/native';

  import { NativeBaseProvider } from 'native-base';

export default function Details({ route, navigation }){


    const {item}=route.params;


return (

    <NativeBaseProvider>

          
<ScrollView>

<View>
     <Text>{item.id}</Text>
</View>



</ScrollView>  
   

    </NativeBaseProvider>

    
);

}