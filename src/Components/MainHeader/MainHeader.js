import React, { useState } from 'react';
import { Button, Container, Nav, NavDropdown, Navbar, Offcanvas, Modal } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import './MainHeader.css'
import Logo from '../../assets/Logo.png'
import PhoneIcon from '../../assets/HeaderPhoneIcon.png'
import { FaBars, FaTimes } from "react-icons/fa";
import InstantRoofQuote from './InstantRoofQuote';

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

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                            <Nav.Link href="/" style={{ marginTop: "0.6vh", cursor: "default", color: "#000" }} className='nav-link-with-margin'><img src={PhoneIcon} className='phone-icon' alt='ultimates-roofing-llc' />614-602-7980</Nav.Link>
                            <Button className='roof-quote-btn' onClick={handleShow}>Instant Roof Quote</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/** Modal Component 
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Instant Roof Quote</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>Please email us with your Details <span style={{ color: "#3D3B6D", fontWeight: "bold" }}>roofs@ultimatesolutionsit.com</span></div>
                    <div>Request for a call back</div>
                </Modal.Body>
            </Modal>
        */}

            <Offcanvas show={show} onHide={handleClose} placement="end" className='roof-canvas'>
                <Offcanvas.Header closeButton>
                </Offcanvas.Header>
                <h3 className='instant-heading'>Instant Roof Quote</h3>
                <p style={{ fontSize: "large" }}>Enter your street address for a quick estimate</p>
                <Offcanvas.Body >
                    <InstantRoofQuote />
                </Offcanvas.Body>
            </Offcanvas>

        </div>
    );
}

export default MainHeader