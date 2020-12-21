import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Index from './component/index';

export default class Routes extends Component{
    render(){
        return(
            <div>
                <Router>
                    <Switch>
                    <Route path="/" exact>
                        <Index/>
                    </Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}