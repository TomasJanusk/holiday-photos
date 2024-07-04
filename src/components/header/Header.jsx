import React from "react";
import { getAuth } from "firebase/auth";

const Header = ({ user }) => {
  const auth = getAuth();

  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <header className="header">
      <h1>Holiday Photos</h1>
      <div className="user-menu">
        <span>{user.email}</span>
        <button className="btn btn-primary" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
