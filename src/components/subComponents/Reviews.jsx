// import React from 'react';
import PropTypes from 'prop-types';
import femaleImage from '../../assets/images/female.png';
import maleImage from '../../assets/images/male.png';
import '../../style/Reviews.css'

const ReviewCard = ({ name, location, gender, review }) => {
    // Determine the image based on gender
    const genderImage = gender === 'F' ? femaleImage : maleImage;

    return (
        <div className="w-1/2 mx-auto bg-white shadow-md rounded-lg overflow-hidden my-4">
            <div className="flex items-center justify-between px-6 py-4 bg-gray-800">
                <img src={genderImage} alt="Gender" className="w-6 h-6 mr-2" />
                <h2 className="text-xl font-bold text-white reviews">{name}</h2>
                <p className="text-sm text-gray-300 reviews">{location}</p>
            </div>
            <div className="px-6 py-4">
                <div className="review-container h-48 overflow-y-auto">
                    <p className="text-gray-700 reviews">{review}</p>
                </div>
            </div>
        </div>
    );
};

ReviewCard.propTypes = {
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    grade: PropTypes.string.isRequired,
    gender: PropTypes.oneOf(['M', 'F']).isRequired,
    review: PropTypes.string.isRequired,
};

export default ReviewCard;
