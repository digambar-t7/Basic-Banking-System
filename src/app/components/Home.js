import React from 'react';
import { Card, Carousel, Container } from 'react-bootstrap';

const Home = () => {
    return <div id='Home' className='bg-light h-100'>
        <Carousel >
            <Carousel.Item>
                <img
                    className="carousel-img d-block w-100"
                    src={require("../images/bitcoin.jpg")}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Espanol Bank whoops up Bitcoin</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="carousel-img d-block w-100"
                    src={require("../images/dogecoin.jpg")}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Doge being the most expensive meme in Spanish history</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="carousel-img d-block w-100"
                    src={require("../images/ethereum.jpeg")}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Espanol Bank reserves $2million fund for startups based on Ethereum network</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <Container>
            <h1 className='text-center py-3'>Welcome to Bank of Espanol</h1>
            <Card body>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The Bank of Spain (Spanish: Banco de España) is the central bank of Spain. Established in Madrid in 1782 by Charles III, today the bank is a member of the European System of Central Banks and is also Spain's national competent authority for banking supervision within the Single Supervisory Mechanism. Its activity is regulated by the Bank of Spain Autonomy Act.
            </Card>
            <h1 className='text-center py-3'>Let's create you an account</h1>
        </Container>
    </div>;
};

export default Home;
