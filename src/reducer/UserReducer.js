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
export const UserDetailsReducer=(state={},action)=>{
    switch (action.type) {
        case "USER_DETAILS_REQUEST":
            return{loading:true}
        case "USER_DETAILS_SUCCESS":
            return{loading:false,CabinNo:action.payload.CabinNo,RoomNo:action.payload.RoomNo}
        case "USER_DETAILS_FAILED":
            return{loading:false,error:"error"}
        case "USER_DETAILS_RESET":
            return {}
        default:
           return {...state}
    }
}