import React from 'react'
import Logo1 from '../../../assets/Logo1.png'
import Logo2 from '../../../assets/Logo2.png'
import Logo3 from '../../../assets/Logo3.png'
import Logo4 from '../../../assets/Logo4.png'
import './LogosComponent.css'
import { Col, Row } from 'react-bootstrap'

// Logos Urls
const logos = [Logo1, Logo2, Logo3, Logo4, Logo3,]
function LogosComponent() {
    return (
        <div className='logo-slider'>
            {/**    Web view */}
            <div className='slide-track'>
                {logos.map((logo, index) => (
                    <div key={index} className='slide'>
                        <img className='logo-width' src={logo} alt='ultimates-roofing-llc' />
                    </div>
                ))}
                {logos.map((logo, index) => (
                    <div key={index} className='slide'>
                        <img className='logo-width' src={logo} alt='ultimates-roofing-llc' />
                    </div>
                ))}
            </div>

            {/**    Mobile view */}
            <div className='slide-track-mobile text-center'>
                <Row>
                    {logos.map((logo, index) => (
                        <Col key={index} className='slide1'>
                            <img className='logo-width1' src={logo} alt='ultimates-roofing-llc' />
                        </Col>
                    ))}
                </Row>
            </div>

        </div>
    )
}

export default LogosComponent