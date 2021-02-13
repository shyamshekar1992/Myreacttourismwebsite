import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51IJTHJFDXsNZkRh1lYNgpqKcDzubggG5iVp7hqfUrs8BeODodPY1TjZVa6I3CjXSiYvZZaLX55NwXY7hhPyyHaDh00cF9nCbGE';
  const onToken = (token) => {
    axios({
      url: 'api/payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,

      },
    })
      .then((response) => {
        alert('Payment successful');
        axios({
          url: 'localhost:8888/api/sucess',
          method: 'post',
          data: {
            price
          },
        })
      })
      .catch((error) => {
        console.log('Payment error: ', JSON.parse(error));
        alert(
          'There was an issue with your payment. Please make sure you use the provided credit card.'
        );
      });
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Samp Shop Ltd."
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};
export default StripeCheckoutButton;