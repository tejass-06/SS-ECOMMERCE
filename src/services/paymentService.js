/*
Future Razorpay

const options = {
key:
process.env
.VITE_RAZORPAY_KEY,
amount: total * 100
}

*/

/*
Future Stripe

const stripePromise =
loadStripe(
process.env
.VITE_STRIPE_KEY
);

*/

export const processPayment = async (amount) => {
  return {
    success: true,
    transactionId: 'TXN' + Date.now(),
    amount,
  };
};
