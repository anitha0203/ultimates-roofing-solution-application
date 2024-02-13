import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import PhoneIcon from '../../assets/PhoneIcon.png'
import EmailIcon from '../../assets/EmailIcon.png'
import './Footer.css'
import { useLocation, useNavigate } from 'react-router-dom'

function Footer() {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location

  // Function to check if the current page is active
  const isCurrentPage = (pageName) => {
    return location.pathname === pageName;
  };

  // Function to check if the services dropdown is active
  const isServicesDropdownActive = () => {
    const servicesPaths = ['/residential-roofing', '/commercial-roofing', '/siding', '/gutter-systems', '/window-services'];
    return servicesPaths.some((path) => location.pathname.startsWith(path));
  };


  return (
    <div className='footer-section'>

      {/* View1 for larger screens */}
      <Row className='view1'>
        <Col xs={3}>
          <h2 className='description'>Contact us for a roof over your head!</h2>
          <Button onClick={() => { navigate('/contact') }} className='estimate-btn'>Get Your Free Estimate</Button>
        </Col>
        <Col>
          <Row className='navbar-items'>
            <Col onClick={() => { navigate('/home') }} className={`navitems ${isCurrentPage('/home') || isCurrentPage('/') ? 'underline-text' : ''}`}>Home</Col>
            <Col onClick={() => { navigate('/about') }} className={`navitems ${isCurrentPage('/about') ? 'underline-text' : ''}`}>About</Col>
            <Col onClick={() => { navigate('/residential-roofing') }} className={`navitems ${isServicesDropdownActive() ? 'underline-text' : ''}`}>Services</Col>
            <Col onClick={() => { navigate('/projects') }} className={`navitems ${isCurrentPage('/projects') ? 'underline-text' : ''}`}>Projects</Col>
            <Col onClick={() => { navigate('/reviews') }} className={`navitems ${isCurrentPage('/reviews') ? 'underline-text' : ''}`}>Reviews</Col>
            <Col onClick={() => { navigate('/contact') }} className={`navitems ${isCurrentPage('/contact') ? 'underline-text' : ''}`}>Contact</Col>
          </Row>
          <hr className='hr-border' />

          <Row style={{ margin: "0" }}>
            <Col>
              <h4 className='head-section'>Head Office</h4>
              <div className='footer-cols'>
                <div>NewYork,</div>
                <div>NY</div>
              </div>
            </Col>
            <Col>
              <h4 className='head-section'>Timings</h4>
              <div className='footer-cols'>
                <div>Mon - Fri</div>
                <div>09:00 AM - 05:00 PM</div>
              </div>
            </Col>
            <Col>
              <h4 className='head-section'>Contact Info</h4>
              <div className='footer-cols'>
                <div><img className='contact-icons' src={PhoneIcon} alt='Phone Icon' />614-357-7539</div>
                <div style={{ display: "flex", marginTop: "1vh" }}>
                  <img className='contact-icons' style={{ marginTop: "5px" }} src={EmailIcon} alt='Email Icon' />
                  <div>
                    roofs@ultimatesolutionsit.com<br />hrroofs@ultimatesolutionsit.com
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* View2 for smaller screens */}
      <Row style={{ margin: "0px" }} className='view2'>
        <Col>
          <Row className='navbar-items1'>
            <Col onClick={() => { navigate('/home') }} className={`navitems ${isCurrentPage('/home') || isCurrentPage('/') ? 'underline-text' : ''}`}>Home</Col>
            <Col onClick={() => { navigate('/about') }} className={`navitems ${isCurrentPage('/about') ? 'underline-text' : ''}`}>About</Col>
            <Col onClick={() => { navigate('/residential-roofing') }} className={`navitems ${isServicesDropdownActive() ? 'underline-text' : ''}`}>Services</Col>
            <Col onClick={() => { navigate('/projects') }} className={`navitems ${isCurrentPage('/projects') ? 'underline-text' : ''}`}>Projects</Col>
            <Col onClick={() => { navigate('/reviews') }} className={`navitems ${isCurrentPage('/reviews') ? 'underline-text' : ''}`}>Reviews</Col>
            <Col onClick={() => { navigate('/contact') }} className={`navitems ${isCurrentPage('/contact') ? 'underline-text' : ''}`}>Contact</Col>
          </Row>
          <hr className='hr-border' />
          <h2 className='description1'>Contact us for a roof over your head!</h2>
          <Button className='estimate-btn1' onClick={() => { navigate('/contact') }}>Get Your Free Estimate</Button>
          <Row style={{ margin: "0" }}>
            <Col>
              <h4 className='head-section'>Head Office</h4>
              <div className='footer-cols'>
                <div>NewYork,</div>
                <div>NY</div>
              </div>
            </Col>
            <Col>
              <h4 className='head-section'>Timings</h4>
              <div className='footer-cols'>
                <div>Mon - Fri</div>
                <div>09:00 AM - 05:00 PM</div>
              </div>
            </Col>
            <Col>
              <h4 className='head-section'>Contact Info</h4>
              <div className='footer-cols'>
                <div><img className='contact-icons' src={PhoneIcon} alt='Phone Icon' />614-357-7539</div>
                <div style={{ display: "flex", marginTop: "1vh" }}>
                  <img className='contact-icons' style={{ marginTop: "5px" }} src={EmailIcon} alt='Email Icon' />
                  <div>
                    roofs@ultimatesolutionsit.com<br />hrroofs@ultimatesolutionsit.com
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      <Container className='last-section'>
        <div>Legal Notice</div>
        <div>Privacy Policy</div>
        <div>© 2024, All Rights Reserved.</div>
      </Container>
    </div>
  )
}

export default Footer