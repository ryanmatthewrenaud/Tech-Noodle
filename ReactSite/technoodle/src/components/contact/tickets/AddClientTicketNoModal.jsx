import { useState } from "react";
import axios from "axios";

import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

export default function AddClientTicketNoModal({ contactID, show }) {
    const [formData, setFormData] = useState({
        device: '',
        description: '',
    });

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:8080/api/contacts/${contactID}/tickets`, formData);
            setFormData({
                device: '',
                description: '',
            });
        } catch (error) {
            setFormData({
                device: '',
                description: '',
            });
            console.error('Error submitting form data:', error);
        }
    }

    return (
        <div>
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
            <Button variant="primary" type="submit" onClick={handleSubmit}>
                Save Changes
            </Button>
        </div>
    )
}