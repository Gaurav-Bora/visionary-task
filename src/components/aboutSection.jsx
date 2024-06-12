// import React from 'react';
// import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Years from '../assets/images/10.png';
import Card from '../components/subComponents/cards';
import icon1 from '../assets/images/icons8-study-94.png';
import icon2 from '../assets/images/icons8-statistics-50.png';
import icon3 from '../assets/images/icons8-pen-94.png';
import '../style/about.css'

const About = () => {
    const { ref: imgRef, inView: imgInView } = useInView({ triggerOnce: true });
    const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true });

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center">
                <motion.div
                    className="flex justify-center"
                    ref={imgRef}
                    initial={{ x: -100, opacity: 0 }}
                    animate={imgInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <img src={Years} alt="Years" className="max-w-full" />
                </motion.div>

                <div className="flex flex-col space-y-4">
                    <Card icon={icon1} description="1st Edexcel school in Pune" />
                    <Card icon={icon2} description="Holistic development goals" />
                    <Card icon={icon3} description="Arabic & Islamic studies as a vital part of our curriculum" />
                </div>

                <motion.div
                    className="text-left lg:text-start px"
                    ref={textRef}
                    initial={{ x: 100, opacity: 0 }}
                    animate={textInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-2xl font-semibold mb-4 about">About Us</h2>
                    <p className="text-gray-700 mb-4 about">
                        Welcome to Span International Academy. Meet the school of your dreams. The learning centre that is more than just an academic institute.
                        <br />
                        <br />
                        Span International Academy is an instantly affable school for Gen Z. The location, in-house atmosphere, and well-balanced curriculum make a student ‘feel at home’. The caring and committed staff follow the policy of “student first”, resulting in improvement in the quality of school life, giving a broad perspective for the future, and sculpting their skills.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
