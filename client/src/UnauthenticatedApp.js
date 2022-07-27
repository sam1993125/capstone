import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import styled, { keyframes } from "styled-components";

function UnauthenticatedApp({ setCurrentUser }) {
  return (
    <div style={{
      maxWidth: "600px",
      margin: "70px auto",
      padding: "40px",
      textAlign: "center"

    }}>
      <div>
        <h1 style={{
          textAlign: 'center',
          fontFamily: 'monospace',
          fontSize: '50px',
          fontWeight: "bold",
          // textShadow: "1px 1px 2px"
        }}>My Urban Dictionary</h1>
      </div>
      <Switch>
        <Route exact path="/">
          <Login setCurrentUser={setCurrentUser} />
        </Route>
        <Route exact path="/signup">
          <Signup setCurrentUser={setCurrentUser} />
        </Route>
        <Redirect to="/" />
      </Switch>
      <Rotate>😹</Rotate>
      <Rotate>😹</Rotate>
      <Rotate>😹</Rotate>
    </div>
  )
}


const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 3rem;
`;


export default UnauthenticatedApp