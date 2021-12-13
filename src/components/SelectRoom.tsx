import { useState, useEffect } from 'react'
import iRoom from '../interfaces/iRooms'


function SelectRoom({ socket }: any)
{
    
    
    const [roomName, setRoomName] = useState('')

    const formOnSubmit = (e: any) =>
    {
        e.preventDefault()
        if (roomName === "") return
        const newRoom : iRoom = { id: "2", name: roomName, users: [] }


        socket.emit('createRoom', newRoom)

        

    }
    const onInputChange = (e: any) => {
        setRoomName(e.target.value)
    }

    return (
        <form onSubmit={formOnSubmit}>
            <input type="text" name="roomSelect" onChange={onInputChange} placeholder='Create or join a room' />
        </form>
    )
}

export default SelectRoom