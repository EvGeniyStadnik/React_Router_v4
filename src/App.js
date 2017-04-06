import React from 'react'
import {
    BrowserRouter,
    HashRouter,
    MemoryRouter,
    StaticRouter,
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

const HashRouterApp = () => (
    <HashRouter hashType="slash">
        <RouterLinks/>
    </HashRouter>
);
//url in Browser not changing
const MemoryRouterApp = () => (
    <MemoryRouter
        initialEntries={['/', '/about']}
        initialIndex={1} //1 - represents '/about'
    >
        <RouterLinks/>
    </MemoryRouter>
);

//for server side rendering
const StaticRouterApp = () => (
    //route to /about page and we can't change route to another page
    <StaticRouter location="/about" context={{}}>
        <RouterLinks/>
    </StaticRouter>
);

export default StaticRouterApp;