import React, { useState } from "react";
import { Link } from "react-router-dom";
import ApperIcon from "@/components/ApperIcon";

const NavDropdown = ({ title, items, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className={`relative ${className}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors duration-200">
        <span>{title}</span>
        <ApperIcon name="ChevronDown" size={16} />
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
          {items.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavDropdown;