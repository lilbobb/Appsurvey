import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import Navbar from "../components/NavBar";
import { db } from "../Firebase";

const Sudan = () => {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    fetchData();
  });

  return (
      <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-400 to-gray-500 text-white">
        <Navbar />
        <div className="flex flex-col sm:w-200 p-8 items-center">
          {users.map((user) => {
            return (
              <div key={user.id} className="py-4 px-4 rounded-md bg-gray-200 text-gray-900 mt-4 w-full flex-grow">
                {""}
                <h1>Name: {user.fullName}</h1>
                <h1>Phone: {user.phoneNumber}</h1>
                <h1>Email: {user.email}</h1>
                <h1>Age: {user.age}</h1>
                <h1>Address: {user.address}</h1>
                <h1>Occupation: {user.occupation}</h1>
                <h1>City: {user.city}</h1>
              </div>
            );
          })}
        </div>
      </div>
  );
};

export default Sudan;