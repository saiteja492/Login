import React from 'react';

import { Switch, Route} from 'react-router-dom'; 

import Form from './Form';
import Dashboard from './Dashboard';

const Routes = () =>(
    <>
    <Switch>
        <Route exact path="/" component={Form}/>
        <Route exact path="/dashboard" component={Dashboard} />
    </Switch>
    </>
);

export default Routes;