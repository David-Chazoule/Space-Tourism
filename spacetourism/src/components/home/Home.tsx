import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home_container">
      <div>
        <div className="title_description-box">
          <h5>SO, YOU WANT TO TRAVEL TO</h5>
          <h1>SPACE</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="btn-box">
          <div className="circle-superior">
            <Link to="/Destination">
              <button>EXPLORE</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
