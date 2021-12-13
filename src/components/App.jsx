import { useState, useEffect } from 'react'
import Register from './Register'
import Login from './Login'
import ChatApplication from './ChatApplication'
import SelectRoom from './SelectRoom'
import io from 'socket.io-client'

import { getAuth } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import * as firebase from 'firebase/app'
import {Route, Routes, Link, BrowserRouter as Router} from 'react-router-dom'


require('dotenv').config()


const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,

    authDomain: process.env.REACT_APP_AUTHDOMAIN,
  
    projectId: process.env.REACT_APP_PROJECTID,
  
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  
    messagingSenderId: process.env.REACT_APP_MESSAGESENDERID,
  
    appId: process.env.REACT_APP_APPID
}

const app = firebase.initializeApp(firebaseConfig);
const auth = getAuth(app)

function App(){

    const [socket, setSocket] = useState(io)

    useEffect(() => {
        setSocket(io('localhost:8080'))
    
        return
    },[])


    const [user] = useAuthState(auth)
    return(
        <div style={{flexDirection: "column",display: "flex", height: "100vh", width: "100vw", justifyContent: "center", alignItems: "center"}}>
            {user ? <SelectRoom socket={socket} /> :  <SignInOrRegister />}
        </div>
    )
}

function SignInOrRegister(){
    return(
        <>
            <Router>
                <div style={{position: "absolute", top: "230px"}}>
                <Link to="/Login">Login</Link>
                /
                <Link to="/Register">Register</Link>
                </div>
                <Routes>
                    <Route path="/Login" element={<Login auth={auth}/>} />
                    <Route path="/Register" element={<Register auth={auth}/>} />
                </Routes>
            </Router>
        </>
    )
}

export default App

