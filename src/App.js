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

const Head = ({match}) => (
    <div className="head">
        <Route path="/:page" render={({match}) => (
            <h1>Header: {match.params.page}</h1>
        )}/>
    </div>
);

const Content = ({match}) => (
    <div className="content">
        <Route path="/:page" render={({match}) => (
            <p>Content: {match.params.page}</p>
        )}/>
    </div>
);

const App = () => (
    <Router>
        <div>
            <Links />
            <Head />
            <Content />
        </div>
    </Router>
);

export default App

