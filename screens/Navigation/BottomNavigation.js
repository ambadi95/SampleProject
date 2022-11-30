import React from "react";
import HomeScreen from "../HomeScreen";
import { Button, Alert} from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createBottomTabNavigator();


const BottomNavigation=({navigation})=> {


  const logout=async()=>{
    await AsyncStorage.clear();
    navigation.goBack();
 }

    return (
      <Tab.Navigator
      screenOptions={({ route }) => ({
        
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
        <Tab.Screen name="Dashboard" children={()=> <HomeScreen title="Dashboard" navigation={navigation}/> } options={{
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
        }}/>
        <Tab.Screen name="Inventory" children={()=> <HomeScreen title="Inventory" navigation={navigation}/>} />
        <Tab.Screen name="Opportunity" children={()=> <HomeScreen title="Opportunity" navigation={navigation}/>} />
        <Tab.Screen name="Cart" children={()=> <HomeScreen title="Cart"/>}  navigation={navigation}/>
      </Tab.Navigator>
    );
  }

  export default BottomNavigation;