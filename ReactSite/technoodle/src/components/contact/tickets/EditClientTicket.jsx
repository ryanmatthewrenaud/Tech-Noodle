import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

export default function EditClientTicket({ id, ticketID, device, description, contacted, lastContacted, disposition, archived }) {

    const [dispositionType, setDispostionType] = useState({
        notstarted: "Not Started",
        started: "Started",
        customer: "Customer Contacted Awaiting Response",
        completed: "Completed"
    })

    const [formData, setFormData] = useState({
        description: description,
        disposition: disposition,
        lastContacted: lastContacted,
        contacted: contacted,
        archived: archived
    });

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange = (event) => {
        const formFieldValue = event.target.type === 'checkbox' ? event.target.checked : event.target.value
        setFormData({ ...formData, [event.target.name]: formFieldValue, });
    }


    const handleSubmit = async (e) => {
        handleClose();
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:8080/api/contacts/${id}/tickets/${ticketID}`, formData);
        } catch (error) {
            console.error('Error submitting form data:', error);
        }
    }

    return (
        <>
            <Button variant="warning" onClick={handleShow}>
                Edit Contact
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Contact</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Device</Form.Label>
                                    <Form.Control type='text' placeholder='HP / Dell / Mac' value={device} readOnly />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control as='textarea' name="description" value={formData.description} onChange={handleChange} rows={3} placeholder='Problem goes here' />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Disposition</Form.Label>
                                    <Form.Select name="disposition" value={formData.disposition} onChange={handleChange}>
                                        <option value={dispositionType.notstarted}>{dispositionType.notstarted}</option>
                                        <option value={dispositionType.started}>{dispositionType.started}</option>
                                        <option value={dispositionType.customer}>{dispositionType.customer}</option>
                                        <option value={dispositionType.completed}>{dispositionType.completed}</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Last Contacted</Form.Label>
                                    <Form.Control type='date' name="lastContacted"
                                        value={formData.lastContacted} onChange={handleChange} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Contacted</Form.Label>
                                    <Form.Control type='checkbox' name="contacted" checked={formData.contacted} onChange={e => handleChange(e)} />
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