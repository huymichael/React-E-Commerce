import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import {HomePage} from './pages/home/home.page';
import ShopPage from './pages/shop/shop.page';
import Header from './components/header/header.component';
import SignInPage from './pages/sign-in/sign-in.page';


function App() {
    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/shop' component={ShopPage}/>
                <Route path='/signin' component={SignInPage}/>
            </Switch>
        </div>
    );
}

export default App;
