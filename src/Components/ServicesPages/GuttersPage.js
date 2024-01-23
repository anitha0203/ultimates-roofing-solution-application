import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import './ResidentialPage.css'
import Gutters from '../../assets/ServicesPagesImages/Gutters.png'
import Gutters1 from '../../assets/ServicesPagesImages/Gutters1.jpg'
import Gutters2 from '../../assets/ServicesPagesImages/Gutters2.jpg'
import LogosComponent from '../HomePage/LogosComponent/LogosComponent'
import { Helmet } from 'react-helmet'

function GuttersPage() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Helmet>
                <title>Ultimates Roofing LLC - Gutters</title>
                <link rel="canonical" href="https://www.ultimatesroofing.com/gutters" />
                <meta name="description" content="Ultimates Roofing LLC provides top-notch gutter solutions. Ensure proper drainage and protection for your property with our expert gutter installations and repairs." />
                <meta name="keywords" content="Ultimates Roofing LLC, gutters, gutter installations, gutter repairs, construction, home improvement" />
                <meta name="author" content="Ultimates Roofing LLC" />
                <meta name="robots" content="index, follow" />
                <html lang="en" />
            </Helmet>

            <div className='service-main'>
                <p className='service-us'><span style={{ color: "#B22335", fontWeight: "bold" }}>I</span> Services</p>
                <h2 className='service-page-heading'>Gutter Systems</h2>
                <p className='service-page-text'>Welcome to Ultimates Roofing LLC, where we extend our expertise beyond roofing to provide comprehensive solutions for your home, including top-of-the-line Gutter Systems. Our commitment to safeguarding your property encompasses not only the roof but also the crucial aspect of effective water management through advanced gutter installations.</p>
                <img src={Gutters} className='service-main-image' alt='ultimates-roofing-llc' />
                <div className='service-section'>
                    <h2 className='service-page-heading'>Unmatched Roofing Innovation in Columbus, Ohio!</h2>
                    <p className='service-page-text'>Invest in the protection and longevity of your home with Ultimates Gutter Systems. Our commitment to excellence extends to every aspect of your property, providing you with peace of mind and a well-protected investment. Contact us today to explore our gutter solutions and take the first step toward effective water management for your home.</p>
                    <h5 className='service-mid-heading'>Ultimates Gutter Systems: Enhancing Protection and Efficiency</h5>
                    <Row className='roofing-list'>
                        <Col>
                            <ul>
                                <li className='service-page-text'>Customized Gutter Solutions</li>
                                <li className='service-page-text'>Durable and High-Quality Materials</li>
                                <li className='service-page-text'>Efficient Water Diversion</li>
                                <li className='service-page-text'>Leaf Guard Protection</li>
                            </ul>
                        </Col>
                        <Col>
                            <ul>
                                <li className='service-page-text'>Seamless Installation</li>
                                <li className='service-page-text'>Aesthetic Appeal</li>
                                <li className='service-page-text'>Professional Maintenance Services</li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </div>

            <div className='service-main1'>
                <Row className='roofing-sections'>
                    <Col>
                        <h2 className='service-page-heading'>Leaf Relief - The Ultimate Gutter Protection</h2>
                        <p className='service-page-text'>We understand the challenges posed by debris and leaves, especially in areas with abundant foliage. Leaf Relief's innovative solutions offer unmatched performance in keeping your gutters free from clogs.Leaf Relief's patented design effectively keeps leaves, pine needles, and other debris out of your gutters. Its low-profile, sturdy construction ensures durability without compromising the aesthetics of your home.</p>
                        <ul>
                            <li className='service-page-text'>Clog-Free Gutters</li>
                            <li className='service-page-text'>Enhanced Water Flow</li>
                            <li className='service-page-text'>Year-Round Protection</li>
                            <li className='service-page-text'>Experience the true beauty of authentic slate with its natural textures and edges!</li>
                        </ul>
                    </Col>
                    <Col className='temp-col' xs={1}></Col>
                    <Col>
                        <img src={Gutters1} className='roofing-image' alt='ultimates-roofing-llc' />
                    </Col>
                </Row>
            </div>

            <div className='service-main1'>
                <Row className='roofing-sections'>
                    <Col>
                        <h2 className='service-page-heading'>Gutters Services with Leaf Relief Excellence</h2>
                        <p className='service-page-text'>We understand the importance of well-maintained gutters in safeguarding your home or business from potential water damage. Our team of experienced professionals is dedicated to providing comprehensive gutter services tailored to meet your specific needs.</p>
                        <p className='service-page-text'>Our skilled technicians ensure a precise fit, customizing the gutters to the unique dimensions of your property. We use high-quality materials and cutting-edge techniques to guarantee durability and optimal performance.</p>
                    </Col>
                    <Col className='temp-col' xs={1}></Col>
                    <Col>
                        <img src={Gutters2} className='roofs-shining-image' alt='ultimates-roofing-llc' />
                    </Col>
                </Row>
            </div>

            <LogosComponent />
        </div>
    )
}

export default GuttersPage