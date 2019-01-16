import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/Login/Login';
import HowToUse from './components/HowToUse/HowToUse';
import ProtectedRoute from './components/Routes/ProtectedRoute/ProtectedRoute';
import OrderedList from './components/OrderedList/OrderedList';
import Restaurant from './components/Restaurant/Restaurant';
import GitHubUsers from './components/GitHubUsers/GitHubUsers';
import LoginRoute from './components/Routes/LoginRoute/LoginRoute';
import Header from './components/Header/Header';
import { RestProvider } from './components/RestProvider/RestProvider';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <RestProvider>
                    <div className="App">
                        <Header />
                        <Switch>
                            {/*REGULAR RUTES*/}
                            <Route path={'/how-to-use'} component={HowToUse} />

                            {/*LOGIN RUTE*/}
                            <LoginRoute path={'/login'} component={Login} />

                            {/*PROTECTED RUTES*/}
                            <Redirect exact from={'/'} to={'/tables'} />
                            <ProtectedRoute path={'/orders'} component={OrderedList} />
                            <ProtectedRoute path={'/tables'} component={Restaurant} />
                            <ProtectedRoute path={'/users'} component={GitHubUsers} />
                        </Switch>
                    </div>
                </RestProvider>
            </BrowserRouter>
        );
    }
}

export default App;
