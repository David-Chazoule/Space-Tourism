import { useEffect, useState } from "react";
import axios from "axios";

interface TechnologyLaunch {
  name: string;
  images: {
    portrait: string;
    landscape: string;
  };
  description: string;
}

function Technology() {
  const [launch, setLaunch] = useState<TechnologyLaunch[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axios
      .get("/data.json")
      .then((response) => setLaunch(response.data.technology))
      .catch((error) => console.error("error", error));
  }, []);

  const handleIndexChange = (index: number) => {
    setCurrentIndex(index);
  };

  const currentLaunch = launch[currentIndex];

  return (
    <div className="technology_container">
      <div className="technology-box">
        <h1 className="title-page">
          <span>03</span> SPACE LAUNCH 101{" "}
        </h1>
        {currentLaunch && (
          <div className="information-launch-box">
            <div className="information-left">
            <div className="lanch-selector-box">
              {launch.map((_, index) => (
                <button
                  key={index}
                  className={`launch-button ${
                    index === currentIndex ? "active" : ""
                  }`}
                  onClick={() => handleIndexChange(index)}
                >{`${index + 1}`}</button>
              ))}
            </div>
            <div className="bio-lanch">
              <p>THE TERMINOLOGY</p>
              <h1>{currentLaunch.name.toUpperCase()}</h1>
              <p className="description">{currentLaunch.description}</p>
            </div>
            </div>
            <div className="img-box">
              <img className="img-portrait"
                src={`${currentLaunch.images.portrait}`}
                alt="image-planete"
              />
               <img className="img-landscape"
                src={`${currentLaunch.images.landscape}`}
                alt="image-planete"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Technology;
