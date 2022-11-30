import React from 'react';
import {
    TextInput,
    StyleSheet,
    View,
  } from 'react-native';

  import Icon from 'react-native-vector-icons/AntDesign';

const CommonTextField =({hint, secureTextEntry,onChange, value, onChangeText, icon})=>{
    return <View style={styles.searchSection}>
    <TextInput
        style={styles.input}
        placeholder={hint}
        onChange={onChange}
        onChangeText={onChangeText}
        underlineColorAndroid="transparent"
        secureTextEntry={secureTextEntry}
        value={value}
    />
    {icon}
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