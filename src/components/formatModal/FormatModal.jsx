import React from "react";

const FormatModal = ({ setFormat, onClose }) => {
  const formats = ["Grid", "List", "Masonry", "Carousel"];

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Change Format</h2>
        {formats.map((format) => (
          <button key={format} onClick={() => setFormat(format)}>
            {format}
          </button>
        ))}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default FormatModal;
