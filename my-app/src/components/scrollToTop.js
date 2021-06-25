import React, {useEffect, useState} from 'react';

export function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    //Show button when page is scrolled up to given distance
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set top coordinate to 0
    // make scrolling smooth
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect( () => {
        window.addEventListener("scroll", toggleVisibility)
    }, []);
    return (
        <div className="scroll-to-top">
            {isVisible && (
            <button onClick={scrollToTop} id="scroll-btn">
                <p>Top</p>
            </button>
                )}
        </div>
    );
}
