import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockProperties } from '../data/properties';
import { FaBed, FaBath, FaRulerCombined, FaMapMarkerAlt, FaArrowLeft } from 'react-icons/fa';

export default function PropertyDetails() {
  const { id } = useParams();
  const property = mockProperties.find(p => p.id === parseInt(id)) || mockProperties[0];

  return (
    <div className="pt-24 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
      <Link to="/" className="inline-flex items-center gap-2 text-accent mb-6 hover:underline">
        <FaArrowLeft /> Back to Listings
      </Link>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <div className="h-[450px] w-full overflow-hidden rounded-lg mb-6 border border-gray-800">
            <img src={property.img} alt={property.title} className="w-full h-full object-cover" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">{property.title}</h1>
          <p className="text-gray-400 flex items-center gap-2 mb-6 text-lg">
            <FaMapMarkerAlt className="text-accent" /> {property.location}
          </p>

          <div className="flex gap-8 py-4 px-6 bg-dark-800 rounded border border-gray-800 mb-8 text-gray-200">
            <div className="flex items-center gap-2"><FaBed className="text-accent" /> <span>{property.beds} Bedrooms</span></div>
            <div className="flex items-center gap-2"><FaBath className="text-accent" /> <span>{property.baths} Bathrooms</span></div>
            <div className="flex items-center gap-2"><FaRulerCombined className="text-accent" /> <span>{property.sqft} Area Sqft</span></div>
          </div>

          <h2 className="text-2xl font-bold mb-3 text-white">Overview</h2>
          <p className="text-gray-300 leading-relaxed mb-6">{property.description}</p>
        </div>

        {/* Sidebar Inquiry Card */}
        <div className="bg-dark-800 p-8 rounded-lg border border-gray-800 h-fit sticky top-28">
          <span className="text-gray-400 text-sm">Listed Price</span>
          <div className="text-3xl font-extrabold text-accent mb-6">{property.price}</div>

          <h3 className="font-bold text-white mb-4">Request a Private Tour</h3>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Full Name" className="w-full bg-dark-900 border border-gray-700 p-3 text-white text-sm focus:outline-none focus:border-accent" />
            <input type="email" placeholder="Email Address" className="w-full bg-dark-900 border border-gray-700 p-3 text-white text-sm focus:outline-none focus:border-accent" />
            <input type="tel" placeholder="Phone Number" className="w-full bg-dark-900 border border-gray-700 p-3 text-white text-sm focus:outline-none focus:border-accent" />
            <button className="w-full bg-accent text-dark-900 font-bold py-3 hover:bg-accent-hover transition-colors">
              Schedule Tour
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}