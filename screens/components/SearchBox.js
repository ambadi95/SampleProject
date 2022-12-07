import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

const SearchBox = ({hint, onChange, value, onChangeText, icon, onBlur}) => {
  return (
    <View style={styles.textField}>
      <View style={styles.searchSection}>
        <Icon name="search1" size={20} color="blue" />
        <TextInput
          style={styles.input}
          placeholder={hint}
          onChange={onChange}
          onChangeText={onChangeText}
          underlineColorAndroid="transparent"
          value={value}
          onBlur={onBlur}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textField: {
    width: 110,
    height: 32,
  },
  searchSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderRadius: 4,
    borderColor: 'blue',
    paddingLeft: 10,
    paddingRight: 10,
  },
  input: {
    flex: 1,
    paddingTop: 5,
    paddingRight: 10,
    paddingBottom: 5,
    backgroundColor: '#fff',
    color: 'blue',
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    marginTop: 2,
    fontSize: 12,
    fontWeight: '400',
  },
});
export default SearchBox;
