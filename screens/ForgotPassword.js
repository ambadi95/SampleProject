import React,{useState} from 'react';
import {View, StyleSheet, Text, Button, Alert} from 'react-native';

import {userSchema} from './validation/LoginValidation';
import Icon from 'react-native-vector-icons/AntDesign';
import {Formik} from 'formik';

import CommonTextField from './components/CommonTextField';

const ForgotPassword = ({navigation}) => {

    const [validateChange, setValidateChange] = useState(false);

  return (
    <Formik
    initialValues={{email: ''}}
    validationSchema={userSchema.email}
    validateOnChange={validateChange}
    validateOnBlur={false}
    onSubmit={values =>{
      console.log("Pressed")
      Alert.alert("Success","Password reset successfull, Please click on the link send to your E-Mail",[
        {
          text: "Ok",
          style: "cancel",
          onPress: () => navigation.goBack(),
        },
        
      ],
      {
        cancelable : true
      }
      )

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

        <Text style={styles.welcomeTitle}>Change Password</Text>

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
    
        <View style={styles.buttonStyle}>
          <Button title="Reset" onPress={ ()=>{
            setValidateChange(true);
             handleSubmit()}} />
        </View>
      </View>
    )}
  </Formik>
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

export default ForgotPassword;
