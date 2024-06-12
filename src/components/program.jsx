import { useEffect, useRef, useState } from 'react';
import ImageCard from "./subComponents/subProgram";
import program1 from '../assets/images/classroom.png';
import program2 from '../assets/images/hybridClass.png';
import program3 from '../assets/images/nonClassRoom.png';
import '../style/program.css';
import Typewriter from 'typewriter-effect';

const Program = () => {
    const programRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const rect = programRef.current.getBoundingClientRect();
            const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
            if (rect.top <= viewHeight * 0.75) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div ref={programRef} className={isVisible ? 'fadeInUp' : ''}>
            <div className="text-center mt-5">
                <p className="text-2xl lg:text-4xl font-bold mb-2 textEffect">
                    <Typewriter
                        options={{
                            strings: ['OUR TRANSFORMATIONAL PROGRAMS', 'Learning made unique and magical'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </p>
            </div>

            <div className="flex justify-center items-center my-5 bg-gray-100 rounded">
                <div className="flex justify-center space-x-4">
                    <ImageCard
                        description="Classroom / Integrated School Program"
                        imageSrc={program1}
                    />
                    <ImageCard
                        description="Our Hybrid Learning"
                        imageSrc={program2}
                    />
                    <ImageCard
                        description="Non Classroom Program"
                        imageSrc={program3}
                    />
                </div>
            </div>
        </div>
    );
};

export default Program;
