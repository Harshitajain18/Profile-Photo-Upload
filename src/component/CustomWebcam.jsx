import React, { useState } from "react";
import Webcam from "react-webcam";
import "../component/DialogBox02.css";

const CustomWebcam = () => {
  const [WebcamOn, setWebcamOn] = useState(true);

  const toggleWebcam = () => {
    setWebcamOn(!WebcamOn);
  };

  return (
    <div className="container">
      {WebcamOn && (
        <div className="webcam-container">
          <Webcam height={300} width={500} />
          <button className="close-button" onClick={toggleWebcam}>
            ✖
          </button>
        </div>
      )}
    </div>
  );
};

export default CustomWebcam;
