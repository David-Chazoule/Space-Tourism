import { useEffect, useState } from "react";
import axios from "axios";

interface DestinationTravel {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  description: string;
  distance: string;
  travel: string;
}

function Destination() {
  const [destination, setDestination] = useState<DestinationTravel[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axios
      .get( process.env.PUBLIC_URL +"/data.json")
      .then((response) => setDestination(response.data.destinations))
      .catch((error) => console.error("error", error));
  }, []);

  const handleIndexChange = (index: number) => {
    setCurrentIndex(index);
  };

  const currentDestination = destination[currentIndex];

  return (
    <div className="destination_container">
      <div className="box">
        <h1 className="title-page">
          <span>01</span> PICK YOUR DESTINATION
        </h1>
        {currentDestination && (
          <div className="destination">
            <div className="img-box">
              <img
                src={`${currentDestination.images.png}`}
                alt="image-planete"
              />
            </div>
            <div className="information-box">
              <div className="destination-choice">
                {destination.map((elem, index) => (
                  <button
                    key={index}
                    className={`destination-button ${
                      index === currentIndex ? "active" : ""
                    }`}
                    onClick={() => handleIndexChange(index)}
                  >
                    {elem.name}
                  </button>
                ))}
              </div>
              <div className="info-planete">
                <h1>{currentDestination.name}</h1>
                <p>{currentDestination.description}</p>
              </div>
              <div className="line-box">
                <div className="line"></div>
              </div>
              <div className="distance-time-box">
                <div>
                  <h5>AVG. DISTANCE</h5>
                  <h4>{currentDestination.distance.toUpperCase()}</h4>
                </div>
                <div>
                  <h5>EST. TRAVEL TIME</h5>
                  <h4>{currentDestination.travel.toUpperCase()}</h4>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Destination;
