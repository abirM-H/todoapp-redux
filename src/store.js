
import listReducer from "./reducers/reducer";
import {createStore}from "redux"



const store=createStore(listReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default(store)