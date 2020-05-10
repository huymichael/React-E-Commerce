import React from 'react';
import './sign-in.styles.scss';
import SignInComponent from '../../components/sign-in/sign-in.component';

const SignInPage = () => (
    <React.Fragment>
        <div className='sign-in-and-sign-up'>
            <SignInComponent/>
        </div>
    </React.Fragment>
);
export default SignInPage;