import React, { useState, useEffect } from 'react'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import './ReviewsComponent.css';
import { Accordion, Card, Col, Row } from 'react-bootstrap';
import Quote from '../../../assets/Quote.png'

//  Reviews Data

const reviews = [
  { name: 'John T', place: 'Denver, Colorado', description: 'Ultimates Roofing transformed our house with top-notch materials and efficient service. The cleanup was impeccable, making the entire process hassle-free.' },
  { name: 'Sarah L', place: 'Austin, Texas', description: 'Absolutely incredible quality! Ultimates Roofing\'s utilization of top-tier materials, combined with their remarkably swift installation, surpassed all my expectations. My home has undergone a stunning transformation and has never looked better!' },
  { name: 'Robert H', place: 'Orlando, Florida', description: 'Exceptional service! From start to finish, Ultimates Roofing prioritized professionalism. Cleanup was thorough, leaving my property in superior condition.' },
  { name: 'John T', place: 'Denver, Colorado', description: 'Ultimates Roofing transformed our house with top-notch materials and efficient service. The cleanup was impeccable, making the entire process hassle-free.' },
  { name: 'Sarah L', place: 'Austin, Texas', description: 'Absolutely incredible quality! Ultimates Roofing\'s utilization of top-tier materials, combined with their remarkably swift installation, surpassed all my expectations. My home has undergone a stunning transformation and has never looked better!' }
]

function ReviewsComponent() {

  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(1);

  useEffect(() => {
    const box = document.querySelector('.reviews-carousel');
    const handleScroll = () => {
      const maxScrollLeft = box.scrollWidth - box.clientWidth;
      setIsPrevDisabled(box.scrollLeft <= 0);
      setIsNextDisabled(box.scrollLeft >= maxScrollLeft);
    };
    box.addEventListener('scroll', handleScroll);
    // Run this effect once on mount
    handleScroll();
    // Cleanup event listener on component unmount
    return () => {
      box.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const calculateScrollDistance = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth > 1800) {
      return 500;
    } else if (screenWidth >= 1000) {
      return 540;
    }
  };
  const btnpressprev = () => {
    let box = document.querySelector('.reviews-carousel');
    let width = calculateScrollDistance();
    box.scrollLeft -= width;
    setCurrentVideoIndex((prevIndex) => {
      const newIndex = Math.max(0, prevIndex - 1);
      return newIndex <= 0 ? 1 : newIndex;
    });
  };

  const btnpressnext = () => {
    let box = document.querySelector('.reviews-carousel');
    let width = calculateScrollDistance();
    box.scrollLeft += width;
    setCurrentVideoIndex((prevIndex) => {
      const newIndex = Math.min(reviews.length - 1, prevIndex + 1);
      return newIndex <= 0 ? 1 : newIndex;
    });
  };

  const progress = reviews.length > 1 ? (currentVideoIndex / (reviews.length - 1)) * 100 : 0;

  return (
    <div className='reviews-section'>
      <h1 className='reviews-heading'>Reviews</h1>

      {/**    Web View */}
      <Row className='reviews-web-view'>
        <Col md={4} className='reviews-text'>
          <div>
            <h2 className='reviews-client'>Hear it from Our Clients</h2>
            <p className='reviews-para'>Discover why homeowners love Ultimates Roofing! Read brief testimonials highlighting our excellence in processes, materials, and meticulous cleanups.</p>
            <div className='reviews-arrows'>
              <div className={`reviews-arrow ${isPrevDisabled ? 'disabled-icon1' : ''}`} onClick={btnpressprev}><FaAngleLeft /></div>
              <div className={`reviews-arrow ${isNextDisabled ? 'disabled-icon1' : ''}`} onClick={btnpressnext}><FaAngleRight /></div>
            </div>
          </div>
        </Col>
        <Col className='reviews-carousel'>
          <div className='carousel-reviews'>
            {reviews.map((review, index) => (
              <div key={index} className='review-section'>
                <Card className='review-cards'>
                  <div className='reviewcard-heading'>
                    <h2 className='review-client'>{review.name}</h2>
                    <div className='review-place'>{review.place}</div>
                  </div>
                  <hr style={{ color: "#F9F9F9" }} />
                  <div className='reviewcard-description'>
                    <img className='quote' src={Quote} alt='reviews-quote' />
                    <p className='reviews-para'>{review.description}</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
          <div className='reviews-progress-bar'>
            <div style={{ width: `${progress}%`, height: '3px', backgroundColor: 'black' }}></div>
          </div>
        </Col>
      </Row>

      {/**    Mobile View */}
      <div className="reviews-mobile-view">
        <h2 className='reviews-client'>Hear it from Our Clients</h2>
        <p className='reviews-para-mobile'>Discover why homeowners love Ultimates Roofing! Read brief testimonials highlighting our excellence in processes, materials, and meticulous cleanups.</p>

        <Accordion defaultActiveKey="0">
          {reviews.map((review, index) => (
            <Accordion.Item key={index} eventKey={index.toString()}>
              <Accordion.Header>{review.name}</Accordion.Header>
              <Accordion.Body>
                <p className="reviews-para-mobile">{review.description}</p>
                <div>- {review.place}</div>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </div>
  )
}

export default ReviewsComponent

