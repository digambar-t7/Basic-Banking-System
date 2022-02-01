import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';

const Customer = () => {
    return <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>Michael Jordan</Card.Title>
            <Card.Text>
                <p>Account Number : 93XXXXXXXX52</p>
                <p>IFSC Number : BOSP411014</p>
                <p>Balance : $ 799301</p>
            </Card.Text>
            <div className='d-flex '>
                <Button variant="primary">Transfer Funds</Button>
                <Button variant="primary">View Transactions</Button>
            </div>
        </Card.Body>
    </Card>;
};

export default Customer;
