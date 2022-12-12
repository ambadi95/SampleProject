import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Alert } from 'react-native';

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
   await GetFcmToken();
  }
}

 async function GetFcmToken (){
    let fcmToken = await AsyncStorage.getItem("fcmToken"); 
    console.log(fcmToken, "Old token");
    if(!fcmToken){
        console.log("no token");
        try {
            const fcmTokn = await messaging().getToken();
            console.log(fcmTokn);
            if(fcmTokn){
                console.log(fcmTokn);
               await AsyncStorage.setItem("fcmToken", fcmTokn); 

            }
            
        } catch (error) {
            console.log(error,"error in fcm token");
            
        }         
    }

}

export const notificationOpen=()=>{
    messaging().onNotificationOpenedApp(remoteMessage => {
        console.log(
          'Notification caused app to open from background state:',
          remoteMessage.notification,
        );
        navigation.navigate(remoteMessage.data.type);
      });
  
      // Check whether an initial notification is available
      messaging()
        .getInitialNotification()
        .then(remoteMessage => {
          if (remoteMessage) {
            console.log(
              'Notification caused app to open from quit state:',
              remoteMessage.notification, 
            );
          }
        });

        messaging().onMessage(async remoteMessage =>{
            console.log("Notification Foreground state.....", remoteMessage);
            Alert.alert(JSON.stringify(remoteMessage.notification.title), JSON.stringify(remoteMessage.notification.body));
        })
}