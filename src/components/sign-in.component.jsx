import React from 'react';
import { connect } from 'react-redux';
import FormInput from './form-input.component';
import CustomButton from './custom-button.component';
import { googleSignInStart, emailSignInStart } from '../redux/user/user.actions';
import { useState } from 'react';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
    const [userCredentials, setCredentials] = useState({ email: "", password: "" })
    const { email, password } = userCredentials;

    const handleSubmit = async e => {
        e.preventDefault();
        emailSignInStart(email, password);
    };

    const handleChange = e => {
        const { value, name } = e.target;
        setCredentials({ ...userCredentials, [name]: value });
    };

    return (
        <div className="sign-in">
            <h2 className="heading-1 mt-md mb-md">I already have an account</h2>
            <span className="text mb-sm">Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name="email"
                    type="email"
                    value={email}
                    handleChange={handleChange}
                    label="Email"
                    required />

                <FormInput
                    name="password"
                    type="password"
                    value={password}
                    handleChange={handleChange}
                    label="Password"
                    required />
                <div className="btn-container">
                    <CustomButton type="submit">Sign in</CustomButton>
                    <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>Sign in with Google</CustomButton>
                </div>
            </form>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);