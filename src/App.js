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
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contacts">Contacts</Link>
        <Link to="/notexists">Link to not existing component</Link>
    </nav>
);

const App = () => (
    <Router>
        <div>
            <Links />
            <Switch>
                <Route exact path="/" render={() => <h1>Home</h1>}/>
                <Route path="/about" render={() => <h1>About</h1>}/>
                <Route path="/contacts" render={() => <h1>Contacts</h1>}/>
                <Route path="/:itemid" render={({match}) => <h1>Item: {match.params.itemid}</h1>}/>
            </Switch>
        </div>
    </Router>
);

export default App

