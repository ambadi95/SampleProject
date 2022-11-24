/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView,} from 'react-native';

import LoginScreen from './screens/LoginScreen';




const App = () => {

  // const [data , useData] = useState("String");

  // const readData =()=>{
  //   console.log('pressed');
  //   database()
  //   .ref('/user/name')
  //   .on('value', snapshot => {
  //     console.log('User data: ', snapshot.val());
  //     useData(snapshot.val());
  //   });
 // }



  return (
    <SafeAreaView>
      <LoginScreen/>
    </SafeAreaView>
  );
};



export default App;
