import React, { useState } from "react";

const FormMaritalStatus = ({ values, handleChange, nextStep, prevStep }) => {
  const [errors, setErrors] = useState({}); // State to hold validation errors

  // Validation function to check if the form inputs are valid
  const validateForm = () => {
    let errors = {};
    if (!values.maritalStatus) {
      errors.maritalStatus = "Marital status is required";
    }
    if (!values.age) {
      errors.age = "Age is required";
    } else if (isNaN(values.age)) {
      errors.age = "Age must be a number";
    }
    if (!values.city) {
      errors.city = "City is required";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0; // Return true if there are no errors
  };

  const continueHandler = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Proceed to next step only if form is valid
      nextStep();
    }
  };

  const backHandler = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <div className="flex justify-center items-center h-full">
      <div className="w-full">
        <div className="sm:w-230 p-8">
          <h2 className="text-1xl font-roboto text-gray-800 font-bold mb-4">Marital Status</h2>
          <div className="mb-4">
            <label
              htmlFor="maritalStatus"
              className="block text-sm font-medium text-gray-700"
            >
              Marital Status
            </label>
            <select
              id="maritalStatus"
              name="maritalStatus"
              onChange={handleChange("maritalStatus")}
              value={values.maritalStatus}
              className="border border-gray-400 px-4 py-2 rounded-md w-full"
            >
              <option value="">Select...</option>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
              <option value="Divorced">Divorced</option>
              <option value="Widowed">Widowed</option>
              {/* Add more options as needed */}
            </select>
            {errors.maritalStatus && (
              <p className="text-red-500 text-sm mt-1">
                {errors.maritalStatus}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="age"
              className="block text-sm font-medium text-gray-700"
            >
              Age
            </label>
            <input
              type="text"
              id="age"
              placeholder="Enter Your Age"
              value={values.age}
              onChange={handleChange("age")}
              className="border border-gray-400 px-4 py-2 rounded-md w-full"
            />
            {errors.age && (
              <p className="text-red-500 text-sm mt-1">{errors.age}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-700"
            >
              City
            </label>
            <input
              type="text"
              id="city"
              placeholder="Enter Your City"
              value={values.city}
              onChange={handleChange("city")}
              className="border border-gray-400 px-4 py-2 rounded-md w-full"
            />
            {errors.city && (
              <p className="text-red-500 text-sm mt-1">{errors.city}</p>
            )}
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

export default FormMaritalStatus;
