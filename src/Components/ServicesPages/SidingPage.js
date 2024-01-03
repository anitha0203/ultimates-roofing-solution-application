import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import './ResidentialPage.css'
import Roofs from '../../assets/ServicesPagesImages/Roofs.png'
import RoofsShining from '../../assets/ServicesPagesImages/RoofsShining.png'
import LogosComponent from '../HomePage/LogosComponent/LogosComponent'

function SidingPage() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
        <div className='service-main'>
            <p className='service-us'><span style={{ color: "#B22335", fontWeight: "bold" }}>I</span> Services</p>
            <h2 className='service-page-heading'>Siding Enhancements</h2>
            <p className='service-page-text'>Welcome to Ultimates Roofing LLC, your trusted partner for not only exceptional roofing solutions but also premium Siding Enhancements that add both style and durability to your property. Our commitment to elevating the overall protection and aesthetic appeal of your home extends to our comprehensive siding services.</p>
            <img src='https://d7fcfvvxwoz9e.cloudfront.net/dom43635/wp-content/uploads/2022/03/Board-and-Batten-Siding-Vs.-Vinyl-Siding.jpg' className='service-main-image' alt='ultimates-roofing-llc' />
            <div className='service-section'>
                <h2 className='service-page-heading'>Unmatched Roofing Innovation in Columbus, Ohio!</h2>
                <p className='service-page-text'>Your home is a reflection of your unique style, and our team works closely with you to achieve the desired look for your property. Whether you seek a traditional charm or a modern aesthetic, Ultimates Roofing offers customized siding solutions to enhance the visual appeal of your home.</p>
                <h5 className='service-mid-heading'>Enhance Your Home's Exterior with Ultimates Siding Solutions:</h5>
                <Row className='roofing-list'>
                    <Col>
                        <ul>
                            <li className='service-page-text'>Diverse Siding Options</li>
                            <li className='service-page-text'>Durability and Weather Resistance</li>
                            <li className='service-page-text'>Energy-Efficient Siding</li>
                        </ul>
                    </Col>
                    <Col>
                        <ul>
                            <li className='service-page-text'>Professional Installation and Craftsmanship</li>
                            <li className='service-page-text'>Low Maintenance and Longevity</li>
                            <li className='service-page-text'>Customized Design and Personalization</li>
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
                    <img src='https://risebuildingproducts.com/wp-content/uploads/2023/06/iStock-157441498-1024x753.jpg' className='roofing-image' alt='ultimates-roofing-llc' />
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

export default SidingPage