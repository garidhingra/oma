import React from "react";
import heroImage from "./assets/hero.jpg"; // place your hero image in src/assets/

function App() {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center text-center">
      
      {/* Background Image + Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/30"></div>
      
      {/* Content */}
      <div className="relative z-10 px-6">
        {/* Title */}
        <h1 className="text-5xl font-bold text-white mb-4">
          One Meal Apart
        </h1>
        
        {/* Tagline */}
        <h2 className="text-2xl font-semibold text-white mb-6 italic">
          A New Way to Be You
        </h2>
        
        {/* Intro */}
        <p className="max-w-xl text-white text-lg leading-relaxed">
          At One Meal Apart, we believe true transformation happens when mind, body, food, and action align. Through personalized nutrition plans, daily energy insights, and thoughtfully designed wellness experiences, every step is crafted to energize, empower, and guide you toward your highest potential.
        </p>
        
        {/* Call to Action Button */}
        <button className="mt-8 bg-teal-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-teal-700 transition duration-300">
          Explore Programs
        </button>
      </div>
    </div>
  );
}

export default App;
