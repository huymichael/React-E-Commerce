import React from 'react';
import './sign-in-and-sign-up.scss';
import SignInComponent from '../../components/sign-in/sign-in.component';
import SignUpComponent from '../../components/sign-up/sign-up.component';

const SignInAndSignUpPage = () => (
    <React.Fragment>
        <div className='sign-in-and-sign-up'>
            <SignInComponent/>
            <SignUpComponent/>
        </div>
    </React.Fragment>
);
export default SignInAndSignUpPage;