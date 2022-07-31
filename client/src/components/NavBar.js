import React from 'react'
import { NavLink } from 'react-router-dom'
/** @jsxImportSource @emotion/react */
// import { css } from '@emotion/react';
import styled from '@emotion/styled'


function NavBar({ handleLogout }) {


  return (
    <div style={{ margin: "30px", display: "flex", justifyContent: "space-evenly"}}>
      <Button><NavLink to="/" style={({ "textDecoration": "none", "color": "#018A9F" })}>Home </NavLink></Button>

      <Button><NavLink to="/database" style={({ "text-decoration": "none", "color": "#018A9F", })}>Search Slangs</NavLink></Button>

      <Button><NavLink to="/submit" style={({ "text-decoration": "none", "color": "#018A9F", })}>Submit Your Slangs</NavLink></Button>

      <Button><NavLink to="/" onClick={handleLogout} style={({ "text-decoration": "none", "color": "#018A9F", })}>Logout</NavLink></Button>

    </div>
  )
}

const Button = styled.button`
  padding: 20px;
  background-color: #f5ffe3;
  font-family: 'Kavoon', cursive;
  font-size: 24px;
  border-radius: 4px;
  font-weight: bold;
  margin: 1px;
  cursor: pointer;
  transition: box-shadow 0.5s;
  &:hover {
     box-shadow: 5px 5px rgba(22, 33, 33, 1);
  }
}
  
`


export default NavBar