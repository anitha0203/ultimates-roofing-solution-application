import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Form, Row, Button, Toast, Spinner } from 'react-bootstrap'
import { IoMailOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { SlClock } from "react-icons/sl";
import { CiLocationOn } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import './ContactPage.css'
import LogosComponent from '../HomePage/LogosComponent/LogosComponent';

function ContactPage() {

    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [toast, setToast] = useState(false)
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        service: '',
        address: '',
        state: '',
        city: '',
        zipcode: '',
        message: '',
        images: [],
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
        if (formData.firstName === '' || formData.lastName === '' || formData.phoneNumber === '' || formData.email === '' || formData.address === '' || formData.state === '' || formData.city === '' || formData.zipcode === '' || formData.service === '') {
            setErrorMessage("Please fill all required fields");
        } else if (formData.phoneNumber.length !== 10) {
            setErrorMessage("PhoneNumber is not valid");
        } else if (!emailPattern.test(formData.email)) {
            setErrorMessage("E-Mail is not valid");
        } else if (formData.zipcode.length !== 5) {
            setErrorMessage("Zipcode is not valid");
        } else {
            setErrorMessage('');
            setLoading(true);
            const formDataForUpload = new FormData();
            Object.entries(formData).forEach(([key, value]) => {
                if (key === 'images') {
                    for (let i = 0; i < value.length; i++) {
                        formDataForUpload.append('images', value[i]);
                    }
                } else {
                    formDataForUpload.append(key, value);
                }
            });
            console.log(formDataForUpload);
            console.log(formData);
            axios.post('', { formDataForUpload }).then(res => { setToast(true); navigate("/success-page") })
                .catch((error) => {
                    setToast(true);
                    if (error.response) {
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
        window.scrollTo(0, 0);
        setVisible(true);
        if (toast) {
            const timer = setTimeout(() => {
                setToast(false);
            }, 10000);

            return () => clearTimeout(timer);
        }
    }, [toast]);

    const handleImageChange = (e) => {

        const files = e.target.files;
        setErrorMessage('');

        setFormData((prevFormData) => ({
            ...prevFormData,
            images: [...files],
        }));
    };

    return (
        <div className='contact-page'>

            <div className='contact-us'>
                <h2 className='contact-heading'>Contact Us</h2>
                <Row style={{ margin: "1px auto" }} className='contact-sections-row'>
                    <Col>
                        <div className={`contact-sections ${visible ? 'fade-in visible' : 'fade-in'}`}>
                            <div className='contact-text'>
                                <p style={{ fontWeight: "bold", fontSize: "23px" }}><LuPhone className='contact-icon' /> Call Us</p>
                                <p className='address-text'>614-602-7980</p>
                            </div>
                        </div>
                    </Col>

                    <Col>
                        <div className={`contact-sections ${visible ? 'fade-in visible' : 'fade-in'}`}>
                            <div className='contact-text'>
                                <p style={{ fontWeight: "bold", fontSize: "23px" }}><IoMailOutline className='contact-icon' /> E-mail</p>
                                <p className='address-text'>admin - roofs@ultimatesolutionsit.com</p>
                                <p className='address-text'>sales - hrroofs@ultimatesolutionsit.com</p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className={`contact-sections ${visible ? 'fade-in visible' : 'fade-in'}`}>
                            <div className='contact-text'>
                                <p style={{ fontWeight: "bold", fontSize: "23px" }}><SlClock className='contact-icon' /> Timings</p>
                                <p className='address-text'>Monday - Friday</p>
                                <p className='address-text'>9 AM - 5 PM</p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className={`contact-sections ${visible ? 'fade-in visible' : 'fade-in'}`}>
                            <div className='contact-text'>
                                <p style={{ fontWeight: "bold", fontSize: "23px" }}><CiLocationOn className='contact-icon' /> Address</p>
                                <p className='address-text'>Columbus, Ohio</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>

            {toast ? (
                <Toast style={{ position: 'fixed', top: "10%", right: 0 }}>
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
                        <Form>
                            <Row className='names-roww'>
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

                            <Row className='names-roww'>
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
                                            <span style={{ color: 'red' }}>*</span> Email
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
                            <Row className='names-roww'>
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

                                <Col>
                                    <Form.Group>
                                        <Form.Label className="label">
                                            <span style={{ color: 'red' }}>*</span> Address
                                        </Form.Label>
                                        <Form.Control
                                            type="string"
                                            name="address"
                                            value={formData.address}
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
                                            <span style={{ color: 'red' }}>*</span> State
                                        </Form.Label>
                                        <Form.Control
                                            type="string"
                                            name="state"
                                            value={formData.state}
                                            onChange={handleInputChange}
                                            isInvalid={errorMessage}
                                            className="input"
                                        />
                                    </Form.Group>
                                </Col>

                                <Col>
                                    <Form.Group>
                                        <Form.Label className="label">
                                            <span style={{ color: 'red' }}>*</span> City
                                        </Form.Label>
                                        <Form.Control
                                            type="string"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleInputChange}
                                            isInvalid={errorMessage}
                                            className="input"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label className="label">
                                            <span style={{ color: 'red' }}>*</span> Zipcode
                                        </Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="zipcode"
                                            value={formData.zipcode}
                                            onChange={handleInputChange}
                                            isInvalid={errorMessage}
                                            className="input"
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>


                            <Row className='names-roww'>
                                <Form.Group>
                                    <Form.Label className='label'>Upload Images</Form.Label>
                                    <Form.Control
                                        type='file'
                                        name='images'
                                        onChange={handleImageChange}
                                        accept='image/*'
                                        multiple
                                        className='input'
                                    />
                                </Form.Group>
                            </Row>

                            <Row className='names-roww'>
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
                            <div className="errormessage">
                                {errorMessage !== '' ? (
                                    <div>
                                        <p style={{margin: "0px"}}>{errorMessage}</p>
                                    </div>
                                ) : null}
                            </div>
                            <div style={{ textAlign: "center" }}>
                                <Button onClick={handleSubmit} type="submit" style={{ marginTop: "2rem", padding: "1rem 6rem" }} className='estimate-btn'>
                                    Send Now
                                </Button>
                            </div>

                        </Form>
                    </Col>
                    <Col className='image-coll'>
                        {/****  <img src={ContactForm} /> **/}
                        <iframe className='map-style' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195656.61280534012!2d-83.15563599435002!3d39.98309783384798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883889c1b990de71%3A0xe43266f8cfb1b533!2sColumbus%2C%20OH%2C%20USA!5e0!3m2!1sen!2sin!4v1703668481347!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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

export default ContactPage