import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'


function Login({auth}: any){


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function formSubmit(e: any){
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password).then((user) => {
            console.log("Signed In!")
        }).catch((err) => {
            alert("Incorrect email or password")
        })

    }

    function onEmailChange(e: any){
        setEmail(e.target.value)

    }
    function onPasswordChange(e: any){
        if(e.target.value.length < 6) return
        setPassword(e.target.value)
    }



    return(
<>
            <div className="registerContainer">
                <div className="registerCard">
                    <h1>Login</h1>
                    <form onSubmit={formSubmit}>
                        <input type="email" name='email' placeholder='Email' onChange={onEmailChange} required />
                        <input type="password" name='password' placeholder='Password' onChange={onPasswordChange} required/>
                        <button type='submit'>Login</button>
                    </form>
                </div>
                
            </div>
        </>
    )
}

export default Login