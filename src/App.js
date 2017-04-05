import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom'
// console.log(BrowserRouter);
import './App.css';

const isActiveFunc = (match, location) => {
    console.log('match location', match, location);
    return match;
};

const Home = (props) => {
    console.log(props);
    return <h1>Home</h1>
};

const Links = () => (
    <nav>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
    </nav>
);

const App = () => (
    <Router>
        <div>
            <Links />
            <div className="head">
                <Route path="/:page" render={({match}) => (
                    <h1>Header: {match.params.page}</h1>
                )}/>
            </div>
            <div className="content">
                <Route path="/:page" render={({match}) => (
                    <p>Content: {match.params.page}</p>
                )}/>
            </div>
        </div>
    </Router>
);

export default App

