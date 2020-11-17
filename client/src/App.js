import React, {useEffect} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {HomePage} from './pages/home/home.page';
import ShopPage from './pages/shop/shop.page';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in/sign-in-and-sign-up.page';
import {connect} from 'react-redux';
import {selectCurrentUser} from './redux/user/user.selector';
import {createStructuredSelector} from 'reselect';
import CheckoutPage from './pages/checkout/checkout.page';
import {checkUserSession} from './redux/user/user.action';
import {GlobalStyles}   from './global.styles'
const App = ({checkUserSession, currentUser}) => {

    useEffect(() => {
        checkUserSession();
    }, [checkUserSession]);

    return (
        <div className="App">
            <GlobalStyles/>
            <Header/>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/shop' component={ShopPage}/>
                <Route path='/checkout' component={CheckoutPage}/>
                <Route
                    exact
                    path='/signin'
                    render={() =>
                        currentUser ?
                            (<Redirect to='/'/>) :
                            (<SignInAndSignUpPage/>)
                    }
                />
            </Switch>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});
const mapDispatchToProps = dispatch => ({
    checkUserSession: () => dispatch(checkUserSession())
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
