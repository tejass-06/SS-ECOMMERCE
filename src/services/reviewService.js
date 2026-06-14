/*
Future Backend

export const getReviews =
async productId => {
return axios.get(
`/api/reviews/${productId}`
);
};

*/

import reviews from '../data/reviews';

export const getReviews = (productId) => {
  return reviews.filter((review) => review.productId === productId);
};
