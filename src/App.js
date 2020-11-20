import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Dashboard from "./containers/Dashboard";
import Login from './containers/Login';
import SignUp from './containers/SignUp';
import Messages from './containers/Messages';
import CreateLog from './containers/CreateLog';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <div>
                    <div className="header">
                        <NavLink activeClassName="active" to="/login">Login</NavLink>
                        <NavLink activeClassName="active" to="/signup">Sign Up</NavLink>
                        <NavLink activeClassName="active" to="/createLog">Create a log</NavLink>
                        <NavLink activeClassName="active" to="/messages">Messages</NavLink>
                    </div>
                    <div className="content">
                        <Switch>
                            <Route path="/login" component={Login} />
                            <Route path="/signup" component={SignUp} />
                            <Route path="/dashboard" component={Dashboard}/>
                            <Route path="/messages" component={Messages}/>
                            <Route path="/createLog" component={CreateLog}/>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;