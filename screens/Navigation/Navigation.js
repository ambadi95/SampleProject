import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../LoginScreen';
import HomeScreen from '../HomeScreen';
import BottomNavigation from './BottomNavigation';
import SplashScreen from '../SplashScreen';

 const Navigation =()=> {

 const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash" 
        screenOptions={{headerShown: false }}>
          <Stack.Screen  name="Splash" component={SplashScreen} />
            <Stack.Screen  name="Login" component={LoginScreen} />
            <Stack.Screen  name="Home" component={BottomNavigation} />
        </Stack.Navigator>
  </NavigationContainer>
  );
}

export default Navigation;