import React,{useEffect, useState} from "react";
import { ActivityIndicator,View } from "react-native";

import AsyncStorage from '@react-native-async-storage/async-storage';


const SplashScreen=({navigation})=>{
    const fetchUser = async () =>{
         const user = await AsyncStorage.getItem('user');
        console.log(user);
        if(user != null){
            navigation.navigate('Home')
            
        }else{
            navigation.navigate('Login')
        }
    
    }

    useEffect(()=>{
        fetchUser();
      },[]);

    return(
        <View style={{flex : 1}}>
            <ActivityIndicator size="large" style={{paddingTop : 200}}/>
        </View>
    );
}

export default SplashScreen;