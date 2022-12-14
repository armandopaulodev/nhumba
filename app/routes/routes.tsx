import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Home from '../src/pages/home/home';
import Search from '../src/pages/search/search';
import Perfil from '../src/pages/perfil/perfil';
import { createStackNavigator } from '@react-navigation/stack';
import Details from '../src/pages/details/details';
import Teste from '../src/shared/test/teste';
import Create from '../src/pages/realstate/create';




export default function MyStack() {
  
const Stack = createStackNavigator();
  return (
    <NavigationContainer>
             <Stack.Navigator>
             <Stack.Screen name="inicio" component={TabsNavigation} options={ {headerShown: false}}/>
              <Stack.Screen name="Details" component={Details} options={ {headerShown: false}} />
              <Stack.Screen name="create" component={Create} options={ {headerShown: true, title:"Criar imovel"}} />
            </Stack.Navigator>
    </NavigationContainer>
  );
}

 function TabsNavigation() {

    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home-outline';
            } else if (route.name === 'Buscar') {
              iconName = focused ? 'ios-search' : 'ios-search-outline';
            } else if(route.name=='Perfil'){
              iconName = focused ? 'ios-person' : 'ios-person-outline';
            } else if(route.name=='Menu'){
                iconName = focused? 'ios-menu' : 'ios-menu-outline'
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} style={{ paddingBottom: 5, paddingTop: 6 }} />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'black',

        })}
        >
          <Tab.Screen name="Home" component={Home} options={ {headerShown: false, title: 'Nhumba', 
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#fb923c',
            shadowOpacity: 0.4
          },
       
          
          
          }}/>
          <Tab.Screen name="Perfil" component={Perfil} options={ {headerShown: false}}/>
          <Tab.Screen name="Buscar" component={Search} options={ {headerShown: false}}/>
          {/* <Tab.Screen name="Menu" component={Teste} options={ {headerShown: true}}/> */}
        </Tab.Navigator>
 
    );
  }