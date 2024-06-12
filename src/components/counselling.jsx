import { useRef, useEffect } from 'react';
import CounsellorImage from '../assets/images/6414104.jpg';
import '../style/counselling.css';


const Counselling = () => {
    const cardRef = useRef(null);
    const imgRef = useRef(null);

    useEffect(() => {
        const cardElement = cardRef.current;
        const imgElement = imgRef.current;

        const handleScroll = () => {
            const boundingCard = cardElement.getBoundingClientRect();
            const boundingImg = imgElement.getBoundingClientRect();

            // Check if the card is in the viewport
            if (
                boundingCard.top >= 0 &&
                boundingCard.bottom <= (window.innerHeight || document.documentElement.clientHeight)
            ) {
                cardElement.classList.add("animate");
            } else {
                cardElement.classList.remove("animate");
            }

            // Check if the image is in the viewport
            if (
                boundingImg.top >= 0 &&
                boundingImg.bottom <= (window.innerHeight || document.documentElement.clientHeight)
            ) {
                imgElement.classList.add("animate");
            } else {
                imgElement.classList.remove("animate");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="flex h-screen items-center justify-center">
            {/* Left half: Image */}
            <div className="w-1/2 h-full flex items-center justify-center">
                <img
                    ref={imgRef}
                    src={CounsellorImage}
                    className="w-full h-auto img-transition"
                    alt="Counsellor"
                />
            </div>
            {/* Right half: Card with button */}
            <div className="w-1/2 h-full flex items-center justify-center" ref={cardRef}>
                <div className="shadow-md rounded-lg p-8 bg-counsellingCard text-center">
                    <h2 className="text-2xl font-semibold mb-4 animate">Connect with Our Counsellor</h2>
                    <p className="text-gray-700 mb-4 animate">Learn more about how we can help you achieve your mission-critical priorities.</p>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 animate">Connect</button>
                </div>
            </div>
        </div>
    );
};

export default Counselling;
