import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import '../../style/Carousel.css'
import ReviewCard from "./Reviews";
const Carousel = (props) => {
    const [activeSlide, setActiveSlide] = useState(0);

    const next = () => activeSlide < props.data.length - 1 && setActiveSlide(activeSlide + 1);
    const prev = () => activeSlide > 0 && setActiveSlide(activeSlide - 1);

    const getStyles = (index) => {
        if (activeSlide === index)
            return {
                opacity: 1,
                transform: "translateX(0px) translateZ(0px) rotateY(0deg)",
                zIndex: 10
            };
        else if (activeSlide - 1 === index)
            return {
                opacity: 1,
                transform: "translateX(-240px) translateZ(-400px) rotateY(35deg)",
                zIndex: 9
            };
        else if (activeSlide + 1 === index)
            return {
                opacity: 1,
                transform: "translateX(240px) translateZ(-400px) rotateY(-35deg)",
                zIndex: 9
            };
        else if (activeSlide - 2 === index)
            return {
                opacity: 1,
                transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)",
                zIndex: 8
            };
        else if (activeSlide + 2 === index)
            return {
                opacity: 1,
                transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)",
                zIndex: 8
            };
        else if (index < activeSlide - 2)
            return {
                opacity: 0,
                transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)",
                zIndex: 7
            };
        else if (index > activeSlide + 2)
            return {
                opacity: 0,
                transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)",
                zIndex: 7
            };
    };

    return (
        <>
            <div className="slideC">
                {props.data.map((item, i) => (
                    <React.Fragment key={i}>
                        <div
                            className="slide"
                            style={{
                                ...getStyles(i)
                            }}
                        >
                            <ReviewCard {...item} />
                        </div>
                        <div
                            className="reflection"
                            style={{
                                ...getStyles(i)
                            }}
                        />
                    </React.Fragment>
                ))}
            </div>

            <div className="btns">
                <FontAwesomeIcon
                    className="btn"
                    onClick={prev}
                    icon={faChevronLeft}
                    color="#000"
                    size="2x"
                />
                <FontAwesomeIcon
                    className="btn"
                    onClick={next}
                    icon={faChevronRight}
                    color="#000"
                    size="2x"
                />
            </div>
        </>
    );
};

export default Carousel;
