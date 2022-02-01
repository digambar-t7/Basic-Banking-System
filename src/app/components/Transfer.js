import React from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';

const Transfer = (props) => {
    const { client } = props;

    const submit = () => {
        props.onHide();
        console.log("submitted")
    }
    return <>
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Transfer Funds
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextBalance">
                        <Form.Label column sm="4">
                            My Balance
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control type="text" plaintext readOnly value={`$${client.bal}`} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="4">
                            Reciever's Email
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control type="email" defaultValue="email@example.com" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPin">
                        <Form.Label column sm="4">
                            Amount($)
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control type='number' defaultValue="1000" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="4">
                            PIN
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control type="password" placeholder="Password" />
                        </Col>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={submit}>Send</Button>
                <Button variant="danger" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    </>;
};

export default Transfer;
