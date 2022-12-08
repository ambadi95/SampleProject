/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import Navigation from './screens/Navigation/Navigation';
import {Provider} from 'react-redux';
import { persistStore } from "redux-persist"
import { PersistGate } from "redux-persist/integration/react"

import SplashScreen from 'react-native-splash-screen';
import store from './store/store';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  let persistor = persistStore(store)
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
    <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
      <Navigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
