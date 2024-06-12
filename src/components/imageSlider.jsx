import { useState, useEffect } from 'react';
import Image1 from '../assets/images/slider1.png';
import Image2 from '../assets/images/slider2.png';
import Image3 from '../assets/images/slider3.png';
import '../style/imageSlider.css';

const ImageGallery = [Image1, Image2, Image3];

const ImageSlider = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % ImageGallery.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="image-slider-container">
            {ImageGallery.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Image ${index + 1}`}
                    className={`image-slider-img ${currentImageIndex === index ? 'opacity-100' : 'opacity-0'}`}
                />
            ))}
        </div>
    );
};

export default ImageSlider;
