
import React, { useState } from 'react'
import { Button, Col, Row, Form, Spinner, Toast } from 'react-bootstrap';
import './MainHeader.css'
import axios from 'axios';

function InstantRoofQuote() {

    const url = 'http://localhost:8080/v1/ultimates/customer/register';

    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [successToast1, setSuccessToast1] = useState(false)

    const [details, setDetails] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        source: 'modal',
    });
    const handleInputChange1 = (e) => {
        const { name, value } = e.target;
        setErrorMessage('');

        setDetails((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrorMessage('');

        if (details.firstName === '' || details.lastName === '' || details.phoneNumber === '') {
            setErrorMessage("Please fill all required fields");
        } else if (details.phoneNumber.length !== 10) {
            setErrorMessage("PhoneNumber is not valid");
        } else {
            setErrorMessage('');
            setLoading(true);
            SubmitData(details);
        }
    };

    const SubmitData = (ModalData) => {
        const formData = new FormData();
        formData.append('customerJson', JSON.stringify(ModalData));
        axios.post(url, formData)
            .then(res => {
                // Reset the form after successful submission
                setDetails({
                    firstName: '',
                    lastName: '',
                    phoneNumber: '',
                    source: 'modal',
                });
                setSuccessToast1(true)
                // Close the success toast after 15 seconds
                setTimeout(() => {
                    setSuccessToast1(false);
                }, 15000);

            })
            .catch((error) => {
                if (error.response) {
                    setErrorMessage(error.response.data.message);
                } else {
                    setErrorMessage("An unexpected error occurred. Please try again.");
                }
            })
            .finally(() => {
                setLoading(false);
            });
    }


    return (
        <div>
            {successToast1 ? (
                <Toast style={{ position: 'fixed', top: "9%", right: 0, color: "#fff" }} bg='success'>
                    <Toast.Header>
                        <strong className="me-auto">THANK YOU</strong>
                    </Toast.Header>
                    <Toast.Body>We will get back to you as soon as possible.</Toast.Body>
                </Toast>
            ) : null}

            <div style={{ display: 'flex', justifyContent: 'center' }} >
                <Form className='model-form'>
                    <Row className='names-roww'>
                        <Col>
                            <Form.Group>
                                <Form.Label className="label">
                                    <span style={{ color: 'red' }}>*</span> First Name
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    name="firstName"
                                    value={details.firstName}
                                    onChange={handleInputChange1}
                                    isInvalid={errorMessage}
                                    className="input"
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label className="label">
                                    <span style={{ color: 'red' }}>*</span> Last Name
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    name="lastName"
                                    value={details.lastName}
                                    onChange={handleInputChange1}
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
                                    <span style={{ color: 'red' }}>*</span> Phone Number
                                </Form.Label>
                                <Form.Control
                                    type="number"
                                    name="phoneNumber"
                                    value={details.phoneNumber}
                                    onChange={handleInputChange1}
                                    isInvalid={errorMessage}
                                    className="input"
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <div className="errormessage">
                        {errorMessage !== '' ? (
                            <div>
                                <p style={{ margin: "0px" }}>{errorMessage}</p>
                            </div>
                        ) : null}
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <Button onClick={handleSubmit} type="submit" style={{ marginTop: "2rem", padding: "1rem 5rem" }} className='form-btn'>
                            Submit
                        </Button>
                    </div>
                </Form>
            </div >

            {loading ? (
                <div className="loading-overlay">
                    <div className="loading-indicator">
                        <Spinner animation="border" variant="primary" />
                    </div>
                </div>
            ) : null}

        </div >
    );
};
export default InstantRoofQuote