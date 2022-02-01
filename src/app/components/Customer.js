import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import Transfer from './Transfer';

const Customer = (props) => {
    const [modalShow, setModalShow] = useState(false);

    const { client } = props;
    return <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>{client.name}</Card.Title>
            <hr />
            <Card.Text>
                <p>Account Number : {client.acc}</p>
                <p>IFSC Number : {client.ifsc}</p>
                <p>Balance : $ {client.bal}</p>
            </Card.Text>
            <div className='d-flex justify-content-between'>
                <Button variant="info" size='sm' onClick={() => { setModalShow(true) }}>Transfer Funds</Button>
                <Button variant="info" href={`/transactions/${client.name}`} size='sm'>View Transactions</Button>
            </div>
        </Card.Body>
        <Transfer
            client={client}
            show={modalShow}
            onHide={() => setModalShow(false)}
        />
    </Card>;
};

export default Customer;
