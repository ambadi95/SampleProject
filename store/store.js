import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from "redux-persist";
  import AsyncStorage from "@react-native-async-storage/async-storage";

import OppurtunityReducer from "./OppurtunitySlice";
import DashboardReducer from "./DashboardSlice";


// export default configureStore({
//     reducer:{
//         oppurtunity : OppurtunityReducer
//     }
// })

const persistConfig = {
	key: "root",
	version: 1,
	storage: AsyncStorage,
}

const rootReducer = combineReducers({
    oppurtunity : OppurtunityReducer,
    dashboard : DashboardReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)
export default configureStore({
  reducer: persistedReducer
})
