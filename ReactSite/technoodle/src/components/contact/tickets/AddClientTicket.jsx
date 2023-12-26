import { useState } from "react";
import axios from "axios";

import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

export default function AddClientTicket({ contactID }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [formData, setFormData] = useState({
        device: '',
        description: '',
    });

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    const handleClear = () => {
        this.setFormData({
            device: '',
            description: '',
        });
    }

    const handleSubmit = async (e) => {
        handleClose();
        try {
            const response = await axios.post(`http://localhost:8080/api/contacts/${contactID}/tickets`, formData);
            handleClear();
        } catch (error) {
            handleClear();
            console.error('Error submitting form data:', error);
        }
    }

    return (
        <div>
            <Button onClick={handleShow}>Add Ticket</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Ticket</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Device</Form.Label>
                                    <Form.Control type="text" name="device" value={formData.device} onChange={handleChange} placeholder='HP/Dell/MacBook' />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Issue Description</Form.Label>
                                    <Form.Control as='textarea' name="description"
                                        value={formData.description} onChange={handleChange} placeholder='Not Turning On // Data Transfer' rows={3} />
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
        </div>
    )
}