import { useState } from 'react'
import iMessage from '../interfaces/iMessage'



export default function SendChat({socket, auth}: any){
    const user = auth.currentUser

    const [message, setMessage] = useState({})

    function onFormSubmit(e: any){
        e.preventDefault()
        if(e.target.elements.message.value ===  "") return
        e.target.elements.message.value = ""
        socket.emit('message', {message})
    }

    function onMessageChange(e: any){
        const newMessage = {content: e.target.value, user: user}
        
        setMessage(newMessage)
    }

    return(
        <>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="message" onChange={onMessageChange} />
                <button type="submit">Submit</button>
            </form>
        </>

    )
}