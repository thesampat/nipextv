"use client";
import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";
import Carousel from "./components/carousel";
import { FaShieldAlt, FaAward, FaRocket } from "react-icons/fa";
import { FaTv, FaCloud, FaRobot } from "react-icons/fa";
import { FaUsers,  FaStoreAlt, FaGlobe } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { useSpring, useScroll, animated } from '@react-spring/web';
import { useRef } from 'react';





export default function Home() {
  return (
    <div className="bg-white w-screen flex flex-col ">
      <Header/>
      <Carousel/>
      <ProductHighlights/>
      <WhyChooseNipex/>
      <ExploreCategories/>
      <CategoryTabs/>
      <BusinessStats/>
      <Footer/>
    </div>
  );
}


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Home", "About Us", "Contact"];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="px-6 md:px-12 py-4 flex justify-between items-center">
        <img src="images/nipexlogo.png" className="h-10 w-auto" alt="Nipex Logo" />

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-10 absolute left-1/2 -translate-x-1/2">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href="#"
              className="text-md font-medium text-gray-700 hover:text-[#f55e7d] relative transition"
            >
              {item}
              <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-[#f55e7d] scale-x-0 hover:scale-x-100 origin-left transition-transform duration-300" />
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <IoCloseSharp className="w-6 h-6 text-black" />
          ) : (
            <TiThMenu className="w-6 h-6 text-black" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 space-y-6">
          <div className="flex justify-end">
            <button onClick={() => setIsOpen(false)}>
              <IoCloseSharp className="w-6 h-6 text-black" />
            </button>
          </div>
          <nav className="space-y-4">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href="#"
                className="block text-lg font-medium text-gray-800 hover:text-[#f55e7d] transition"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};


const products = [
  {
    id: 1,
    name: "Nipex Vision X1",
    description: "55\" 4K Ultra HD | Smart TV | Dolby Audio",
    image: "images/tvcorrectfront.png",
    tag: "Best Seller",
  },
  {
    id: 2,
    name: "Nipex Galaxy QLED",
    description: "65\" QLED | 120Hz | Built-in Alexa",
    image: "images/tvcorrectfront.png",
    tag: "New Arrival",
  },
  {
    id: 3,
    name: "Nipex SlimEdge 4K",
    description: "50\" Frameless Design | HDR10+ | Android TV",
    image: "images/tvcorrectfront.png",
    tag: "Top Rated",
  },
  {
    id: 4,
    name: "Nipex Galaxy QLED",
    description: "65\" QLED | 120Hz | Built-in Alexa",
    image: "images/tvcorrectfront.png",
    tag: "New Arrival",
  }
];


const ProductHighlights = () => {
  const { scrollYProgress } = useScroll()

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-red-300 via-red-800/30 to-red py-20 px-6 md:px-12 flex flex-col items-center justify-center">
    {/* Heading */}
    <div className="mb-16 text-center max-w-2xl">
      <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-sm">
        Featured Nipex TVs
      </h2>
      <p className="text-lg text-gray-600">
        Discover the latest innovations in ultra-slim, bezel-less smart TVs designed to elevate your home entertainment.
      </p>
    </div>
  
    {/* Product Grid */}
    <animated.div style={{opacity:scrollYProgress}}>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl bg-red-500/10">
      {products.map((product) => (
        <div
          key={product?.id}
          className="bg-opacity-80 shadow-[0_0_20px_#f8717170] hover:shadow-[0_0_40px_#f8717170] transition duration-300 text-white transform hover:-translate-y-1"
        >
          {/* Image Container */}
          <div className="relative w-full h-64 bg-white/70 flex items-center justify-center overflow-hidden">
            <img
              src={product?.image}
              alt={product?.name}
              className="max-h-full max-w-full object-contain p-4"
            />
            <div className="absolute top-3 left-3 bg-red-500 text-white text-[10px] uppercase tracking-wider font-bold px-2 py-1">
              {product.tag}
            </div>
          </div>
  
          {/* Info */}
          <div className="p-5 text-center bg-black/50">
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-sm text-gray-300">{product.description}</p>
          </div>
        </div>
      ))}
    </div>
    </animated.div>
  </section>
  );
};




const brandTrustPoints = [
  {
    id: 1,
    title: "Trusted Quality",
    description: "Each Nipex TV goes through rigorous quality checks for unmatched durability.",
    icon: <FaShieldAlt className="w-10 h-10 text-pink-500" />,
  },
  {
    id: 2,
    title: "2-Year Warranty",
    description: "Enjoy peace of mind with our extended warranty and excellent support.",
    icon: <FaAward className="w-10 h-10 text-pink-500" />,
  },
  {
    id: 3,
    title: "Next-Gen Tech",
    description: "Immerse yourself in brilliant visuals powered by cutting-edge innovation.",
    icon: <FaRocket className="w-10 h-10 text-pink-500" />,
  },
];


const WhyChooseNipex = () => {
  return (
    <section className="bg-gradient-to-br from-[#7b1e1e] via-[#b91c1c] to-[#4b0e0e] text-white py-20 px-6 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white drop-shadow">
        Why Choose Nipex?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {brandTrustPoints.map((point) => (
          <div
            key={point.id}
            className="bg-white/5 border border-red-500/30 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-red-400/40 transition-transform hover:scale-105 duration-300"
          >
            <div className="mb-4 flex justify-center text-red-300 text-4xl">
              {point.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">{point.title}</h3>
            <p className="text-red-100">{point.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};



const categories = [
  {
    id: 1,
    name: "WebOS TVs",
    description: "Smooth, intuitive experience with LG's WebOS system.",
    icon: <FaTv className="w-10 h-10 text-pink-500" />,
  },
  {
    id: 2,
    name: "CloudOS TVs",
    description: "Fast, connected, and always updated via the cloud.",
    icon: <FaCloud className="w-10 h-10 text-pink-500" />,
  },
  {
    id: 3,
    name: "Smart TVs",
    description: "Stream, browse, and explore apps right from your TV.",
    icon: <FaRobot className="w-10 h-10 text-pink-500" />,
  },
];


const ExploreCategories = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        Explore by Categories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="bg-gray-100 p-8 rounded-2xl shadow hover:shadow-pink-200 transition hover:scale-105 duration-300"
          >
            <div className="mb-4 flex justify-center">{cat.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{cat.name}</h3>
            <p className="text-gray-600">{cat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};


const models = {
  webos: [
    { name: "Nipex W1", desc: "43\" 4K UHD WebOS Smart TV" },
    { name: "Nipex W2", desc: "50\" HDR with Magic Remote" },
    { name: "Nipex W1", desc: "43\" 4K UHD WebOS Smart TV" },
    { name: "Nipex W2", desc: "50\" HDR with Magic Remote" },
  ],
  cloudos: [
    { name: "Nipex C1", desc: "32\" HD Ready CloudOS TV" },
    { name: "Nipex C2", desc: "40\" Full HD with Cloud Sync" },
    { name: "Nipex W1", desc: "43\" 4K UHD WebOS Smart TV" },
    { name: "Nipex W2", desc: "50\" HDR with Magic Remote" },
  ],
  smart: [
    { name: "Nipex S1", desc: "55\" Android Smart TV" },
    { name: "Nipex S2", desc: "65\" AI Smart 4K TV" },
    { name: "Nipex W1", desc: "43\" 4K UHD WebOS Smart TV" },
    { name: "Nipex W2", desc: "50\" HDR with Magic Remote" },
  ],
};


const CategoryTabs = () => {
  const [active, setActive] = useState("webos");

  return (
    <section className="bg-[#f9f9f9] py-20 px-6 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
        Browse Nipex Models
      </h2>

      <div className="flex justify-center gap-6 mb-10">
        {["webos", "cloudos", "smart"].map((key) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={`px-5 py-2 rounded-full font-medium text-sm md:text-base capitalize ${
              active === key
                ? "bg-[#f55e7d] text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            } transition`}
          >
            {key}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
        {models[active].map((model, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-xl p-6 hover:shadow-pink-200 transition"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{model.name}</h3>
            <p className="text-gray-600">{model.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const businessStats = [
  { id: 1, value: "500K+", label: "Happy Customers", icon: <FaUsers /> },
  { id: 2, value: "1M+", label: "TVs Sold", icon: <FaTv /> },
  { id: 3, value: "2,500+", label: "Authorized Dealers", icon: <FaStoreAlt /> },
  { id: 4, value: "35+", label: "Countries Served", icon: <FaGlobe /> },
];


const BusinessStats = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12 text-black">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        Nipex by the Numbers
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {businessStats.map((stat) => (
          <div
            key={stat.id}
            className="bg-white p-6 text-center shadow-md hover:shadow-red-300 transition duration-300"
          >
            <div className="text-red-600 text-4xl mb-4 flex justify-center">{stat.icon}</div>
            <div className="text-3xl font-bold mb-2">{stat.value}</div>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};




const Footer = () => {
  return (
    <footer className="bg-[#0f0f0f] text-white px-6 md:px-12 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700 pb-10">
        <div>
          <h3 className="text-2xl font-bold text-pink-500">Nipex</h3>
          <p className="text-gray-400 mt-4">Experience the future of entertainment with cutting-edge smart TVs.</p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3">Explore</h4>
          <ul className="text-gray-400 space-y-2">
            <li><a href="#">Featured TVs</a></li>
            <li><a href="#">Categories</a></li>
            <li><a href="#">Why Choose Nipex</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3">Support</h4>
          <ul className="text-gray-400 space-y-2">
            <li><a href="#">Customer Service</a></li>
            <li><a href="#">Warranty</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
          <div className="flex gap-4 text-pink-500 text-xl">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-6 text-sm">
        © {new Date().getFullYear()} Nipex Inc. All rights reserved.
      </div>
    </footer>
  );
};