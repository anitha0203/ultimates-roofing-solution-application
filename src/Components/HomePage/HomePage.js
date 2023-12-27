import React, { useEffect } from 'react'
import { Button, Col, Row } from 'react-bootstrap';
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          <Button className='estimate-btn' onClick={() => { navigate('/contact') }}>Get Your Free Estimate</Button>
        </div>
      </div>

      {/**  services */}
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
          <Col><img className='about-img' src={AboutHouse} /></Col>
        </Row>
      </div>

      {/**  3 Cards */}
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
              <img style={{ marginLeft: "1vh" }} src={PlayStore} />
              <p className='store-text'>PlayStore</p>
            </div>
            <div className='app-icons'>
              <img style={{ marginLeft: "1vh" }} src={AppStore} />
              <p className='store-text' >AppStore</p>
            </div>
            <img className='mobile-img-view' src={Mobile} />
          </div>
        </Col>
        <Col xs={2}></Col>
        <Col xs={2}>
          <img className='mobile-img' src={Mobile} />
        </Col>
      </Row>

    </div>
  )
}

export default HomePage