import React from "react";
import { Link } from "react-router-dom";
import ApperIcon from "@/components/ApperIcon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <ApperIcon name="Car" size={20} className="text-white" />
              </div>
              <span className="text-lg font-bold">RideNow Connect</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted partner for reliable taxi services across India. 24/7 availability with professional drivers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">
                <ApperIcon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">
                <ApperIcon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">
                <ApperIcon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">
                <ApperIcon name="Youtube" size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-primary transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/fleet" className="text-gray-400 hover:text-primary transition-colors duration-200">
                  Fleet
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-400 hover:text-primary transition-colors duration-200">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/local-taxi" className="text-gray-400 hover:text-primary transition-colors duration-200">
                  Local Taxi
                </Link>
              </li>
              <li>
                <Link to="/services/outstation-cabs" className="text-gray-400 hover:text-primary transition-colors duration-200">
                  Outstation Cabs
                </Link>
              </li>
              <li>
                <Link to="/services/airport-transfer" className="text-gray-400 hover:text-primary transition-colors duration-200">
                  Airport Transfer
                </Link>
              </li>
              <li>
                <Link to="/services/corporate-services" className="text-gray-400 hover:text-primary transition-colors duration-200">
                  Corporate Services
                </Link>
              </li>
              <li>
                <Link to="/services/wedding-packages" className="text-gray-400 hover:text-primary transition-colors duration-200">
                  Wedding Packages
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <ApperIcon name="Phone" size={16} className="text-primary" />
                <span className="text-gray-400">+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-3">
                <ApperIcon name="MessageSquare" size={16} className="text-primary" />
                <span className="text-gray-400">WhatsApp: +91 9876543210</span>
              </div>
              <div className="flex items-center space-x-3">
                <ApperIcon name="Mail" size={16} className="text-primary" />
                <span className="text-gray-400">info@ridenowconnect.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <ApperIcon name="MapPin" size={16} className="text-primary mt-1" />
                <span className="text-gray-400">123 Business Center, City Name, State - 123456</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Download App</h4>
              <div className="flex space-x-2">
                <div className="w-24 h-8 bg-gray-800 rounded flex items-center justify-center">
                  <ApperIcon name="Smartphone" size={16} className="text-gray-400" />
                </div>
                <div className="w-24 h-8 bg-gray-800 rounded flex items-center justify-center">
                  <ApperIcon name="Smartphone" size={16} className="text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm">
            © 2024 RideNow Connect. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors duration-200">
              Refund Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;