import React, { useEffect } from 'react'
import AboutMainImage from '../../assets/AboutMainImage.png'
import AboutPageImage from '../../assets/AboutPageImage.png'
import './AboutPage.css'
import CardsComponent from '../HomePage/CardsComponent/CardsComponent'
import { Accordion, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import LogosComponent from '../HomePage/LogosComponent/LogosComponent'

const reviews = [
  { question: 'What roofing services does Ultimates Roofing provide?', answer: 'Ultimates Roofing transformed our house with top-notch materials and efficient service. The cleanup was impeccable, making the entire process hassle-free.' },
  { question: 'How experienced is Ultimates Roofing in the industry?', answer: 'Absolutely incredible quality! Ultimates Roofing\'s utilization of top-tier materials, combined with their remarkably swift installation, surpassed all my expectations. My home has undergone a stunning transformation and has never looked better!' },
  { question: 'What sets Ultimates Roofing apart from other roofing companies?', answer: 'Exceptional service! From start to finish, Ultimates Roofing prioritized professionalism. Cleanup was thorough, leaving my property in superior condition.' },
  { question: 'How can I request an estimate for my roofing project?', answer: 'Ultimates Roofing transformed our house with top-notch materials and efficient service. The cleanup was impeccable, making the entire process hassle-free.' },
  { question: 'Can Ultimates Roofing handle emergency repairs?', answer: 'Absolutely incredible quality! Ultimates Roofing\'s utilization of top-tier materials, combined with their remarkably swift installation, surpassed all my expectations. My home has undergone a stunning transformation and has never looked better!' },
  { question: 'What types of roofing materials does Ultimates Roofing use?', answer: 'Absolutely incredible quality! Ultimates Roofing\'s utilization of top-tier materials, combined with their remarkably swift installation, surpassed all my expectations. My home has undergone a stunning transformation and has never looked better!' },
  { question: 'Does Ultimates Roofing provide warranties for its services?', answer: 'Absolutely incredible quality! Ultimates Roofing\'s utilization of top-tier materials, combined with their remarkably swift installation, surpassed all my expectations. My home has undergone a stunning transformation and has never looked better!' }
]

function AboutPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ marginTop: "150px" }}>
      <div className='about-main'>
        <p className='about-us'><span style={{ color: "#B22335", fontWeight: "bold" }}>I</span> About Us</p>
        <h2 className='about-page-heading'>Ultimates Roofing LLC</h2>
        <p className='about-page-text'>At Ultimates Roofing LLC, we believe that every home and business deserves the highest quality roofing solutions. Established [Year], we have proudly served [Location] and surrounding areas, earning a reputation for excellence in the Roofing and Siding industry.</p>
        <p className='about-page-text'>From comprehensive roof installation and replacement services to meticulous long-term repairs, Ultimates Roofing is your all-encompassing solution. With nearly a decade of dedicated expertise in the industry, our seasoned roofing contractor ensures that your project is not just a task but a commitment to excellence, providing you with the utmost peace of mind throughout the process.</p>
        <img src={AboutMainImage} className='about-main-image' alt='ultimates-roofing-llc' />
      </div>

      {/**  Cards */}
      <CardsComponent />

      <div className='about-main'>
        <Row className='about-experience-text'>
          <Col>
            <img className='work-image' src={AboutPageImage} alt='ultimates-roofing-llc' />
          </Col>
          <Col className='work-text'>
            <p className='about-page-text'>As the driving force behind Ultimates Roofing LLC, our company brings a wealth of passion and expertise to the roofing industry. With a background rooted in a genuine love for craftsmanship and a commitment to elevating properties, our journey began nearly a decade ago.</p>
            <p className='about-page-text'>Driven by a vision to redefine roofing solutions, our team has tirelessly led the company towards excellence. Ultimates Roofing is not just a business; it's a manifestation of our dedication to delivering top-tier services that go beyond industry standards.</p>
            <p className='about-page-text'>Under our leadership, Ultimates Roofing has become synonymous with quality, innovation, and customer satisfaction. Our commitment to integrity, community, and the highest standards of craftsmanship reflects our unwavering belief that every roofing project is an opportunity to make a lasting impact.</p>
            <Row className='work-details'>
              <Col>
                <div className='number-details'>15+</div>
                <div className='work-experience'>Years of Experience</div>
              </Col>
              <Col>
                <div className='number-details'>10</div>
                <div className='work-experience'>Years of Warranty</div>
              </Col>
              <Col>
                <div className='number-details'>100%</div>
                <div className='work-experience'>Quality Products</div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>

      <div className='about-main'>
        <Row className='about-experience-text'>
          <Col>
            <h2 className='about-page-heading1'>Quick Answers to Questions you may have </h2>
            <p className='about-page-text'>Couldn’t find what you are looking for? <span style={{ color: "#B22335", cursor: "pointer" }} onClick={() => { navigate('/contact') }}>Contact Us</span></p>
          </Col>
          <Col className='work-text1'>
            <Accordion defaultActiveKey="0">
              {reviews.map((review, index) => (
                <Accordion.Item key={index} eventKey={index.toString()}>
                  <Accordion.Header>{review.question}</Accordion.Header>
                  <Accordion.Body>
                    <p className="answer">{review.answer}</p>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>
      </div>
      <LogosComponent />
    </div>
  )
}

export default AboutPage