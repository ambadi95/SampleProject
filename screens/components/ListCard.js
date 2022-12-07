import React from "react";
import { View, StyleSheet, Text } from "react-native";

import Icon from 'react-native-vector-icons/AntDesign';


const ListCard=()=>{
    return(
        <View style={styles.mainContainer}>
            <View style={styles.topContainer}>
                <Text style={styles.titleStyle}>Ovilva & Peter</Text>
                <View style={styles.idTextContainer}>
                <Text style={styles.idTextStyle}>378314#</Text>
                </View>
            </View>
            <View style={styles.topContainer}>
                <View>
                <Text style={styles.descreptionText}> Nov 26, 2022 02:12PM | Cleveland Mount</Text>
                <Text style={styles.descreptionText}>Hard Rock Stone Works | Sale Person 1</Text>
                <Text style={styles.descreptionText}>Residental - Remodel</Text>
                </View>
                <View style={styles.iconContainer}>
                <Icon
                style={{paddingRight : 10}}
                name="exclamationcircleo"
                size={20}
                color="blue"
              />
                <Icon
                 style={{paddingRight : 10}}
                name="filetext1"
                size={20}
                color="blue"
              />
                <Icon
                name="edit"
                size={20}
                color="blue"
              />
                </View>
               
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer :{
        width : '100%',
        backgroundColor : 'white',
        marginTop : 10,
        borderRadius : 5  
    },
    topContainer:{
        flexDirection : 'row',
        justifyContent : 'space-between',
        padding : 8
    },
    titleStyle :{
        fontSize : 14,
        fontWeight : 'bold',
        color : 'black'
    },
    idTextContainer:{
        padding : 4,
        backgroundColor : 'skyblue',
        borderRadius : 4
    },
    idTextStyle :{
        fontSize : 14,
        color : 'blue'
    },
    descreptionText:{
        padding : 2,
        fontSize : 13
    },
    iconContainer :{
        flexDirection : 'row',
        justifyContent : 'space-evenly',
        alignItems : 'flex-end'
    }
})

export default ListCard;