import { useEffect, useRef, useState } from "react"




export default function ChatBox ({socket} : any){
    
    const dummy = useRef<HTMLDivElement>(null);
    const [chat, setChat] = useState(Array)

    useEffect(() => {
        socket.on('message', (message :any) => {
            setChat([...chat, message])
            dummy.current?.scrollIntoView({ behavior: "smooth"})
        })

        return () => {
            socket.emit('disconnected');
  
            socket.off();
        }
    },)

    return(
        <>
            <div className="ChatBox">
            {chat.map((message: any, index) => {
            return(
              <p key={index} className="message"><span className="user">{message.user.displayName}</span> <br/> <span className="content">{message.content}</span></p>
            )
            })}
            <div ref={dummy}></div>
            </div>
        </>
    )
}