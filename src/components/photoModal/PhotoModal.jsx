import React from "react";
import "./PhotoModal.scss";

const PhotoModal = ({ photo, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <img src={photo.url} alt="Holiday" />
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default PhotoModal;
