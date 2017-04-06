import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Prompt
} from 'react-router-dom'

import './App.css';

const Links = () => (
    <div>
        <Link to="/">Home</Link>
        <Link to="/form">Form</Link>
    </div>
);

const Home = () => (
    <h2>Home</h2>
);

class Form extends React.Component{
    state = {dirty: false};

    setDirty = () => this.setState({dirty: true});
    render(){
        return (
            <div>
                <h1>Form</h1>
                <input type="text" onInput={this.setDirty}/>
                <Prompt when={this.state.dirty} message='You data will be lost'/>
            </div>
        )
    }
}

const App = () => (
    <Router>
        <div>
            <Links />
            <Route exact path="/" component={Home}/>
            <Route path="/form" component={Form} />
        </div>
    </Router>
);

export default App

