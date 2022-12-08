import { createSlice } from "@reduxjs/toolkit";


export const DashboardSlice = createSlice({
    name: 'dashboard',
    initialState : {
        productList : [
            {
                projectDes : 'Vibgyor Vibes Magic Connectot Building Kit Blocks',
                price : '209.00',
                discount : '600.0',
                offer : "391.00",
                image : "http://via.placeholder.com/350x150"
            },
            {
                projectDes : 'Vibgyor Vibes Magic Connectot Building Kit Blocks',
                price : '209.00',
                discount : '600.0',
                offer : "391.00",
                image : "http://via.placeholder.com/350x150"
            },
            
        ]
    },
    reducers :{
        addToCart : state => {
            console.log("Added to cart")
            state.productList.push(
               [...productList, {
                    projectDes : 'NewKit',
                    price : '2100.00',
                    discount : '700.0',
                    offer : "291.00",
                    image : "http://via.placeholder.com/350x150"
                },
            ]
            )
        }
    }

})

export const {addToCart} = DashboardSlice.actions

export default DashboardSlice.reducer