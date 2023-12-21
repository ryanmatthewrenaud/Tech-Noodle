import { useState } from 'react';
import './styling/Contacts.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

export default function AddContactNoModal({ show, setShow }) {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
    });

    const [submissionStatus, setSubmissionStatus] = useState("");

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setShow(!show);
            const response = await axios.post(`http://localhost:8080/api/contacts`, formData);
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: ''
            });
            setSubmissionStatus("Succesfully submitted contact information! We will get back to you soon.")
        } catch (error) {
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: ''
            });
            console.error('Error submitting form data:', error);
            setSubmissionStatus("Unable to submit information right now, please try again later!")
        }
    }

    return (
        <div>
            <div hidden={show}>
                <Form onSubmit={handleSubmit} method="post">
                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>First Name *</Form.Label>
                                <Form.Control type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder='John' required />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Last Name *</Form.Label>
                                <Form.Control type='text' name="lastName" value={formData.lastName} onChange={handleChange} placeholder='Doe' required />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Email *</Form.Label>
                                <Form.Control type='email' name="email"
                                    value={formData.email} onChange={handleChange} placeholder='none@none.com' required />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Phone Number *</Form.Label>
                                <Form.Control type='phone' name="phoneNumber"
                                    value={formData.phoneNumber} onChange={handleChange}
                                    placeholder='000-000-0000' required />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button variant="primary" type="submit">Submit Contact Information</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
            <div>{submissionStatus}</div>
        </div >
    )
};