import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import '../App.css';
import Home from './Home'
import AuthComponent from './AuthComponent'
import Login from "./Login";
import UserProfile from "./Userprofile";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" component={Login} />
                    <AuthComponent>
                        <Route path="/userprofile" component={UserProfile}/>
                    </AuthComponent>
                </Switch>
            </BrowserRouter>

        );
    }
}

export default App;
