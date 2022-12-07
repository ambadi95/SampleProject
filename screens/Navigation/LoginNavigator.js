import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../LoginScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Dashboard from '../Dashboard';
import ProfileScreen from '../ProfileScreen';
import {ActivityIndicator} from 'react-native';
import ForgotPassword from '../ForgotPassword';

const LoginNavigation = () => {

  const Stack = createNativeStackNavigator();
  return (

        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Home" component={Dashboard} />
             <Stack.Screen  name="ForgotPassword" component={ForgotPassword} /> 
        </Stack.Navigator>
  );
};

export default LoginNavigation;
