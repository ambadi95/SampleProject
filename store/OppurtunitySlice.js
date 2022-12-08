import { createSlice } from "@reduxjs/toolkit";


export const OppurtunitySlice = createSlice({
    name: 'oppurtunity',
    initialState : {
        value : 1235,
        list : [
            {
                name : 'Ambro',
                id : '54387658#',
                place : "India"
            },
            {
                name : 'George',
                id : '5437348#',
                place : "USA"
            }
        ]
    },
    reducers :{
        addToList : state => {
            state.list.push({
                name : 'Neymar',
                id : '09897658#',
                place : "Brazil"
            })
        }
    }

})

export const {addToList} = OppurtunitySlice.actions

export default OppurtunitySlice.reducer