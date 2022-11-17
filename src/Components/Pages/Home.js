import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import CarouselSlider from './Homepage/Carousel';


const Home = () => {
    return (
        <div className='container'>
            <div className='w-100' >
                <CarouselSlider></CarouselSlider>
            </div>

            <div className='mt-5'>
                <h3 className='text-center '>আমাদের বৈশিষ্ট</h3>

                <Container className='mt-5'>

                    <Row>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src="https://i.ibb.co/LxY01Vy/Untitled-design-20.png" />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    
                                </Card.Body>
                            </Card>
                        </Col>
                        
                        <Col>
                            <Card>
                                <Card.Img variant="top" src="https://i.ibb.co/pZPzqnR/Untitled-design-19.png" />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    
                                </Card.Body>
                            </Card>
                        </Col>
                        
                        <Col>
                            <Card>
                                <Card.Img variant="top" src="https://i.ibb.co/VVybsNG/Untitled-design-18.png" />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    
                                </Card.Body>
                            </Card>
                        </Col>
                        
                    </Row>
                </Container>


            </div>












        </div>
    );
};

export default Home;