import React from 'react';
import {
    Button,
    StyleSheet,
    Text,
    View,
  } from 'react-native';
import CommonTextField from './components/CommonTextField';
  

const LoginScreen =()=>{
    return (<View style={styles.sectionContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.sectionTitle}>STEPPING STONE</Text>
        </View>
        <Text style={styles.welcomeTitle}>Welcome Mont User!</Text>
        <CommonTextField hint={'Email'} onChange={()=>{}}/>
        <CommonTextField hint={'Password'} secureTextEntry={true} onChange={()=>{}}/>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        <View style={styles.buttonStyle}>
        <Button title='LOGIN'/>
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