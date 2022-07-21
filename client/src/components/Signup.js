// client/src/components/Signup.js
import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'

function Signup({ setCurrentUser }) {
    const history = useHistory()
    const [username, setUsername] = useState('')
    const [fullname, setFullname] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    
    const handleSubmit = (event) => {
        event.preventDefault()
        fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password,
                fullname: fullname,
                email: email
            })
        })
            .then(res => {
                if (res.ok) {
                    res.json().then(user => {
                        setCurrentUser(user)
                        history.push('/')
                    })
                } else {
                    res.json().then(errors => {
                        console.error(errors)
                    })
                }
            })
    }
    return (
        <div>
            <p>-- put toggle on top --</p>
            <p><Link to="/login">Log In</Link></p>
            <form onSubmit={handleSubmit}>
                <h1>Sign Up</h1>
                <p>
                    <label
                        htmlFor="username"
                    >
                        Username
                    </label>
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </p>
                <p>
                    <label
                        htmlFor="fullname"
                    >
                        Full Name
                    </label>
                    <input
                        type="text"
                        name="fullname"
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                    />
                </p>

                <p>
                    <label
                        htmlFor="password"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        name=""
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </p>
                
                <p>
                    <label
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </p>
                <p>
                    {/* <label
                        htmlFor="password_confirmation"
                    >
                        Password Confirmation
                    </label>
                    <input
                        type="password"
                        name="password_confirmation"
                        value={passwordConfirmation}
                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                    /> */}
                </p>
                <p><button type="submit">Sign Up</button></p>
            </form>
        </div>
    )
}

export default Signup