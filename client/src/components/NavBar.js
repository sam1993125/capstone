import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
/** @jsxImportSource @emotion/react */
// import { css } from '@emotion/react';
import styled from '@emotion/styled'
import { keyframes } from 'styled-components'


function NavBar({ handleLogout }) {

  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', changeWidth)

    return () => {
      window.removeEventListener('resize', changeWidth)
    }
  }, [])

  return (
    
    <div style={{ marginBottom: "50px" }}>
      {(toggleMenu || screenWidth > 748) && (

        <Nav>
        <Button><NavLink to="/" style={({ "text-decoration": "none", "color": "#018A9F" })}>My Slangs </NavLink></Button>

        <Button><NavLink to="/database" style={({ "text-decoration": "none", "color": "#018A9F", })}>Search Slangs</NavLink></Button>

        <Button><NavLink to="/submit" style={({ "text-decoration": "none", "color": "#018A9F", })}>Submit Your Slangs</NavLink></Button>

        <Button><NavLink to="/profile" style={({ "text-decoration": "none", "color": "#018A9F", })}>Profile</NavLink></Button>

        <Button><NavLink to="/" onClick={handleLogout} style={({ "text-decoration": "none", "color": "#018A9F", })}>Logout</NavLink></Button>
        </Nav>
      )}
      
      {screenWidth > 748 ? null : (<Nav><Button onClick={toggleNav}>🤨</Button></Nav>)}
      
      </div>
  )
}


const Button = styled.button`
  padding: 20px;
  background-color: #f5ffe3;
  font-family: 'Mouse Memoirs', sans-serif;
  font-size: 24px;
  border-radius: 4px;
  font-weight: bold;
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



const Nav = styled.div`
margin: 10px;
display: flex;
justify-content: space-evenly;
@media screen and (max-width: 748px){
    padding: 15px;
        margin: 30px;
        flex-direction: column;
        height: auto;
    }

`



export default NavBar