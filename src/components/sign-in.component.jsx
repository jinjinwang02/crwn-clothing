import React from 'react';
import { connect } from 'react-redux';
import FormInput from './form-input.component';
import CustomButton from './custom-button.component';
import { googleSignInStart, emailSignInStart } from '../redux/user/user.actions';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = async e => {
        e.preventDefault();
        const { emailSignInStart } = this.props;
        const { email, password } = this.state;

        emailSignInStart(email, password);
    };

    handleChange = e => {
        const { value, name } = e.target;
        this.setState({ [name]: value });
    }

    render() {
        const { email, password } = this.state;
        const { googleSignInStart } = this.props;
        return (
            <div className="sign-in">
                <h2 className="heading-1 mt-md mb-md">I already have an account</h2>
                <span className="text mb-sm">Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        value={email}
                        handleChange={this.handleChange}
                        label="Email"
                        required />

                    <FormInput
                        name="password"
                        type="password"
                        value={password}
                        handleChange={this.handleChange}
                        label="Password"
                        required />
                    <div className="btn-container">
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
};

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);