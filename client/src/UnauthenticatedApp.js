import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import styled, { keyframes } from "styled-components";

function UnauthenticatedApp({ setCurrentUser }) {
    return (
        <div>
        <Switch>
            <Route exact path="/">
                <Login setCurrentUser={setCurrentUser} />
            </Route>
            <Route exact path="/signup">
                <Signup setCurrentUser={setCurrentUser} />
            </Route>
            <Redirect to="/" />
        </Switch>
            <Rotate>&lt; 😹 &gt;</Rotate>
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