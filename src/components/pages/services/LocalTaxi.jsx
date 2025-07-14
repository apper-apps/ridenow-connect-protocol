import React from "react";
import { Link } from "react-router-dom";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";

const LocalTaxi = () => {
  const packages = [
    {
      duration: "4 Hours / 40 KM",
      description: "Perfect for short trips and local errands",
      rates: { hatchback: 480, sedan: 600, suv: 800 }
    },
    {
      duration: "8 Hours / 80 KM",
      description: "Ideal for half-day city tours and shopping",
      rates: { hatchback: 960, sedan: 1200, suv: 1600 }
    },
    {
      duration: "12 Hours / 120 KM",
      description: "Great for full-day city exploration",
      rates: { hatchback: 1440, sedan: 1800, suv: 2400 }
    }
  ];

  const destinations = [
    "Shopping Malls & Markets",
    "Hospitals & Healthcare Centers",
    "Educational Institutions",
    "Business Districts",
    "Tourist Attractions",
    "Railway Stations",
    "Bus Terminals",
    "Government Offices"
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Local Taxi Service</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Convenient hourly packages for all your local transportation needs. 
          Explore the city at your own pace with our flexible hourly rentals.
        </p>
      </div>

      {/* Key Features */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {[
          { icon: "Clock", title: "Flexible Hours", desc: "Choose from 4, 8, or 12-hour packages" },
          { icon: "MapPin", title: "City Coverage", desc: "All major city areas covered" },
          { icon: "DollarSign", title: "Fixed Pricing", desc: "No hidden charges or surge pricing" },
          { icon: "Car", title: "Multiple Options", desc: "Hatchback, Sedan, and SUV available" }
        ].map((feature, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-md text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <ApperIcon name={feature.icon} size={24} className="text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.desc}</p>
          </div>
        ))}
      </div>

      {/* Packages */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Hourly Packages</h2>
        <div className="grid lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.duration}</h3>
                <p className="text-gray-600">{pkg.description}</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Hatchback</span>
                  <span className="text-primary font-semibold">₹{pkg.rates.hatchback}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Sedan</span>
                  <span className="text-primary font-semibold">₹{pkg.rates.sedan}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">SUV</span>
                  <span className="text-primary font-semibold">₹{pkg.rates.suv}</span>
                </div>
              </div>
              
              <Link to="/book" className="block mt-6">
                <Button className="w-full">Book Now</Button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Destinations */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Popular Local Destinations</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {destinations.map((destination, index) => (
            <div key={index} className="bg-white rounded-lg p-4 shadow-md text-center hover:shadow-lg transition-shadow duration-300">
              <ApperIcon name="MapPin" size={20} className="text-primary mx-auto mb-2" />
              <p className="text-gray-700 font-medium">{destination}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Terms & Conditions */}
      <div className="bg-gray-50 rounded-lg p-8 mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Terms & Conditions</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Inclusions</h3>
            <ul className="space-y-2">
              {[
                "Professional driver",
                "Fuel charges",
                "Driver allowance",
                "Toll taxes (if applicable)",
                "Parking charges"
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <ApperIcon name="Check" size={16} className="text-green-500" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Important Notes</h3>
            <ul className="space-y-2">
              {[
                "Extra charges for exceeding time/distance",
                "Night charges: 10% extra (11 PM - 5 AM)",
                "Advance booking recommended",
                "Cancellation allowed up to 1 hour before",
                "Driver tips are not mandatory"
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <ApperIcon name="Info" size={16} className="text-blue-500" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary to-accent rounded-lg p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Book Your Local Taxi?</h2>
        <p className="text-lg mb-6 text-white/90">
          Choose your preferred package and start exploring the city today!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/book">
            <Button variant="secondary" size="lg">
              Book Now
            </Button>
          </Link>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
            Call: +91 9876543210
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LocalTaxi;