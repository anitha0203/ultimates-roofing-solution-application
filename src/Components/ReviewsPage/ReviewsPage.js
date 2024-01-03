import React, { useEffect } from 'react'
import { Accordion, Card, Col, Row } from 'react-bootstrap';
import Quote from '../../assets/HomePageImages/Quote.png'
import './ReviewsPage.css'

//  Reviews Data
const reviews = [
    { name: 'John T', place: 'Denver, Colorado', description: 'Ultimates Roofing transformed our house with top-notch materials and efficient service. The cleanup was impeccable, making the entire process hassle-free.' },
    { name: 'Sarah L', place: 'Austin, Texas', description: 'Absolutely incredible quality! Ultimates Roofing\'s utilization of top-tier materials, combined with their remarkably swift installation, surpassed all my expectations. My home has undergone a stunning transformation and has never looked better!' },
    { name: 'Robert H', place: 'Orlando, Florida', description: 'Exceptional service! From start to finish, Ultimates Roofing prioritized professionalism. Cleanup was thorough, leaving my property in superior condition.' },
    { name: 'John T', place: 'Denver, Colorado', description: 'Ultimates Roofing transformed our house with top-notch materials and efficient service. The cleanup was impeccable, making the entire process hassle-free.' },
    { name: 'Sarah L', place: 'Austin, Texas', description: 'Absolutely incredible quality! Ultimates Roofing\'s utilization of top-tier materials, combined with their remarkably swift installation, surpassed all my expectations. My home has undergone a stunning transformation and has never looked better!' }
]

function ReviewsPage() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='reviews-section'>
            <h1 className='reviews-heading'>Reviews</h1>
            <Row style={{ margin: "0" }}>
                {reviews.map((review, index) => (
                    <Col key={index}>
                        <Card className='review-cards'>
                            <div className='reviewcard-heading'>
                                <h2 className='review-client'>{review.name}</h2>
                                <div className='review-place'>{review.place}</div>
                            </div>
                            <hr style={{ color: "#F9F9F9" }} />
                            <div className='reviewcard-description'>
                                <img className='quote' src={Quote} alt='reviews-quote' />
                                <p className='reviews-para'>{review.description}</p>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default ReviewsPage