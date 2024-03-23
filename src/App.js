import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import NotFound from "./components/NotFound";
import About from "./pages/About";
import UseForm from "./components/UseForm";
import PrivacyPolicy from "./pages/Privacy";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import { Protect } from "./components/Protect";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/useform" element={<UseForm />} />
      <Route exact path="/privacy" element={<PrivacyPolicy />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/admin" element={<Protect><Admin /></Protect>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
