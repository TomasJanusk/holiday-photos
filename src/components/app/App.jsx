import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Auth from "../../firebase/Auth";
import Header from "../header/Header";
import PhotoGallery from "../photoGallery/PhotoGallery";
import "./App.scss";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="app">
      <Router>
        {user ? (
          <>
            <Header user={user} />
            <Routes>
              <Route path="/" element={<PhotoGallery />} />
            </Routes>
          </>
        ) : (
          <Auth setUser={setUser} />
        )}
      </Router>
    </div>
  );
};

export default App;
