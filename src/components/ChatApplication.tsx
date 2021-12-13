import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import io from 'socket.io-client'

import iRoom from '../interfaces/iRooms'

import ChatBox from './ChatBox'
import SendChat from './SendChat'
require('dotenv').config()







function ChatApplication({auth}: any, room : iRoom){
    const [socket, setSocket] = useState(io)
    const [user] = useAuthState(auth)

    useEffect(() => {
        setSocket(io('localhost:8080'))
    
        return
    },[])

    function signOut(e: any){
        e.preventDefault()
        auth.signOut()
    }


    return(

        <>
        <button onClick={signOut}>Sign out</button>
        <div className='chat'>
            <ChatBox socket={socket}/>
            <SendChat socket={socket} auth={auth} />
        </div>
        </>
    )
}

export default ChatApplication