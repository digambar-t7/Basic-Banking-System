import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Customer from './Customer';

const Customers = () => {

    const [clients, setClients] = useState([]);

    const fetchClients = async () => {
        const response = await fetch('http://localhost:8001/api/fetch', {
            "method": "GET"
        })
        const json = await response.json()
        setClients(json.clients)
    }

    useEffect(() => {
        fetchClients();
    }, []);

    return <div className='bg-light'>
        <Container className='my-5'  >
            <h1 className='text-center pt-3'>Premium Clients of Bank of Espanol</h1>
            <div className='row'>
                {clients.map((client) => {
                    return <div className='col-md-4 my-3' key={client.acc}>
                        <Customer client={client} className="col-md-4" />
                    </div>
                })}
            </div>
        </Container >
    </div>;
};

export default Customers;
