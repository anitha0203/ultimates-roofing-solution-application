import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import PhoneIcon from '../../assets/PhoneIcon.png'
import EmailIcon from '../../assets/EmailIcon.png'
import './Footer.css'
import { useLocation, useNavigate } from 'react-router-dom'

function Footer() {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location

  const isCurrentPage = (pageName) => {
    // Check if the current location pathname equals to the pageName
    return location.pathname === pageName;
  };

  const isServicesDropdownActive = () => {
    const servicesPaths = ['/residential-roofing', '/commercial-roofing', '/siding', '/gutter-systems', '/window-services'];
    return servicesPaths.some((path) => location.pathname.startsWith(path));
  };


  return (
    <div className='footer-section'>

      <Row className='view1'>
        <Col xs={3}>
          <h2 className='description'>Connect with Us for a Roof Over Your Dreams!</h2>
          <Button onClick={() => { navigate('/contact') }} className='estimate-btn'>Get Your Free Estimate</Button>
        </Col>
        <Col>
          <Row className='navbar-items'>
            <Col onClick={() => {navigate('/home')}} className={`navitems ${isCurrentPage('/home') || isCurrentPage('/') ? 'underline-text' : ''}`}>Home</Col>
            <Col onClick={() => {navigate('/about')}} className={`navitems ${isCurrentPage('/about') ? 'underline-text' : ''}`}>About</Col>
            <Col onClick={() => {navigate('/residential-roofing')}} className={`navitems ${isServicesDropdownActive() ? 'underline-text' : ''}`}>Services</Col>
            <Col onClick={() => {navigate('/projects')}} className={`navitems ${isCurrentPage('/projects') ? 'underline-text' : ''}`}>Projects</Col>
            <Col onClick={() => {navigate('/contact')}} className={`navitems ${isCurrentPage('/contact') ? 'underline-text' : ''}`}>Contact</Col>
          </Row>
          <Row style={{ margin: "0" }}>
            <Col>
              <h4 className='head-section'>Head Office</h4>
              <div className='footer-cols'>
                <div>Columbus,</div>
                <div>Ohio</div>
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
                <div><img className='contact-icons' src={PhoneIcon} alt='ultimates-solution-llc' />614-602-7980</div>
                <div style={{ display: "flex", marginTop: "1vh" }}>
                  <img className='contact-icons' style={{ marginTop: "5px" }} src={EmailIcon} alt='ultimates-solution-llc' />
                  <div>
                  roofs@ultimatesolutionsit.com<br />hrroofs@ultimatesolutionsit.com
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row style={{ margin: "0px" }} className='view2'>
        <Col>
          <Row className='navbar-items1'>
            <Col onClick={() => {navigate('/home')}} className={`navitems ${isCurrentPage('/home') || isCurrentPage('/') ? 'underline-text' : ''}`}>Home</Col>
            <Col onClick={() => {navigate('/about')}} className={`navitems ${isCurrentPage('/about') ? 'underline-text' : ''}`}>About</Col>
            <Col onClick={() => {navigate('/residential-roofing')}} className={`navitems ${isServicesDropdownActive() ? 'underline-text' : ''}`}>Services</Col>
            <Col onClick={() => {navigate('/projects')}} className={`navitems ${isCurrentPage('/projects') ? 'underline-text' : ''}`}>Projects</Col>
            <Col onClick={() => {navigate('/contact')}} className={`navitems ${isCurrentPage('/contact') ? 'underline-text' : ''}`}>Contact</Col>
          </Row>
          <h2 className='description1'>Connect with Us for a Roof Over Your Dreams!</h2>
          <Button className='estimate-btn1' onClick={() => { navigate('/contact') }}>Get Your Free Estimate</Button>
          <Row style={{ margin: "0" }}>
            <Col>
              <h4 className='head-section'>Head Office</h4>
              <div className='footer-cols'>
                <div>Columbus,</div>
                <div>Ohio</div>
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
                <div><img className='contact-icons' src={PhoneIcon} alt='ultimates-solution-llc' />614-602-7980</div>
                <div style={{ display: "flex", marginTop: "1vh" }}>
                  <img className='contact-icons' style={{ marginTop: "5px" }} src={EmailIcon} alt='ultimates-solution-llc' />
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