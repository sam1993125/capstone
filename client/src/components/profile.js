import React, { useState } from 'react'
import { useHistory } from "react-router";
import styled from '@emotion/styled'

function Profile({ id, currentUser }) {



  return (
    <Container>
      <p style={{
        textAlign: 'center',
        fontFamily: 'Roboto Condensed',
        fontSize: '50px',
        textShadow: '5px 5px rgba(22, 33, 33, 0.2)'
      }}>Your Profile</p>
      <div>
        <Prgh>Username: {currentUser.username}</Prgh>
        <Prgh>Name: {currentUser.fullname}</Prgh>
      </div>
      
    </Container>
  )
}

const Button = styled.button`
  padding: 10px;
  margin:10px;
  background: rgba(1,138,159, 0.6);
  font-family: 'Mouse Memoirs', sans-serif;
  font-size: 24px;
  border-radius: 4px;
  font-weight: bold;
  color: white; 
  border-color :#f5ffe3;
  border-width: 1px;
  text-decroration: none;
  cursor: pointer;
  transition: box-shadow 0.5s;
  &:hover {
    box-shadow: 5px 5px rgba(22, 33, 33, 0.1);
  }
  @media screen and (max-width: 748px){
        text-align: center;
        margin-right: 0px;
        padding: 20px 0;
         &:hover {
     box-shadow: none
  }
    }
}
`
const Prgh = styled.p`
  text-align: justify;
  margin-right: 30px;
  font-family: 'Roboto Condensed', sans-serif;
`

const Input = styled.input`
  width: 60%;
  padding: 12px 20px;
  size: 50px;
  margin: 8px 0;
  display: inline - block;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-sizing: border - box;
`

const Container = styled.div`
      border-radius: 20px;
  transition: box-shadow 1s;
  padding: 20px;
  background-color: #f5ffe3;
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
export default Profile