import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Auth = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const auth = getAuth();

  const handleAuth = async () => {
    try {
      let userCredential;
      if (isLogin) {
        userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
      } else {
        userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
      }
      setUser(userCredential.user);
    } catch (error) {
      alert("Authentication error", error);
    }
  };

  return (
    <div className="auth">
      <h2>{isLogin ? "Login" : "Register"}</h2>
      <input
        className="form-control w-50 p-2"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="form-control w-50 p-2"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="btn btn-primary" onClick={handleAuth}>
        {isLogin ? "Login" : "Register"}
      </button>
      <p>
        <a
          className="link-offset-1"
          href="#"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? "Registruotis" : "Prisijungti"}
        </a>
      </p>
    </div>
  );
};

export default Auth;
