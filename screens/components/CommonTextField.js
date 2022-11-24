import React from 'react';
import {
    TextInput,
    StyleSheet,
    View,
  } from 'react-native';

  import Icon from 'react-native-vector-icons/AntDesign';

const CommonTextField =({hint, secureTextEntry,onChange, value})=>{
    return <View style={styles.searchSection}>
    <TextInput
        style={styles.input}
        placeholder={hint}
        onChange={onChange}
        underlineColorAndroid="transparent"
        secureTextEntry={secureTextEntry}
        value={value}
    />
     <Icon style={styles.searchIcon} name="user" size={20} color="#000"/>
</View>
}

const styles = StyleSheet.create({
    searchSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        margin: 12,
        borderWidth: 0.5,
        borderRadius : 4,
        borderColor : 'grey',
        paddingLeft : 10,
        paddingRight : 10
    },
    searchIcon: {
        padding: 10,
    },
    input: {
        flex: 1,
        paddingTop: 5,
        paddingRight: 10,
        paddingBottom: 5,
        backgroundColor: '#fff',
        color: '#424242',
    },
})

export default CommonTextField;