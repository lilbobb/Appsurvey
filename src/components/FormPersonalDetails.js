import React from "react";

const FormPersonalDetails = ({ values, handleChange, nextStep, prevStep }) => {
  const continueHandler = (e) => {
    e.preventDefault();
    // Perform form validation
    if (values.fullName.trim() === '' || values.email.trim() === '' || values.phoneNumber.trim() === '') {
      alert('Please fill in all required fields.');
      return;
    }
    nextStep();
  };

  return (
    <div className="flex justify-center h-full items-center mt-10 mb-10">
      <div className="w-full">
        <div className="sm:w-230 p-8">
          <h2 className="text-2xl font-roboto text-gray-800 font-bold mb-4">Personal Details</h2>
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="Enter Your Full Name"
              value={values.fullName}
              onChange={handleChange("fullName")}
              required
              className="border border-gray-400 px-4 py-2 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              placeholder="Enter Your House Address"
              value={values.address}
              onChange={handleChange("address")}
              className="border border-gray-400 px-4 py-2 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter Your Email Address"
              value={values.email}
              onChange={handleChange("email")}
              required
              className="border border-gray-400 px-4 py-2 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phoneNumber"
              placeholder="Enter Your Phone Number"
              value={values.phoneNumber}
              onChange={handleChange("phoneNumber")}
              required
              className="border border-gray-400 px-4 py-2 rounded-md w-full"
            />
          </div>
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

export default FormPersonalDetails;
