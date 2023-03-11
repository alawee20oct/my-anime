import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';

var cards = [
    {'title': "Naruto Shippuden", 'img': "naruto-shippuden"},
    {'title': "Dragonball Z", 'img': "dragonball-z"},
    {'title': "Katekyo Hitman Reborn!", 'img': "katekyo-hitman-reborn"},
    {'title': "Bleach", 'img': "bleach"},
    {'title': "Kimetsu no Yaiba", 'img': "kimetsu-no-yaiba"},
    {'title': "Attack on Titan", 'img': "attack-on-titan"},
]

function Content() {
    return (
        <Container className="mt-5 mx-auto">
            <Row className="justify-content-center">
                {cards.map((item, idx) => 
                    <Col xl="2" lg="3" md="4" sm="6" xs="12" key={idx}>
                        <Card className="mx-auto h-100 border-0 text-center" style={{width: "160px", height: "240px"}}>
                            <Card.Img src={require("./../assets/images/"+item.img+".jpg")} style={{width: "100%", height: "100%", objectFit: "cover"}}/>
                            <Card.Body>
                                <Card.Title className="h6" style={{marginLeft: "-100%", marginRight: "-100%"}}>{item.title}</Card.Title>
                                <ProgressBar variant="primary" style={{height: "10px"}} animated now={100}/>
                            </Card.Body>
                        </Card>
                    </Col>
                )}
            </Row>
        </Container>
    )
}

export default Content