import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import './ProjectsPage.css'
import video5 from '../../assets/HomePageImages/video4.mp4'
import ProjectImage1 from '../../assets/ProjectPageImages/ProjectImage1.png'
import ProjectImage2 from '../../assets/ProjectPageImages/ProjectImage2.png'
import ProjectImage3 from '../../assets/ProjectPageImages/ProjectImage3.png'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import LogosComponent from '../HomePage/LogosComponent/LogosComponent';
import PlayButton from '../../assets/HomePageImages/PlayButton.png'
import { FaTimes } from "react-icons/fa";
import VideoImage from '../../assets/ProjectPageImages/VideoImage.png'

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
      <div className='projects-main'>
        <p className='projects-us'><span style={{ color: "#B22335", fontWeight: "bold" }}>I</span> Projects</p>
        <p className='projects-page-text'>Our portfolio reflects a decade of industry experience, featuring projects ranging from roof installation and replacement to repairs, siding enhancements, gutter installations, and window services. Each project is a testament to our craftsmanship and the enduring impact we aim to create on every rooftop.</p>
        <p className='projects-page-text'>Embark on a visual journey, witnessing the artistry and attention to detail that define our work. These projects showcase not only our skill but also the lasting impression we leave with each roofing endeavor.</p>
      </div>

      {/**    Row 1 */}
      <Row className='projects-main1'>
        <Col className='project-col'>
          <Card className='project-card'>
            <img src={VideoImage} alt='ultimates-solution-llc' />
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
              {/* {cards.map((card, index) => (...))} */}
              <img src={ProjectImage1} alt='ultimates-solution-llc' />
              <img src={ProjectImage1} alt='ultimates-solution-llc' />
              <img src={ProjectImage1} alt='ultimates-solution-llc' />
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
              <img src={ProjectImage2} alt='ultimates-solution-llc' />
              <img src={ProjectImage2} alt='ultimates-solution-llc' />
              <img src={ProjectImage2} alt='ultimates-solution-llc' />
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
              <img src={ProjectImage3} alt='ultimates-solution-llc' />
              <img src={ProjectImage3} alt='ultimates-solution-llc' />
              <img src={ProjectImage3} alt='ultimates-solution-llc' />
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
              <img src={VideoImage} alt='ultimates-solution-llc' />
              <img src={VideoImage} alt='ultimates-solution-llc' />
              <img src={VideoImage} alt='ultimates-solution-llc' />
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
              <img src={ProjectImage1} alt='ultimates-solution-llc' />
              <img src={ProjectImage1} alt='ultimates-solution-llc' />
              <img src={ProjectImage1} alt='ultimates-solution-llc' />
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