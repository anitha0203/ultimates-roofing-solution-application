import React, { useEffect, useState } from 'react'
import { Button, Col, Row, Toast, Form, Spinner, Modal } from 'react-bootstrap';
import videoSource from '../../assets/HomePageImages/Ultimate Roofing Video_Dec28.mp4';
import AboutHouse from '../../assets/HomePageImages/AboutHouse.png';
import './HomePage.css';
import PlayStore from '../../assets/HomePageImages/PlayStore.png'
import AppStore from '../../assets/HomePageImages/AppStore.png'
import Mobile from '../../assets/HomePageImages/Mobile.png'
import ServiceCardsComponent from './ServiceCardsComponent/ServiceCardsComponent';
import CardsComponent from './CardsComponent/CardsComponent';
import CommitmentComponent from './CommitmentComponent/CommitmentComponent';
import ValueCardsComponent from './ValueCardsComponent/ValueCardsComponent';
import VideosComponent from './VideosComponent/VideosComponent';
import LogosComponent from './LogosComponent/LogosComponent';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import InstantRoofQuote from '../MainHeader/InstantRoofQuote';

function HomePage() {

  const url = 'http://localhost:8080/v1/ultimates/customer/register';
  const navigate = useNavigate();
  const [successToast, setSuccessToast] = useState(false)
  const [successToast1, setSuccessToast1] = useState(false)
  const [toast, setToast] = useState(false);
  const [toast1, setToast1] = useState(true);
  const [showModel, setShowModal] = useState(false);
  const [showModel1, setShowModal1] = useState(false);

  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [messageData, setMessageData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    source: 'modal',
    message: '',
  });


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange1 = (e) => {
    const { name, value } = e.target;
    setErrorMessage('');

    setMessageData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit1 = (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (messageData.firstName === '' || messageData.lastName === '' || messageData.phoneNumber === '') {
      setErrorMessage("Please fill all required fields");
    } else if (messageData.phoneNumber.length !== 10) {
      setErrorMessage("PhoneNumber is not valid");
    } else {
      setErrorMessage('');
      setLoading(true);
      SubmitData(messageData);
    }
  };

  const SubmitData = (ModalData) => {
    const formData = new FormData();
    formData.append('customerJson', JSON.stringify(ModalData));
    axios.post(url, formData)
      .then(res => {
          // Reset the form after successful submission
          setMessageData({
            firstName: '',
            lastName: '',
            phoneNumber: '',
            source: 'modal', // Reset source to default
            message: '',
          });
          setSuccessToast1(true)
          setShowModal1(false)
          // Close the success toast after 15 seconds
          setTimeout(() => {
            setSuccessToast1(false);
          }, 15000);
      })
      .catch((error) => {
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

  useEffect(() => {
    const interval = setInterval(() => {
      setToast(true);
    }, 10000);

    return () => clearInterval(interval);
  }, [toast]);

  const handleToastClose = () => {
    setToast1(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleCloseModal1 = () => {
    setShowModal1(false);
  };

  return (
    <div>
      <Helmet>
        <title>Ultimations Solution LLC - Home</title>
        <link rel="canonical" href="https://visheshcountrycache.tech/home" />
        <meta name='description' content='Welcome to Ultimations Solution LLC - Your trusted partner for residential roofing, commercial roofing, siding, windows, and gutters. Providing top-notch services with a commitment to excellence.' />
        <meta name='keywords' content='Ultimations Solution LLC, residential roofing, commercial roofing, siding, windows, gutters, construction, home improvement' />
        <meta name='author' content='Ultimations Solution LLC' />
        <meta name='robots' content='index, follow' />
        <html lang="en" />
      </Helmet>

      <div className="background-video-container">
        <video autoPlay muted playsInline loop className="background-video">
          <source src={videoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="content-overlay">
          <h1 className='main-heading'>Elevate Every Horizon, Transforming Views with Our Roofing Expertise</h1>
          <p className='main-text'>A symphony of strength resonating through every project</p>
          <div className='toast-div'>
            <Button className='estimate-btn' onClick={() => { navigate('/contact') }}>Get Your Free Estimate</Button>
            {toast1 && toast && (
              <Toast style={{ borderRadius: "0px", position: "fixed", right: "0", zIndex: "1000 !important" }} onClose={handleToastClose}>
                <Toast.Header style={{ fontSize: "14px" }}>
                  <strong className="me-auto" >Need consultant's advise?</strong>
                </Toast.Header>
                <Toast.Body style={{ color: "#000", fontSize: "13px", display: "flex", justifyContent: "space-between" }}>
                  <div style={{ cursor: "pointer" }} onClick={() => setShowModal(true)}>Request for a call back</div>
                  <div style={{ cursor: "pointer" }} onClick={() => setShowModal1(true)}> Leave a message for us</div>
                </Toast.Body>
              </Toast>
            )}
          </div>
        </div>
      </div>

      {successToast ? (
        <Toast style={{ position: 'fixed', top: "9%", right: 0, color: "#fff" }} bg='success'>
          <Toast.Header>
            <strong className="me-auto">THANK YOU</strong>
          </Toast.Header>
          <Toast.Body>We will call you back shortly.</Toast.Body>
        </Toast>
      ) : null}

      {successToast1 ? (
        <Toast style={{ position: 'fixed', top: "9%", right: 0, color: "#fff" }} bg='success'>
          <Toast.Header>
            <strong className="me-auto">THANK YOU</strong>
          </Toast.Header>
          <Toast.Body>We will get back to you as soon as possible.</Toast.Body>
        </Toast>
      ) : null}


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
          <Modal.Title>Request for a call back</Modal.Title>
        </Modal.Header>
        <InstantRoofQuote />
      </Modal>


      {/** Modal Component1 */}
      <Modal show={showModel1} onHide={handleCloseModal1}>
        <Modal.Header closeButton>
          <Modal.Title>Leave a message to us</Modal.Title>
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
                  value={messageData.firstName}
                  onChange={handleInputChange1}
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
                  value={messageData.lastName}
                  onChange={handleInputChange1}
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
                  value={messageData.phoneNumber}
                  onChange={handleInputChange1}
                  isInvalid={errorMessage}
                  className="input"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className='names-roww'>
            <Form.Group>
              <Form.Label className="label">
                Message
              </Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                value={messageData.message}
                onChange={handleInputChange1}
                placeholder='Please enter your message'
                className="input"
                style={{ height: "8vh" }}
              />
            </Form.Group>
          </Row>
          <div className="errormessage">
            {errorMessage !== '' ? (
              <div>
                <p style={{ margin: "0px" }}>{errorMessage}</p>
              </div>
            ) : null}
          </div>
          <div style={{ textAlign: "center" }}>
            <Button onClick={handleSubmit1} type="submit" style={{ marginTop: "2rem", padding: "1rem 5rem" }} className='estimate-btn'>
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