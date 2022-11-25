import React from "react";
import HomeScreen from "../HomeScreen";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();


const BottomNavigation=()=> {
    return (
      <Tab.Navigator  screenOptions={{headerShown: false, tabBarStyle: { paddingBottom :10, height : 60 }, }} >
        <Tab.Screen name="Dashboard" component={HomeScreen} />
        <Tab.Screen name="Inventory" component={HomeScreen} />
        <Tab.Screen name="Opportunity" component={HomeScreen} />
        <Tab.Screen name="Cart" component={HomeScreen} />
      </Tab.Navigator>
    );
  }

  export default BottomNavigation;