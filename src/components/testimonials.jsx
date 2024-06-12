

import Reviews from '../assets/data/reviews.json';
import Carousel from './subComponents/Carousel';

const Testimonials = () => {
    const slides = Reviews.records.map((review, index) => ({
        id: index,
        name: review.name,
        location: review.location,
        grade: review.grade,
        gender: review.gender,
        review: review.review
    }));

    return (
        <div>
            <Carousel data={slides} />
        </div>
    );
};

export default Testimonials;
