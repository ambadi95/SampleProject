import React, {useEffect, useState} from 'react';
import {
    Button,
    StyleSheet,
    Text,
    View,
    ActivityIndicator
  } from 'react-native';
import CommonTextField from './components/CommonTextField';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/AntDesign';


const LoginScreen =({navigation})=>{ 

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [loading, setLoading] = useState(false);

  const saveUser= async()=>{
    if(email != null && password != null){
      setLoading(true);
    const user = await AsyncStorage.setItem('user' , email);
    setLoading(false);
   navigation.navigate('Home')
    }else {
      console.log('Please fill the form')
    }
  }
  
  const fetchUser = async () =>{
      setLoading(true);
      const user = await AsyncStorage.getItem('user');
      console.log(user);
     
      if(user != null){
        navigation.navigate('Home')
      }
      setLoading(false);
  }
  
    

    return (<View style={styles.sectionContainer}>
      {loading && <ActivityIndicator size='large' />}
  
      <View style={styles.textContainer}>
        <Text style={styles.sectionTitle}>STEPPING STONE</Text>
        </View>
        <Text style={styles.welcomeTitle}>Welcome Mont User!</Text>
        <CommonTextField hint={'Email'} value={email} onChangeText={setEmail} icon={<Icon style={styles.searchIcon} name="user" size={20} color="#000"/>}/>
        <CommonTextField hint={'Password'} value={password} onChangeText={setPassword} secureTextEntry={true} icon={<Icon style={styles.searchIcon} name="eyeo" size={20} color="#000"/>}/>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        <View style={styles.buttonStyle}>
        <Button title='LOGIN' onPress={()=> saveUser() }/>
        </View>
    
    </View>);
}


const styles = StyleSheet.create({
  sectionContainer: {
    height : '100%',
   padding : 10
  },
  textContainer :{
    width : 150,
    height : 100,
    color : 'red',
    alignContent:'center',
    alignItems : 'center',
    alignSelf : 'center'
  },
  sectionTitle: {
    marginTop : 30,
    fontSize: 30,
    color: 'black'
  },
  welcomeTitle :{
    marginTop : 50,
    color : 'black',
    fontSize : 18,
    fontWeight: 'bold',
    textAlign :'center'
  },
  forgotPasswordText : {
    alignSelf : 'flex-end',
    paddingRight : 10,
    color : '#007AFF'
  },
  buttonStyle :{
    padding : 10,
    flex :1,
    justifyContent : 'flex-end',
    borderRadius : 10
  }
});


export default LoginScreen;