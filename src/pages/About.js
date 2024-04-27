import React from "react";
import Navbar from "../components/NavBar";
import Footer from "./Footer";
import { FaFacebookSquare } from "react-icons/fa";

function About() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-400 to-gray-600 text-white">
      <Navbar />
      <div className="container mx-auto py-8 px-4 text-center min-h-screen flex flex-col">
        {/* Introduction section */}
        <div className="mb-8 max-w-2xl mx-auto shadow-sm">
          <h1 className="text-3xl font-bold mb-4 text-center text-yellow-500">
            Introduction
          </h1>
          <p className="text-lg">
            Welcome to Pioneer Vision Foundation, an innovative initiative
            dedicated to revitalizing small communities across the nation. Our
            mission is to empower individuals by providing grant and giveaway
            opportunities. Eligible individuals, aged 18 to 60, who reside, are
            disabled, work, or have previously worked in these communities can
            benefit from our support. Unfortunately, individuals with serious
            criminal records are not eligible for our grants. We invite you to
            join us on our journey towards empowerment as we extend our grant
            program through 2024. Stay informed and be prepared to seize this
            incredible opportunity when we arrive in your community. Pioneer
            Vision Foundation is devoted to unlocking potential, nurturing
            aspirations, and shaping a brighter future for all in these
            communities.
          </p>
        </div>
        {/* References section */}
        <div className="mb-8 max-w-2xl mx-auto shadow-sm">
          <h1 className="text-3xl font-bold mb-4 text-center text-yellow-500">
            References
          </h1>
          <p className="text-lg">
            Pioneer Vision Foundation is delighted to announce the generous
            support and sponsorship of individuals deeply committed to making a
            meaningful impact on communities. Jim C. Walton, a distinguished
            75-year-old American businessman, is one of the heirs to the fortune
            of Walmart. His dedication to philanthropy and community development
            exemplifies his commitment to creating positive change. With his
            unwavering support, Pioneer Vision Foundation is well-equipped to
            realize its mission of empowerment and advancement. Additionally, we
            are honored to have the endorsement of Lauren Beukes, a renowned
            47-year-old South African novelist, short story writer, journalist,
            and television scriptwriter. Her creative talents and steadfast
            advocacy for social causes have established her as a powerful voice
            for change. Through her support, Pioneer Vision Foundation is
            empowered to reach new heights in fostering growth and building
            stronger, more resilient communities. Together, with the invaluable
            backing of Jim C. Walton and Lauren Beukes, Pioneer Vision
            Foundation is positioned to make a lasting difference in the lives
            of individuals and communities, ensuring a brighter future for all.
          </p>
        </div>
        {/* Founder cards */}
        <div className="flex flex-wrap justify-center">
          <div className="mb-8 max-w-sm mx-4">
            <div className="bg-white shadow-md rounded-lg overflow-hidden p-4">
              <h2 className="text-xl font-bold mb-2 text-gray-950">
                Carlos Calero (cole)
              </h2>
              <p className="text-gray-800 font-bold mb-1">|Programe Manager|</p>
              <p className="text-gray-600">
                Carlos Calero (cole) Born Carlos Alberto Calero Salcedo June 29,
                1969 (age 54) Barranquilla, Colombia Nationality Colombian Alma
                mater Jorge Tadeo Lozano University Occupation(s) Presenter
                entertainer. Years active 1998–2016, 2018–Present Founder of
                Pioneer Vision Foundation.
              </p>
              <img
                src="calos.jpg"
                alt="Founder"
                className="mt-4 w-40 rounded-full mx-auto"
              />
              <a
                href="https://www.facebook.com/"
                className="block mt-4 text-blue-500 text-lg text-center"
              >
                <FaFacebookSquare className="inline-block mr-2" />
              </a>
            </div>
          </div>
          <div className="mb-8 max-w-sm mx-4">
            <div className="bg-white shadow-md rounded-lg overflow-hidden p-4">
              <h2 className="text-xl font-bold mb-2 text-gray-950">
                James Carr Walton
              </h2>
              <p className="text-gray-800 font-bold mb-1">|Sponsor|</p>
              <p className="text-gray-600">
                Walton Born James Carr Walton June 7, 1948 (age 75) Newport,
                Arkansas, U.S. Alma mater University of Arkansas (BS)
                Occupations Businessman stock trader, Political party
                Independent Board member of Arvest Bank (chairman), Community
                Publishers (chairman), Walmart (heir), Spouse is Lynne McNabb
                Children 4. Rob Walton (brother) John Walton (brother), Alice
                Walton (sister), Ann Walton Kroenke (cousin)
              </p>
              <img
                src="walton.jpg"
                alt="Founder"
                className="mt-4 w-40 rounded-full mx-auto"
              />
              <a
                href="https://www.facebook.com/"
                className="block mt-4 text-blue-500 text-lg text-center"
              >
                <FaFacebookSquare className="inline-block mr-2" />
              </a>
            </div>
          </div>
          <div className="mb-8 max-w-sm mx-4">
            <div className="bg-white shadow-md rounded-lg overflow-hidden p-4">
              <h2 className="text-xl font-bold mb-2 text-gray-950">
                Lauren Beukes
              </h2>
              <p className="text-gray-800 font-bold mb-1">|Sponsor|</p>
              <p className="text-gray-600">
                Lauren Beukes at d Construct, 2012. Born 5 June 1976 (age 47)
                Johannesburg, South Africa Occupation Writer Nationality South
                African Period (2005–present), Genre Science fiction, Literary
                fiction, Urban fantasy Dystopian fiction, Non-fiction
              </p>
              <img
                src="lauren.jpg"
                alt="Founder"
                className="mt-4 w-40 rounded-full mx-auto"
              />
              <a
                href="https://www.facebook.com/"
                className="block mt-4 text-blue-500 text-lg text-center"
              >
                <FaFacebookSquare className="inline-block mr-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
