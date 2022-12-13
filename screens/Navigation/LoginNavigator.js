import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../LoginScreen';
import Dashboard from '../Dashboard';
import ForgotPassword from '../ForgotPassword';

const LoginNavigation = () => {

  const Stack = createNativeStackNavigator();
  return (

        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Home" component={Dashboard} />
             <Stack.Screen  name="ForgotPassword" component={ForgotPassword} options={{
              headerShown : true,
              headerTitle : ""
            }}/> 
        </Stack.Navigator>
  );
};

export default LoginNavigation;
