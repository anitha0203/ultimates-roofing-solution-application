import React, { useEffect, useState } from 'react'
import { Button, Col, Row, Toast } from 'react-bootstrap';
import videoSource from '../../assets/Ultimate Roofing Video_N.mp4';
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

function HomePage() {

  const navigate = useNavigate();
  const [toast, setToast] = useState(false);
  const [toast1, setToast1] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setToast(!toast);
    }, 10000);

    return () => clearInterval(interval);
  }, [toast]);


  const handleToastClose = () => {
    setToast1(false);
  };

  return (
    <div>
      {toast1 && toast && (
        <Toast style={{ position: 'fixed', top: '10%', right: 0, zIndex: '1000' }} onClose={handleToastClose}>
          <Toast.Header style={{ cursor: "pointer", padding: "1rem 1rem", fontSize: "large" }}>
            <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
            <strong className="me-auto" onClick={()  => navigate('/contact')}>Need consultant's advise?</strong>
          </Toast.Header>
          
        <Toast.Body >
          Request for a call back,
          Leave a message to us
        </Toast.Body>
    
        </Toast>
      )}

      <div className="background-video-container">
        <video autoPlay muted playsInline loop className="background-video">
          <source src={videoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="content-overlay">
          <h1 className='main-heading'>Elevate Every Horizon, Transforming Views with Our Roofing Expertise</h1>
          <p className='main-text'>A symphony of strength resonating through every project</p>
          <Button className='estimate-btn' onClick={() => { navigate('/contact') }}>Get Your Free Estimate</Button>
        </div>
      </div>

      {/**  our services */}
      <ServiceCardsComponent />

      {/*   About us  */}
      <div className='about-section'>
        <Row style={{ margin: "0px" }} className='row-about'>
          <Col className='about-col'>
            <div className='about-div'>
              <h2 className='about-heading'>Welcome to Ultimates Roofing, Where Excellence Meets Innovation</h2>
              <p className='about-text'>Ultimates Roofing LLC presents a comprehensive array of services, encompassing new roof installations, meticulous roof maintenance, expert roof repairs, and cutting-edge re-roofing solutions for Residential and Commercial ventures. Our expertise extends to homes, offices, warehouses, and multi-family dwellings. Over the years, clients have recognized and valued the adept and professional service synonymous with us.</p>
              <Button className='estimate-btn'>More About Us</Button>
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

    </div>
  )
}

export default HomePage