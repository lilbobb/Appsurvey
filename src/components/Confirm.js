import React from "react";
import { db } from "../Firebase";
import { collection, addDoc } from "@firebase/firestore";

const Confirm = ({ values, nextStep, prevStep }) => {
  const {
    fullName,
    email,
    phoneNumber,
    address,
    maritalStatus,
    reference,
    age,
    occupation,
    city,
  } = values;

  const continueHandler = () => {
    nextStep();
  };

  const backHandler = (e) => {
    e.preventDefault();
    prevStep();
  };

  const saveToFirestore = async () => {
    try {
      const docRef = await addDoc(collection(db, "users"), values);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="container mx-auto max-w-xl p-8">
      <h2 className="text-2xl font-bold mb-4">Confirm Application Details</h2>
      <ul>
        <li className="mb-2">
          <span className="font-bold">Full Name:</span> {fullName}
        </li>
        <li className="mb-2">
          <span className="font-bold">Address:</span> {address}
        </li>
        <li className="mb-2">
          <span className="font-bold">Email:</span> {email}
        </li>
        <li className="mb-2">
          <span className="font-bold">Age:</span> {age}
        </li>
        <li className="mb-2">
          <span className="font-bold">Occupation:</span> {occupation}
        </li>
        <li className="mb-2">
          <span className="font-bold">City:</span> {city}
        </li>
        <li className="mb-2">
          <span className="font-bold">Marital Status:</span> {maritalStatus}
        </li>
        <li className="mb-2">
          <span className="font-bold">Reference:</span> {reference}
        </li>
        <li className="mb-2">
          <span className="font-bold">Phone:</span> {phoneNumber}
        </li>
      </ul>
      <div className="mt-8 flex justify-between">
        <button
          onClick={backHandler}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded focus:outline-none focus:ring focus:ring-red-300"
        >
          Back
        </button>
        <button
          onClick={(e) => {
            continueHandler(e);
            saveToFirestore();
          }}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Confirm;
