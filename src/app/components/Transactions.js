import React, { useState, useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';

const Transactions = () => {

    const [transactions, setTransactions] = useState([]);

    const fetchTransactions = async (whom) => {
        const response = await fetch(`http://localhost:8001/api/transactions/${whom}`, {
            "method": "GET"
        })
        const json = await response.json()
        setTransactions(json.transactions)
    }

    useEffect(() => {
        const client = localStorage.getItem('transaction-for')
        if (client) {
            fetchTransactions(client);
            localStorage.clear()
        } else {
            fetchTransactions('all');
        }
    }, []);


    return <div id='Transactions' className='my-5 bg-light h-100'><Container>
        <h1 className='text-center py-3'>View all Transactions here!</h1>
        <Table striped bordered hover className='text-center'>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Sender</th>
                    <th>Reciever</th>
                    <th>Amount</th>
                    <th>Available Funds</th>
                </tr>
            </thead>
            <tbody>
                {transactions && transactions.map((e) => {
                    return <tr key={e.amount}>
                        <td>{e.timestamp.split('T')[0]}</td>
                        <td>{e.sender}</td>
                        <td>{e.reciever}</td>
                        <td>{e.amount}</td>
                        <td>{e.funds}</td>
                    </tr>
                })}
            </tbody>
        </Table>
    </Container></div>;
};

export default Transactions;
