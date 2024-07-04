import React, { useState } from "react";

const AddPhotoModal = ({ addPhoto, onClose }) => {
  const [url, setUrl] = useState("");

  const handleSubmit = () => {
    addPhoto(url);
    setUrl("");
  };

  return (
    <div className="modal">
      <div className="modal-content ">
        <h2>Add Photo</h2>
        <input
          className="form-control"
          type="text"
          placeholder="Photo URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button onClick={handleSubmit}>Add</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default AddPhotoModal;
