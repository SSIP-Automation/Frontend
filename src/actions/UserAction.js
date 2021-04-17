export const UserLoginAction=(user)=>(dispatch)=>{
    
    try {
        dispatch({
            type:"USER_LOGIN_REQUEST"
        })
        

        dispatch({
            type:"USER_LOGIN_SUCCESS",
            payload:user
        })

        window.localStorage.setItem("userLoginInfo",JSON.stringify(user))

    } catch (error) {
        dispatch({
            type:"USER_LOGIN_FAIL",
            payload:"Could not Authenticate user"
        })
    }


}