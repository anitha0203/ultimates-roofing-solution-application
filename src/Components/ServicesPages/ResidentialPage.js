import React, { useEffect } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import './ResidentialPage.css'
import { useNavigate } from 'react-router-dom';

function ResidentialPage() {

    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='roofing-page'>
            <div className='roofing-background'>
                <div>
                    <h6>ULTIMATES ROOFING & SIDING</h6>
                    <h1 className='roofing-heading'>RESIDENTIAL ROOFING</h1>
                </div>
            </div>

            <Container className='roofing-section'>
                <Row>
                    <Col>
                        <img className='roofing-img' src="https://www.thespruce.com/thmb/4c2va8IBc925dmalmrUOP461H3s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/roof-609694568-9135d47cc6b94cf6aa343a1b6131d138.jpg" />
                    </Col>
                    <Col>
                        <h2 style={{ fontWeight: "700" }}>ROOFING FOR YOUR HOME</h2>
                        <p className='roofing-text'><span style={{ color: "#B22335", fontWeight: "600" }}>Ultimates Roofing & Siding</span> are your roof storm damage experts. When storms strike and there’s hail damage, wind damage, and more, you need a professional team that is local to the area and you can depend on. If you have an insurance claim – We will work with your insurance company directly and will pay your deductible up to $500.00. When it comes to roof replacement, we are the ones to call 614-602-7980.</p>
                        <p className='roofing-text'>We provide quality roofing services anywhere in Columbus and Central Ohio.</p>
                        <Button className='estimate-btn' onClick={() => navigate('/contact')}>CONTACT US</Button>
                    </Col>
                </Row>
            </Container>

            <Container>
                <h1 style={{ textAlign: "center", fontWeight: "700", marginBottom: "4vh" }}>ROOFING PRODUCTS – ULTIMATES SHINGLES</h1>
                <Row>
                    <Col style={{ marginTop: "3vh" }}>
                        <p>Our shingles stand up to the toughest weather and the harshest conditions. Either Class A or Class C Fire rating, Class 4 Hail, 110 MPH wind uplift ratings. Excellent weathering properties, just like natural slate. Impermeable to water, won’t lift, cup, warp, break or delaminate.</p>
                        <p style={{ color: "black", fontWeight: "500" }}>Backed by a 50-year transferable limited warranty.</p>
                        <ul>
                            <li>True to the environment</li>
                            <li>100% recyclable blend of natural limestone and virgin resins.</li>
                            <li>Authentic</li>
                            <li>The natural beauty of random textures and edges is seen in authentic slate!</li>
                        </ul>
                    </Col>
                    <Col style={{ margin: "20px 0px" }}>
                        <img style={{ width: "550px", height: "350px", boxShadow: "rgb(143 143 143 / 54%) -20px 20px 0px 0px" }} src="https://atlasroofingandsiding.com/wp-content/uploads/2021/06/colorpalette-481w.jpg" />
                    </Col>
                </Row>
                <div style={{ textAlign: "center", margin: "5vh 0vh" }}>
                    <h6 style={{ fontWeight: "bold" }}>Color-Through Process</h6>
                    <div>It’s offered in the broadest color palette in the industry – 7 standard, 11 premium and 7 blends.</div>
                    <div>Give the pros at Atlas Roofing & Siding a call to learn more.</div>
                </div>
            </Container>
        </div>
    )
}

export default ResidentialPage