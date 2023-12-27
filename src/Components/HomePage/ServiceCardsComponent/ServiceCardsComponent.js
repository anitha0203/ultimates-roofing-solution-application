import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import HomeRoofing from '../../../assets/HomeRoofing.jpg';
import CommercialRoofing from '../../../assets/CommercialRoofing.jpg';
import SidingEnhancement from '../../../assets/SidingEnhancements.jpg';
import GutterSystems from '../../../assets/GutterSystems.jpg';
import WindowServices from '../../../assets/WindowsServices.jpg';
import { FaArrowRight } from "react-icons/fa6";
import './ServiceCardsComponent.css';

// Service data
const services = [
    { image: HomeRoofing, title: 'Residential Roofing', description: 'Enhance your home\'s protection with expert residential roofing solutions, blending durability and aesthetic appeal seamlessly.' },
    { image: CommercialRoofing, title: 'Commercial Roofing', description: 'Elevate your business infrastructure with our top-tier commercial roofing services, combining reliability and performance for lasting excellence.' },
    { image: SidingEnhancement, title: 'Siding Enhancements', description: 'Transform your property\'s exterior with our premium siding options, offering a perfect fusion of style, durability, and low maintenance.' },
    { image: GutterSystems, title: 'Gutter Systems', description: 'Safeguard your home\'s foundation with our advanced gutter systems, efficiently directing water flow for optimal protection and longevity.' },
    { image: WindowServices, title: 'Window Services', description: 'Immerse your spaces in natural light and energy efficiency with our high-quality windows, designed for both beauty and functional brilliance.' },
];

function ServiceCardsComponent() {
    return (
        <div className='cards'>
            {/**    Large screens */}
            <div className='cards-large-view'>
                <Row style={{ margin: "0" }}>
                    <Col style={{ paddingLeft: "0px", paddingRight: "0px" }}>
                        <div className='section'>
                            <div>
                                <h1 className='service-heading'>Our Services</h1>
                                <p className='service-text'>From Home and Commercial Roofing to Siding, Gutters, and Windows, our services redefine precision and style. Elevate your property with our commitment to unparalleled craftsmanship.</p>
                            </div>
                        </div>
                    </Col>
                    {services.slice(0, 2).map((service, index) => (
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
                <Row style={{ margin: "0" }}>
                    {services.slice(2, 5).map((service, index) => (
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

            <div className='cards-small-view'>
                <Row style={{ margin: "0" }}>
                    <Col style={{ paddingLeft: "0px", paddingRight: "0px" }}>
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
                </Row></div>

        </div>
    )
}

export default ServiceCardsComponent