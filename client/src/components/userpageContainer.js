import React from 'react'
import WordList from "./userpage/WordCard"

function userpageContainer({ setCurrentUser, currentUser }) {
  return (
    <div><WordList setCurrentUser={setCurrentUser} currentUser={currentUser} /></div>
  )
}

export default userpageContainer