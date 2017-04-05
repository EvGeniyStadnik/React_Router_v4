import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom'
// console.log(BrowserRouter);
import './App.css';

const Links = () => (
    <div>
        <Link to="/">Home</Link>
        <Link to="/old/456">Old</Link>
        <Link to="/new/123">New</Link>
    </div>
);

const App = () => (
    <Router>
        <div>
            <Links />
            <Route exact path="/" render={() => <h1>Home</h1>}/>
            <Route path="/new/:str" render={({match}) => <h1>New: {match.params.str}</h1>}/>
            <Route path="/old/:str" render={({match}) => (
                <Redirect to={`/new/${match.params.str}`}/>
            )} />
        </div>
    </Router>
);

export default App

