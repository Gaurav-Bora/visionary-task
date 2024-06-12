import { useState } from 'react';
import Thumbnail from '../assets/images/thumbnail.png';
import Video2 from '../assets/images/video2.png';
// import Video1 from '../assets/images/video1.png';

const VideoPlayer = () => {
    const [playing, setPlaying] = useState(false);

    const handlePlay = () => {
        setPlaying(true);
    };

    return (
        <div className="relative flex justify-center">
            <img
                src={Video2}
                alt="Rotating Video"
                className="absolute top-0 left-auto w-16 h-16 animate-spin"
            />
            {/* <img
                src={Video1}
                alt="Video"
                className="absolute top-10 right-23 w-16 h-16 z-10"
            /> */}
            <div className="player-wrapper mx-36 mt-16">
                {!playing && (
                    <img
                        src={Thumbnail}
                        alt="Video Thumbnail"
                        className="w-full h-auto rounded-lg cursor-pointer"
                        onClick={handlePlay}
                    />
                )}
                {playing && (
                    <video
                        className="w-full h-auto rounded-lg"
                        controls
                        autoPlay
                        onEnded={() => setPlaying(false)}
                    >
                        <source
                            src="https://docs.material-tailwind.com/demo.mp4"
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>
                )}
            </div>
        </div>
    );
};

export default VideoPlayer;
