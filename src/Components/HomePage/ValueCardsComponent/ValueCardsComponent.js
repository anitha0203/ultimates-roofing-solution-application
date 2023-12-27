import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import './ValueCardsComponent.css';
import ReliableExpertise from '../../../assets/ReliableExpertise.png'
import CraftedExcellence from '../../../assets/CraftedExcellence.png'
import CompetitivePricing from '../../../assets/CompetitivePricing.png'
import InnovativeQuality from '../../../assets/InnovativeQuality.png'
import ValueIcon1 from '../../../assets/ValueIcon1.png'
import ValueIcon2 from '../../../assets/ValueIcon2.png'
import ValueIcon3 from '../../../assets/ValueIcon3.png'
import ValueIcon4 from '../../../assets/ValueIcon4.png'

//  Values data
const values = [
  { imageUrl: ReliableExpertise, icon: ValueIcon1, heading: "Reliable Expertise", text: "Trusted for top-notch residential and commercial roofing. Your satisfaction is our priority." },
  { imageUrl: CraftedExcellence, icon: ValueIcon2, heading: "Crafted Excellence", text: "Elevate your property with our commitment to excellence in roofing, siding, gutters, and windows." },
  { imageUrl: CompetitivePricing, icon: ValueIcon3, heading: "Competitive Pricing", text: "Experience excellence on a budget. We deliver top-notch solutions, ensuring your vision meets affordability" },
  { imageUrl: InnovativeQuality, icon: ValueIcon4, heading: "Innovative Quality", text: "Leading with quality and innovation, we transform spaces with durability and modern aesthetics." }
]

function ValueCardsComponent() {
  return (
    <div className='cards'>

      {/**    Web View */}
      <Row className='card-container'>
        {values.map((value, index) => (
          <Col key={index}>
            <Card className='value-cards'>
              <div>
                <div className='value-circle'>
                  <p className='value-icon'><img src={value.icon} alt='ultimates-roofing-llc' /></p>
                </div>
                <Card.Img className='value-img' src={value.imageUrl} variant="top" alt={value.title} />
              </div>
              <Card.Body className='value-body'>
                <h2 className='value-title'>{value.heading}</h2>
                <p className='value-text'>{value.text}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/**    Mobile view */}
      <Row className='carousel-container'>
        {values.map((value, index) => (
          <Col key={index}>
            <Card className='value-cards'>
              <Card.Body className='value-body'>
                <div className='value-circle1'>
                  <img src={value.icon} alt="Value Icon" />
                </div>
                <h2 className='value-title'>{value.heading}</h2>
                <p className='value-text'>{value.text}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default ValueCardsComponent