import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {signInWithGoogle} from '../../firebase/firebase.util';

class SignInComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            email: '',
            password: '',
        });
    };
    handleChange = (event) => {
        const {value, name} = event.target;
        this.setState({[name]: value});
    };

    render() {
        return (
            <React.Fragment>
                <div className='sign-in'>
                    <h2 className='title'>
                        I already have an account.
                    </h2>
                    <span>Sign in with your email and password.</span>

                    <form onSubmit={this.handleSubmit}>
                        <FormInput name='email'
                                   type='email'
                                   label='Email'
                                   value={this.state.email}
                                   handleInputChange={this.handleChange}
                                   required/>
                        <FormInput name='password'
                                   type='password'
                                   label='Password'
                                   value={this.state.password}
                                   handleInputChange={this.handleChange}
                                   required/>
                        <div className='buttons-group'>
                            <CustomButton type="submit">Sign In</CustomButton>
                            <CustomButton isGoogleSignIn onClick={signInWithGoogle}>Sign In With Google</CustomButton>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default SignInComponent;