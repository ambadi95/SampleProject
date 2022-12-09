import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

import CartAddRemove from './CartAddRemove';

const CartListCard = ({
  projectDiscription,
  price,
  discount,
  offer,
  onPressAdd,
  onPressMinus,
  qty,
  img
}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <View style={{flex: 0.3}}>
        <View>
          <Image
           source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
            resizeMode={'cover'}
            style={{width: 70, height: 70} }
          />
          </View>
        </View>
        <View style={{flex: 0.9}}>
          <Text style={styles.descreptionText}>{projectDiscription}</Text>
          <View style={styles.priceContainer}>
          <Text style={styles.priceText}>$ {price}</Text>
          <Text style={styles.offerText}>$ {discount}</Text>
          <Text style={styles.saveText}>You Save $ {offer}</Text>
          </View>
          <Text style={styles.soldByText}>Sold by <Text style={styles.sellerText}>Reliance Retail</Text></Text>
          <View style={styles.buttonContainer}>
           <Text style={styles.saveForLaterText}>SAVE FOR LATER</Text>
            <CartAddRemove onPressAdd={onPressAdd} onPressMinus={onPressMinus} qty={qty}/>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    backgroundColor: 'white',
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
  },
  descreptionText: {
    padding: 2,
    fontSize: 13,
    color: 'black',
  },
  priceText: {
    padding: 2,
    fontSize: 14,
    color: 'black',
    fontWeight : 'bold'
  },
  saveText: {
    padding: 2,
    fontSize: 11,
    color: 'green',
    fontWeight: 'bold',
  },
  offerText:{
    padding: 2,
    fontSize: 11,
    color: 'grey',
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid'
  },
  buttonContainer: {  
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems: 'flex-end',

  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  priceContainer : {
    flexDirection : 'row',
    justifyContent : 'flex-start',
    alignItems : 'baseline',
  },
  soldByText:{
    padding: 2,
    fontSize: 12,
    color: 'black',
    fontWeight : 'bold'
  },
  sellerText:{
    color: 'blue'
  },
  saveForLaterText:{
    color : 'grey',
    fontSize : 12
  }
  
});

export default CartListCard;
