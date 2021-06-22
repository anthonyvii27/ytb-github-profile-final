import React from 'react';
import {
    BrowserRouter as BRouter,
    Switch,
    Route
} from 'react-router-dom';

import Home from './pages/home';

const Routes = () => (
    <BRouter>
        <Switch>
            <Route path="/" exact component={ Home } />
        </Switch>
    </BRouter>
);

export default Routes;