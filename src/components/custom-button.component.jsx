import React from 'react';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
    <button className={`${isGoogleSignIn ? "google-sign-in" : ""} btn`} {...otherProps}>
        {children}
    </button>
);

export default CustomButton;