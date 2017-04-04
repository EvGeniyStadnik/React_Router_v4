import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
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
        <Link to="/?id=123">Home</Link>
        <Link to={{pathname: '/', search: 'id=456'}}>About</Link>
    </nav>
);

const App = () => (
    <Router>
        <div>
            <Links />
            <Route path="/" render={({match, location}) => (
                <div>
                    <p>root</p>
                    <p>match: {JSON.stringify(match)}</p>
                    <p>location: {JSON.stringify(location)}</p>
                </div>
            )}/>
        </div>
    </Router>
);

export default App

