import React from 'react';
import { Container, Table } from 'react-bootstrap';

const Transactions = () => {
    return <div id='Transactions' className='my-5 bg-light h-100'><Container>
        <h1 className='text-center py-3'>View all Transactions here!</h1>
        <Table striped bordered hover className='text-center'>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Sender</th>
                    <th>Reciever</th>
                    <th>Amount</th>
                    <th>Balance</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                </tr>
            </tbody>
        </Table>
    </Container></div>;
};

export default Transactions;
