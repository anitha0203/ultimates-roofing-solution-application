import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import './ProjectsPage.css'

import video5 from '../../assets/HomePageImages/video4.mp4'
import Roofing1 from '../../assets/ProjectPageImages/Roofing1.png'
import Roofing2 from '../../assets/ProjectPageImages/Roofing2.png'
import Roofing3 from '../../assets/ProjectPageImages/Roofing3.png'
import Commercial1 from '../../assets/ProjectPageImages/Commercial1.png'
import Commercial2 from '../../assets/ProjectPageImages/Commercial2.png'
import Commercial3 from '../../assets/ProjectPageImages/Commercial3.png'
import Siding1 from '../../assets/ProjectPageImages/Siding1.png'
import Siding2 from '../../assets/ProjectPageImages/Siding2.png'
import Siding3 from '../../assets/ProjectPageImages/Siding3.png'
import Gutters1 from '../../assets/ProjectPageImages/Gutters1.png'
import Gutters2 from '../../assets/ProjectPageImages/Gutters2.png'
import Gutters3 from '../../assets/ProjectPageImages/Gutters2.png'
import Windows1 from '../../assets/ProjectPageImages/Windows1.png'
import Windows2 from '../../assets/ProjectPageImages/Windows2.png'
import Windows3 from '../../assets/ProjectPageImages/Windows3.png'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import LogosComponent from '../HomePage/LogosComponent/LogosComponent';
import PlayButton from '../../assets/HomePageImages/PlayButton.png'
import { FaTimes } from "react-icons/fa";
import { Helmet } from 'react-helmet'

const ResidentialRoofingImages = [Roofing1, Roofing2, Roofing3]
const CommercialRoofingImages = [Commercial1, Commercial2, Commercial3]
const SidingEnhancementImages = [Siding1, Siding2, Siding3]
const GuttersImages = [Gutters1, Gutters2, Gutters3]
const WindowsImages = [Windows1, Windows2, Windows3]

function ProjectsPage() {

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (

    <div>
      <Helmet>
        <title>Ultimates Roofing LLC - Projects</title>
        <link rel="canonical" href="https://www.ultimatesroofing.com/projects" />
        <meta name='description' content='Explore the impressive projects completed by Ultimates Roofing LLC. From residential roofing to commercial renovations, discover our commitment to excellence and quality craftsmanship.' />
        <meta name='keywords' content='Ultimates Roofing LLC, projects, residential roofing, commercial renovations, construction, home improvement' />
        <meta name='author' content='Ultimates Roofing LLC' />
        <meta name='robots' content='index, follow' />
        <html lang="en" />
      </Helmet>

      <div className='projects-main'>
        <p className='projects-us'><span style={{ color: "#B22335", fontWeight: "bold" }}>I</span> Projects</p>
        <p className='projects-page-text'>Our portfolio reflects a decade of industry experience, featuring projects ranging from roof installation and replacement to repairs, siding enhancements, gutter installations, and window services. Each project is a testament to our craftsmanship and the enduring impact we aim to create on every rooftop.</p>
        <p className='projects-page-text'>Embark on a visual journey, witnessing the artistry and attention to detail that define our work. These projects showcase not only our skill but also the lasting impression we leave with each roofing endeavor.</p>
      </div>

      {/**    Row 1 */}
      <Row className='projects-main1'>
        <Col className='project-col'>
          <Card className='project-card'>
            <video autoPlay muted playsInline loop>
              <source src={video5} type="video/mp4" />
            </video>
            <div className='play-icon1' onClick={() => openModal()}>
              <img className='play-icon-img1' src={PlayButton} alt='ultimates-roofing-llc' />
            </div>
            <Card.Body>
              <p className='project-para'>New York, NY - Jan 25, 2023</p>
              <h2 className='project-heading'>Roof renovation in NewYork, NY</h2>
              <p className='projects-page-text'>Cursus tincidunt tempor aliquam mattis et mi fames at id venenatis massa mi fames at id venenatis massa.</p>
            </Card.Body>
          </Card>
        </Col>
        <Col className='project-col'>
          <Card className='project-card'>
            <Slider {...settings} >
              {ResidentialRoofingImages.map((imageUrl, index) => (
                <img key={index} src={imageUrl} alt='ultimates-solution-llc' />
              ))}
            </Slider>
            <Card.Body>
              <p className='project-para'>Columbus, Ohio - Aug 25, 2023</p>
              <h2 className='project-heading'>Gutters Installation in Columbus, Ohio</h2>
              <p className='projects-page-text'>Cursus tincidunt tempor aliquam mattis et mi fames at id venenatis massa mi fames at id venenatis massa.</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/**    Row 2 */}
      <Row className='projects-main1'>
        <Col className='project-col'>
          <Card className='project-card'>
            <Slider {...settings} >
              {CommercialRoofingImages.map((imageUrl, index) => (
                <img key={index} src={imageUrl} alt='ultimates-solution-llc' />
              ))}
            </Slider>
            <Card.Body>
              <p className='project-para'>New York, NY - Jan 25, 2023</p>
              <h2 className='project-heading'>Roof renovation in NewYork, NY</h2>
              <p className='projects-page-text'>Cursus tincidunt tempor aliquam mattis et mi fames at id venenatis massa mi fames at id venenatis massa.</p>
            </Card.Body>
          </Card>
        </Col>
        <Col className='project-col'>
          <Card className='project-card'>
            <Slider {...settings} >
              {SidingEnhancementImages.map((imageUrl, index) => (
                <img key={index} src={imageUrl} alt='ultimates-solution-llc' />
              ))}
            </Slider>
            <Card.Body>
              <p className='project-para'>Columbus, Ohio - Aug 25, 2023</p>
              <h2 className='project-heading'>Gutters Installation in Columbus, Ohio</h2>
              <p className='projects-page-text'>Cursus tincidunt tempor aliquam mattis et mi fames at id venenatis massa mi fames at id venenatis massa.</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/**    Row 3 */}
      <Row className='projects-main1'>
        <Col className='project-col'>
          <Card className='project-card'>
            <Slider {...settings} >
              {WindowsImages.map((imageUrl, index) => (
                <img key={index} src={imageUrl} alt='ultimates-solution-llc' />
              ))}
            </Slider>
            <Card.Body>
              <p className='project-para'>New York, NY - Jan 25, 2023</p>
              <h2 className='project-heading'>Roof renovation in NewYork, NY</h2>
              <p className='projects-page-text'>Cursus tincidunt tempor aliquam mattis et mi fames at id venenatis massa mi fames at id venenatis massa.</p>
            </Card.Body>
          </Card>
        </Col>
        <Col className='project-col'>
          <Card className='project-card'>
            <Slider {...settings} >
              {GuttersImages.map((imageUrl, index) => (
                <img key={index} src={imageUrl} alt='ultimates-solution-llc' />
              ))}
            </Slider>
            <Card.Body>
              <p className='project-para'>Columbus, Ohio - Aug 25, 2023</p>
              <h2 className='project-heading'>Gutters Installation in Columbus, Ohio</h2>
              <p className='projects-page-text'>Cursus tincidunt tempor aliquam mattis et mi fames at id venenatis massa mi fames at id venenatis massa.</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <LogosComponent />

      {showModal && (
        <div className="video-modal">
          <div className="video-modal-content">
            <video autoPlay controls className="videos-modal-slide">
              <source src={video5} type="video/mp4" />
            </video>
            <div className="close-icon" onClick={closeModal}>
              <FaTimes />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProjectsPage