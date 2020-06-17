import React from 'react';
import { connect } from 'react-redux';
import FormInput from './form-input.component';
import CustomButton from './custom-button.component';
import { googleSignInStart, signUpStart } from '../redux/user/user.actions';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
        };
    }

    handleSubmit = async e => {
        e.preventDefault();
        const { signUpStart } = this.props;
        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

        signUpStart(displayName, email, password);
    };

    handleChange = e => {
        const { value, name } = e.target;
        this.setState({ [name]: value });
    };

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        const { googleSignInStart } = this.props;
        return (
            <div className="sign-up">
                <h2 className="heading-1 mt-md mb-md">I do not have a account</h2>
                <span className="text mb-sm">Sign up with your email and password</span>

                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        handleChange={this.handleChange}
                        label="Display Name"
                        required />
                    <FormInput
                        type="email"
                        name="email"
                        value={email}
                        handleChange={this.handleChange}
                        label="Email"
                        required />
                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        handleChange={this.handleChange}
                        label="Password"
                        required />
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        handleChange={this.handleChange}
                        label="Confirm Password"
                        required />
                    <div className="btn-container">
                        <CustomButton type="submit">Sign up</CustomButton>
                        <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>Sign up with Google</CustomButton>
                    </div>

                </form>
            </div>
        )
    }
};

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    signUpStart: (displayName, email, password) => dispatch(signUpStart({ displayName, email, password }))
});

export default connect(null, mapDispatchToProps)(SignUp);