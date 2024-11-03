import { useEffect, useState } from "react";
import axios from "axios";

interface CrewMember {
  name: string;
  role: string;
  bio: string;
  images: {
    png: string;
    webp: string;
  };
}

function Crew() {
  const [crew, setCrew] = useState<CrewMember[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axios
      .get("/data.json")
      .then((response) => setCrew(response.data.crew))
      .catch((error) =>
        console.error("erreur lors du chargement du crew", error)
      );
  }, []);

  const handleIndexChange = (index: number) => {
    setCurrentIndex(index);
  };

  const currentMember = crew[currentIndex];

  return (
    <div className="crew_container">
      <div className="box">
      <div className="title-box">
        <h1 className="title-page">
          <span>02</span> MEET YOUR CREW
        </h1>
      </div>

      {currentMember && (
        <div className="member_container">
          <div className="member_information">
            <h2>{currentMember.role.toUpperCase()}</h2>
            <h1>{currentMember.name.toUpperCase()}</h1>
            <p>{currentMember.bio}</p>
            <div className="crew-controls">
              {crew.map((_, index) => (
                <button
                  key={index}
                  className={`crew-button ${
                    index === currentIndex ? "active" : ""
                  }`}
                  onClick={() => handleIndexChange(index)}
                ></button>
              ))}
            </div>
          </div>
          <div className="img-crew">
            <img className={`${currentIndex===0?"img-space":""}`} src={`${currentMember.images.png}`} alt="crew-img" />
          </div>
        </div>
      )}
    </div>

      </div>
     
  );
}

export default Crew;
