import { useState } from 'react'
import '../styles/style.css'









import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'




function Register({auth} : any){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [username, setUsername] = useState("")

    function formSubmit(e: any){
        e.preventDefault()
        if(password === "") return alert("Password needs to be atleast 6 characters")

        createUserWithEmailAndPassword(auth, email, password).then((user: any) => {
            console.log(user)
            if(auth.currentUser == null) return
            updateProfile(auth.currentUser, {
                displayName: username
            })

            console.log(user)

        })
    }

    function onEmailChange(e: any){
        setEmail(e.target.value)

    }
    function onPasswordChange(e: any){
        if(e.target.value.length < 6) return
        setPassword(e.target.value)
    }

    function onUsernameChange(e: any){
        setUsername(e.target.value)
    }

    return(
        <>
            <div className="registerContainer">
                <div className="registerCard">
                    <h1>Register</h1>
                    <form onSubmit={formSubmit}>
                        <input type="email" name='email' placeholder='email' onChange={onEmailChange} required />
                        <input type="username" name='username' placeholder='username' onChange={onUsernameChange} required/>
                        <input type="password" name='password' placeholder='password' onChange={onPasswordChange} required/>
                        <button type='submit'>Sign up</button>
                    </form>
                </div>
                
            </div>
        </>
    )
}

export default Register
