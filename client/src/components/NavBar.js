import React, { useState } from 'react'
// import { NavLink } from 'react-router-dom'

function NavBar({ setCurrentUser, currentUser, handleLogout }) {
  return (
    <nav>
      {/* <div> 
        <NavLink>Groups</NavLink>
        <NavLink>Groups</NavLink>
        </div>
      <div>
        <NavLink>Groups</NavLink>
      </div> */}
      <p><button onClick={handleLogout}>Logout</button></p>
    </nav>
  )
}

export default NavBar