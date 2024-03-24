import React from "react";
import Navbar from "../components/NavBar";
import Footer from "./Footer";

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-400 to-purple-400 text-white">
      <Navbar />
      <div className="container mx-auto py-8 px-4 max-w-2xl text-sm">
        <h1 className="text-4xl text-yellow-300 font-bold mb-8 text-lg">
          {" "}
          Pioneer Vision Foundation Policy
        </h1>
        <p className="mb-4">
          The Pioneer Vision Foundation is committed to supporting small
          communities across the states. As part of our mission to empower these
          communities, we have launched a program that provides grant and
          giveaway opportunities to individuals from these areas.
          <h1 className="text-2xl text-gray-300 font-bold mt-6 mb-8">
            Survey Policy
          </h1>{" "}
          To better serve those in need, Pioneer Vision Foundation may conduct
          surveys to confirm and collect contact information from interested
          individuals. This information enables us to reach out to them
          effectively. The purpose of the survey is to identify potential grant
          recipients and establish communication channels with them.
          <h1 className="text-2xl text-gray-300 font-bold mt-6 mb-8">
            Use of Information
          </h1>{" "}
          The contact information collected through surveys will be used solely
          for communication purposes related to the grant program and
          initiatives of Pioneer Vision Foundation. We are dedicated to ensuring
          the privacy and security of all information collected.
          <h1 className="text-2xl text-gray-300 font-bold mt-6 mb-8">
            Community Updates
          </h1>{" "}
          Communities and towns for which we have made plans will be added and
          updated on our official social media pages. This transparent approach
          allows interested individuals to stay informed about our activities
          and upcoming opportunities in their area.
          <h1 className="text-2xl text-gray-300 font-bold mt-6 mb-8">
            Access to Information
          </h1>
          Individuals can contact Pioneer Vision Foundation to inquire about the
          information collected or request its removal from our records. We are
          committed to maintaining transparency and accountability in our
          operations.
          <h1 className="text-2xl text-gray-300 font-bold mt-6 mb-8">
            Review and Update
          </h1>
          This policy is subject to periodic review and updates to ensure
          alignment with the mission and values of Pioneer Vision Foundation.
          Any changes will be communicated through official channels. By
          adhering to these policies, Pioneer Vision Foundation aims to serve
          communities effectively and empower individuals to thrive. Thank you
          for your support and participation in our mission.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
