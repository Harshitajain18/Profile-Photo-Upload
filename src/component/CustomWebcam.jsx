import React, { useState, useRef, useCallback } from "react";
import Webcam from "react-webcam";
import "../component/DialogBox02.css";
import { FaCameraRetro } from "react-icons/fa";
import { AiTwotoneCloseCircle } from "react-icons/ai";

const CustomWebcam = ({setShowCamera}) => {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [webcamOn, setWebcamOn] = useState(true);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef]);

  const toggleWebcam = () => {
    setWebcamOn(false);
    setShowCamera(false);
    if (webcamOn) {
      setImgSrc(null);
    }
  };

  return (
    <div className="container">
      {imgSrc ? (
        <img src={imgSrc} alt="webcam" />
      ) : (
        webcamOn && <Webcam height={300} width={500} ref={webcamRef} />
      )}
      <div>
        {webcamOn && (
          <button className="capture-btn" onClick={capture}>
            <FaCameraRetro size={20} />
          </button>
        )}
      </div>
      <div>
        {webcamOn && (
          <button className="close-btn" onClick={toggleWebcam}>
            <AiTwotoneCloseCircle size={20} />
          </button>
        )}
      </div>
    </div>
  );
};

export default CustomWebcam;
