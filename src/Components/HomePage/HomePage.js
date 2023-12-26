import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap';
import videoSource from '../../assets/Ultimate Roofing Video_N.mp4';
import HomeRoofing from '../../assets/HomeRoofing.jpg';
import CommercialRoofing from '../../assets/CommercialRoofing.jpg';
import SidingEnhancement from '../../assets/SidingEnhancements.jpg';
import GutterSystems from '../../assets/GutterSystems.jpg';
import WindowServices from '../../assets/WindowsServices.jpg';
import AboutHouse from '../../assets/AboutHouse.png';
import './HomePage.css';
import { FaArrowRight } from "react-icons/fa6";
import PlayStore from '../../assets/PlayStore.png'
import AppStore from '../../assets/AppStore.png'
import Mobile from '../../assets/Mobile.png'
import CardsComponent from './CardsComponent/CardsComponent';
import VideosComponent from './VideosComponent/VideosComponent';
import CommitmentComponent from './CommitmentComponent/CommitmentComponent';
import ValueCardsComponent from './ValueCardsComponent/ValueCardsComponent';
import ReviewsComponent from './ReviewsComponent/ReviewsComponent';
import LogosComponent from './LogosComponent/LogosComponent';

// Service data
const services = [
  { image: HomeRoofing, title: 'Home Roofing', description: 'Enhance your home\'s protection with expert residential roofing solutions, blending durability and aesthetic appeal seamlessly.' },
  { image: CommercialRoofing, title: 'Commercial Roofing', description: 'Elevate your business infrastructure with our top-tier commercial roofing services, combining reliability and performance for lasting excellence.' },
  { image: SidingEnhancement, title: 'Siding Enhancements', description: 'Transform your property\'s exterior with our premium siding options, offering a perfect fusion of style, durability, and low maintenance.' },
  { image: GutterSystems, title: 'Gutter Systems', description: 'Safeguard your home\'s foundation with our advanced gutter systems, efficiently directing water flow for optimal protection and longevity.' },
  { image: WindowServices, title: 'Window Services', description: 'Immerse your spaces in natural light and energy efficiency with our high-quality windows, designed for both beauty and functional brilliance.' },
];

function HomePage() {

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
          <Button className='estimate-btn'>Get Your Free Estimate</Button>
        </div>
      </div>

      {/**  services */}
      <div className='cards'>
        <Row style={{ margin: "0" }}>
          <Col>
            <div className='section'>
              <div>
                <h1 className='service-heading'>Our Services</h1>
                <p className='service-text'>From Home and Commercial Roofing to Siding, Gutters, and Windows, our services redefine precision and style. Elevate your property with our commitment to unparalleled craftsmanship.</p>
              </div>
            </div>
          </Col>
          {services.map((service, index) => (
            <Col style={{ paddingLeft: "0px", paddingRight: "0px" }} key={index}>
              <Card className='hover-effect'>
                <Card.Img className='card-img' src={service.image} variant="top" alt={service.title} />
                <Card.Body>
                  <h2 className='card-title'>{service.title}</h2>
                  <Row>
                    <Col className='card-text'>
                      {service.description}
                    </Col>
                    <Col xs={2} className='icon-disable'><div className='icon-circle'><FaArrowRight className='card-icon' /></div></Col>
                  </Row>
                  <p className='learnmore-btn'>Learn More</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

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