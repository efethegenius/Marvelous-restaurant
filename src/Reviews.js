import { reviews } from "./data";
import { Fade } from "react-awesome-reveal";
export const Reviews = () => {
  return (
    <section className="reviews" id="reviews">
      <h1>Reviews</h1>
      <div className="reviews-div">
        {reviews.map((review) => {
          const { id, comment, name, image } = review;
          return (
            <Fade fraction="0.2">
              <div key={id} className="reviews-card">
                <p>{comment}</p>
                <img src={image} alt={name} />
                <h3>{name}</h3>
              </div>
            </Fade>
          );
        })}
      </div>
    </section>
  );
};
