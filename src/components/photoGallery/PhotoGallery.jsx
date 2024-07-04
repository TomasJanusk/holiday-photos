import React, { useEffect, useState } from "react";
import { firestore } from "../../firebase/config";
import AddPhotoModal from "../addPhotoModal/AddPhotoModal";
import FormatModal from "../formatModal/FormatModal";
import PhotoModal from "../photoModal/PhotoModal";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import "./PhotoGallery.scss";

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showFormatModal, setShowFormatModal] = useState(false);
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [format, setFormat] = useState("Grid");

  useEffect(() => {
    const fetchPhotos = async () => {
      const querySnapshot = await getDocs(collection(firestore, "photos"));
      const photosData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setPhotos(photosData);
    };

    fetchPhotos();
  }, []);

  const addPhoto = async (url) => {
    const docRef = await addDoc(collection(firestore, "photos"), { url });
    setPhotos([...photos, { url, id: docRef.id }]);
    setShowAddModal(false);
  };

  const deletePhoto = async (id) => {
    await deleteDoc(doc(firestore, "photos", id));
    setPhotos(photos.filter((photo) => photo.id !== id));
  };

  const openPhotoModal = (photo) => {
    setSelectedPhoto(photo);
    setShowPhotoModal(true);
  };

  return (
    <div className={`photo-gallery ${format.toLowerCase()}`}>
      <button className="format-btn" onClick={() => setShowFormatModal(true)}>
        Keisti formatavimą
      </button>
      <button className="add-photo-btn" onClick={() => setShowAddModal(true)}>
        +
      </button>
      <div className="photos-container">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="photo"
            onClick={() => openPhotoModal(photo)}
          >
            <img src={photo.url} alt="Holiday" />
            <button
              className="delete-btn"
              onClick={(e) => {
                e.stopPropagation();
                deletePhoto(photo.id);
              }}
            >
              🗑️
            </button>
          </div>
        ))}
      </div>
      {showAddModal && (
        <AddPhotoModal
          addPhoto={addPhoto}
          onClose={() => setShowAddModal(false)}
        />
      )}
      {showFormatModal && (
        <FormatModal
          setFormat={setFormat}
          onClose={() => setShowFormatModal(false)}
        />
      )}
      {showPhotoModal && (
        <PhotoModal
          photo={selectedPhoto}
          onClose={() => setShowPhotoModal(false)}
        />
      )}
    </div>
  );
};

export default PhotoGallery;
