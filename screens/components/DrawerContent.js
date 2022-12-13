import React from "react";
import { View, Text, Button,Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";



const DrawerContent = ({navigation}) => {

    const logout=async()=>{
        await AsyncStorage.clear();
        navigation.goBack();
     }
    

    return (

        //   <DrawerContentScrollView {...props}>
        //   <DrawerItemList {...props} />
        //   <DrawerItem label={() => <Text style={{ color: 'white' }}>Logout</Text>}
        //     style={{backgroundColor: 'red'}} 
        //     onPress={() => alert('Logged out')}
        //   />
        // </DrawerContentScrollView>  
        <View style={{ flex: 1, alignItems : 'center', height: '100%', width: '100%' }}>
            <View style={{
                padding: 10,
                flex: 1,
                justifyContent: 'flex-end',
                borderRadius: 10,
                width : '70%'
            }}>
                <Button title="Log Out" onPress={()=> Alert.alert("Alert","Are you sure ?",[
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
            )}/>
            </View>
        </View>

    )

}
export default DrawerContent;