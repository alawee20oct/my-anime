import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';

import naruto from "./assets/images/naruto-shippuden.jpg";
import reborn from "./assets/images/katekyo-hitman-reborn.jpg";
import dragonball from "./assets/images/dragonball-z.jpg";
import bleach from "./assets/images/bleach.jpg";
import titan from "./assets/images/attack-on-titan.jpg";
import demonslayer from "./assets/images/kimetsu-no-yaiba.jpg";

function App() {
  return (
    <>
      <div className="mt-5 text-center">
        <h2 className="text-dark">My Anime List</h2>
      </div>

      <section>
        <div className="container mt-5">

          <div className="row row-cols-xl-6 row-cols-lg-4 row-cols-md-2">

            <div className="col">
              <div className="card mx-auto h-100 border-0 text-center" style={{width: "160px", height: "240px"}}>
                <img src={naruto} className="card-img" alt='' style={{width: "100%", height: "100%", objectFit: "cover"}}/>
                <div className="card-body">
                  <h6 className="card-title" style={{marginLeft: "-100%", marginRight: "-100%"}}>Naruto Shippuden</h6>
                  <div class="progress" style={{height: "12px"}}>
                    <div class="progress-bar bg-primary progress-bar-striped progress-bar-animated" role="progressbar" style={{width: "100%"}}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card mx-auto h-100 border-0 text-center" style={{width: "160px", height: "240px"}}>
                <img src={dragonball} className="card-img" alt='' style={{width: "100%", height: "100%", objectFit: "cover"}}/>
                <div className="card-body">
                  <h6 className="card-title" style={{marginLeft: "-100%", marginRight: "-100%"}}>Dragonball Z</h6>
                  <div class="progress" style={{height: "12px"}}>
                    <div class="progress-bar bg-primary progress-bar-striped progress-bar-animated" role="progressbar" style={{width: "100%"}}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card mx-auto h-100 border-0 text-center" style={{width: "160px", height: "240px"}}>
                <img src={bleach} className="card-img" alt='' style={{width: "100%", height: "100%", objectFit: "cover"}}/>
                <div className="card-body">
                  <h6 className="card-title" style={{marginLeft: "-100%", marginRight: "-100%"}}>Bleach</h6>
                  <div class="progress" style={{height: "12px"}}>
                    <div class="progress-bar bg-warning progress-bar-striped progress-bar-animated" role="progressbar" style={{width: "100%"}}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col text-center">
              <div className="card mx-auto h-100 border-0 text-center" style={{width: "160px", height: "240px"}}>
                <img src={reborn} className="card-img" alt='' style={{width: "100%", height: "100%", objectFit: "cover"}}/>
                <div className="card-body">
                  <h6 className="card-title" style={{marginLeft: "-100%", marginRight: "-100%"}}>Katekyo Hitman Reborn!</h6>
                  <div class="progress" style={{height: "12px"}}>
                    <div class="progress-bar bg-primary progress-bar-striped progress-bar-animated" role="progressbar" style={{width: "100%"}}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col text-center">
              <div className="card mx-auto h-100 border-0 text-center" style={{width: "160px", height: "240px"}}>
                <img src={titan} className="card-img" alt='' style={{width: "100%", height: "100%", objectFit: "cover"}}/>
                <div className="card-body">
                  <h6 className="card-title" style={{marginLeft: "-100%", marginRight: "-100%"}}>Attack on Titan</h6>
                  <div class="progress" style={{height: "12px"}}>
                    <div class="progress-bar bg-danger progress-bar-striped progress-bar-animated" role="progressbar" style={{width: "100%"}}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col text-center">
              <div className="card mx-auto h-100 border-0 text-center" style={{width: "160px", height: "240px"}}>
                <img src={demonslayer} className="card-img" alt='' style={{width: "100%", height: "100%", objectFit: "cover"}}/>
                <div className="card-body">
                  <h6 className="card-title" style={{marginLeft: "-100%", marginRight: "-100%"}}>Demon Slayer</h6>
                  <div class="progress" style={{height: "12px"}}>
                    <div class="progress-bar bg-danger progress-bar-striped progress-bar-animated" role="progressbar" style={{width: "100%"}}></div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}

export default App;