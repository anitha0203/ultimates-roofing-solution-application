import React, { useEffect } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

function ResidentialPage() {
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
                    <h1 style={{ fontWeight: "700", fontSize: "60px" }}>RESIDENTIAL ROOFING</h1>
                </div>
            </div>
        </div>

        <Container style={{ marginTop: "8vh" }}>
            <Row>
                <Col style={{ margin: "20px 0px" }}>
                    <img style={{ width: "550px", height: "350px", boxShadow: "rgb(143 143 143 / 54%) -20px 20px 0px 0px" }} src="https://www.thespruce.com/thmb/4c2va8IBc925dmalmrUOP461H3s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/roof-609694568-9135d47cc6b94cf6aa343a1b6131d138.jpg" />
                </Col>
                <Col>
                    <h2 style={{ fontWeight: "700" }}>ROOFING FOR YOUR HOME</h2>
                    <p><span style={{ color: "black", fontWeight: "500" }}>Ultimates Roofing & Siding</span> are your roof storm damage experts. When storms strike and there’s hail damage, wind damage, and more, you need a professional team that is local to the area and you can depend on. If you have an insurance claim – We will work with your insurance company directly and will pay your deductible up to $500.00. When it comes to roof replacement, we are the ones to call 614-766-8100.</p>
                    <p>We provide quality roofing services anywhere in Columbus and Central Ohio.</p>
                    <Button variant='danger' style={{ borderRadius: "0px" }}>CONTACT US</Button>
                </Col>
            </Row>
        </Container>

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
                    <img style={{ width: "550px", height: "350px", boxShadow: "rgb(143 143 143 / 54%) -20px 20px 0px 0px" }} src="https://atlasroofingandsiding.com/wp-content/uploads/2021/06/colorpalette-481w.jpg" />
                </Col>
            </Row>
            <div style={{ textAlign: "center", margin: "5vh 0vh" }}>
                <h6 style={{ fontWeight: "bold" }}>Color-Through Process</h6>
                <div>It’s offered in the broadest color palette in the industry – 7 standard, 11 premium and 7 blends.</div>
                <div>Give the pros at Atlas Roofing & Siding a call to learn more.</div>
            </div>
        </Container>

       <Container>
            <div style={{ margin: "10vh" }}>
                <img style={{ width: "100%" }} src="https://atlasroofingandsiding.com/wp-content/uploads/2021/06/OwensTruDef-1416w.jpg" />
                <h3 style={{ marginTop: "4vh", fontWeight: "700", textAlign: "center" }}>OWENS CORNING TRUDEFINITION® DURATION® DESIGNER COLORS</h3>
                <p style={{ textAlign: "center", marginBottom: "4vh" }}>Owens Corning TruDefinition® Duration® Designer Colors Collection Shingles can bring it all together— helping to improve your home’s aesthetics and perceived value—with maximum vibrancy and colors you won’t find anywhere else.</p>
                <Row>
                    <Col>
                        <h6>Breakthrough Design:</h6>
                        <p>Featuring a tough, woven engineered reinforcing fabric to deliver consistent fastening during installation.</p>
                    </Col>
                    <Col>
                        <h6>Excellent Adhesive Power:</h6>
                        <p>Specially formulated, wide adhesive bands help keep shingle layers laminated together.</p>
                    </Col>
                    <Col>
                        <h6>Outstanding Grip:</h6>
                        <p>Our enhanced Tru-Bond®** sealant grips tightly to the engineered fabric nailing strip on the shingle below.</p>
                    </Col>
                </Row>
                <Row style={{margin: "4vh 0px"}}>
                    <Col>
                        <h6>Triple Layer Protection®:</h6>
                        <p>A unique “triple layer” of reinforcement occurs when the fabric overlays the common bond of the shingle laminate layers that offers excellent fastener holding power.</p>
                    </Col>
                    <Col>
                        <h6>Exceptional Wind Resistance:</h6>
                        <p>Engineered to deliver 130-MPH* wind warranty performance with only 4 nails. Fewer nails required can mean fewer deck penetrations.</p>
                    </Col>
                </Row>
                <div style={{textAlign: "center"}}>
                <Button className='cardbtn'>OWENS CORNING - TRUDEFINITION</Button>
                </div>
            </div>
        </Container>
    </div>
)
}

export default ResidentialPage