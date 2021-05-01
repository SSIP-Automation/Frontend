import { createStore, combineReducers, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import { UserDetailsReducer, UserLoginReducer } from "./reducer/UserReducer"
const reducer=combineReducers({
  userLogin:UserLoginReducer,
  userDetails:UserDetailsReducer
})
var userInfo=null

  // var db;
  // var request = indexedDB.open("firebaseLocalStorageDb");
  // request.onerror = function(event) {
  //   console.log("User nathi");
  // };

  //   request.onsuccess = function (event) {
  //     db = event.target.result;
  //     if(db.objectStoreNames.length!==0){
  //       var objectStore = db.transaction("firebaseLocalStorage").objectStore("firebaseLocalStorage");
  //       var keyRange=IDBKeyRange.lowerBound(0)
  //       var cursorRequest=objectStore.openCursor(keyRange)
          
  //         cursorRequest.onsuccess = function(e) {
  //           var result = e.target.result;
  //           // if(!!result == false)
  //           // return;
  //           userInfo=result.value.value
  //           console.log(userInfo);
  //           result.continue();
  //           return userInfo
  //         }
  //         console.log(cursorRequest.onsuccess);
  //         return userInfo
  //       };
  //   }


  function getLayoutData (key) {
    return new Promise (function(resolve) {
        // indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;
        // var open = indexedDB.open ("firebaseLocalStorageDB");

        // open.onsuccess = function () {
        //     var db = open.result;
        //     var tx = db.transaction("firebaseLocalStorage");
        //     var store = tx.objectStore("firebaseLocalStorage");

        //     store.get(key).onsuccess =  function (event) {
        //         return resolve(event.target.result);
        //     }
        // }
        var db;
  var request = indexedDB.open("firebaseLocalStorageDb");
  request.onerror = function(event) {
    console.log("User nathi");
    return resolve("Chuda nadi")
  };

    request.onsuccess = function (event) {
      db = event.target.result;
      if(db.objectStoreNames.length!==0){
        var objectStore = db.transaction("firebaseLocalStorage").objectStore("firebaseLocalStorage");
        var keyRange=IDBKeyRange.lowerBound(0)
        var cursorRequest=objectStore.openCursor(keyRange)
          
          cursorRequest.onsuccess = function(e) {
            var result = e.target.result;
            if(!!result == false)
            return;
            userInfo=result.value.value
            console.log(userInfo);
            result.continue();
            return resolve(userInfo)
          }
          // console.log(cursorRequest.onsuccess);
          // return userInfo
        }
        else{
          resolve("Chuda nadi")
        }
    }

    });
}
const yo=async()=>{
  const response= await getLayoutData().then((result)=> {
    // Do whatever you want with the data
    // console.log(result);
    userInfo=result
    })
return userInfo
}
// yo()
console.log(userInfo);
console.log(yo());
const userInfoFromStorage=userInfo?userInfo:null

    const initialState={
  userLogin:{user:userInfoFromStorage}
}

const middleware=[thunk]

const store=createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)));

export default store