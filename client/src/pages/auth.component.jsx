import React from 'react';
import SignIn from '../components/sign-in.component';
import SignUp from '../components/sign-up.component';

const AuthPage = () => (
    <div className="auth">
        <SignIn />
        <SignUp />
    </div>
);

export default AuthPage;