import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion'; // For animations
import { useInView } from 'react-intersection-observer'; // For intersection detection
import Stars from '../../assets/images/stars.png';
import '../../style/Card.css'; // Import CSS file for animation

const Card = ({ icon, description }) => {
    const [isVisible, setIsVisible] = useState(false);
    const { ref, inView } = useInView({ triggerOnce: true });

    // When the card enters the viewport, set isVisible to true
    React.useEffect(() => {
        if (inView) {
            setIsVisible(true);
        }
    }, [inView]);

    return (
        <div className="relative" ref={ref}>
            <motion.div
                className={`card-container w-full mx-auto bg-cardColor shadow-lg rounded-lg overflow-hidden flex items-center p-6 space-x-4 hover:scale-105 transition-transform duration-600 ${isVisible ? 'animate-cardEntrance' : ''}`}
            >
                <div className="card-svg-container">
                    <img
                        src={icon}
                        alt="Icon"
                        className="w-24 h-16 transition-transform transform hover:scale-105"
                    />
                </div>
                <div className="card-description">
                    <p className="text-gray-700 text-base description">{description}</p>
                </div>
                <img src={Stars} alt="Stars" className="absolute top-0 right-0 w-12 h-12" />
            </motion.div>
        </div>
    );
};

Card.propTypes = {
    icon: PropTypes.string.isRequired, // Expecting a URL for the icon image
    description: PropTypes.string.isRequired,
};

export default Card;
