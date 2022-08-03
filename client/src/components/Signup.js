// client/src/components/Signup.js
import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import styled from '@emotion/styled'


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

            <Form onSubmit={handleSubmit}>
                <p>
                    <Input
                        type="text"
                        name="username"
                        placeholder="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </p>
                <p>
                    <Input
                        type="text"
                        name="fullname"
                        placeholder="fullname"
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                    />
                </p>

                <p>
                    <Input
                        type="password"
                        name="password"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </p>
                <p>
                    <Input
                        type="email"
                        name="email"
                        placeholder="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </p>
                <p><Link to="/login" style={style}>You have account? Then why u here?</Link></p>
                <Button type="submit">Sign Up</Button>
            </Form>
        </div>
    )
}

const Button = styled.button`
    padding: 20px;
    background: rgba(1,138,159, 0.25);
    font-family: 'Mouse Memoirs', sans-serif;
    font-size: 24px;
    border-radius: 8px;
    font-weight: bold;
    margin: 10px;
    align: cetner
`

const Input = styled.input`
    width: 100%;
    displau:flex;
    border-radius: 10px;
    margin-right:80%;
    padding: 8px 5px;
      border: 0.5;
      background-color: #f5ffe3;
      color: #018A9F;
      font-family: 'Roboto Condensed';
      letter-spacing: 0.05em;
      font-size: 16px;
      &:hover{
        background: white;
        outline: none;
        border: 0.5;
      }
      &:focus {
        outline: none;
        border: 0.5;
      }
    }

`

const Form = styled.form`
width: 300px;
  padding: 64px 15px 24px;
  margin: auto auto;
`

const style = {
    textAlign: 'left',
    fontFamily: 'Roboto Condensed, sans-serif',
    fontWeight: "bold",
    textDecoration: "none"
}

export default Signup