import React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import IconBadge from 'react-native-icon-badge';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';

import { hideNotification } from '../../store/DashboardSlice';

const BadgedIcon = () => {

  const dispatch = useDispatch();

  const {notification,notificationMessage} = useSelector(state => state.dashboard);

  return (
    <TouchableOpacity onPress={()=>{ 
      console.log(notificationMessage);
      dispatch(hideNotification())
      if(notificationMessage){
      Alert.alert(notificationMessage.title, notificationMessage.body)
      }
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <IconBadge
          MainElement={
            <Icon name="bells" size={20} color="black" style={{padding: 10}} />
          }
          BadgeElement={<Text style={{color: '#FFFFFF'}}></Text>}
          IconBadgeStyle={{
            width: 5,
            height: 20,
            backgroundColor: 'skyblue',
          }}
          Hidden={notification}
        />
      </View>
    </TouchableOpacity>
  );
};

export default BadgedIcon;
