import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import PhoneIcon from '../../assets/PhoneIcon.png'
import EmailIcon from '../../assets/EmailIcon.png'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-section'>

      <Row className='view1'>
        <Col xs={3}>
          <h2 className='description'>Connect with Us for a Roof Over Your Dreams!</h2>
          <Button className='estimate-btn'>Get Your Free Estimate</Button>
        </Col>
        <Col>
          <Row className='navbar-items'>
            <Col className='navitems'>Home</Col>
            <Col>About</Col>
            <Col>Services</Col>
            <Col>Projects</Col>
            <Col>Contact</Col>
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
                <div><img className='contact-icons' src={PhoneIcon} />675-456-9786</div>
                <div style={{ display: "flex", marginTop: "1vh" }}>
                  <img className='contact-icons' style={{ marginTop: "5px" }} src={EmailIcon} />
                  <div>
                    Thossan247@gmail.com<br />Rockakash100@gmail.com
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row style={{margin: "0px"}} className='view2'>
        <Col>
          <Row className='navbar-items1'>
            <Col className='navitems'>Home</Col>
            <Col>About</Col>
            <Col>Services</Col>
            <Col>Projects</Col>
            <Col>Contact</Col>
          </Row>
          <h2 className='description1'>Connect with Us for a Roof Over Your Dreams!</h2>
          <Button className='estimate-btn1'>Get Your Free Estimate</Button>
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
                <div><img className='contact-icons' src={PhoneIcon} />675-456-9786</div>
                <div style={{ display: "flex", marginTop: "1vh" }}>
                  <img className='contact-icons' style={{ marginTop: "5px" }} src={EmailIcon} />
                  <div>
                    Thossan247@gmail.com<br />Rockakash100@gmail.com
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