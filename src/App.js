import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [carouselData, setCarouselData] = useState([]);
  const instance = axios.create({
    baseURL: "https://dev-api.lendochain.io/api/",
    timeout: 4000,
  });

  const renderCarouselData = () => {
    return carouselData.map((item, i) => {
      return (
        <div className="carousel-item" key={i}>
          <div className="user-data">
            <img
              src={item.creator.avatar ? item.creator.avatar : "./logo192.png"}
              alt="user data"
            />
            <span>{item.name}</span>
          </div>
          <img className="main-image" src={item.fileUrl} alt="NFT" />
        </div>
      );
    });
  };
  useEffect(() => {
    const handleRequest = async () => {
      const res = await instance.get("mainpage");
      setCarouselData(res.data.data.carousel);
    };
    handleRequest();
  }, [instance]);
  return (
    <div>
      <h1 className="title">Tamrine Avval</h1>
      {renderCarouselData()}
    </div>
  );
}

export default App;
