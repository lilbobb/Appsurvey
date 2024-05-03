import React, { useState } from "react";
import { auth } from "../Firebase";
import { Navigate } from "react-router-dom";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginAttempted, setLoginAttempted] = useState(false); // Track login attempt

  const login = async () => {
    setIsLoading(true);
    setLoginAttempted(true); // Set login attempted when login button is clicked
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      setUser(userCredential.user);
      setIsLoggedIn(true);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-slate-100">
      {isLoading ? (
        <div>Loading...</div>
      ) : isLoggedIn ? (
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
          {loginAttempted && !isLoggedIn && (
            <p className="mt-2 text-red-500">Login failed. Please try again.</p>
          )}
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
