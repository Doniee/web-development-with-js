import '../node_modules/normalize.css/normalize.css';
import'./client.css';

import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, Link, IndexRoute } from 'react-router';
import HelloWorldApp from './components/HelloWorldApp';
import Greeter from './components/Greeter';
import FrontPage from './components/FrontPage';


const routes = (
    <Router>
        <Route path="/" component={HelloWorldApp}>
            <IndexRoute component={FrontPage} />
            <Route path="/hello/:name" component={Greeter}></Route>
        </Route>
    </Router>
);

ReactDOM.render(
    routes,
    document.getElementById('app')
);

