import React, {useState} from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {connect} from 'react-redux';
import {emailSignInStart, googleSignInStart} from '../../redux/user/user.action';

const SignInComponent = ({emailSignInStart, googleSignInStart}) => {
    const [userCredentials, setCredentials] = useState({email: '', password: ''});
    const {email, password} = userCredentials;

    const handleSubmit = async (event) => {
        event.preventDefault();
        emailSignInStart(email, password);


    };
    const handleChange = (event) => {
        const {value, name} = event.target;
        setCredentials({...userCredentials, [name]: value});
    };


    return (
        <React.Fragment>
            <div className='sign-in'>
                <h2 className='title'>
                    I already have an account.
                </h2>
                <span>Sign in with your email and password.</span>

                <form onSubmit={handleSubmit}>
                    <FormInput name='email'
                               type='email'
                               label='Email'
                               value={email}
                               handleInputChange={handleChange}
                               required/>
                    <FormInput name='password'
                               type='password'
                               label='Password'
                               value={password}
                               handleInputChange={handleChange}
                               required/>
                    <div className='buttons-group'>
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton type="button" isGoogleSignIn onClick={googleSignInStart}>Sign In With
                            Google</CustomButton>
                    </div>
                </form>
            </div>
        </React.Fragment>);

};

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password})),
});

export default connect(null, mapDispatchToProps)(SignInComponent);