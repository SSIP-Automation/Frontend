export const UserLoginReducer =(state={user:null},action)=>{
    switch (action.type) {
        case "USER_LOGIN_REQUEST":
            return{loading:true,user:null}
        case "USER_LOGIN_SUCCESS":
            return{loading:false,success:true,user:action.payload}
        case "USER_LOGIN_FAILED":
            return{loading:false,error:"Bhai error aavyo che"}
        default:
           return {...state}
    }
}