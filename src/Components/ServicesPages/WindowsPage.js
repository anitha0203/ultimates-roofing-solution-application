import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import './ResidentialPage.css'
import './WindowsPage.css'
import Windows from '../../assets/ServicesPagesImages/Windows.png'
import Windows1 from '../../assets/ServicesPagesImages/Windows1.jpg'
import Windows2 from '../../assets/ServicesPagesImages/Windows2.jpg'
import LogosComponent from '../HomePage/LogosComponent/LogosComponent'
import { Helmet } from 'react-helmet'

function WindowsPage() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Helmet>
                <title>Ultimates Roofing LLC - Windows</title>
                <link rel="canonical" href="https://www.ultimatesroofing.com/windows" />
                <meta name="description" content="Upgrade your property with Ultimates Roofing LLC's expert window services. From installations to replacements, we provide high-quality window solutions tailored to your needs." />
                <meta name="keywords" content="Ultimates Roofing LLC, windows, window installations, window replacements, construction, home improvement" />
                <meta name="author" content="Ultimates Roofing LLC" />
                <meta name="robots" content="index, follow" />
                <html lang="en" />
            </Helmet>

            <div className='service-main'>
                <p className='service-us'><span style={{ color: "#B22335", fontWeight: "bold" }}>I</span> Services</p>
                <h2 className='service-page-heading'>Window Services</h2>
                <p className='service-page-text'>Discover a new perspective on aesthetics, functionality, and energy efficiency with Ultimates Roofing's Window Services. Our dedicated team combines expertise with innovation to offer comprehensive solutions tailored to enhance the beauty and performance of your property's windows.</p>
                <img src={Windows} className='service-main-image' alt='Ultimates Roofing LLC Window' />
                <div className='service-section'>
                    <h2 className='service-page-heading'>Unmatched Roofing Innovation in Columbus, Ohio!</h2>
                    <p className='service-page-text'>Our skilled installation team ensures a precise and seamless installation process. We pay careful attention to detail, ensuring that your windows not only perform optimally but also contribute to the overall aesthetic appeal of your home.</p>
                </div>
            </div>

            <div className='service-main1'>
                <Row className='roofing-sections'>
                    <Col>
                        <h2 className='service-page-heading'>Windows Services for a Brighter Home</h2>
                        <p className='service-page-text'>At Ultimations, we believe windows are more than just openings; they are a connection to the outdoors, allowing natural light and fresh air to fill your living spaces. Our comprehensive window services are designed to enhance the aesthetics, energy efficiency, and functionality of your home.</p>
                        <ul>
                            <li className='service-page-text'>Window Installation & Replacement</li>
                            <li className='service-page-text'>Customized Styles and Designs</li>
                            <li className='service-page-text'>Noise Reduction Technology</li>
                            <li className='service-page-text'>Low Maintenance and Easy Operation</li>
                            <li className='service-page-text'>Energy-Efficient Windows</li>
                        </ul>
                    </Col>
                    <Col className='temp-col' xs={1}></Col>
                    <Col>
                        <img src={Windows1} className='roofing-image' alt='Ultimates Roofing LLC Window' />
                    </Col>
                </Row>
            </div>

            <div className='service-main1'>
                <Row className='roofing-sections'>
                    <Col>
                        <h2 className='service-page-heading'>Experience Excellence with Ultimations Window Solutions</h2>
                        <h5 className='window-mid-heading'>Your Home, Your Style</h5>
                        <p className='service-page-text'>Discover the perfect windows to complement your home's unique style and personality. Our diverse range of options ensures you find the ideal fit for your space.</p>
                        <h5 className='window-mid-heading'>Professional Consultation</h5>
                        <p className='service-page-text'>Our knowledgeable team provides expert advice to guide you through the selection process. Your satisfaction is our priority, and we are dedicated to exceeding your expectations.</p>
                    </Col>
                    <Col className='temp-col' xs={1}></Col>
                    <Col>
                        <img src={Windows2} className='roofs-shining-image' alt='Ultimates Roofing LLC Window' />
                    </Col>
                </Row>
            </div>

            <LogosComponent />
        </div>
    )
}

export default WindowsPage