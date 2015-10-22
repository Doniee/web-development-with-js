import '../node_modules/normalize.css/normalize.css';
import'./client.css';

import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, Link, IndexRoute } from 'react-router';
import NotesApp from './components/NotesApp';
import FrontPage from './components/FrontPage';


const routes = (
    <Router>
        <Route path="/" component={NotesApp}>
            <IndexRoute component={FrontPage} />
        </Route>
    </Router>
);

ReactDOM.render(
    routes,
    document.getElementById('app')
);

