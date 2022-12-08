import React, {useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';
import {useSelector, useDispath} from 'react-redux';
import ListCard from './components/ListCard';
import PlusButton from './components/PlusButton';

import SearchBox from './components/SearchBox';

const OpportunityScreen = () => {
  const {list, value} = useSelector(state => state.oppurtunity);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}> Opportunity</Text>
        <View style={styles.searchContainer}>
          <SearchBox hint={'SEARCH'} />
          <PlusButton />
        </View>
      </View>
        <FlatList
          data={list}
          renderItem={({item}) => (
            <ListCard name={item.name} id={item.id} place={item.place} />
          )}
          keyExtractor={item => item.id.toString()}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default OpportunityScreen;
