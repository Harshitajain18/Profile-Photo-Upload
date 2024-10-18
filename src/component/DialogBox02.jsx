import React from "react";
import "./DialogBox02.css";
import { useState } from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { AiTwotoneCloseCircle } from "react-icons/ai";
import { FaCamera } from "react-icons/fa";
import { MdOutlineFileUpload } from "react-icons/md";

function DialogBox02() {
  const [ShowDialog, setShowDialog] = useState(false);
  const [hide, setshow] = useState(true);

  const OpenDialog = () => {
    setShowDialog(true);
    setshow(false);
  };

  const CloseDialog = () => {
    setShowDialog(false);
    setshow(true);
  };
  return (
    <>
    <h1 className="heading">PROFILE PHOTO UPLOAD</h1>
      <div>
        <button className="AddPhotoBtn" onClick={OpenDialog}>
          Add Photo
        </button>
      </div>
      {ShowDialog && (
        <div className="dialog-overlay" style={{display: `${ShowDialog ? 'block' : 'none'}`}}>
          <div id="dialog" className="dialog-section">
            <div>
              <h2 className="profile">Profile Photo</h2>
              <button onClick={CloseDialog} className="cross">
                <AiTwotoneCloseCircle size={20}/>  
              </button>
            </div>
            <div>
              <button className="ProfileUpload">
                No profile photo uploaded
              </button>
            </div>
            <div>
              <button className="upload">
                <MdOutlineFileUpload size={30} />
              </button>
              <button className="camera">
                <FaCamera size={30} />
              </button>
              <button className="delbtn">
                <AiTwotoneDelete  size={30} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DialogBox02;
