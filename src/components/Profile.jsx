import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";

function Profile() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />
      {/* Hero Section */}
    <Hero/>

      {/* Grey Partition Line */}
      <hr className="border-t border-gray-300 mx-6 md:mx-16" />

      {/* Footer */}
     <Footer/>
    </div>
  );
}

export default Profile;
