import React, { useEffect, useState } from 'react'
import { Card, Col, Form, Row, Spinner, Toast, Button, Accordion } from 'react-bootstrap';
import Quote from '../../assets/HomePageImages/Quote.png'
import './ReviewsPage.css'
import LogosComponent from '../HomePage/LogosComponent/LogosComponent';
import ReviewsPageImage from '../../assets/ReviewsPageImage.png'
import axios from 'axios';
import { Helmet } from 'react-helmet';

//  Reviews Data
const reviews = [
    { reviewerName: 'John T', reviewerAddress: 'Denver, Colorado', reviewerMessage: 'Ultimates Roofing transformed our house with top-notch materials and efficient service. The cleanup was impeccable, making the entire process hassle-free.' },
    { reviewerName: 'Sarah L', reviewerAddress: 'Austin, Texas', reviewerMessage: 'Absolutely incredible quality! Ultimates Roofing\'s utilization of top-tier materials, combined with their remarkably swift installation, surpassed all my expectations. My home has undergone a stunning transformation and has never looked better!' },
    { reviewerName: 'Robert H', reviewerAddress: 'Orlando, Florida', reviewerMessage: 'Exceptional service! From start to finish, Ultimates Roofing prioritized professionalism. Cleanup was thorough, leaving my property in superior condition.' },
    { reviewerName: 'Emily W', reviewerAddress: ' Seattle, Washington', reviewerMessage: 'Impressive turnaround! Ultimates Roofing\'s streamlined process and prompt dumpster removal made the entire experience seamless. A satisfied customer!' },
    { reviewerName: 'John T', reviewerAddress: 'Denver, Colorado', reviewerMessage: 'Ultimates Roofing transformed our house with top-notch materials and efficient service. The cleanup was impeccable, making the entire process hassle-free.' },
    { reviewerName: 'Sarah L', reviewerAddress: 'Austin, Texas', reviewerMessage: 'Absolutely incredible quality! Ultimates Roofing\'s utilization of top-tier materials, combined with their remarkably swift installation, surpassed all my expectations. My home has undergone a stunning transformation and has never looked better!' },
    { reviewerName: 'Robert H', reviewerAddress: 'Orlando, Florida', reviewerMessage: 'Exceptional service! From start to finish, Ultimates Roofing prioritized professionalism. Cleanup was thorough, leaving my property in superior condition.' },
    { reviewerName: 'Emily W', reviewerAddress: ' Seattle, Washington', reviewerMessage: 'Impressive turnaround! Ultimates Roofing\'s streamlined process and prompt dumpster removal made the entire experience seamless. A satisfied customer!' },
    { reviewerName: 'John T', reviewerAddress: 'Denver, Colorado', reviewerMessage: 'Ultimates Roofing transformed our house with top-notch materials and efficient service. The cleanup was impeccable, making the entire process hassle-free.' },
    { reviewerName: 'Sarah L', reviewerAddress: 'Austin, Texas', reviewerMessage: 'Absolutely incredible quality! Ultimates Roofing\'s utilization of top-tier materials, combined with their remarkably swift installation, surpassed all my expectations. My home has undergone a stunning transformation and has never looked better!' },
    { reviewerName: 'Robert H', reviewerAddress: 'Orlando, Florida', reviewerMessage: 'Exceptional service! From start to finish, Ultimates Roofing prioritized professionalism. Cleanup was thorough, leaving my property in superior condition.' },
    { reviewerName: 'Emily W', reviewerAddress: ' Seattle, Washington', reviewerMessage: 'Impressive turnaround! Ultimates Roofing\'s streamlined process and prompt dumpster removal made the entire experience seamless. A satisfied customer!' },
]

function ReviewsPage() {

    const url = 'http://localhost:8080/v1/ultimates/reviews';

    const [reviewData, setReviewData] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [successToast, setSuccessToast] = useState(false)
    const [loading, setLoading] = useState(false);
    const [reviewsData, setReviewsData] = useState({
        name: '',
        address: '',
        message: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setErrorMessage('');

        setReviewsData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrorMessage('');

        if (reviewsData.name === '' || reviewsData.address === '' || reviewsData.message === '') {
            setErrorMessage("Please fill all required fields");
        } else {
            setErrorMessage('');
            setLoading(true);
            axios.post(url, reviewsData).then(res => {
                // Reset the form after successful submission
                setReviewsData({ name: '', address: '', message: '' });
                setSuccessToast(true)
                // Close the success toast after 15 seconds
                setTimeout(() => {
                    setSuccessToast(false);
                }, 15000);
            })
                .catch((error) => {
                    if (error.response) {
                        setErrorMessage(error.response.data.message);
                    } else {
                        setErrorMessage("An unexpected error occurred. Please try again.");
                        console.error("An error occurred:", error.message);
                    }
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    };

    // useEffect(() => {
    //     window.scrollTo(0, 0);
    //     setLoading(true);
    //     axios.get(url).then(res => {
    //         setReviewData(res.data);
    //     })
    //         .catch((error) => {
    //             if (error.response) {
    //                 setErrorMessage(error.response.data.message);
    //             } else {
    //                 setErrorMessage("An unexpected error occurred. Please try again.");
    //                 console.error("An error occurred:", error.message);
    //             }
    //         })
    //         .finally(() => {
    //             setLoading(false);
    //         });
    // }, []);

    // Thank you for sharing your feedback with us!

    return (
        <div>
        <Helmet>
        <title>Ultimations Solution LLC - Reviews</title>
        <link rel="canonical" href="https://visheshcountrycache.tech/reviews" />
        <meta name="description" content="Read reviews from satisfied clients who have experienced Ultimations Solution LLC's exceptional construction and home improvement services. Discover why we are a trusted partner for roofing, siding, windows, and more." />
        <meta name="keywords" content="Ultimations Solution LLC, reviews, testimonials, residential roofing, construction, home improvement" />
        <meta name="author" content="Ultimations Solution LLC" />
        <meta name="robots" content="index, follow" />
        <html lang="en" />
      </Helmet>

            {successToast ? (
                <Toast style={{ position: 'fixed', top: "9%", right: 0, color: "#fff" }} bg='success'>
                    <Toast.Header>
                        <strong className="me-auto">THANK YOU</strong>
                    </Toast.Header>
                    <Toast.Body>Your feedback has been received and is important to us</Toast.Body>
                </Toast>
            ) : null}

            <div className='projects-main'>
                <p className='projects-us'><span style={{ color: "#B22335", fontWeight: "bold" }}>I</span> Reviews</p>
                <p className='projects-page-text'>Our valued clients graciously shared their meaningful experiences, illuminating the profound impact of our roofing solutions. These testimonials, echoing with the resonance of satisfaction, went beyond mere words, offering a deep dive into our historical dedication to unmatched quality, groundbreaking innovation, and unwavering customer satisfaction. Each testimonial became a living testament to the enduring ethos that has defined our journey, showcasing the tangible difference our past commitment has made in elevating properties and exceeding expectations.</p>
            </div>

            <Row className='reviews-section'>
                {reviews.map((review, index) => (
                    <Col key={index} style={{ padding: "0" }}>
                        <Card className='review-cards'>
                            <div className='reviewcard-heading'>
                                <h2 className='review-client'>{review.reviewerName}</h2>
                                <div className='review-place'>{review.reviewerAddress}</div>
                            </div>
                            <hr style={{ color: "#F9F9F9" }} />
                            <div className='reviewcard-description'>
                                <img className='quote' src={Quote} alt='reviews-quote' />
                                <p className='projects-page-text'>{review.reviewerMessage}</p>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>

            <Row className='reviews-section1'>
                <Accordion defaultActiveKey="0" style={{ marginTop: "3rem" }}>
                    {reviews.map((review, index) => (
                        <Accordion.Item key={index} eventKey={index.toString()}>
                            <Accordion.Header><div>{review.reviewerName}<div style={{ fontSize: "13px" }}>{review.reviewerAddress}</div></div></Accordion.Header>
                            <Accordion.Body>
                                <img className='quote' src={Quote} alt='reviews-quote' />
                                <p className="reviews-para-mobile">{review.reviewerMessage}</p>
                            </Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>
            </Row>


            <div className='projects-main1'>
                <h2 className='service-page-heading'>Share Your Experience</h2>
                <p className='projects-page-text'>Please take a moment to share your experience with Ultimates Roofing LLC. Your feedback helps us continually improve our services and assists future customers in making informed decisions. Thank you for being a part of our journey.</p>
                <Row style={{ marginTop: "4rem" }}>
                    <Col className='form-image-col'>
                        <img className='quote-image' src={ReviewsPageImage} alt='ultimates-solution-llc' />
                    </Col>
                    <Col>
                        <Form>
                            <Row className='names-roww'>
                                <Col>
                                    <Form.Group>
                                        <Form.Label className="label">
                                            <span style={{ color: 'red' }}>*</span> Full Name
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="name"
                                            value={reviewsData.name}
                                            onChange={handleInputChange}
                                            isInvalid={errorMessage}
                                            className="input"
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row className='names-roww'>
                                <Col>
                                    <Form.Group>
                                        <Form.Label className="label">
                                            <span style={{ color: 'red' }}>*</span> Location
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="address"
                                            value={reviewsData.address}
                                            onChange={handleInputChange}
                                            isInvalid={errorMessage}
                                            className="input"
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row className='names-roww'>
                                <Form.Group>
                                    <Form.Label className="label">
                                        <span style={{ color: 'red' }}>*</span> Message
                                    </Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        name="message"
                                        value={reviewsData.message}
                                        onChange={handleInputChange}
                                        placeholder='Please enter your message'
                                        className="input"
                                        style={{ height: "20vh" }}
                                    />
                                </Form.Group>
                            </Row>
                            <div className="errormessage">
                                {errorMessage !== '' ? (
                                    <div>
                                        <p style={{ margin: "0px" }}>{errorMessage}</p>
                                    </div>
                                ) : null}
                            </div>
                            <div style={{ textAlign: "center" }}>
                                <Button onClick={handleSubmit} type="submit" className='review-btn'>
                                    Submit
                                </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </div>

            <LogosComponent />

            {loading ? (
                <div className="loading-overlay">
                    <div className="loading-indicator">
                        <Spinner animation="border" variant="primary" />
                    </div>
                </div>
            ) : null}
        </div>

    )
}

export default ReviewsPage