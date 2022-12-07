import React from 'react';
import {TextInput, StyleSheet, View, Text} from 'react-native';

const CommonTextField = ({
  hint,
  secureTextEntry,
  onChange,
  value,
  onChangeText,
  icon,
  onBlur,
  error,
  touched
}) => {
  return (
    <View style={styles.textField}>
      <View style={styles.searchSection}>
        <TextInput
          style={styles.input}
          placeholder={hint}
          onChange={onChange}
          onChangeText={onChangeText}
          underlineColorAndroid="transparent"
          secureTextEntry={secureTextEntry}
          value={value}
          onBlur={onBlur}
        />
        {icon}
      </View>
     {(error && touched) && <Text style={styles.error}>{error}</Text> }
    </View>
  );
};

const styles = StyleSheet.create({
    textField :{
      marginLeft :12,
      marginRight : 12,
      marginTop : 12
    },
  searchSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderRadius: 4,
    borderColor: 'grey',
    paddingLeft: 10,
    paddingRight: 10,
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
  error:{
    color :'red',
    marginTop : 2,
    fontSize : 12,
    fontWeight : '400'
  }
});

export default CommonTextField;
