import React, { useContext, useState, useEffect } from "react"
import { useHistory } from "react-router"
import db, { auth, provider } from "./firebase"
import jwt from "jsonwebtoken"
import { Spinner } from "react-bootstrap"
const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)
  const [roomNo, setroomNo] = useState("")
  const [cabinNo, setcabinNo] = useState("")
  const history = useHistory()

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
  }

  function login() {
    setLoading(true)
    auth.signInWithRedirect(provider);
    return auth.getRedirectResult()
  }

  function logout() {
    setCurrentUser(null)
    return auth.signOut()
  }
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      console.log(user?.uid);
      if(user){
        setLoading(true)
        db.collection("users").where('__name__','==',user.uid).get().then(snapshot=>{
          console.log(snapshot.docs[0].data());
          setroomNo(snapshot.docs[0].data().RoomNo)
          setcabinNo(snapshot.docs[0].data().CabinNo)
          setLoading(false)
          setCurrentUser(user)
        }).catch(()=>{
          auth.signOut()
          alert("User not registered")})
      }
      else{
        setLoading(false)
      }
    })
    if (auth.isSignInWithEmailLink(window.location.href)) {
      let token=window.location.search.split("=")[1].split("&")[0]
      try {
          console.log(token)
          const data=jwt.verify(token,"abc123")
          setLoading(true)
      
      auth.signInWithEmailLink(data.email, window.location.href)
      .then((result) => {
          console.log(result);
          db.collection("users").doc(result.user.uid).set({
              displayName:result.user.displayName,
              CabinNo:data.cabin,
              RoomNo:data.roomNo 
          })
          alert("User registered")
          setLoading(false)
      })
      .catch((error) => {
          alert("Sign in link expired register again")
          console.log(error);
      });
      
  } catch (error) {
      console.log(error);
  }
  }
    return unsubscribe
  }, [history])

  const value = {
    currentUser,
    cabinNo,
    roomNo,
    login,
    signup,
    logout,
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading ? children : <Spinner animation="border" role="status" style={{width:"100px",height:"100px",margin:"auto",marginTop:"40vh",display:"block"}}></Spinner>}
    </AuthContext.Provider>
  )
}
