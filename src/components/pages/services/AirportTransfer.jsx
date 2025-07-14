import React from "react";
import { Link } from "react-router-dom";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";

const AirportTransfer = () => {
  const zones = [
    { zone: "Zone 1", distance: "0-10 KM", rate: "₹300-500", time: "30-45 min" },
    { zone: "Zone 2", distance: "10-20 KM", rate: "₹500-800", time: "45-60 min" },
    { zone: "Zone 3", distance: "20-30 KM", rate: "₹800-1200", time: "60-90 min" },
    { zone: "Zone 4", distance: "30+ KM", rate: "₹1200+", time: "90+ min" }
  ];

  const services = [
    {
      icon: "Plane",
      title: "Airport Pickup",
      description: "Hassle-free pickup from airport to your destination",
      features: ["Flight tracking", "Meet & greet", "Luggage assistance", "Free waiting (60 min)"]
    },
    {
      icon: "Car",
      title: "Airport Drop",
      description: "Timely drop-off service to catch your flight",
      features: ["On-time guarantee", "Multiple pickup points", "Flight schedule tracking", "Express routes"]
    },
    {
      icon: "Clock",
      title: "24/7 Service",
      description: "Round-the-clock airport transfer service",
      features: ["Early morning flights", "Late night arrivals", "Emergency booking", "Priority support"]
    }
  ];

  const features = [
    "Professional chauffeurs",
    "Flight tracking system",
    "Meet & greet service",
    "Luggage assistance",
    "Free waiting time",
    "Clean & sanitized vehicles",
    "Fixed pricing",
    "24/7 availability"
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Airport Transfer Service</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Reliable and comfortable airport transfers with professional drivers. 
          Never miss a flight or wait at the airport again.
        </p>
      </div>

      {/* Service Types */}
      <div className="grid lg:grid-cols-3 gap-8 mb-16">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mb-4">
              <ApperIcon name={service.icon} size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <ul className="space-y-2">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center space-x-2">
                  <ApperIcon name="Check" size={16} className="text-green-500" />
                  <span className="text-gray-700 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Pricing Zones */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Pricing by Distance Zones</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {zones.map((zone, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">{zone.zone}</h3>
                <span className="text-primary font-bold">{zone.rate}</span>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Distance:</span>
                  <span className="text-gray-900 font-medium">{zone.distance}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Travel Time:</span>
                  <span className="text-gray-900 font-medium">{zone.time}</span>
                </div>
              </div>
              
              <Link to="/book" className="block mt-4">
                <Button className="w-full">Book Now</Button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">How It Works</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Airport Pickup */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Airport Pickup</h3>
            <div className="space-y-4">
              {[
                { step: "1", title: "Book in Advance", desc: "Provide flight details and destination" },
                { step: "2", title: "Flight Tracking", desc: "We monitor your flight status" },
                { step: "3", title: "Meet & Greet", desc: "Driver waits at arrival gate with name board" },
                { step: "4", title: "Comfortable Ride", desc: "Relax while we drive you to destination" }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Airport Drop */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Airport Drop</h3>
            <div className="space-y-4">
              {[
                { step: "1", title: "Schedule Pickup", desc: "Book based on flight departure time" },
                { step: "2", title: "Timely Arrival", desc: "Driver arrives at your location on time" },
                { step: "3", title: "Express Route", desc: "Fastest route to airport terminal" },
                { step: "4", title: "Terminal Drop", desc: "Drop at correct terminal with luggage help" }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-gray-50 rounded-lg p-8 mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Service Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg p-4 shadow-md text-center">
              <ApperIcon name="Check" size={24} className="text-primary mx-auto mb-2" />
              <p className="text-gray-700 font-medium">{feature}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Important Information */}
      <div className="bg-white rounded-lg p-8 shadow-md mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Important Information</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">For Airport Pickup</h3>
            <ul className="space-y-2">
              {[
                "Provide flight number and arrival time",
                "Free waiting time: 60 minutes",
                "Driver will carry a name board",
                "Flight delays are automatically tracked",
                "Meet at arrivals gate or designated area"
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <ApperIcon name="Plane" size={16} className="text-blue-500 mt-1" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">For Airport Drop</h3>
            <ul className="space-y-2">
              {[
                "Book 2-3 hours before flight departure",
                "Provide flight details for timing",
                "Driver will suggest pickup time",
                "Terminal drop-off included",
                "Express routes to avoid traffic"
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <ApperIcon name="Car" size={16} className="text-green-500 mt-1" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary to-accent rounded-lg p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">Need Airport Transfer?</h2>
        <p className="text-lg mb-6 text-white/90">
          Book your airport transfer now and travel stress-free to catch your flight.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/book">
            <Button variant="secondary" size="lg">
              Book Airport Transfer
            </Button>
          </Link>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
            Emergency Booking: +91 9876543210
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AirportTransfer;