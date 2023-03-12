import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';

function Anime({animeTitle, imgPath, animeStatus}) {
    return (
        <Col xl="2" lg="3" md="4" sm="6" xs="12">
            <Card className="mx-auto h-100 border-0 text-center" style={{width: "160px", height: "240px"}}>
                <Card.Img src={require("./../assets/images/"+imgPath+".jpg")} style={{width: "100%", height: "100%", objectFit: "cover"}}/>
                <Card.Body>
                    <Card.Title className="h6" style={{marginLeft: "-100%", marginRight: "-100%"}}>{animeTitle}</Card.Title>
                    <ProgressBar variant="primary" style={{height: "10px"}} animated now={100}/>
                </Card.Body>
            </Card>
        </Col>
    );

}

export default Anime;