import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Customer from './Customer';

const Customers = () => {

    const [clients, setClients] = useState([
        {
            "name": "Michael Jordan",
            "email": "michaeljordan@gmail.com",
            "acc": "93XXXXXXXX52",
            "ifsc": "BOSP411014",
            "bal": "799301"
        },
        {
            "name": "Jobe Bryant",
            "email": "michaeljordan@gmail.com",
            "acc": "93XXXXXXXX52",
            "ifsc": "BOSP411014",
            "bal": "799301"
        }

    ]);

    return <div className='bg-light'><Container className='my-5'  >
        <h1 className='text-center pt-3'>Premium Clients of Bank of Espanol</h1>
        <div className='row'>
            {clients.map((client) => {
                return <div className='col-md-4 my-3'>
                    <Customer client={client} className="col-md-4" />
                </div>
            })}
        </div>

    </Container >
    </div>;
};

export default Customers;
