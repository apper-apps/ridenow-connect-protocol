import React from "react";
import { Link } from "react-router-dom";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";

const CorporateServices = () => {
  const services = [
    {
      icon: "Users",
      title: "Employee Transportation",
      description: "Daily pickup and drop services for your employees",
      features: ["Fixed routes", "Regular schedules", "Bulk booking discounts", "Monthly packages"]
    },
    {
      icon: "Briefcase",
      title: "Executive Travel",
      description: "Premium transportation for executives and VIPs",
      features: ["Luxury vehicles", "Professional chauffeurs", "Airport transfers", "Flexible scheduling"]
    },
    {
      icon: "Calendar",
      title: "Event Transportation",
      description: "Group transportation for corporate events and meetings",
      features: ["Multi-vehicle coordination", "Event planning support", "Large group handling", "Custom scheduling"]
    }
  ];

  const packages = [
    {
      title: "Employee Transport",
      description: "Daily commute solution for your workforce",
      features: ["Fixed pickup points", "Regular schedules", "GPS tracking", "Monthly billing"],
      pricing: "Starting from ₹15,000/month"
    },
    {
      title: "Executive Package",
      description: "Premium service for senior management",
      features: ["Luxury vehicles", "Dedicated drivers", "24/7 availability", "Airport priority"],
      pricing: "Starting from ₹25,000/month"
    },
    {
      title: "Event Transport",
      description: "Transportation for corporate events",
      features: ["Multi-vehicle fleet", "Event coordination", "Guest pickup", "Custom routes"],
      pricing: "Starting from ₹5,000/event"
    }
  ];

  const benefits = [
    { icon: "DollarSign", title: "Cost Effective", desc: "Bulk discounts and transparent pricing" },
    { icon: "Clock", title: "Time Saving", desc: "Punctual service and efficient routes" },
    { icon: "Shield", title: "Safe & Secure", desc: "Verified drivers and GPS tracking" },
    { icon: "Headphones", title: "Dedicated Support", desc: "Account manager and 24/7 support" },
    { icon: "FileText", title: "Easy Billing", desc: "Monthly invoices and detailed reports" },
    { icon: "Settings", title: "Customizable", desc: "Tailored solutions for your needs" }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Corporate Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Professional transportation solutions for businesses. From employee transport 
          to executive travel, we provide reliable and cost-effective services.
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

      {/* Packages */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Corporate Packages</h2>
        <div className="grid lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
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
      </div>

      {/* Benefits */}
      <div className="bg-gray-50 rounded-lg p-8 mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Why Choose Our Corporate Services?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <ApperIcon name={benefit.icon} size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { step: "1", title: "Requirement Analysis", desc: "We analyze your transportation needs" },
            { step: "2", title: "Custom Proposal", desc: "Tailored solution with transparent pricing" },
            { step: "3", title: "Contract Signing", desc: "Flexible terms and service agreement" },
            { step: "4", title: "Service Delivery", desc: "Reliable execution with dedicated support" }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                {item.step}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="bg-white rounded-lg p-8 shadow-md mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Service Features</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Technology Features</h3>
            <ul className="space-y-2">
              {[
                "Real-time GPS tracking",
                "Mobile app for bookings",
                "Automated billing system",
                "Trip reports and analytics",
                "Emergency alert system"
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <ApperIcon name="Smartphone" size={16} className="text-blue-500" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Service Standards</h3>
            <ul className="space-y-2">
              {[
                "Professional uniformed drivers",
                "Well-maintained vehicle fleet",
                "Punctuality guarantee",
                "Dedicated account manager",
                "Monthly service reviews"
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <ApperIcon name="Award" size={16} className="text-green-500" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Client Testimonials */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">What Our Corporate Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              company: "Tech Solutions Ltd.",
              testimonial: "Excellent service for our daily employee transport. Always on time and professional.",
              rating: 5
            },
            {
              company: "Global Industries",
              testimonial: "Their executive package has been perfect for our senior management travel needs.",
              rating: 5
            },
            {
              company: "Event Organizers Co.",
              testimonial: "Handled our corporate event transportation flawlessly. Highly recommended!",
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
              <p className="font-semibold text-gray-900">{testimonial.company}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary to-accent rounded-lg p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Partner with Us?</h2>
        <p className="text-lg mb-6 text-white/90">
          Let's discuss your corporate transportation needs and create a custom solution.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="secondary" size="lg">
            Get Custom Quote
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
            Schedule Meeting
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CorporateServices;