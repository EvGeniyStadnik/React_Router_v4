import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    NavLink
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
        <NavLink exact activeClassName="active" to="/">Home</NavLink>
        <NavLink activeStyle={{color: 'green'}} to={{pathname: '/about'}}>About</NavLink>
        <NavLink isActive={isActiveFunc} to='/contacts'>Contacts</NavLink>
    </nav>
);

const App = () => (
    <Router>
        <div>
            <Links />
            <Route exact path="/" component={Home}/>
            <Route path="/about" render={() => <h1>About</h1>} />
            <Route path="/:a(\d{2}-\d{2}-\d{4}):b(\.[a-z]+)" children={({match}) => (
                match && <h1>
                    Contacts: {match.params.a || 'Home'}<br />
                    Subpage: {match.params.b || 'Contacts'}
                    </h1>
            )} />
        </div>
    </Router>
);

export default App

