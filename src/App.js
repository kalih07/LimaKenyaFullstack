import React from "react";

export default function HomePage() {
    return (
    <div className="bg-white text-black font-sans">
      {/* Navigation */}
      <nav className="bg-lime-600 text-white py-4 px-6 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold">Lima Kenya</h1>
        <ul className="flex space-x-6 text-lg">
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#solutions" className="hover:underline">Solutions</a></li>
          <li><a href="#features" className="hover:underline">Features</a></li>
          <li><a href="#blog" className="hover:underline">Blog</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
          <li><a href="#dashboard" className="hover:underline">Dashboard</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="bg-black text-lime-400 py-20 px-4 text-center relative">
        <img
          src="https://images.unsplash.com/photo-1604851651654-1947d9096b6a?auto=format&fit=crop&w=1500&q=80"
          alt="Farmers working"
          className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
        />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Empowering Farmers. Securing Futures.</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Lima Kenya is revolutionizing agriculture through technology, collaboration, and access.
          </p>
          <button className="mt-8 bg-lime-400 text-black px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-lime-300 transition">
            Join the Movement
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">About Us</h2>
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <img
            src="https://images.unsplash.com/photo-1614768366848-39a6b2326072?auto=format&fit=crop&w=700&q=60"
            alt="Kenyan farming"
            className="w-full md:w-1/2 rounded-lg shadow"
          />
          <p className="text-lg leading-relaxed">
            Lima Kenya is a digital platform designed to uplift small-scale farmers by integrating
            distribution, financing, training, and market access. We aim to address food insecurity,
            unemployment, and limited agricultural reach through innovative technology and sustainable
            partnerships. Lima aligns with AU Agenda 2063, EAC policies, and the UN Sustainable Development Goals.
          </p>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="bg-gray-100 py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Our Key Hubs</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-2xl shadow">
            <img
              src="https://images.unsplash.com/photo-1565612382452-5371f5e4f6f2?auto=format&fit=crop&w=600&q=60"
              alt="Distribution"
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-lime-600">Distribution Hub</h3>
            <p>Connects farmers with vendors and consumers through a digital marketplace and real-time logistics network.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <img
              src="https://images.unsplash.com/photo-1601830937970-bde4ac576a6a?auto=format&fit=crop&w=600&q=60"
              alt="Financing"
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-lime-600">Financing Hub</h3>
            <p>Offers micro-loans, insurance, and links to investors to boost farmer independence and sustainability.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <img
              src="https://images.unsplash.com/photo-1630650022527-d33a4f3b36c3?auto=format&fit=crop&w=600&q=60"
              alt="Training"
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-lime-600">Training & Education</h3>
            <p>Digital learning modules and in-person training to improve modern farming techniques and business skills.</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Platform Features</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-100 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2 text-lime-600">E-Marketplace</h3>
            <p>Connect farmers to buyers including consumers, retailers, and restaurants for fair trade.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2 text-lime-600">Logistics & Distribution</h3>
            <p>Efficient transport and tracking systems to reduce post-harvest losses and improve delivery times.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2 text-lime-600">Data Analytics</h3>
            <p>Market trends and crop insights to help farmers make informed decisions and increase profits.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2 text-lime-600">Skill Development</h3>
            <p>Workshops and online learning to boost farming, financial, and digital literacy skills.</p>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="bg-white py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Latest News & Insights</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2 text-lime-600">Modern Techniques in Maize Farming</h3>
            <p>Explore how small-scale Kenyan farmers are improving yields using new tools and data-driven practices.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2 text-lime-600">Youth in Agriculture</h3>
            <p>How young entrepreneurs are reshaping the agricultural landscape in Kenya through innovation and agribusiness.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2 text-lime-600">Success Story: Wanjiku’s Tomato Empire</h3>
            <p>Read about a farmer’s journey from selling to local markets to exporting value-added produce.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
        <form className="bg-gray-100 p-6 rounded-xl shadow space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 rounded" />
          <input type="email" placeholder="Email Address" className="w-full p-3 rounded" />
          <textarea placeholder="Your Message" rows="5" className="w-full p-3 rounded"></textarea>
          <button type="submit" className="bg-lime-600 text-white px-6 py-3 rounded-full hover:bg-lime-500">Send Message</button>
        </form>
      </section>

      {/* Dashboard Placeholder */}
      <section id="dashboard" className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Farmer Dashboard (Coming Soon)</h2>
        <p className="text-center text-lg">An all-in-one portal for farmers to manage crops, finances, market listings, and training programs.</p>
      </section>

      {/* Call to Action */}
      <section id="involved" className="bg-lime-600 text-white py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Be Part of the Agricultural Transformation</h2>
        <p className="mb-6 max-w-xl mx-auto">
          Whether you're a farmer, vendor, investor, or agricultural expert, Lima Kenya welcomes you
          to join our movement.
        </p>
        <button className="bg-black text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-gray-800 transition">
          Get Involved
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-black text-lime-400 py-8 text-center">
        <p>&copy; {new Date().getFullYear()} Lima Kenya. All rights reserved.</p>
      </footer>
    </div>
  );
}
