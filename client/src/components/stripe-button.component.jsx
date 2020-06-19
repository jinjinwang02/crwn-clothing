import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_MavBrSJMB8TaMU0y7zUGrPPC001aQ5v3Dy"

    const onToken = token => {
        axios({
            url: "payment",
            method: "post",
            data: {
                amount: priceForStripe,
                token
            }
        }).then(res => {
            alert("Payment successful!");
        }).catch(err => {
            console.log("Payment error: ", JSON.parse(err));
            alert("Payment failed. Please make sure to use the provided credit card at the bottom of the page.");
        })
    };

    return (
        <StripeCheckout
            label="Pay Now"
            name="CRWN Clothing Ltd"
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is £${price}`}
            currency="GBP"
            alipay
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;