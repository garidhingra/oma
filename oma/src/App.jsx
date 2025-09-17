import React from "react";

export default function App() {
  return (
    <div className="font-serif bg-[#f9f8f4] text-[#2f3e3d] min-h-screen flex flex-col">
      
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center flex-1 text-center px-6 py-16">
        <h1 className="text-5xl font-bold tracking-tight">OMA</h1>
        <p className="mt-4 text-lg italic">
          You are just One Meal Apart from your transformation
        </p>
        <button className="mt-6 px-6 py-3 bg-[#9ba89c] text-white rounded-full hover:bg-[#7d8a7e] transition">
          Start Your Journey
        </button>
      </section>

      {/* About Section */}
      <section className="px-6 py-12 text-center max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">About OMA</h2>
        <p className="text-lg leading-relaxed">
          At One Meal Apart, we bring together holistic wellness, clinical
          nutrition, and clarity in lifestyle to help you live with balance and vitality.
        </p>
      </section>

      {/* Three Pillars */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-12 text-center max-w-5xl mx-auto">
        <div>
          <div className="text-4xl mb-3">🥗</div>
          <h3 className="font-bold text-xl">Clinical Nutrition</h3>
        </div>
        <div>
          <div className="text-4xl mb-3">🏢</div>
          <h3 className="font-bold text-xl">Corporate Wellness</h3>
        </div>
        <div>
          <div className="text-4xl mb-3">🌿</div>
          <h3 className="font-bold text-xl">Holistic Lifestyle</h3>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#e8e6e1] px-6 py-12 text-center">
        <p className="text-lg mb-6">
          OMA is where clarity meets wellness. Connect with us to begin.
        </p>
        <button className="px-6 py-3 bg-[#2f3e3d] text-white rounded-full hover:bg-[#4b5a59] transition">
          Contact / Join Waitlist
        </button>
      </section>

      {/* Footer */}
      <footer className="px-6 py-6 text-center text-sm text-gray-600">
        <p>© {new Date().getFullYear()} OMA. All rights reserved.</p>
        <div className="mt-2 flex justify-center space-x-4">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="mailto:hello@onemealapart.com">Email</a>
        </div>
      </footer>
    </div>
  );
}
