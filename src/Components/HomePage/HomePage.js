import React, { useEffect, useState } from 'react'
import { Button, Col, Row, Toast, Form, Spinner, Modal } from 'react-bootstrap';
import videoSource from '../../assets/Ultimate Roofing Video_Dec28.mp4';
import AboutHouse from '../../assets/AboutHouse.png';
import './HomePage.css';
import PlayStore from '../../assets/PlayStore.png'
import AppStore from '../../assets/AppStore.png'
import Mobile from '../../assets/Mobile.png'
import ServiceCardsComponent from './ServiceCardsComponent/ServiceCardsComponent';
import CardsComponent from './CardsComponent/CardsComponent';
import CommitmentComponent from './CommitmentComponent/CommitmentComponent';
import ValueCardsComponent from './ValueCardsComponent/ValueCardsComponent';
import VideosComponent from './VideosComponent/VideosComponent';
import ReviewsComponent from './ReviewsComponent/ReviewsComponent';
import LogosComponent from './LogosComponent/LogosComponent';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function HomePage() {

  const navigate = useNavigate();
  const [sucessToast, setSuccessToast] = useState(false)
  const [toast, setToast] = useState(false);
  const [toast1, setToast1] = useState(true);
  const [showModel, setShowModal] = useState(false);

  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    source: 'request', // default source for form1
    message: '', // additional field for form2
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setErrorMessage('');

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (formData.firstName === '' || formData.lastName === '' || formData.phoneNumber === '') {
      setErrorMessage("Please fill all required fields");
    } else if (formData.phoneNumber.length !== 10) {
      setErrorMessage("PhoneNumber is not valid");
    } else {
      setErrorMessage('');
      setLoading(true);
      axios.post('', formData).then(res => {
        // Reset the form after successful submission
        setFormData({
          firstName: '',
          lastName: '',
          phoneNumber: '',
          source: 'request', // Reset source to default
          message: '',
        });


        
        navigate("/success-page");
        setSuccessToast(true)
        // Close the success toast after 15 seconds
        setTimeout(() => {
          setSuccessToast(false);
        }, 10000);



      })
        .catch((error) => {


          // navigate("/success-page");

          setFormData({
            firstName: '',
            lastName: '',
            phoneNumber: '',
            source: 'request', // Reset source to default
            message: '',
          });
          setShowModal(false)
          setSuccessToast(true)
          // Close the success toast after 15 seconds
          setTimeout(() => {
            setSuccessToast(false);
          }, 10000);




          if (error.response) {
            setErrorMessage(error.response.data.message);
          } else {
            setErrorMessage("An unexpected error occurred. Please try again.");
            console.error("An error occurred:", error.message);
          }
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setToast(!toast);
    }, 10000);

    return () => clearInterval(interval);
  }, [toast]);

  const handleToastClose = () => {
    setToast1(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShow = (source) => {
    setShowModal(true);
    setFormData((prevFormData) => ({
      ...prevFormData,
      source: source,
    }));
  };

  return (
    <div>
      <div className="background-video-container">
        <video autoPlay muted playsInline loop className="background-video">
          <source src={videoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="content-overlay">
          <h1 className='main-heading'>Elevate Every Horizon, Transforming Views with Our Roofing Expertise</h1>
          <p className='main-text'>A symphony of strength resonating through every project</p>
          <div className='toast-pos'>
            <Button className='estimate-btn' onClick={() => { navigate('/contact') }}>Get Your Free Estimate</Button>
            {toast1 && toast && (
              <Toast style={{ borderRadius: "0px" }} onClose={handleToastClose}>
                <Toast.Header style={{ fontSize: "14px" }}>
                  <strong className="me-auto" >Need consultant's advise?</strong>
                </Toast.Header>
                <Toast.Body style={{ color: "#000", fontSize: "13px" }}>
                  <span style={{ cursor: "pointer" }} onClick={() => handleShow('request')}>Request for a call back,</span>
                  <span style={{ cursor: "pointer" }} onClick={() => handleShow('message')}> Leave a message to us</span>
                </Toast.Body>
              </Toast>
            )}
          </div>
        </div>
      </div>

      {sucessToast ? (
        <Toast style={{ position: 'fixed', top: "10%", right: 0, color: "#fff" }} bg='success'>
          <Toast.Header>
            <strong className="me-auto">THANK YOU</strong>
          </Toast.Header>
          <Toast.Body>Your message has been submitted successfully.</Toast.Body>
        </Toast>
      ) : null
      }

      {/**  our services */}
      <ServiceCardsComponent />

      {/*   About us  */}
      <div className='about-section'>
        <Row style={{ margin: "0px" }} className='row-about'>
          <Col className='about-col'>
            <div className='about-div'>
              <h2 className='about-heading'>Welcome to Ultimates Roofing, Where Excellence Meets Innovation</h2>
              <p className='about-text'>Ultimates Roofing LLC presents a comprehensive array of services, encompassing new roof installations, meticulous roof maintenance, expert roof repairs, and cutting-edge re-roofing solutions for Residential and Commercial ventures. Our expertise extends to homes, offices, warehouses, and multi-family dwellings. Over the years, clients have recognized and valued the adept and professional service synonymous with us.</p>
              <Button onClick={() => { navigate('/about') }} className='estimate-btn'>More About Us</Button>
            </div>
          </Col>
          <Col><img className='about-img' src={AboutHouse} alt='ultimates-roofing-llc' /></Col>
        </Row>
      </div>

      {/**  Mission, Value and Vision Cards */}
      <CardsComponent />

      {/**  Commitment */}
      <CommitmentComponent />

      {/**    values */}
      <ValueCardsComponent />

      {/**    videos */}
      <VideosComponent />

      {/**    logo slider */}
      <LogosComponent />

      {/**    Reviews  */}
      <ReviewsComponent />

      {/**  download app */}
      <Row className='app-section'>
        <Col>
          <h1 className='app-heading'>Download Our Mobile App</h1>
          <p className='app-text'>Experience convenience at your fingertips! Download the Ultimates Roofing mobile app now to stay connected, track your project, and access exclusive offers. Your home upgrade journey just got even easier.</p>
          <h5 className='store-heading'>Available on:</h5>
          <div className='apps-store'>
            <div className='app-icons'>
              <img style={{ marginLeft: "1vh" }} src={PlayStore} alt='ultimates-roofing-llc' />
              <p className='store-text'>PlayStore</p>
            </div>
            <div className='app-icons'>
              <img style={{ marginLeft: "1vh" }} src={AppStore} alt='ultimates-roofing-llc' />
              <p className='store-text' >AppStore</p>
            </div>
            <img className='mobile-img-view' src={Mobile} alt='ultimates-roofing-llc' />
          </div>
        </Col>
        <Col xs={2}></Col>
        <Col xs={2}>
          <img className='mobile-img' src={Mobile} alt='ultimates-roofing-llc' />
        </Col>
      </Row>

      {/** Modal Component */}
      <Modal show={showModel} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {formData.source === 'request' ? (
              'Request for a call back'
            ) : (
              'Leave a message to us'
            )}
          </Modal.Title>

        </Modal.Header>
        <Form className='model-form'>
          <Row className='names-roww'>
            <Col>
              <Form.Group>
                <Form.Label className="label">
                  <span style={{ color: 'red' }}>*</span> First Name
                </Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  isInvalid={errorMessage}
                  className="input"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label className="label">
                  <span style={{ color: 'red' }}>*</span> Last Name
                </Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  isInvalid={errorMessage}
                  className="input"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className='names-roww'>
            <Col>
              <Form.Group>
                <Form.Label className="label">
                  <span style={{ color: 'red' }}>*</span> Phone Number
                </Form.Label>
                <Form.Control
                  type="number"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  isInvalid={errorMessage}
                  className="input"
                />
              </Form.Group>
            </Col>
          </Row>
          {formData.source === 'message' && (
            <Row className='names-roww'>
              <Form.Group>
                <Form.Label className="label">
                  Message
                </Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder='Please enter your message'
                  className="input"
                  style={{ height: "8vh" }}
                />
              </Form.Group>
            </Row>
          )}
          <div className="errormessage">
            {errorMessage !== '' ? (
              <div>
                <p style={{ margin: "0px" }}>{errorMessage}</p>
              </div>
            ) : null}
          </div>
          <div style={{ textAlign: "center" }}>
            <Button onClick={handleSubmit} type="submit" style={{ marginTop: "2rem", padding: "1rem 5rem" }} className='estimate-btn'>
              Submit
            </Button>
          </div>
        </Form>
      </Modal>

      {loading ? (
        <div className="loading-overlay">
          <div className="loading-indicator">
            <Spinner animation="border" variant="primary" />
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default HomePage