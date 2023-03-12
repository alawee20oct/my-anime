import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Anime from './Anime';

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
        <>
            <Container className="mt-5 pt-5 text-center">
                <h3 className="text-dark ">My Anime</h3>
            </Container>

            <Container className="mt-5 mx-auto">
                <Row className="justify-content-center">
                    {cards.map((item, idx) => 
                        <Anime key={idx} animeTitle={item.title} imgPath={item.img} />
                    )}
                </Row>
            </Container>
        </>
    );
}

export default Content;