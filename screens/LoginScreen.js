import React, {useState} from 'react';
import {Button, StyleSheet, Text, View, ActivityIndicator} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {userSchema} from './validation/LoginValidation';
import Icon from 'react-native-vector-icons/AntDesign';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Formik} from 'formik';

import CommonTextField from './components/CommonTextField';

const LoginScreen = ({navigation}) => {
  const [validateChange, setValidateChange] = useState(false);

  const [loading, setLoading] = useState(false);

  const saveUser = async (email) => {
      setLoading(true);
      const user = await AsyncStorage.setItem('user', email);
      setLoading(false);
      navigation.navigate("Home")
  };

  const Stack = createNativeStackNavigator();



  return (
   <View>
    <Formik
      initialValues={{email: '', password: ''}}
      validationSchema={userSchema}
      validateOnChange={validateChange}
      validateOnBlur={false}
      onSubmit={values =>{
        console.log("Pressed")
        saveUser(values.email)
      }}
        >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        touched,
        errors,
        isValid,
      }) => (
        <View style={styles.sectionContainer}>
          {loading && <ActivityIndicator size="large" />}

          <View style={styles.textContainer}>
            <Text style={styles.sectionTitle}>STEPPING STONE</Text>
          </View>
          <Text style={styles.welcomeTitle}>Welcome Mont User!</Text>

          <CommonTextField
            hint={'Email'}
            value={values.email}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            error={errors.email}
            touched={touched.email}
            icon={
              <Icon
                style={styles.searchIcon}
                name="user"
                size={20}
                color="#000"
              />
            }
          />
        
          <CommonTextField
            hint={'Password'}
            value={values.password}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            secureTextEntry={true}
            error={errors.password}
            touched={touched.password}
            icon={
              <Icon
                style={styles.searchIcon}
                name="eyeo"
                size={20}
                color="#000"
              />
            }
          />
        
          <Text style={styles.forgotPasswordText} onPress={()=> navigation.navigate("ForgotPassword")}>Forgot Password?</Text>
          <View style={styles.buttonStyle}>
            <Button title="LOGIN" onPress={ ()=>{
              setValidateChange(true);
               handleSubmit()}} />
          </View>
        </View>
      )}
    </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    height: '100%',
    padding: 10,
  },
  textContainer: {
    width: 150,
    height: 100,
    color: 'red',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  sectionTitle: {
    marginTop: 30,
    fontSize: 30,
    color: 'black',
  },
  welcomeTitle: {
    marginTop: 50,
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  forgotPasswordText: {
    alignSelf: 'flex-end',
    paddingRight: 10,
    color: '#007AFF',
    marginTop : 12
  },
  buttonStyle: {
    padding: 10,
    flex: 1,
    justifyContent: 'flex-end',
    borderRadius: 10,
  },
});

export default LoginScreen;
