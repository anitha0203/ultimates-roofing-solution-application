import React, { useEffect } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

function CommercialPage() {

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
                        <h1 style={{ fontWeight: "700", fontSize: "60px" }}>COMMERCIAL ROOFING</h1>
                    </div>
                </div>
            </div>

            <Container style={{ marginTop: "8vh" }}>
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
                        <img style={{ width: "550px", height: "350px", boxShadow: "rgb(143 143 143 / 54%) -20px 20px 0px 0px" }} src="https://atlasroofingandsiding.com/wp-content/uploads/2021/06/Commercial-Roofing-Image-1.jpg" />
                    </Col>
                </Row>
                <div style={{ textAlign: "center", margin: "5vh 0vh" }}>
                    <div>Cool Ultimates roofs reflect heat and UV rays for more comfortable interiors, reduced air conditioning costs, and increased energy efficiency. Our roof recoating systems also offer a greener choice – recoating vs. replacement to save time, labor, disposal, and landfill costs.</div>
                </div>
            </Container>

            <Container style={{ marginTop: "8vh", marginBottom: "8vh" }}>
            <Row>
                <Col>
                    <img style={{ width: "550px", height: "350px", marginTop: "3vh",boxShadow: "rgb(143 143 143 / 54%) -20px 20px 0px 0px" }} src="https://images.squarespace-cdn.com/content/v1/595cf3072994ca8947944b3f/1572367828386-YH5H3GTE7OADJ2NXXKM5/4752+Stoney+Brook+Lane+Highland+%288+of+13%29%281%29.jpg" />
                </Col>
                <Col>
                    <h2 style={{ fontWeight: "700" }}>CONKLIN METAL ROOF RESTORATION SYSTEM</h2>
                    <p>Don’t replace it – Restore it. A complete waterproofing system for metal roofs that inhibits rust, prevents leaks and provides an energy efficient and attractive finish coat for years of service.</p>
                    <h6 style={{ fontWeight: "bold", fontSize: "22px" }}>Benefits:</h6>
                    <ul style={{fontSize: "16px"}}>
                        <li>All Employees are screened for security</li>
                        <li>Install new water-resistant felt</li>
                        <li>Install Rubberized Ice and Water Shield on all eaves and valleys</li>
                        <li>Install New flashing to prevent leaks</li>
                    </ul>                    <Button variant='danger' style={{ borderRadius: "0px" }}>FIND OUT MORE ABOUT THIS PROCESSS</Button>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default CommercialPage