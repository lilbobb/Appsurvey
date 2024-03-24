import React from "react";

const FormEmploymentStatus = ({ values, handleChange, nextStep, prevStep }) => {
  const continueHandler = (e) => {
    e.preventDefault();
    if (validateForm()) {
      nextStep();
    }
  };

  const backHandler = (e) => {
    e.preventDefault();
    prevStep();
  };

  const validateForm = () => {
    // Validation logic for each field
    if (!values.occupation.trim()) {
      alert("Occupation is required");
      return false;
    }
    if (!values.city.trim()) {
      alert("City/Community is required");
      return false;
    }
    return true;
  };

  return (
    <div className="flex justify-center items-center h-full mt-10 mb-10">
      <div className="w-full">
        <div className="sm:w-230 p-8">
          <h2 className="text-1xl font-roboto text-gray-800 font-bold mb-4">
            Enter Your Employment Status
          </h2>
          <div className="mb-4">
            <label
              htmlFor="occupation"
              className="block text-sm font-medium text-gray-700"
            >
              Occupation
            </label>
            <input
              type="text"
              id="occupation"
              placeholder="Enter Your Occupation"
              value={values.occupation}
              onChange={handleChange("occupation")}
              className="border border-gray-400 px-4 py-2 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="reference"
              className="block text-sm font-medium text-gray-700"
            >
              Professional References
            </label>
            <input
              type="text"
              id="reference"
              placeholder="Enter Professional References (optional)"
              value={values.reference}
              onChange={handleChange("reference")}
              className="border border-gray-400 px-4 py-2 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-700"
            >
              City/Community
            </label>
            <input
              type="text"
              id="city"
              placeholder="Enter Your Community"
              value={values.city}
              onChange={handleChange("city")}
              className="border border-gray-400 px-4 py-2 rounded-md w-full"
            />
          </div>
          <button
            onClick={backHandler}
            className="mr-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded focus:outline-none focus:ring focus:ring-red-300"
          >
            Back
          </button>
          <button
            onClick={continueHandler}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormEmploymentStatus;
