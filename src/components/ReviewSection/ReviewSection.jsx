import reviews from '../../data/reviews';
import './ReviewSection.css';

const ReviewSection = ({ productId }) => {
  const productReviews = reviews.filter((review) => review.productId === productId);

  return (
    <div className="review-section mt-16">
      <h2 className="text-3xl font-bold mb-6">Reviews</h2>

      <div className="space-y-4">
        {productReviews.map((review) => (
          <article key={review.id} className="bg-white/10 rounded-2xl p-4">
            <h3 className="font-semibold">{review.user}</h3>
            <p>Rating: {review.rating}/5</p>
            <p className="text-zinc-300 mt-2">{review.comment}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
