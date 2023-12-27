import React, { useEffect } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

function SidingPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div className='homePage'>
        <div style={{
            backgroundImage: "url('https://atlasroofingandsiding.com/wp-content/uploads/2021/06/Banner-Image-1.jpg')", backgroundSize: "cover",
            width: "100%", height: "40vh", backgroundRepeat: "no-repeat", backgroundPosition: "center", display: "flex", justifyContent: "center", alignItems: "center"
        }}>
            <div style={{
                width: "100%", height: "40vh", backgroundColor: "#1E1E2A", opacity: "0.7", color: "white",
                textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center"
            }}>
                <div style={{ marginTop: "13vh" }}>
                    <h6>ULTIMATES ROOFING & SIDING</h6>
                    <h1 style={{ fontWeight: "700", fontSize: "60px" }}>SIDING PRODUCTS & INSTALLATION</h1>
                </div>
            </div>
        </div>
    
        <Container style={{ marginTop: "8vh", marginBottom: "8vh" }}>
        <Row>
            <Col>
                <h2 style={{ fontWeight: "700" }}>SIDING PRODUCTS & INSTALLATION</h2>
                <p>Ultimates Roofing and Siding offers a full range of services including the installation of new roofs, roof maintenance, roof repairs, and re-roofing services for both Residential and Commercial projects including homes, offices, warehouses, and multi-family dwellings.</p>
                <p>Since our start in 2003, our customers have come to know our knowledgeable and professional service. Ultimates Roofing and Siding is your premier Columbus roofer.</p>
                <Button variant='danger' style={{ borderRadius: "0px" }}>CONTACT US</Button>
            </Col>
            <Col>
                <img style={{ width: "550px", height: "350px", boxShadow: "rgb(143 143 143 / 54%) -20px 20px 0px 0px" }} src="https://images.squarespace-cdn.com/content/v1/595cf3072994ca8947944b3f/1572367828386-YH5H3GTE7OADJ2NXXKM5/4752+Stoney+Brook+Lane+Highland+%288+of+13%29%281%29.jpg" />
            </Col>
        </Row>
    </Container>
    </div>
      )
}

export default SidingPage