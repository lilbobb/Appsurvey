import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../Firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export const Protect = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  if (user === null) {
    return (
      <div className="text-center font-bold mt-48 text-gray-900 ">
        <FontAwesomeIcon icon={faSpinner} className="animate-spin mr-2" />
        Loading...
      </div>
    );
  } else if (!user) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
};
