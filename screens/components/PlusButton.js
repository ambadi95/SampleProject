import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import Icon from 'react-native-vector-icons/AntDesign';

const PlusButton=({
    onPress
})=>{
    return(
        <TouchableOpacity onPress={onPress}>
        <View style={styles.mainContainer}>
            <Icon
                name="plus"
                size={20}
                color="blue"
              />
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    mainContainer :{
        marginLeft : 7,
        paddingTop : 5,
        paddingBottom : 4,
        paddingLeft : 10,
        paddingRight : 10,
        backgroundColor : 'white',
        alignItems: 'center', 
        borderWidth: 0.5,
        borderRadius: 4,
        borderColor: 'blue',
    }
})

export default PlusButton;