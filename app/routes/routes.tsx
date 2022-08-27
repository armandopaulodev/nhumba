import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Home from '../src/pages/home/home';
import Search from '../src/pages/search/search';

export default function TabsNavigation() {

    const Tab = createBottomTabNavigator();
    return (
      <NavigationContainer>
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
            return <Ionicons name={iconName} size={size} color={color} style={{ paddingBottom: 5 }} />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'black',

        })}
        >
          <Tab.Screen name="Home" component={Home} options={ {headerShown: false}}  />
          <Tab.Screen name="Perfil" component={Home} options={ {headerShown: false}}  />
          <Tab.Screen name="Buscar" component={Search} options={ {headerShown: false}}  />
          <Tab.Screen name="Menu" component={Search} options={ {headerShown: false}}  />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }