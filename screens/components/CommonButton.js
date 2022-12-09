import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const CommonButton=({title})=>{
    return(
        <TouchableOpacity style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : 'skyblue',
        borderRadius : 4
    },
    title:{
        paddingTop : 4,
        paddingBottom : 2,
        paddingLeft : 25,
        paddingRight :25,
        color : 'white'
    }
})

export default CommonButton;