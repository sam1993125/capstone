import './App.css';
import { useState, useEffect } from 'react'
import NavBar from './components/NavBar'
import UserpageContainer from './components/UserpageContainer'
import { Switch, Route, Redirect, useHistory } from 'react-router-dom'

function AuthenticatedApp({ currentUser, setCurrentUser }) {
    const history = useHistory()
    // const [search, setSearch] = useState("Play Play")


    useEffect (() => {
        fetch(`https://api.urbandictionary.com/v0/define?term=words`)
            .then((r) => r.json())
            // .catch(function (err) {
            //     console.info(err + " url: " + "http://api.urbandictionary.com/v0/define?term=words");
            // })
            .then(data => console.log(data))

}, [])

    // useEffect(() => {
    //     fetch(`https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${search}`, {
    //         method: 'GET',
    //         headers: {
    //             'X-RapidAPI-Key': '35f5a32d92msha9883f0f1285bc9p1d3862jsnd68ea51520fe',
    //             'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
    //         }
    //     })
    //         .then((r) => r.json())
    //         .catch(function (err) {
    //             console.info(err + " url: " + `https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${search}`);
    //         })
    //         .then(data => console.log(data))

    // }, [])


    // useEffect(() => {
    //     fetch('/posts')
    //         .then(res => res.json())
    //         // .then(posts => setPosts(posts))
    // }, [])

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
            <NavBar handleLogout={handleLogout} setCurrentUser={setCurrentUser} currentUser={currentUser} />
                <Switch>
                <Route exact path="/">
                    <div>
                        <UserpageContainer setCurrentUser={setCurrentUser} currentUser={currentUser} />
                        <hi>Hello</hi>
                    </div>
                </Route>
            {/* <Redirect to="/" /> */}
        </Switch>
        </div>

    );
}

export default AuthenticatedApp;