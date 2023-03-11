import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';

// import naruto from "./assets/images/naruto-shippuden.jpg";
// import reborn from "./assets/images/katekyo-hitman-reborn.jpg";
// import dragonball from "./assets/images/dragonball-z.jpg";
// import bleach from "./assets/images/bleach.jpg";
// import titan from "./assets/images/attack-on-titan.jpg";
// import demonslayer from "./assets/images/kimetsu-no-yaiba.jpg";

import Header from './components/Header';
import Content from './components/Content';

import Container from 'react-bootstrap/Container';

function App() {
  return (
    <>
      <Header/>

      <Container className="mt-5 pt-5 text-center">
        <h3 className="text-dark ">My Anime</h3>
      </Container>

      <Content/>
    </>
  );
}

export default App;