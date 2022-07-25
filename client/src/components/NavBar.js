import React from 'react'
import { NavLink } from 'react-router-dom'
/** @jsxImportSource @emotion/react */
// import { css } from '@emotion/react';
import styled from '@emotion/styled'


function NavBar({ handleLogout }) {

  
  return (
    <div style={({ "display": "flex", 
    "place-items": "center"
    })} >
        <Button><NavLink to="/" style={({"textDecoration" : "none", "color": "black"})}>Home </NavLink></Button>

        <Button><NavLink to="/database" style={({"text-decoration" : "none", "color": "black",})}>Search Slangs</NavLink></Button>

        <Button><NavLink to="/submit" style={({ "text-decoration": "none", "color": "black",})}>Submit Your Slangs</NavLink></Button>

        <Button><NavLink to="/" onClick={handleLogout} style={({"text-decoration": "none", "color": "black",})}>Logout</NavLink></Button>

    </div>
  )
}

const Button = styled.button`
  padding: 30px;
  background-color: #f5ffe3;
  font-size: 24px;
  border-radius: 4px;
  font-weight: bold;
  margin: 15px;
  align: cetner
  &:hover {
    color: white;
  }
  boxShadow:" 3px 3px"
`


export default NavBar