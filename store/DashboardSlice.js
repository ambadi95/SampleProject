import { createSlice } from "@reduxjs/toolkit";
import { Alert } from "react-native";

import { arraySum, sum } from "../utils/Calculations";


export const DashboardSlice = createSlice({
    name: 'dashboard',
    initialState : {
        productList : [
            {
                projectDes : 'Maza Mango Drink 1.2 L',
                price : 40.00,
                cartPrice : 40.00,
                discount : '5.0',
                qty : 1,
                offer : "35.00",
                image : 'https://reactnative.dev/img/tiny_logo.png'
            },
            {
                projectDes : 'Gold Winner Oil 1 L',
                price : 209.00,
                cartPrice : 209.00,
                discount : '600.0',
                qty : 1,
                offer : "391.00",
                image : 'https://reactnative.dev/img/tiny_logo.png'
            },
            {
                projectDes : 'Good Day Biscuit 1 Pack',
                price : 60.00,
                cartPrice : 60.00,
                discount : '12.0',
                qty : 1,
                offer : "40.00",
                image : 'https://reactnative.dev/img/tiny_logo.png'
            },
            {
                projectDes : 'Mineral Water 1 L',
                price : 20.00,
                cartPrice : 20.00,
                discount : '8.0',
                offer : "12.00",
                qty : 1,
                image : 'https://reactnative.dev/img/tiny_logo.png'
            },
        ],
        cartList : [],
        totalAmount: 0,
        totalItem : 0,
    },
    reducers :{
        addToCart : (state, action) => {
            if(state.cartList.some(value => value.projectDes === action.payload.projectDes)){
                Alert.alert(
                    "Alert ",
                    "Item Already in Cart",
                    [
                      {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                      },
                      { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                  );
            }else{
                state.cartList = 
                [ 
                  ...state.cartList,   
                 action.payload
             ]
            }
            
            const sum = arraySum(state.cartList);
            state.totalAmount = sum;
            state.totalItem = state.cartList.length;
        },
        removeFromCart : (state, action) => {
            state.cartList.splice(action.payload, 1);
            const sum = arraySum(state.cartList);
            state.totalAmount = sum;
            state.totalItem = state.cartList.length;
        },
        itemQtyIncrease : (state, action)=>{
          const item = state.cartList[action.payload]
          const qty = item.qty + 1;
          const amount = item.price * qty
            state.cartList[action.payload].qty = qty;
            state.cartList[action.payload].cartPrice = amount;    
            const sum = arraySum(state.cartList);
            state.totalAmount = sum;
        },
        itemQtyDecrease : (state, action)=>{
            const item = state.cartList[action.payload]
            if(item.qty == 1){
                state.cartList.splice(action.payload, 1);
                const sum = arraySum(state.cartList);
                state.totalAmount = sum;
                state.totalItem = state.cartList.length;
            }else{
            const qty = item.qty - 1;
            const amount = item.price * qty
              state.cartList[action.payload].qty = qty;
              state.cartList[action.payload].cartPrice = amount;    
              const sum = arraySum(state.cartList);
              state.totalAmount = sum;
            }
          }
    }

})

export const {addToCart, removeFromCart, itemQtyIncrease, itemQtyDecrease} = DashboardSlice.actions

export default DashboardSlice.reducer