import React, { useState } from 'react';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import './MainHeader.css'
import Logo from '../../assets/Logo.png'
import PhoneIcon from '../../assets/HeaderPhoneIcon.png'
import { FaBars, FaTimes } from "react-icons/fa";

function MainHeader() {
    // Get the current location using react-router-dom
    const location = useLocation();
    const [isNavbarOpen, setNavbarOpen] = useState(false);
    // Function to determine if a NavLink should be active based on the provided path
    const isNavLinkActive = (path) => {
        return location.pathname === path;
    };

    // Function to determine if the "Services" dropdown should be active based on current path
    const isServicesDropdownActive = () => {
        const servicesPaths = ['/residential-roofing', '/commercial-roofing', '/siding', '/gutter-systems', '/window-services'];
        return servicesPaths.some((path) => location.pathname.startsWith(path));
    };

    // Function to generate class names for navigation links
    const navLinkClass = (path) => `nav-link-with-margin ${isNavLinkActive(path) ? 'active' : ''}`;

    // Helper function to format display text
    const formatDisplayText = (text) => {
        return text.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    };

    return (
        <div>
            {isNavbarOpen && <div className="overlay" onClick={() => setNavbarOpen(false)}></div>}
            <Navbar expand="lg" fixed="top">
                <Container fluid>
                    <Navbar.Brand href="/" className='main-logo'><img className='logo-section' alt='ultimates-roofing-llc' src={Logo} /></Navbar.Brand>
                    <Navbar.Toggle
                        aria-controls="basic-navbar-nav"
                        onClick={() => setNavbarOpen(!isNavbarOpen)}
                    >
                        {isNavbarOpen ? <FaTimes /> : <FaBars />}
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="justify-content-end flex-grow-1">
                            <Nav.Link href="/home" className={`nav-link-with-margin not-active ${isNavLinkActive('/home') || isNavLinkActive('/') ? 'active' : ''}`}>Home</Nav.Link>
                            <Nav.Link href="/about" className={`nav-link-with-margin not-active ${isNavLinkActive('/about') ? 'active' : ''}`}>About</Nav.Link>
                            <NavDropdown title="Services" id="basic-nav-dropdown" className={`nav-link-with-margin ${isServicesDropdownActive() ? 'active-service' : 'not-active'}`}>
                                {['/residential-roofing', '/commercial-roofing', '/siding-enhancements', '/gutter-systems', '/window-services'].map((path) => (
                                    <NavDropdown.Item key={path} href={path} className={navLinkClass(path)}>
                                        {formatDisplayText(path.replace('/', ''))}
                                    </NavDropdown.Item>
                                ))}
                            </NavDropdown>
                            <Nav.Link href="/projects" className={`nav-link-with-margin not-active ${isNavLinkActive('/projects') ? 'active' : ''}`}>Projects</Nav.Link>
                            <Nav.Link href="/reviews" className={`nav-link-with-margin not-active ${isNavLinkActive('/reviews') ? 'active' : ''}`}>Reviews</Nav.Link>
                            <Nav.Link href="/contact" className={`nav-link-with-margin not-active ${isNavLinkActive('/contact') ? 'active' : ''}`}>Contact</Nav.Link>
                        </Nav>

                        <Nav className="justify-content-end flex-grow-1">
                            <Nav.Link href="/" style={{ marginTop: "0.6vh", cursor: "default",color: "#000" }} className='nav-link-with-margin'><img src={PhoneIcon} className='phone-icon' alt='ultimates-roofing-llc' />614-602-7980</Nav.Link>
                            <Button className='roof-quote-btn'>Instant Roof Quote</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default MainHeader