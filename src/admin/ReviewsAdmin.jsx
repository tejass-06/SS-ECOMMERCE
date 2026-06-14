import reviews from '../data/reviews';
import './ReviewsAdmin.css';

const ReviewsAdmin = () => {
  return (
    <section className="reviews-admin p-10">
      <h1 className="text-5xl font-bold mb-8">Manage Reviews</h1>

      {reviews.map((review) => (
        <article key={review.id}>
          <h2 className="text-xl font-bold">{review.user}</h2>
          <p>
            Product #{review.productId} - {review.rating}/5
          </p>
          <p className="text-zinc-400">{review.comment}</p>
        </article>
      ))}
    </section>
  );
};

export default ReviewsAdmin;
