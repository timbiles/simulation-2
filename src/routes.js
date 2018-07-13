import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Dashboard from './Components/Dashboard/Dashboard';
import House from './Components/House/House';
import Wizard from './Components/Wizard/Wizard';
import Wizard2 from './Components/Wizard2/Wizard2';
import Wizard3 from './Components/Wizard3/Wizard3';

export default (
    <Switch>
        <Route path='/dashboard' component={Dashboard}/>
        <Route path='/wizardStep1' component={Wizard}/>   
        <Route path='/wizardStep2' component={Wizard2}/>
        <Route path='/wizardStep3' component={Wizard3}/>  
        <Route path='/' component={House}/>
    </Switch>
);