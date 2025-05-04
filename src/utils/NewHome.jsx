import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
// import Testimonials from "../components/Testimonials";

import PhotoScroller from "../components/PhotoScroller";
import Footer from "../components/Footer";

function NewHome() {
  const navLinks = [
    { label: "Home", href: "#" },
    { label: "Services", href: "#features" },
    { label: "About", href: "#about" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Mobile App", href: "#app" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar links={navLinks} />
      <main className="flex-grow">
        <Hero />
        <Features />
        {/* <Testimonials /> */}

        <PhotoScroller />
      </main>
      <Footer />

      {/* Floating SOS Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          className="flex items-center justify-center p-4 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transform transition-transform duration-300 hover:scale-110"
          aria-label="Emergency SOS"
        >
          <span className="font-bold">SOS</span>
        </button>
      </div>
    </div>
  );
}

export default NewHome;
