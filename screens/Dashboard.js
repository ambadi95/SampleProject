import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';
import BottomNavigation from './Navigation/BottomNavigation';
import DraweNavigation from './Navigation/DrawerNavigation';
import { createDrawerNavigator } from "@react-navigation/drawer"




const Dashboard =({navigation})=>{

    const Stack = createNativeStackNavigator();
    const Drawer = createDrawerNavigator();

    return(

        <Stack.Navigator screenOptions={{headerShown: false }}>
          <Stack.Screen name="drawer" component={DraweNavigation} />
         </Stack.Navigator>

    )
}

export default Dashboard;