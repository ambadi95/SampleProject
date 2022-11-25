import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text , Button} from "react-native"

const HomeScreen = ({navigation}) =>{

    const logout=async()=>{
       await AsyncStorage.clear();
       navigation.goBack();
    }

    return (
    
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="LogOut"
        onPress={() => {logout()}}
      />
    </View>
    
    )
}

export default HomeScreen;