import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import {HomePage} from './pages/home/home.page';
import ShopPage from './pages/shop/shop.page';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in/sign-in-and-sign-up.page';
import {auth, createUserProfileDocument} from './firebase/firebase.util';


class App extends React.Component {
    unsubscribeFromAuth = null;

    constructor() {
        super();
        this.state = {
            currentUser: null
        };
    }

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapshot => {
                    this.setState({
                        currentUser: {
                            id: snapshot.id,
                            ...snapshot.data(),
                        }
                    });

                    console.log(this.state);
                });
            }
            this.setState({currentUser: userAuth});
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
                    <Route path='/signin' component={SignInAndSignUpPage}/>
                </Switch>
            </div>
        );
    }
}

export default App;
