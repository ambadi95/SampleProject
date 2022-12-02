import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text , Button} from "react-native"

const HomeScreen = ({navigation,title}) =>{

  const goToProfile=()=>{
    navigation.navigate('Profile');
  }

    return (
    
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{title}</Text>
      <Button title='Profile' onPress={()=> goToProfile() }/>
    </View>
    
    )
}

export default HomeScreen;