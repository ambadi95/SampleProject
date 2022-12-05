/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Navigation from './screens/Navigation/Navigation';





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
