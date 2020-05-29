import React from 'react';

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
    <button className={`${inverted ? "inverted custom-button" : ""} ${isGoogleSignIn ? "google-sign-in" : ""} btn`} {...otherProps}>
        {children}
    </button>
);

export default CustomButton;