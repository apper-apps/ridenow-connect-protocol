import React from "react";
import { Link } from "react-router-dom";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";

const WeddingPackages = () => {
  const packages = [
    {
      title: "Bridal Package",
      description: "Special transportation for the bride and groom",
      features: ["Luxury decorated car", "Professional chauffeur", "Bridal car decoration", "Photography support"],
      pricing: "Starting from ₹5,000"
    },
    {
      title: "Guest Transport",
      description: "Comfortable transportation for wedding guests",
      features: ["Multiple vehicle options", "Group bookings", "Pickup from hotels", "Venue transfers"],
      pricing: "Starting from ₹3,000"
    },
    {
      title: "Multi-Day Package",
      description: "Complete transportation for entire wedding celebrations",
      features: ["All ceremonies covered", "Mehendi to reception", "Guest coordination", "Dedicated support"],
      pricing: "Starting from ₹15,000"
    }
  ];

  const services = [
    {
      icon: "Heart",
      title: "Bridal Car Decoration",
      description: "Beautiful floral decorations for the special day",
      details: ["Fresh flower arrangements", "Personalized themes", "Photo-ready setup", "Traditional & modern styles"]
    },
    {
      icon: "Users",
      title: "Guest Coordination",
      description: "Seamless transportation for all wedding guests",
      details: ["Hotel pickup service", "Multiple venue transfers", "Group coordination", "Timeline management"]
    },
    {
      icon: "Camera",
      title: "Photography Support",
      description: "Vehicle arrangements for wedding photographers",
      details: ["Equipment transport", "Location scouting", "Crew transportation", "Flexible scheduling"]
    }
  ];

  const vehicleOptions = [
    { type: "Luxury Sedan", models: "Camry, Accord, Mercedes", rate: "₹8,000-12,000", capacity: "4 passengers" },
    { type: "SUV Premium", models: "Fortuner, Endeavour, BMW X3", rate: "₹10,000-15,000", capacity: "6-7 passengers" },
    { type: "Vintage Car", models: "Classic cars for special occasions", rate: "₹15,000-25,000", capacity: "4 passengers" },
    { type: "Tempo Traveller", models: "12-17 seater for guests", rate: "₹5,000-8,000", capacity: "12-17 passengers" }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Wedding Transportation Packages</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Make your special day even more memorable with our premium wedding transportation services. 
          From bridal cars to guest coordination, we handle all your transportation needs.
        </p>
      </div>

      {/* Packages */}
      <div className="grid lg:grid-cols-3 gap-8 mb-16">
        {packages.map((pkg, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-primary">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.title}</h3>
              <p className="text-gray-600">{pkg.description}</p>
            </div>
            
            <ul className="space-y-3 mb-6">
              {pkg.features.map((feature, idx) => (
                <li key={idx} className="flex items-center space-x-2">
                  <ApperIcon name="Check" size={16} className="text-green-500" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="text-center mb-6">
              <p className="text-2xl font-bold text-primary">{pkg.pricing}</p>
            </div>
            
            <Button className="w-full">Get Quote</Button>
          </div>
        ))}
      </div>

      {/* Services */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Wedding Services</h2>
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mb-4">
                <ApperIcon name={service.icon} size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <ApperIcon name="Check" size={16} className="text-green-500" />
                    <span className="text-gray-700 text-sm">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Vehicle Options */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Vehicle Options</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {vehicleOptions.map((vehicle, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">{vehicle.type}</h3>
                <span className="text-primary font-bold">{vehicle.rate}</span>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Models:</span>
                  <span className="text-gray-900 font-medium">{vehicle.models}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Capacity:</span>
                  <span className="text-gray-900 font-medium">{vehicle.capacity}</span>
                </div>
              </div>
              
              <Link to="/book" className="block mt-4">
                <Button variant="outline" className="w-full">Select Vehicle</Button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Wedding Timeline */}
      <div className="bg-gray-50 rounded-lg p-8 mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Typical Wedding Transportation Timeline</h2>
        <div className="space-y-6">
          {[
            { time: "Morning", event: "Mehendi/Haldi Ceremony", service: "Guest pickup from hotels, bridal family transport" },
            { time: "Afternoon", event: "Baraat/Groom's Procession", service: "Decorated car for groom, band party coordination" },
            { time: "Evening", event: "Wedding Ceremony", service: "Bridal car, guest shuttles, photography crew transport" },
            { time: "Night", event: "Reception", service: "Couple's grand entry, guest coordination, return drops" }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                  <ApperIcon name="Clock" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.time} - {item.event}</h3>
                  <p className="text-gray-600">{item.service}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="bg-white rounded-lg p-8 shadow-md mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Choose Our Wedding Services?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: "Heart", title: "Special Occasion Expert", desc: "Specialized in wedding transportation" },
            { icon: "Users", title: "Guest Coordination", desc: "Seamless management of all guests" },
            { icon: "Camera", title: "Photography Friendly", desc: "Perfect setups for wedding photos" },
            { icon: "Clock", title: "Timeline Management", desc: "Strict adherence to wedding schedule" },
            { icon: "Flower", title: "Decoration Services", desc: "Beautiful floral car decorations" },
            { icon: "Shield", title: "Stress-Free Planning", desc: "Complete transportation coordination" }
          ].map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <ApperIcon name={feature.icon} size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Happy Couples</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              couple: "Rahul & Priya",
              testimonial: "Amazing service! The bridal car decoration was absolutely stunning and the coordination was perfect.",
              rating: 5
            },
            {
              couple: "Amit & Neha",
              testimonial: "They handled all our guest transportation flawlessly. Highly recommended for weddings!",
              rating: 5
            },
            {
              couple: "Vikram & Shreya",
              testimonial: "Professional service from start to finish. Made our special day even more memorable.",
              rating: 5
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <ApperIcon key={i} name="Star" size={16} className="text-accent fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">"{testimonial.testimonial}"</p>
              <p className="font-semibold text-gray-900">{testimonial.couple}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary to-accent rounded-lg p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">Planning Your Dream Wedding?</h2>
        <p className="text-lg mb-6 text-white/90">
          Let us handle your wedding transportation needs so you can focus on your special day.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="secondary" size="lg">
            Get Wedding Quote
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
            Consult Wedding Expert
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WeddingPackages;