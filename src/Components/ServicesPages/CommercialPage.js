import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import './ResidentialPage.css'
import RoofsShining from '../../assets/ServicesPagesImages/RoofsShining.png'
import LogosComponent from '../HomePage/LogosComponent/LogosComponent'

function CommercialPage() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <div className='service-main'>
                <p className='service-us'><span style={{ color: "#B22335", fontWeight: "bold" }}>I</span> Services</p>
                <h2 className='service-page-heading'>Commercial Roofing</h2>
                <p className='service-page-text'>Welcome to Ultimates Roofing LLC, your premier choice for top-notch Commercial Roofing solutions in Columbus, Ohio! At Ultimates Roofing, we understand the unique demands of commercial properties, and our expert team is dedicated to providing unparalleled roofing services that blend durability, functionality, and aesthetic appeal.</p>
                <img src='https://www.silverbowroofinginc.com/assets/sub-banner/banner-v1-bg.2203311530550.jpg' className='service-main-image' alt='ultimates-roofing-llc' />
                <div className='service-section'>
                    <h2 className='service-page-heading'>Unmatched Roofing Innovation in Columbus, Ohio!</h2>
                    <p className='service-page-text'>Our Commercial Roofing services encompass a comprehensive range of solutions, tailored to meet the specific requirements of businesses and industrial establishments. We pride ourselves on our commitment to excellence, ensuring that every project is executed with precision and attention to detail.</p>
                    <h5 className='service-mid-heading'>We take meticulous steps in our process:</h5>
                    <Row className='roofing-list'>
                        <Col>
                            <ul>
                                <li className='service-page-text'>Thorough Inspection and Analysis</li>
                                <li className='service-page-text'>Specialized Roofing Materials</li>
                                <li className='service-page-text'>Waterproofing and Leak Prevention</li>
                            </ul>
                        </Col>
                        <Col>
                            <ul>
                                <li className='service-page-text'>Energy-Efficient Roofing Options</li>
                                <li className='service-page-text'>Professional Installation and Timely Completion</li>
                                <li className='service-page-text'>Comprehensive Warranty</li>
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
                        <img src='https://www.doddroofs.com/static/5e4ac99f86a93238c34f9c675f37e273/f1e8a/dodd_commercial_roofing_services_banner_592f91e0b2.jpg' className='roofing-image' alt='ultimates-roofing-llc' />
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

export default CommercialPage