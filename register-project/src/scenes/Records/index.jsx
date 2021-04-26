import React from 'react';
import {Route, Switch} from 'react-router-dom';


const RecordsScene = () => (
    <Switch>
        <Route path='/:id' component={} />
        <Route path='/create' component={Register}/>
    </Switch>
)

export default RecordsScene;
