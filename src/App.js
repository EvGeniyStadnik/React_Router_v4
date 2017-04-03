import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
// console.log(BrowserRouter);

const Home = (props) => {
    console.log(props);
    return <h1>Home</h1>
};

const Links = () => (
    <nav>
        <Link to="/">Home</Link>
        <Link to={{pathname: '/about'}}>About</Link>
        <Link replace to='/contacts'>Contacts</Link>
    </nav>
);

const App = () => (
    <Router>
        <div>
            <Links />
            <Route exact path="/" component={Home}/>
            <Route path="/about" render={() => <h1>About</h1>} />
            <Route path="/contacts" children={({match}) => match && <h1>Contacts</h1>} />
        </div>
    </Router>
);

export default App

