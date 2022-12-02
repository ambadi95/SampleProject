/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView,} from 'react-native';
import Navigation from './screens/Navigation/Navigation';
import 'react-native-gesture-handler';




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

        <Navigation/>
  
  );
};



export default App;
