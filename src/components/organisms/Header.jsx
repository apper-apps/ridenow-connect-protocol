import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { AuthContext } from "../../App";
import ApperIcon from "@/components/ApperIcon";
import NavDropdown from "@/components/molecules/NavDropdown";
import Button from "@/components/atoms/Button";
import Home from "@/components/pages/Home";
import Contact from "@/components/pages/Contact";
import Pricing from "@/components/pages/Pricing";
import Routes from "@/components/pages/Routes";
import Services from "@/components/pages/Services";
import Fleet from "@/components/pages/Fleet";
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { logout } = useContext(AuthContext);
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const serviceItems = [
    { name: "Local Taxi", path: "/services/local-taxi" },
    { name: "Outstation Cabs", path: "/services/outstation-cabs" },
    { name: "Airport Transfer", path: "/services/airport-transfer" },
    { name: "Corporate Services", path: "/services/corporate-services" },
    { name: "Wedding Packages", path: "/services/wedding-packages" }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white shadow-md relative z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <ApperIcon name="Car" size={24} className="text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">RideNow Connect</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`transition-colors duration-200 ${isActive("/") ? "text-primary" : "text-gray-700 hover:text-primary"}`}
            >
              Home
            </Link>
            <NavDropdown title="Services" items={serviceItems} />
            <Link 
              to="/fleet" 
              className={`transition-colors duration-200 ${isActive("/fleet") ? "text-primary" : "text-gray-700 hover:text-primary"}`}
            >
              Fleet
            </Link>
            <Link 
              to="/pricing" 
              className={`transition-colors duration-200 ${isActive("/pricing") ? "text-primary" : "text-gray-700 hover:text-primary"}`}
            >
              Pricing
            </Link>
            <Link 
              to="/routes" 
              className={`transition-colors duration-200 ${isActive("/routes") ? "text-primary" : "text-gray-700 hover:text-primary"}`}
            >
              Routes
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors duration-200 ${isActive("/contact") ? "text-primary" : "text-gray-700 hover:text-primary"}`}
            >
              Contact
            </Link>
          </nav>

{/* Header Actions */}
          <div className="flex items-center space-x-4">
            <Link to="/track" className="hidden md:block text-gray-700 hover:text-primary transition-colors duration-200">
              Track Ride
            </Link>
            <Link to="/book">
              <Button size="sm">Book Now</Button>
            </Link>
            {isAuthenticated && (
              <div className="hidden md:flex items-center space-x-4">
                <span className="text-sm text-gray-600">Welcome, {user?.firstName || 'User'}</span>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={logout}
                >
                  <ApperIcon name="LogOut" size={16} />
                  Logout
                </Button>
              </div>
            )}
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <ApperIcon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 py-4">
            <nav className="space-y-4">
              <Link 
                to="/" 
                className={`block py-2 transition-colors duration-200 ${isActive("/") ? "text-primary" : "text-gray-700 hover:text-primary"}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <div className="space-y-2">
                <span className="block font-medium text-gray-900">Services</span>
                {serviceItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="block py-2 pl-4 text-gray-700 hover:text-primary transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <Link 
                to="/fleet" 
                className={`block py-2 transition-colors duration-200 ${isActive("/fleet") ? "text-primary" : "text-gray-700 hover:text-primary"}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Fleet
              </Link>
              <Link 
                to="/pricing" 
                className={`block py-2 transition-colors duration-200 ${isActive("/pricing") ? "text-primary" : "text-gray-700 hover:text-primary"}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                to="/routes" 
                className={`block py-2 transition-colors duration-200 ${isActive("/routes") ? "text-primary" : "text-gray-700 hover:text-primary"}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Routes
              </Link>
              <Link 
                to="/contact" 
                className={`block py-2 transition-colors duration-200 ${isActive("/contact") ? "text-primary" : "text-gray-700 hover:text-primary"}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
<Link 
                to="/track" 
                className="block py-2 text-gray-700 hover:text-primary transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Track Ride
              </Link>
              {isAuthenticated && (
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    logout();
                  }}
                  className="block py-2 text-gray-700 hover:text-primary transition-colors duration-200 text-left"
                >
                  Logout
                </button>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;