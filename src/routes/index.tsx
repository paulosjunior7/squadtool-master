import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import CreateTeam from '../pages/CreateTeam';


const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/createteam/:id?" exact component={CreateTeam} />
    </Switch>
)

export default Routes;