import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Container, Form, Row, Button, Toast } from 'react-bootstrap'
import { MdAccessTime, MdOutlineEmail, MdOutlineLocationOn, MdOutlinePhone } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import './ContactPage.css'
import LogosComponent from '../HomePage/LogosComponent/LogosComponent';
import ContactForm from '../../assets/ContactForm.png'

function ContactPage() {

    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [toast, setToast] = useState(false)
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        service: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        message: ''
    });
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setErrorMessage('');

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrorMessage('');
        if (formData.firstName === '' || formData.lastName === '' || formData.email === '' || formData.phoneNumber === '' ||
            formData.service === '' || formData.address === '' || formData.city === '' || formData.state === '' || formData.zip === '') {
            setErrorMessage("Please fill all required fields");
        } else if (formData.phoneNumber.length != 10) {
            setErrorMessage("PhoneNumber is not valid");
        } else if (!emailPattern.test(formData.email)) {
            setErrorMessage("Email is not valid");
        } else if (formData.zip.length != 5) {
            setErrorMessage("Zip is not valid");
        } else {
            setErrorMessage('');
            setLoading(true);
            axios.post('', { formData }).then(res => { setToast(true); navigate("/success-page") })
                .catch((error) => {
                    setToast(true);
                    if (error.response && error.response.status === 404 || error.response.status === 500 || error.response.status === 400) {
                        setErrorMessage(error.response.data.message);
                    } else {
                        console.error("An error occurred:", error.message);
                    }
                }).finally(() => {
                    setLoading(false);
                });
        }
    };

    useEffect(() => {
        if (toast) {
            const timer = setTimeout(() => {
                setToast(false);
            }, 10000);

            return () => clearTimeout(timer);
        }
    }, [toast]);


    return (
        <div className='contact-page'>

            <div className='contact-us'>
                <h2 className='contact-heading'>Contact Us</h2>
                <Row style={{ margin: "1px auto" }}>
                    <Col>
                        <div className='contact-sections'>
                            <MdOutlinePhone className='contact-icon' />
                            <div className='contact-text'>
                                <p style={{ fontWeight: "bold", fontSize: "23px" }}>Call Us</p>
                                <p>614-602-7980</p>
                            </div>
                        </div>
                    </Col>
                    
                    <Col>
                        <div className='contact-sections'>
                            <MdOutlineEmail className='contact-icon' />
                            <div className='contact-text'>
                                <p style={{ fontWeight: "bold", fontSize: "23px" }}>E-mail</p>
                                <p>thossan247@gmail.com</p>
                                <p>rockakash100@gmail.com</p>
                            </div>
                        </div>
                    </Col>
                   <Col>
                        <div className='contact-sections'>
                            <MdAccessTime className='contact-icon' />
                            <div className='contact-text'>
                                <p style={{ fontWeight: "bold", fontSize: "23px" }}>Timings</p>
                                <p>Monday - Friday</p>
                                <p>9 AM - 5 PM</p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className='contact-sections'>
                            <MdOutlineLocationOn className='contact-icon' />
                            <div className='contact-text'>
                                <p style={{ fontWeight: "bold", fontSize: "23px" }}>Address</p>
                                <p>Columbus, Ohio</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>

            {toast ? (
                <Toast style={{ position: 'fixed', top: 0, right: 0 }}>
                    <Toast.Header>
                        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                        <strong className="me-auto">THANK YOU</strong>
                    </Toast.Header>
                    <Toast.Body>Your message has been submitted successfully.</Toast.Body>
                </Toast>
            ) : null
            }

            <div style={{ marginTop: "5rem" }}>
                <h2 className='contact-form-heading'>Reach Out To Us</h2>
                <Row className='contact-form'>
                    <Col>
                        <Form style={{ marginTop: "3vh" }}>
                            <div className="errormessage">
                                {errorMessage !== '' ? (
                                    <div className="error">
                                        <p>{errorMessage}</p>
                                    </div>
                                ) : null}
                            </div>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label className="label">
                                            <span style={{ color: 'red' }}>*</span> First Name
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
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
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            isInvalid={errorMessage}
                                            className="input"
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label className="label">
                                            <span style={{ color: 'red' }}>*</span> Phone Number
                                        </Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="phoneNumber"
                                            value={formData.phoneNumber}
                                            onChange={handleInputChange}
                                            isInvalid={errorMessage}
                                            className="input"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label className="label">
                                            <span style={{ color: 'red' }}>*</span> E-Mail
                                        </Form.Label>
                                        <Form.Control
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            isInvalid={errorMessage}
                                            className="input"
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label className="label">
                                            <span style={{ color: 'red' }}>*</span> Service
                                        </Form.Label>
                                        <Form.Select
                                            name="service"
                                            value={formData.service}
                                            onChange={handleInputChange}
                                            placeholder='Choose a service'
                                            className="input"
                                        >
                                            <option></option>
                                            <option value="residential">Residential Roofing</option>
                                            <option value="commercial">Commercial Roofing</option>
                                            <option value="siding">Siding</option>
                                            <option value="gutters">Gutters</option>
                                            <option value="windows">Windows</option>
                                            <option value="other">Other</option>
                                            {/* Add more options as needed */}
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label className="label">
                                            <span style={{ color: 'red' }}>*</span> Address
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="address"
                                            value={formData.address}
                                            onChange={handleInputChange}
                                            className="input"
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label className="label">
                                            <span style={{ color: 'red' }}>*</span> State
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="state"
                                            value={formData.state}
                                            onChange={handleInputChange}
                                            className="input"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label className="label">
                                            <span style={{ color: 'red' }}>*</span>  Zip
                                        </Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="zip"
                                            value={formData.zip}
                                            onChange={handleInputChange}
                                            className="input"
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Form.Group>
                                    <Form.Label className="label">
                                        Message
                                    </Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        placeholder='Please share detailed information about your project to help us understand better.'
                                        className="input"
                                        style={{ height: "15vh" }}
                                    />
                                </Form.Group>
                            </Row>
                            <div style={{ textAlign: "center" }}>
                                <Button onClick={handleSubmit} type="submit" style={{ marginTop: "2rem", padding: "1rem 6rem" }} className='estimate-btn'>
                                    Send Now
                                </Button></div>

                        </Form>
                    </Col>
                    <Col>
                        <img src={ContactForm} />
                    </Col>

                </Row>
            </div>
        </div>
    )
}

export default ContactPage