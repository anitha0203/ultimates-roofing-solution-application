import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import './ResidentialPage.css'
import Roofs from '../../assets/Roofs.png'
import ResidentialRoofing from '../../assets/ResidentialRoofing.png'
import RoofsShining from '../../assets/RoofsShining.png'
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
                <p className='service-page-text'>Welcome to Ultimates Roofing LLC, your trusted partner for elevating the protection and beauty of your home through expert roofing solutions. Our Home Roofing services are tailored to meet the unique needs of residential properties, ensuring durability, aesthetics, and peace of mind.</p>
                <img src={ResidentialRoofing} className='service-main-image' alt='ultimates-roofing-llc' />
                <div className='service-section'>
                    <h2 className='service-page-heading'>Unmatched Roofing Innovation in Columbus, Ohio!</h2>
                    <p className='service-page-text'>At our core, we are experts in executing meticulous roof repairs and replacements, committed to doing it the right way. We never compromise; our process involves a thorough strip-down to the deck, a meticulous assessment to ensure it is in optimal condition before the new shingles are expertly laid. Your protection is not just a priority for us; it's our unwavering commitment and the guiding principle behind every step of our dedicated service.</p>
                    <h5 className='service-mid-heading'>We take meticulous steps in our process:</h5>
                    <Row className='roofing-list'>
                        <Col>
                            <ul>
                                <li className='service-page-text'>New water-resistant felt</li>
                                <li className='service-page-text'>Rubberized Ice and Water Shield on eaves and valleys</li>
                                <li className='service-page-text'>Fresh flashing for leak prevention</li>
                                <li className='service-page-text'>Metal edges for enhanced roof integrity</li>
                            </ul>
                        </Col>
                        <Col>
                            <ul>
                                <li className='service-page-text'>Upgraded vents and chimney flashing</li>
                                <li className='service-page-text'>Premium Atlas Pinnacle shingles</li>
                                <li className='service-page-text'>Our exceptional warranty: 15 years on workmanship, lifetime on materials</li>
                                <li className='service-page-text'>Efficient one-day completion from start to clean-up!</li>
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
                        <img src={Roofs} className='roofing-image' alt='ultimates-roofing-llc' />
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