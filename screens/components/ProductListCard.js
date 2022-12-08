import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

const ProductListCard = ({projectDiscription, price, discount, offer, onPressAdd}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <View style={{flex: 0.3}}>
          <Text>Img</Text>
        </View>
        <View style={{flex: 0.9}}>
          <Text style={styles.descreptionText}>
           {projectDiscription}
          </Text>
          <Text style={styles.priceText}>$ {price}</Text>
          <Text style={styles.saveText}>You Save $ {offer}</Text>
          <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={onPressAdd}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>ADD</Text>
              <Icon
                name="plus"
                size={15}
                color="white"
                style={{paddingTop : 2 }}
              />
            </View>
            </TouchableOpacity>
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
    color : 'black'
  },
  priceText: {
    padding: 2,
    fontSize: 14,
    color: 'black',
  },
  saveText: {
    padding: 2,
    fontSize: 11,
    color: 'green',
    fontWeight : 'bold'
  },
  buttonContainer: {
    alignItems: 'flex-end',
    marginRight: 10,
  },
  button:{
    width : '35%',
    paddingLeft : 10,
    paddingRight : 10,
    paddingTop : 2,
    paddingBottom : 2,
    borderRadius : 4,
    backgroundColor : 'skyblue',
    flexDirection : 'row',
    justifyContent : 'space-between'
  },
  buttonText:{
    color : 'white',
    fontWeight : 'bold',
  }
});

export default ProductListCard;
