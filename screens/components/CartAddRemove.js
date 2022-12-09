import React from "react";
import { View, TouchableOpacity,StyleSheet, Text } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';

const CartAddRemove=({onPressAdd, onPressMinus})=>{

    return(
        <View style={styles.mainContainer}>
            <TouchableOpacity onPress={onPressMinus} style={styles.button}>
                <Icon
                  name="minus"
                  size={15}
                  color="white"
                  style={{paddingTop: 2}}
                />
            </TouchableOpacity>
            <Text style={styles.quantityText}>1</Text>
        <TouchableOpacity onPress={onPressAdd} style={styles.button}>
                <Icon
                  name="plus"
                  size={15}
                  color="white"
                  style={{paddingTop: 2}}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        flexDirection : 'row',
    },
    button: {
        padding: 5,
        borderRadius: 15,
        marginRight :10,
        backgroundColor: 'skyblue',
      },
    quantityText: {
        fontSize : 15,
        paddingRight : 7,
        paddingTop : 2
    }
})

export default CartAddRemove;