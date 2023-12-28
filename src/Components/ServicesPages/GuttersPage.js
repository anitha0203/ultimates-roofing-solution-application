import React, { useEffect } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

function GuttersPage() {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='roofing-page'>
            <div className='roofing-background'>
                <div>
                    <h6>ULTIMATES ROOFING & SIDING</h6>
                    <h1 className='roofing-heading'>GUTTER SYSTEMS</h1>
                </div>
            </div>

            <Container className='roofing-section'>
                <Row>
                    <Col style={{marginTop: "4rem"}}>
                        <h2 style={{ fontWeight: "700" }}>RELIABLE GUTTER SYSTEMS</h2>
                        <p className='roofing-text'><span style={{ color: "#B22335", fontWeight: "600" }}>Ultimates Roofing & Siding</span> offers a full range of services including the installation of new roofs, roof maintenance, roof repairs, and re-roofing services for both Residential and Commercial projects including homes, offices, warehouses, and multi-family dwellings.</p>
                        <p className='roofing-text'>Since our start in 2003, our customers have come to know our knowledgeable and professional service. Ultimates Roofing and Siding is your premier Columbus roofer.</p>
                        <Button className='estimate-btn' onClick={() => navigate('/contact')}>CONTACT US</Button>
                    </Col>
                    <Col>
                        <img className='roofing-img' src="https://media.istockphoto.com/id/1328449441/photo/corner-of-house-with-windows-new-gray-metal-tile-roof-and-rain-gutter-metallic-guttering.jpg?s=612x612&w=0&k=20&c=4xu7Rm5atwauvb0QZO5Foh3EYBvkjEWHdyVTB4KLqrU=" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default GuttersPage