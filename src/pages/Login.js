import React, { useState, useEffect } from "react";
import { auth } from "../Firebase";
import { Navigate } from "react-router-dom";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const history = Navigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      //   setIsLoggedIn(!!currentUser);
    });
    return () => unsubscribe();
  }, []);

  const login = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      setUser(userCredential.user);
      setIsLoggedIn(true);
      // history("/Sudan");
    } catch (error) {
      console.log(error.message);
      // Display error message to the user
    }
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-slate-100">
      {isLoggedIn ? (
        <Navigate to="/Admin" />
      ) : (
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Login with Email</h3>
          <input
            className="w-full mb-4 px-4 py-2 rounded-md border focus:outline-none focus:border-blue-500"
            type="email"
            placeholder="Email..."
            value={loginEmail}
            onChange={(event) => {
              setLoginEmail(event.target.value);
            }}
          />
          <input
            className="w-full mb-4 px-4 py-2 rounded-md border focus:outline-none focus:border-blue-500"
            type="password"
            placeholder="Password..."
            value={loginPassword}
            onChange={(event) => {
              setLoginPassword(event.target.value);
            }}
          />
          <button
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
            onClick={login}
          >
            Login
          </button>
          {user && <p className="mt-4">Logged in as: {user.email}</p>}
          <button
            className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 mt-2 transition-colors duration-300"
            onClick={logout}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;
