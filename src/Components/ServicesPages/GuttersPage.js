import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import './ResidentialPage.css'
import Roofs from '../../assets/ServicesPagesImages/Roofs.png'
import RoofsShining from '../../assets/ServicesPagesImages/RoofsShining.png'
import LogosComponent from '../HomePage/LogosComponent/LogosComponent'

function GuttersPage() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
        <div className='service-main'>
            <p className='service-us'><span style={{ color: "#B22335", fontWeight: "bold" }}>I</span> Services</p>
            <h2 className='service-page-heading'>Gutter Systems</h2>
            <p className='service-page-text'>Welcome to Ultimates Roofing LLC, where we extend our expertise beyond roofing to provide comprehensive solutions for your home, including top-of-the-line Gutter Systems. Our commitment to safeguarding your property encompasses not only the roof but also the crucial aspect of effective water management through advanced gutter installations.</p>
            <img src='https://www.tichenorinc.com/wp-content/uploads/gutters-subpage-banner-min-aspect-ratio-1920-755-1.jpg' className='service-main-image' alt='ultimates-roofing-llc' />
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
                    <h2 className='service-page-heading'>Your Style with Premium Shingles</h2>
                    <p className='service-page-text'>Experience roofing excellence with our selection of premium shingles. Designed to marry durability and aesthetic appeal, our shingles redefine your roof, offering not just protection but a touch of architectural sophistication. Each shingle is a testament to our commitment to quality, ensuring your home not only stands strong against the elements but also stands out in style. Discover the perfect blend of functionality and elegance for your roofing needs with our meticulously crafted shingles.</p>
                    <ul>
                        <li className='service-page-text'>Environmentally Conscious</li>
                        <li className='service-page-text'>Crafted from a 100% recyclable blend of natural limestone and virgin resins</li>
                        <li className='service-page-text'>Genuine</li>
                        <li className='service-page-text'>Experience the true beauty of authentic slate with its natural textures and edges!</li>
                    </ul>
                </Col>
                <Col className='temp-col' xs={1}></Col>
                <Col>
                    <img src='https://www.yorkshireroofing.com/wp-content/uploads/2020/09/gutter-install-square.jpg' className='roofing-image' alt='ultimates-roofing-llc' />
                </Col>
            </Row>
        </div>

        <div className='service-main1'>
            <Row className='roofing-sections'>
                <Col>
                    <h2 className='service-page-heading'>Your Roofing Experience with Owens Corning Products</h2>
                    <p className='service-page-text'>With a legacy of over 75 years, Owens Corning stands as a prominent leader in the building materials industry. Trust in the assurance that your new roof will not only enhance but also safeguard your home for years to come. Explore the enduring performance and captivating beauty of Oakridge® Shingles – truly 'The Right Choice®’. Beyond a spectrum of popular colors, these shingles come with:</p>
                    <p className='service-page-text'>Enhance your home with Owens Corning TruDefinition® Duration® Designer Colors Collection Shingles, bringing exclusive colors and vibrancy for unique style and value.</p>
                </Col>
                <Col className='temp-col' xs={1}></Col>
                <Col>
                    <img src={RoofsShining} className='roofs-shining-image' alt='ultimates-roofing-llc' />
                </Col>
            </Row>
        </div>

        <LogosComponent />
    </div>
    )
}

export default GuttersPage