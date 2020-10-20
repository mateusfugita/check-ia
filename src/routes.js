import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import ChosenCountry from './pages/ChosenCountry';

function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}></Route>
                <Route path='/result' component={ChosenCountry}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;