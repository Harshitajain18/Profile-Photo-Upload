import React, { useState, useRef } from "react";
import "./DialogBox02.css";
import { AiTwotoneDelete, AiTwotoneCloseCircle } from "react-icons/ai";
import { FaCamera } from "react-icons/fa";
import { MdOutlineFileUpload } from "react-icons/md";
import CustomWebcam from "../component/CustomWebcam";

function DialogBox02() {
  const [ShowDialog, setShowDialog] = useState(false);
  const [ShowCamera, setShowCamera] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState(null);
  const fileUploadRef = useRef(null);

  const OpenDialog = () => {
    setShowDialog(true);
  };

  const CloseDialog = () => {
    setShowDialog(false);
    setShowCamera(false);
  };

  const OpenCamera = () => {
    setShowCamera(true);
  };

  const handleImageUpload = (event) => {
    event.preventDefault();
    fileUploadRef.current.click();
  };

  const uploadImageDisplay = e => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      const {current} = fileUploadRef;
      current.file = file;
      reader.onload = (e) => {
          current.src = e.target.result;
          setProfilePhoto(e.target.result);
      }
      reader.readAsDataURL(file);
      
    }
  };

  return (
    <>
      <h1 className="heading">PROFILE PHOTO UPLOAD</h1>
      <div>
        {profilePhoto ? (
          <img src={profilePhoto} className="profile-image"/>
        ) : (
          <button className="AddPhotoBtn" onClick={OpenDialog}>
            Add Photo
          </button>
        )}
      </div>
      {ShowDialog && (
        <div
          className="dialog-overlay"
          style={{ display: `${ShowDialog ? "block" : "none"}` }}
        >
          <div id="dialog" className="dialog-section">
            <div className="dialog-section__header">
              <h2 className="dialog-section__title">Profile Photo</h2>
              <button onClick={CloseDialog} className="dialog-section__close">
                <AiTwotoneCloseCircle size={20} />
              </button>
            </div>
            <div className="dialog-section__middle">
              {profilePhoto ? (
                <img src={profilePhoto} className="profile-image" />
              ) : (
                <div className="dialog-section__image">
                  No profile photo uploaded
                </div>
              )}
            </div>
            <div className="profile-upload__actions">
              <div className="profile-upload__actions__left">
                <button className="upload" onClick={handleImageUpload}>
                  <MdOutlineFileUpload size={25} />
                </button>
                <input
                  style={{ display: "none" }}
                  id="profile-upload"
                  ref={fileUploadRef}
                  onChange={uploadImageDisplay}
                  type="file"
                  accept="image/*"
                />
                <button className="camera" onClick={OpenCamera}>
                  <FaCamera size={25} />
                </button>
              </div>
              <button className="delbtn">
                <AiTwotoneDelete size={25} />
              </button>
            </div>
          </div>
        </div>
      )}
      {ShowCamera && <CustomWebcam />}
    </>
  );
}
export default DialogBox02;
