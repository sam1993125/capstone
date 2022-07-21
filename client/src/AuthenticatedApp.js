import './App.css';
import { useState, useEffect } from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom'

function AuthenticatedApp({ currentUser, setCurrentUser }) {
    const history = useHistory()

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
        <Switch>
            <Route exact path="/">
                <div>
                    <p><button onClick={handleLogout}>Logout</button></p>
                    <hi>Hi</hi>
                    {/* {posts.map(post => (
                        <div key={post.id}>
                            <h2>{post.title}</h2>
                            <p>{post.content}</p>
                        </div>
                    ))
                    } */}
                </div>
            </Route>
            <Redirect to="/" />
        </Switch>

    );
}

export default AuthenticatedApp;