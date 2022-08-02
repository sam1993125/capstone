import React, { useState } from 'react'
import { Redirect, useHistory, Link } from 'react-router-dom'
import styled from '@emotion/styled'


function Login({ setCurrentUser }) {
    const history = useHistory()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
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

            <Redirect to="/" />
            <Form onSubmit={handleSubmit}>
                {/* <h1>Log In</h1> */}
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
                        type="password"
                        placeholder="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </p>
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                <p><Link to="/signup" style={style}>No account here? OMG!</Link></p>
                <Button type="submit">Log In</Button>
            </Form>
        </div>
    )
}


const Button = styled.button`
    padding: 20px;
    background-color: #f5ffe3;
    font-family: 'Mouse Memoirs', sans-serif;
    font-size: 24px;
    border-radius: 8px;
    font-weight: bold;
    margin: 10px;
    align: cetner
`

const Form = styled.form`
width: 300px;
  padding: 64px 15px 24px;
  margin: auto auto;
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
        background: transparent;
        outline: none;
        border: 0.5;
      }
      &:focus {
        outline: none;
        border: 0.5;
      }
    }

`

const style = {
    textAlign: 'left',
    fontFamily: 'Roboto Condensed, sans-serif',
    fontWeight: "bold",
    textDecoration: "none"
}

export default Login