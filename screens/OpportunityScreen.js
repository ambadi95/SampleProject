import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ListCard from "./components/ListCard";
import PlusButton from "./components/PlusButton";

import SearchBox from "./components/SearchBox";

const OpportunityScreen=()=>{
    return(
        <View style={styles.mainContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}> Opportunity</Text>
                <View style={styles.searchContainer}>
                <SearchBox hint={"SEARCH"}/>
                <PlusButton/>
                </View>
            </View>
            <ListCard/>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        padding : 10
    },
    titleContainer:{
        flexDirection :'row',
        justifyContent : 'space-between'
    },
    searchContainer :{
        flexDirection :'row',
        justifyContent : 'space-around'
    },
    titleText:{
        fontSize : 20,
        fontWeight : 'bold',
        color : 'black'
    }
})

export default OpportunityScreen;