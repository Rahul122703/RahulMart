import React from "react";

import InstallPrompt from "./components/installPrompt";
import "./index.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Loader from "./components/Loader";

import Homepage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

const App = () => {
  const [loading, setLoading] = React.useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 500);

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-[100vh] w-[100vw] border border-none">
        <Loader />
      </div>
    );
  }

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/products" element={<ProductPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
        <InstallPrompt />
      </Router>
    </>
  );
};

export default App;
