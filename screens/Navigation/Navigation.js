import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginNavigation from './LoginNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Dashboard from '../Dashboard';
import ProfileScreen from '../ProfileScreen';
import {ActivityIndicator} from 'react-native';
import ForgotPassword from '../ForgotPassword';

const Navigation = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchUser = async () => {
    setLoading(true);
    const user = await AsyncStorage.getItem('user');
    console.log(user);
    setUser(user);
    setLoading(false);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      {loading ? (
        <ActivityIndicator size="large" style={{paddingTop: 200}} />
      ) : (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {user == null ? (
            <Stack.Screen name="Login" component={LoginNavigation} />
          ) : (
            <Stack.Screen name="Home" component={Dashboard} />
          )}
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Navigation;
