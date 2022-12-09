import React from "react";
import HomeScreen from "../HomeScreen";
import { Button, Alert} from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';
import OpportunityScreen from "../OpportunityScreen";
import DashboardScreen from "../DashboardScreen";
import CartScreen from "../Cart";

const Tab = createBottomTabNavigator();


const BottomNavigation=({navigation})=> {

  const dispatch = useDispatch();

  const {totalItem} = useSelector(state => state.dashboard);



    return (
      <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown : false,
        headerRight: () => (
          <Button
            onPress={() => Alert.alert("Alert","Are you sure ?",[
              {
                text: "Cancel",
                style: "cancel",
              },
              {
                text: "Ok",
                onPress: () => logout(),
                style: "ok",
              },
            ],
            {
              cancelable : true
            }
            )}
            title="Log out"
            color="black"
          />
        ),
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Dashboard') {
            iconName = focused
              ? 'appstore1'
              : 'appstore-o';
          } else if (route.name === 'Inventory') {
            iconName = focused ? 'setting' : 'setting';
          } else if (route.name === 'Opportunity') {
            iconName = focused ? 'file1' : 'file1';
          }
          else if (route.name === 'Cart') {
            iconName = focused ? 'shoppingcart' : 'shoppingcart';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color}/>;
        },
      })}
    >
        <Tab.Screen name="Dashboard" children={()=> <DashboardScreen /> } />
        <Tab.Screen name="Inventory" children={()=> <HomeScreen title="Inventory" navigation={navigation}/>} />
        <Tab.Screen name="Opportunity" children={()=> <OpportunityScreen/>}/>
        <Tab.Screen name="Cart" children={()=> <CartScreen/>} options={{
        tabBarBadge: totalItem                          // This is for bar Badge
        }}/>
      </Tab.Navigator>
    );
  }

  export default BottomNavigation;