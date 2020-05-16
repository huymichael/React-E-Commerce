import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import {HomePage} from './pages/home/home.page';
import ShopPage from './pages/shop/shop.page';
import Header from './components/header/header.component';
import SignInPage from './pages/sign-in/sign-in.page';
import {auth} from './firebase/firebase.util';


class App extends React.Component {
    unsubscribeFromAuth = null;

    constructor() {
        super();
        this.state = {
            currentUser: null
        };
    }

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({currentUser: user,});
            console.log(user);
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div className="App">
                <Header currentUser={this.state.currentUser}/>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/shop' component={ShopPage}/>
                    <Route path='/signin' component={SignInPage}/>
                </Switch>
            </div>
        );
    }
}

export default App;
