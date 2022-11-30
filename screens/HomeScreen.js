import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text , Button} from "react-native"

const HomeScreen = ({navigation,title}) =>{

    const logout=async()=>{
       await AsyncStorage.clear();
       navigation.goBack();
    }

    return (
    
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{title}</Text>
    
    </View>
    
    )
}

export default HomeScreen;