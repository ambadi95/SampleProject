import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {TouchableOpacity} from 'react-native-gesture-handler';


import {DrawerActions} from '@react-navigation/native';
import SideBar from '../SideBar';
import Icon from 'react-native-vector-icons/AntDesign';
import BottomNavigation from './BottomNavigation';
import DrawerContent from '../components/DrawerContent';
import BadgedIcon from '../components/BadgedIcons';

const Drawer = createDrawerNavigator();

const DraweNavigation = ({navigation}) => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTitle: 'STEPPING STONE',
        drawerPosition: 'left',
        headerLeft: false,
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <Icon
              name="menufold"
              size={20}
              color="black"
              style={{padding: 10}}
            />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <BadgedIcon />
        

        ),
      }}
      drawerContent={props => <DrawerContent navigation={navigation} />}>
      <Drawer.Screen name="HomeScreen" component={BottomNavigation} />
      <Drawer.Screen name="Term&Condition" component={SideBar} />
    </Drawer.Navigator>
  );
};

export default DraweNavigation;
