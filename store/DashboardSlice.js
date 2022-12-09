import { createSlice } from "@reduxjs/toolkit";

import { arraySum, sum } from "../utils/Calculations";


export const DashboardSlice = createSlice({
    name: 'dashboard',
    initialState : {
        productList : [
            {
                projectDes : 'Maza Mango Drink 1.2 L',
                price : 40.00,
                discount : '5.0',
                offer : "35.00",
                image : "http://via.placeholder.com/350x150"
            },
            {
                projectDes : 'Gold Winner Oil 1 L',
                price : 209.00,
                discount : '600.0',
                offer : "391.00",
                image : "http://via.placeholder.com/350x150"
            },
            {
                projectDes : 'Good Day Biscuit 1 Pack',
                price : 60.00,
                discount : '12.0',
                offer : "40.00",
                image : "http://via.placeholder.com/350x150"
            },
            {
                projectDes : 'Mineral Water 1 L',
                price : 20.00,
                discount : '8.0',
                offer : "12.00",
                image : "http://via.placeholder.com/350x150"
            },
        ],
        cartList : [],
        totalAmount: 0,
        totalItem : 0,
    },
    reducers :{
        addToCart : (state, action) => {
            state.cartList = 
               [ 
                 ...state.cartList,   
                action.payload
            ]
            const sum = arraySum(state.cartList);
            state.totalAmount = sum;
            state.totalItem = state.cartList.length;
        },
        removeFromCart : (state, action) => {
            state.cartList.splice(action.payload, 1);
            const sum = arraySum(state.cartList);
            state.totalAmount = sum;
            state.totalItem = state.cartList.length;
        }
    }

})

export const {addToCart, removeFromCart} = DashboardSlice.actions

export default DashboardSlice.reducer