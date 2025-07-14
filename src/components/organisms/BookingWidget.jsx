import React, { useState, useEffect } from "react";
import ApperIcon from "@/components/ApperIcon";
import FormField from "@/components/molecules/FormField";
import Button from "@/components/atoms/Button";

const BookingWidget = () => {
  const [formData, setFormData] = useState({
    tripType: "one-way",
    pickup: "",
    drop: "",
    pickupDate: "",
    pickupTime: "",
    returnDate: "",
    returnTime: ""
  });
  const [estimatedFare, setEstimatedFare] = useState(null);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const calculateFare = () => {
    if (formData.pickup && formData.drop) {
      // Simple fare calculation logic
      const baseRate = 12;
      const estimatedDistance = Math.floor(Math.random() * 20) + 5; // Random distance for demo
      const fare = baseRate * estimatedDistance;
      setEstimatedFare(fare);
    }
  };

  useEffect(() => {
    calculateFare();
  }, [formData.pickup, formData.drop]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle booking submission
    console.log("Booking data:", formData);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center space-x-2 mb-6">
        <ApperIcon name="Car" size={24} className="text-primary" />
        <h2 className="text-xl font-semibold text-gray-900">Book Your Ride</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Trip Type */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { value: "one-way", label: "One Way" },
            { value: "round-trip", label: "Round Trip" },
            { value: "local", label: "Local" }
          ].map((type) => (
            <button
              key={type.value}
              type="button"
              onClick={() => handleInputChange("tripType", type.value)}
              className={`p-3 rounded-lg border text-sm font-medium transition-colors duration-200 ${
                formData.tripType === type.value
                  ? "bg-primary text-white border-primary"
                  : "border-gray-300 text-gray-700 hover:border-primary"
              }`}
            >
              {type.label}
            </button>
          ))}
        </div>

        {/* Pickup and Drop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            label="Pickup Location"
            value={formData.pickup}
            onChange={(e) => handleInputChange("pickup", e.target.value)}
            placeholder="Enter pickup point"
          />
          <FormField
            label="Drop Location"
            value={formData.drop}
            onChange={(e) => handleInputChange("drop", e.target.value)}
            placeholder="Enter destination"
          />
        </div>

        {/* Date and Time */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            label="Pickup Date"
            type="date"
            value={formData.pickupDate}
            onChange={(e) => handleInputChange("pickupDate", e.target.value)}
          />
          <FormField
            label="Pickup Time"
            type="time"
            value={formData.pickupTime}
            onChange={(e) => handleInputChange("pickupTime", e.target.value)}
          />
        </div>

        {/* Return Date/Time for Round Trip */}
        {formData.tripType === "round-trip" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              label="Return Date"
              type="date"
              value={formData.returnDate}
              onChange={(e) => handleInputChange("returnDate", e.target.value)}
            />
            <FormField
              label="Return Time"
              type="time"
              value={formData.returnTime}
              onChange={(e) => handleInputChange("returnTime", e.target.value)}
            />
          </div>
        )}

        {/* Estimated Fare */}
        {estimatedFare && (
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-700 font-medium">Estimated Fare:</span>
              <span className="text-2xl font-bold text-primary">₹{estimatedFare}</span>
            </div>
          </div>
        )}

        {/* Submit Button */}
        <Button type="submit" className="w-full">
          <ApperIcon name="ArrowRight" size={20} />
          Book Now
        </Button>
      </form>
    </div>
  );
};

export default BookingWidget;