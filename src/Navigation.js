import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native-web';
import { View } from 'react-native';


//Screens
import Main from './components/main';



const Tab = createBottomTabNavigator();

function MyTabs (){
  return(
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'green',
          
        }}
        
      >
        <Tab.Screen
         name="Home" 
         component={Main}
         options= {{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ color, size}) => (
            <Ionicons name="home" size={size} color={color} />
          ),
          
         }}
         
          />
        
      </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
  
    <NavigationContainer >
      
      <MyTabs/>
      
    </NavigationContainer>
    
  );
}

