import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import styled, { keyframes } from "styled-components";

function UnauthenticatedApp({ setCurrentUser }) {
  return (
    <Log >
      <div>
        <h1 style={{
          textAlign: 'center',
          color: '#018A9F',
          fontFamily: 'Mouse Memoirs',
          fontSize: '60px',
          fontWeight: "bold",
          textShadow:" 5px 5px rgba(22, 33, 33, 0.2)"

        }}>My Urban Dictionary</h1>
        <H1>Grood with words.</H1>
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
      <Rotate>🍵</Rotate>
      <Rotate>🫣</Rotate>
    </Log>
  )
}

const Log = styled.div`
  border-radius: 20px;
  transition: box-shadow 1s;
  padding: 20px;
  background-color: #f5ffe3;

  align-items: center;
  box-shadow: 5px 5px rgba(22, 33, 33, 0.1);
  max-width: 600px;
  margin: 100px auto;
  padding: 5px;
  text-align: center;
  @media screen and (max-width: 748px){
      width: calc (100% - 2rem);
        margin: 20px;
        height: auto;
        width: auto;
    }

`
const H1 = styled.h1`
  margin: auto;
  padding: 20px;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 36px;
  font-weight: bold;
  color :#018A9F;
  align-item:center;
  text-shadow: 5px 5px rgba(22, 33, 33, 0.2);
    
`


  const rotate = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  `

// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 3rem;
`;


export default UnauthenticatedApp