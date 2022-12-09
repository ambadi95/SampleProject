import React from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import { addToCart } from '../store/DashboardSlice';
import ProductListCard from './components/ProductListCard';

const DashboardScreen = () => {

  const dispatch = useDispatch();

  const {productList} = useSelector(state => state.dashboard);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}> Dashboard</Text>
      </View>
        <FlatList
          data={productList}
          renderItem={({item}) => (
            <ProductListCard
              projectDiscription={item.projectDes}
              price={item.price}
              offer={item.offer}
              discount={item.discount}
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
