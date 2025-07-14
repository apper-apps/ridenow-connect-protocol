import React from "react";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";

const RouteCard = ({ route, onBook }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{route.origin} → {route.destination}</h3>
          <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <ApperIcon name="MapPin" size={14} />
              <span>{route.distance} km</span>
            </div>
            <div className="flex items-center space-x-1">
              <ApperIcon name="Clock" size={14} />
              <span>{route.estimatedTime}</span>
            </div>
          </div>
        </div>
        {route.popular && (
          <span className="bg-accent text-white px-3 py-1 rounded-full text-sm">
            Popular
          </span>
        )}
      </div>
      
      <div className="flex items-center justify-between">
        <div className="text-primary font-semibold">
          Starting at ₹{route.baseFare}
        </div>
        <Button size="sm" onClick={() => onBook(route)}>
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default RouteCard;