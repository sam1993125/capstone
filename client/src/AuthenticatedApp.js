import './App.css';
import { useState, useEffect } from 'react';
import NavBar from './components/NavBar'
import UserpageContainer from './components/UserpageContainer'
import DatabaseContainer from './components/DatabaseContainer'
import Form from './components/Form'

import { Switch, Route, Redirect, useHistory } from 'react-router-dom'

function AuthenticatedApp({ currentUser, setCurrentUser }) {
    const history = useHistory()

    const [search, setSearch] = useState("")
    const [words, setWords] = useState([])

    // console.log(words)

    const handleLogout = () => {
        fetch('/logout', {
            method: 'DELETE',
            credentials: 'include'
        })
            .then(res => {
                if (res.ok) {
                    setCurrentUser(null)
                    history.push('/')
                }
            })
    }

    return (
        <div>
            <div>
                <h3 style={{
                    textAlign: 'center',
                    fontFamily: 'Shrikhand',
                    fontSize: '50px',
                    color: "#018A9F", 
                    fontWeight: "bold",
                    textShadow: " 5px 5px rgba(22, 33, 33, 0.2)"
                }}>My Urban Dictionary</h3>
            </div>
            <NavBar handleLogout={handleLogout} setCurrentUser={setCurrentUser} currentUser={currentUser} />
            <Switch>

                <Route exact path="/">
                    <div>
                        <UserpageContainer setCurrentUser={setCurrentUser} currentUser={currentUser} />
                    </div>
                </Route>

                <Route exact path="/database">
                    <div>
                        <DatabaseContainer setCurrentUser={setCurrentUser} currentUser={currentUser} />
                    </div>
                </Route>

                <Route exact path="/submit">
                    <div>
                        <Form setCurrentUser={setCurrentUser} currentUser={currentUser} id={currentUser.id} />
                    </div>
                </Route>

                <Redirect to="/" />
            </Switch>
        </div>

    );
}       


export default AuthenticatedApp;