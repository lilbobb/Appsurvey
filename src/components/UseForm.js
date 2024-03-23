import React, { Component } from "react";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";
import FormMaritalStatus from "./FormMaritalStatus";
import FormEmploymentStatus from "./FormEmploymentStatus";
import Navbar from "./NavBar";
import Footer from "../pages/Footer";

class UserForm extends Component {
  state = {
    step: 1,
    fullName: "",
    email: "",
    age: "",
    phoneNumber: "",
    address: "",
    maritalStatus: "",
    reference: "",
    occupation: "",
    city: "",
  };

  // Proceed to next step
  nextStep = () => {
    this.setState((prevState) => ({
      step: prevState.step + 1,
    }));
  };

  // Go back to prev step
  prevStep = () => {
    this.setState((prevState) => ({
      step: prevState.step - 1,
    }));
  };

  // Handle fields change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step, ...formData } = this.state;

    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow container mx-auto flex justify-center items-center">
          <div className="w-70 p-8 shadow-md rounded-lg">
            <h1 className="text-2xl text-yellow-500 font-bold text-center mt-8 mb-4 font-mono">
              PIONEER VISION FOUNDATION SMALL COMMUNITIES GRANT OFFER
            </h1>
            {step === 1 && (
              <FormPersonalDetails
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={formData}
              />
            )}
            {step === 2 && (
              <FormEmploymentStatus
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={formData}
              />
            )}
            {step === 3 && (
              <FormMaritalStatus
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={formData}
              />
            )}
            {step === 4 && (
              <Confirm
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                values={formData}
              />
            )}
            {step === 5 && <Success />}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default UserForm;
