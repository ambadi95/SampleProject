import React, {useEffect} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import messaging from '@react-native-firebase/messaging';

import { addToCart, showNotification, notificationAdd } from '../store/DashboardSlice';
import ProductListCard from './components/ProductListCard';

const DashboardScreen = () => {

  const dispatch = useDispatch();  

  useEffect(()=>{
    getNotification();
  },[])


  const {productList} = useSelector(state => state.dashboard);

  const getNotification=()=>{
    messaging().onMessage(async remoteMessage =>{
      console.log("Dashboard.", remoteMessage);
     dispatch(showNotification());
     dispatch(notificationAdd({
      title : remoteMessage.notification.title,
      body : remoteMessage.notification.body
     }))
  })
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
      
      </View>
        <FlatList
          data={productList}
          renderItem={({item}) => (
            <ProductListCard
              projectDiscription={item.projectDes}
              price={item.price}
              offer={item.offer}
              discount={item.discount}
              img={item.image}
              onPressAdd={() => dispatch(addToCart(item))}
            />
          )}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: 10,
    height: '100%',
    backgroundColor: 'white',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default DashboardScreen;
