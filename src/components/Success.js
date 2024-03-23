import React from 'react';

const Success = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-8 text-center">
        <h2 className="text-2xl text-blue-700 font-bold mb-4">Success</h2>
        <h1 className="text-3xl mb-2">Thank You For Taking the Survey</h1>
        <p className="text-lg mb-4">We will contact you with the email or phone number provided.</p>
      </div>
    </div>
  );
};

export default Success;
