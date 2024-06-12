import PropTypes from 'prop-types';
import '../../style/subProgram.css'

const ImageCard = ({ imageSrc, description }) => {
    return (
        <div className="image-card max-w-sm rounded overflow-hidden shadow-lg mx-4 mt-4 bg-cardColor ">
            <img className="w-full" src={imageSrc} alt="Image" />
            <div className="px-6 py-4">
                <p className="text-gray-700 text-xl font-normal description" >
                    {description}
                </p>
            </div>
        </div>
    );
};

ImageCard.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default ImageCard;
