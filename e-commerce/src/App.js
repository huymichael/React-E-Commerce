import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import {HomePage} from './pages/homepage/homepage.component';

const HATSPAGE = () => (
    <div>
        HAT
    </div>
);

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/hats' component={HATSPAGE}/>
            </Switch>
        </div>
    );
}

export default App;
