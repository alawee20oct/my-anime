import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';

import naruto from "./assets/images/naruto-shippuden.jpg";
import reborn from "./assets/images/katekyo-hitman-reborn.jpg";
import dragonball from "./assets/images/dragonball-z.jpg";
import bleach from "./assets/images/bleach.jpg";

function App() {
  return (
    <>
      <div className="mt-5 text-center">
        <h2 className="text-dark">My Anime List</h2>
      </div>

      <div className="text-center mt-5 d-flex justify-content-center">
        <div className="card d-block justify-content-center align-items-center mx-4" style={{width: "200px", height: "320px"}}>
          <img src={naruto} className="card-img" alt='' style={{width: "100%", height: "100%", objectFit: "cover"}}/>
          <div className="card-body">
            <h5 className="card-title">Naruto Shippuden</h5>
          </div>
        </div>
        <div className="card d-block justify-content-center align-items-center mx-4" style={{width: "200px", height: "320px"}}>
          <img src={dragonball} className="card-img" alt='' style={{width: "100%", height: "100%", objectFit: "cover"}}/>
          <div className="card-body">
            <h5 className="card-title">Dragonball Z</h5>
          </div>
        </div>
        <div className="card d-block justify-content-center align-items-center mx-4" style={{width: "200px", height: "320px"}}>
          <img src={bleach} className="card-img" alt='' style={{width: "100%", height: "100%", objectFit: "cover"}}/>
          <div className="card-body">
            <h5 className="card-title">Bleach</h5>
          </div>
        </div>
        <div className="card d-block justify-content-center align-items-center mx-4" style={{width: "200px", height: "320px"}}>
          <img src={reborn} className="card-img" alt='' style={{width: "100%", height: "100%", objectFit: "cover"}}/>
          <div className="card-body">
            <h5 className="card-title">Katekyo Hitman Reborn!</h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;