import React, {lazy, Suspense, useEffect} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import Header from './components/header/header.component';
import {connect} from 'react-redux';
import {selectCurrentUser} from './redux/user/user.selector';
import {createStructuredSelector} from 'reselect';
import {checkUserSession} from './redux/user/user.action';
import {GlobalStyles} from './global.styles';
import LoadingSpinner from './components/loading-spinner/loading-spinner.component';
import ErrorBoundary from './components/error-boundary/error.boundary';


const HomePage = lazy(() => import('./pages/home/home.page'));
const ShopPage = lazy(() => import('./pages/shop/shop.page'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.page'));
const SignInAndSignUpPage = lazy(() => import('./pages/sign-in/sign-in-and-sign-up.page'));

const App = ({checkUserSession, currentUser}) => {

    useEffect(() => {
        checkUserSession();
    }, [checkUserSession]);

    return (
        <div className="App">
            <GlobalStyles/>
            <Header/>
            <Switch>
                <ErrorBoundary>
                    <Suspense fallback={<LoadingSpinner/>}>
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
                    </Suspense>
                </ErrorBoundary>
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
