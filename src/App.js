import React from 'react'
import {
    BrowserRouter,
    Route,
    Link
} from 'react-router-dom'

import './App.css';

const RouterLinks = () => (
    <div>
        <Link to={'/'}>Home</Link>
        <Link to={'about'}>About</Link>
        <Route exact path={'/'} render={() => <h1>Home</h1>} />
        <Route path={'/about'} render={() => <h1>About</h1>} />
    </div>
);

const forceRefresh = () => {
    console.log(new Date());
    return false;
};

const BrowserRouterApp = () => (
    <BrowserRouter forceRefresh={forceRefresh()}>
        <RouterLinks/>
    </BrowserRouter>
);

export default BrowserRouterApp;