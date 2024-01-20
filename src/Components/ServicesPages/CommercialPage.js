import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import './ResidentialPage.css'
import './CommercialPage.css'
import CommercialRoofing from '../../assets/ServicesPagesImages/CommercialRoofng.png'
import Commercial1 from '../../assets/ServicesPagesImages/Commercial1.jpg'
import Commercial2 from '../../assets/ServicesPagesImages/Commercial2.jpg'
import Commercial3 from '../../assets/ServicesPagesImages/Commercial3.png'
import Commercial4 from '../../assets/ServicesPagesImages/Commercial4.png'
import LogosComponent from '../HomePage/LogosComponent/LogosComponent'
import { Helmet } from 'react-helmet'

function CommercialPage() {

    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, []);

    return (
        <div>
            <Helmet>
                <title>Ultimations Solution LLC - Commercial Roofing</title>
                <link rel="canonical" href="https://visheshcountrycache.tech/commercial-roofing" />
                <meta name="description" content="Explore Ultimations Solution LLC's commercial roofing services. Our expert team specializes in providing durable and efficient roofing solutions for businesses and commercial properties." />
                <meta name="keywords" content="Ultimations Solution LLC, commercial roofing, roof installations, roof repairs, construction, business improvement" />
                <meta name="author" content="Ultimations Solution LLC" />
                <meta name="robots" content="index, follow" />
                <html lang="en" />
            </Helmet>

            <div className='service-main'>
                <p className='service-us'><span style={{ color: "#B22335", fontWeight: "bold" }}>I</span> Services</p>
                <h2 className='service-page-heading'>Commercial Roofing</h2>
                <p className='service-page-text'>Discover the pinnacle of commercial roofing excellence at Ultimates Roofing. Our Commercial Roofing services are tailored to meet the unique needs of your business. From precision installations to long-term maintenance, we deliver top-tier solutions that go beyond industry standards.</p>
                <img src={CommercialRoofing} className='service-main-image' alt='ultimates-roofing-llc' />
                <div className='service-section'>
                    <h2 className='commercial-page-heading'>Flat and Metal Roof Options</h2>
                    <p className='service-page-text'>Ultimates Roofing takes pride in presenting our customers with roofing products that have been honored with the prestigious ENERGY STAR label. Today, our Benchmark®, Rapid Roof III®, and PUMA® roof coatings continue to lead the industry in technology, performance, and environmental responsibility, setting the standard for excellence.</p>
                    <ol><li className='commercial-page-heading1'>Conklin Membrane Coating System</li></ol>
                    <p className='service-page-text'>As TPO and various membranes weather over time, roofs may develop cracks, leaks, gather dirt, and experience diminished effectiveness. Enter the Conklin Membrane Coating system, offering an economical and effective solution to restore and safeguard approved membranes, ensuring renewed durability and sustained performance.</p>
                    <p className='service-page-text'>In 1977, Conklin pioneered the first acrylic roof coating, and today, our commitment to innovation reaches new heights with a comprehensive waterproofing system for approved membranes. As TPO and other membranes weather, roofs can deteriorate, developing cracks, leaks, and accumulating dirt, diminishing their efficiency and energy-saving capabilities. Enter Conklin's elastomeric coatings, a novel and cost-effective solution designed to repair and preserve approved membranes, ultimately enhancing energy savings and ensuring the longevity of roofing systems.</p>
                    <h5 className='service-mid-heading'>Advantages</h5>
                    <ul>
                        <li className='service-page-text'>Boosts energy efficiency with a cool white reflective surface.</li>
                        <li className='service-page-text'>Superior waterproofing halts leaks.</li>
                        <li className='service-page-text'>Prolongs the lifespan of your current roof.</li>
                        <li className='service-page-text'>Extended 18-Year Non-Prorated Warranty for added peace of mind.</li>
                        <li className='service-page-text'>Cost-effective solution, significantly less than roof replacement.</li>
                    </ul>
                </div>
                <Row style={{margin: "0px"}}>
                    <h5 className='service-mid-heading'>Process</h5>
                    <Col className='steps-col'>
                        <img src={Commercial1} className='process-step-img' alt='ultimates-roofing-llc' />
                        <h5 className='process-heading-step'>Step1</h5>
                        <h5 className='process-heading-step1'>Inspection and Preparation:</h5>
                        <p className='service-page-text'>Our technicians meticulously assess the existing roofing system, identifying vulnerabilities and preparing the surface for coating application.</p>
                    </Col>
                    <Col></Col>
                    <Col className='steps-col'>
                        <img src={Commercial2} className='process-step-img' alt='ultimates-roofing-llc' />
                        <h5 className='process-heading-step'>Step2</h5>
                        <h5 className='process-heading-step1'>Inspection and Preparation:</h5>
                        <p className='service-page-text'>Our technicians meticulously assess the existing roofing system, identifying vulnerabilities and preparing the surface for coating application.</p>
                    </Col>
                </Row>
            </div>

            <div className='service-main1'>

            </div>

            <LogosComponent />
        </div>
    )
}

export default CommercialPage