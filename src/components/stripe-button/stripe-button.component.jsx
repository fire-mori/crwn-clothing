/* eslint-disable operator-linebreak */
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51JlLkNKgfwRoGJol48HjgWCVocEOg9TAWIJ7SMWRyBxuGtSwDn2MpX8VaswVBloVLzGw07fjOXUmYcasLygn39as00Ex4rjn0M';

  const onToken = (token) => {
    console.log(token);
    alert('PAyment Successful');
  };

  return (
    <StripeCheckout
      label="Pay now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      description={`Tour total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
