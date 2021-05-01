import { createStore, combineReducers, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import { UserDetailsReducer, UserLoginReducer } from "./reducer/UserReducer"
const reducer=combineReducers({
  userLogin:UserLoginReducer,
  userDetails:UserDetailsReducer
})
const userInfoFromStorage=localStorage.getItem("userLoginInfo")?JSON.parse(localStorage.getItem("userLoginInfo")):null

const initialState={
    userLogin:{user:userInfoFromStorage}
}

const middleware=[thunk]

const store=createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)));

export default store