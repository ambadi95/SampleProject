import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import { addToCart, removeFromCart } from '../store/DashboardSlice';
import CartListCard from './components/CartListCard';
import CommonButton from './components/CommonButton';

const CartScreen = () => {

  const dispatch = useDispatch();

  const {cartList, totalAmount} = useSelector(state => state.dashboard);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
      </View>
        <FlatList
          data={cartList}
          ListEmptyComponent={<Text style={styles.emptyListText}>No Items Yet</Text>}
          renderItem={({item,index}) => (
            <CartListCard
              projectDiscription={item.projectDes}
              price={item.price}
              offer={item.offer}
              discount={item.discount}
              onPressAdd={() => console.log("minus") }
              onPressMinus={()=> dispatch(removeFromCart(index)) }
            />
          )}
        />
        <View style={styles.bottomContainer}>
            <View>
            <Text style={styles.amoutText}>Payable Amount</Text>
            <Text style={styles.totalAmountText}>$ {totalAmount}</Text>
            </View>
            <CommonButton title={"Place Order"}/>
        </View>
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
  emptyListText : {
    fontWeight : 'bold',
    color : 'black',
    textAlign : 'center',
    marginTop : 20
  },
  bottomContainer:{
    height : 50,
    padding : 10,
    flexDirection : 'row',
    justifyContent : 'space-between'
  },
  totalAmountText : {
    color : 'black',
    fontSize : 18,
    fontWeight : 'bold'
  },
  amoutText:{
    fontSize :12
  }
});

export default CartScreen;
