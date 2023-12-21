import { useState } from 'react';
import './styling/Contacts.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

export default function AddContact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
    });

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }


    const handleSubmit = async (e) => {
        handleClose();
        try {
            const response = await axios.post(`http://localhost:8080/api/contacts`, formData);
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: ''
            });
        } catch (error) {
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: ''
            });
            console.error('Error submitting form data:', error);
        }
    }

    return (
        <>
            <Button onClick={handleShow}>
                Add Contact
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Contact Information</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder='John' />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type='text' name="lastName" value={formData.lastName} onChange={handleChange} placeholder='Doe' />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type='email' name="email"
                                        value={formData.email} onChange={handleChange} placeholder='none@none.com' />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control type='phone' name="phoneNumber"
                                        value={formData.phoneNumber} onChange={handleChange}
                                        placeholder='000-000-0000' />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" type="submit" onClick={handleSubmit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal >
        </ >
    )
};