import React from "react";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";

const VehicleCard = ({ vehicle, onBook }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
        <ApperIcon name="Car" size={64} className="text-gray-400" />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-900">{vehicle.category}</h3>
          <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">
            {vehicle.model}
          </span>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center space-x-2">
            <ApperIcon name="Users" size={16} className="text-gray-500" />
            <span className="text-sm text-gray-600">{vehicle.seating} Seats</span>
          </div>
          <div className="flex items-center space-x-2">
            <ApperIcon name="DollarSign" size={16} className="text-gray-500" />
<span className="text-sm text-gray-600">₹{vehicle.pricePerKm || vehicle.price_per_km_c}/km</span>
          </div>
        </div>

        <div className="space-y-2 mb-4">
          {vehicle.features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-2">
              <ApperIcon name="Check" size={14} className="text-green-500" />
              <span className="text-sm text-gray-600">{feature}</span>
            </div>
          ))}
        </div>

        <Button 
          onClick={() => onBook(vehicle)}
          className="w-full"
        >
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default VehicleCard;