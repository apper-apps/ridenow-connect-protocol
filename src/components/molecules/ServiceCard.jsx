import React from "react";
import { Link } from "react-router-dom";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";

const ServiceCard = ({ service, link }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
          <ApperIcon name={service.icon} size={24} className="text-white" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
          <p className="text-gray-600 mb-4">{service.description}</p>
          <div className="flex items-center justify-between">
            <span className="text-primary font-semibold">
              Starting at ₹{service.basePrice}/km
            </span>
            <Link to={link}>
              <Button size="sm">Book Now</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;