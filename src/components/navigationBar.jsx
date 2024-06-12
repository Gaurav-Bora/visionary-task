import { useState } from 'react';
import Logo from "../assets/images/Logo.png";
import '../style/navigationBar.css'; // Adjust the path based on your project structure

const NavigationBar = () => {
    const [eventsDropdownVisible, setEventsDropdownVisible] = useState(false);
    const [downloadsDropdownVisible, setDownloadsDropdownVisible] = useState(false);
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    const toggleMobileNav = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
        const button = document.querySelector('.block.lg\\:hidden button');
        button.classList.toggle('clicked');
    };


    const toggleEventsDropdown = () => {
        setEventsDropdownVisible(!eventsDropdownVisible);
    };

    const toggleDownloadsDropdown = () => {
        setDownloadsDropdownVisible(!downloadsDropdownVisible);
    };

    return (
        <div>
            <nav className="navbar flex items-center justify-between flex-wrap bg-gradient-to-r from-cyan-500 to-blue-500 p-6">
                <div className="navbar-logo">
                    <img src={Logo} alt="Logo" />
                </div>
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white" onClick={toggleMobileNav}>
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                <div className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${isMobileNavOpen ? 'block' : 'hidden'} `}>
                    <div className="navbar-links lg:flex-grow">
                        <a href="#responsive-header" className="navbar-link">
                            Home
                        </a>
                        <a href="#responsive-header" className="navbar-link">
                            About
                        </a>
                        <a href="#responsive-header" className="navbar-link">
                            Academics
                        </a>
                        <a href="#responsive-header" className="navbar-link">
                            Activities
                        </a>
                        <div className="relative inline-block">
                            <a href="#responsive-header" className="navbar-link" onClick={toggleEventsDropdown}>
                                Events <span className="arrow-down">&#9662;</span>
                            </a>
                            <div className={`dropdown-menu ${eventsDropdownVisible ? 'show' : ''}`}>
                                <a href="#responsive-header" className="navbar-dropdown">Span Star, NIBM (Pre Primary)</a>
                                <a href="#responsive-header" className="navbar-dropdown">Span International Academy, Pisoli, Nursery (Grade-10)</a>
                                <a href="#responsive-header" className="navbar-dropdown">Joy Of Giving Week 21 June To 24 June 2023</a>
                                <a href="#responsive-header" className="navbar-dropdown">Courses</a>
                            </div>
                        </div>
                        <div className="relative inline-block">
                            <a href="#responsive-header" className="navbar-link" onClick={toggleDownloadsDropdown}>
                                Downloads<span className="arrow-down">&#9662;</span>
                            </a>
                            <div className={`dropdown-menu ${downloadsDropdownVisible ? 'show' : ''}`}>
                                <a href="#responsive-header" className="navbar-dropdown">Download for Students</a>
                                <a href="#responsive-header" className="navbar-dropdown">Download for Parents</a>
                                <a href="#responsive-header" className="navbar-dropdown">Download for Staff</a>
                            </div>
                        </div>

                    </div>
                    <div className="navbar-contact">
                        +91 8956712240-1-2
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavigationBar;
