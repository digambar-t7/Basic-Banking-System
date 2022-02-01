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
            <div className='d-flex justify-content-between'>
                <Button variant="info" size='sm'>Transfer Funds</Button>
                <Button variant="info" size='sm'>View Transactions</Button>
            </div>
        </Card.Body>
    </Card>;
};

export default Customer;
