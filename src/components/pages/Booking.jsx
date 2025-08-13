import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import ApperIcon from "@/components/ApperIcon";
import FormField from "@/components/molecules/FormField";
import Button from "@/components/atoms/Button";
import { vehiclesService } from "@/services/api/vehiclesService";

const Booking = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [vehicles, setVehicles] = useState([]);
  const [bookingData, setBookingData] = useState({
    tripType: "one-way",
    pickup: "",
    drop: "",
    pickupDate: "",
    pickupTime: "",
    returnDate: "",
    returnTime: "",
    selectedVehicle: null,
    customerInfo: {
      name: "",
      email: "",
      phone: ""
    }
  });

  useEffect(() => {
    loadVehicles();
  }, []);

  const loadVehicles = async () => {
    try {
      const data = await vehiclesService.getAll();
      setVehicles(data);
    } catch (error) {
      toast.error("Failed to load vehicles");
    }
  };

  const handleInputChange = (field, value) => {
    if (field.includes(".")) {
      const [parent, child] = field.split(".");
      setBookingData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setBookingData(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  const handleNextStep = () => {
    if (currentStep === 1) {
      if (!bookingData.pickup || !bookingData.drop || !bookingData.pickupDate || !bookingData.pickupTime) {
        toast.error("Please fill in all trip details");
        return;
      }
    } else if (currentStep === 2) {
      if (!bookingData.selectedVehicle) {
        toast.error("Please select a vehicle");
        return;
      }
    }
    setCurrentStep(prev => prev + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!bookingData.customerInfo.name || !bookingData.customerInfo.email || !bookingData.customerInfo.phone) {
      toast.error("Please fill in all customer information");
      return;
    }

    console.log("Booking submitted:", bookingData);
    toast.success("Booking confirmed! You will receive a confirmation message shortly.");
    
    // Reset form
    setBookingData({
      tripType: "one-way",
      pickup: "",
      drop: "",
      pickupDate: "",
      pickupTime: "",
      returnDate: "",
      returnTime: "",
      selectedVehicle: null,
      customerInfo: {
        name: "",
        email: "",
        phone: ""
      }
    });
    setCurrentStep(1);
  };

  const calculateFare = () => {
    if (bookingData.selectedVehicle) {
      const estimatedDistance = Math.floor(Math.random() * 20) + 5;
return (bookingData.selectedVehicle.pricePerKm || bookingData.selectedVehicle.price_per_km_c) * estimatedDistance;
    }
    return 0;
  };

  const steps = [
    { number: 1, title: "Trip Details", icon: "MapPin" },
    { number: 2, title: "Select Vehicle", icon: "Car" },
    { number: 3, title: "Customer Info", icon: "User" }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Book Your Ride</h1>
        <p className="text-xl text-gray-600">
          Complete your booking in just a few simple steps
        </p>
      </div>

      {/* Progress Steps */}
      <div className="max-w-2xl mx-auto mb-12">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-center">
              <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 ${
                currentStep >= step.number 
                  ? "bg-primary border-primary text-white" 
                  : "border-gray-300 text-gray-400"
              }`}>
                <ApperIcon name={step.icon} size={20} />
              </div>
              <div className="ml-4">
                <div className={`text-sm font-medium ${
                  currentStep >= step.number ? "text-primary" : "text-gray-400"
                }`}>
                  Step {step.number}
                </div>
                <div className={`text-sm ${
                  currentStep >= step.number ? "text-gray-900" : "text-gray-400"
                }`}>
                  {step.title}
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className={`w-16 h-0.5 mx-6 ${
                  currentStep > step.number ? "bg-primary" : "bg-gray-300"
                }`}></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Booking Form */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8">
          {/* Step 1: Trip Details */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Trip Details</h2>
              
              {/* Trip Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Trip Type
                </label>
                <div className="grid grid-cols-3 gap-4">
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
                        bookingData.tripType === type.value
                          ? "bg-primary text-white border-primary"
                          : "border-gray-300 text-gray-700 hover:border-primary"
                      }`}
                    >
                      {type.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Pickup and Drop */}
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  label="Pickup Location *"
                  value={bookingData.pickup}
                  onChange={(e) => handleInputChange("pickup", e.target.value)}
                  placeholder="Enter pickup point"
                />
                <FormField
                  label="Drop Location *"
                  value={bookingData.drop}
                  onChange={(e) => handleInputChange("drop", e.target.value)}
                  placeholder="Enter destination"
                />
              </div>

              {/* Date and Time */}
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  label="Pickup Date *"
                  type="date"
                  value={bookingData.pickupDate}
                  onChange={(e) => handleInputChange("pickupDate", e.target.value)}
                />
                <FormField
                  label="Pickup Time *"
                  type="time"
                  value={bookingData.pickupTime}
                  onChange={(e) => handleInputChange("pickupTime", e.target.value)}
                />
              </div>

              {/* Return Date/Time for Round Trip */}
              {bookingData.tripType === "round-trip" && (
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    label="Return Date *"
                    type="date"
                    value={bookingData.returnDate}
                    onChange={(e) => handleInputChange("returnDate", e.target.value)}
                  />
                  <FormField
                    label="Return Time *"
                    type="time"
                    value={bookingData.returnTime}
                    onChange={(e) => handleInputChange("returnTime", e.target.value)}
                  />
                </div>
              )}
            </div>
          )}

          {/* Step 2: Vehicle Selection */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Vehicle</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {vehicles.map((vehicle) => (
                  <div
                    key={vehicle.Id}
                    onClick={() => handleInputChange("selectedVehicle", vehicle)}
                    className={`border rounded-lg p-6 cursor-pointer transition-colors duration-200 ${
                      bookingData.selectedVehicle?.Id === vehicle.Id
                        ? "border-primary bg-primary/5"
                        : "border-gray-300 hover:border-primary"
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                        <ApperIcon name="Car" size={32} className="text-gray-500" />
                      </div>
                      <div className="flex-1">
<h3 className="text-lg font-semibold text-gray-900">{vehicle.category || vehicle.category_c}</h3>
<p className="text-sm text-gray-600">{vehicle.model || vehicle.model_c}</p>
                        <div className="flex items-center space-x-4 mt-2">
                          <span className="text-sm text-gray-500">
                            <ApperIcon name="Users" size={14} className="inline mr-1" />
{vehicle.seating || vehicle.seating_c} seats
                          </span>
                          <span className="text-primary font-semibold">
₹{vehicle.pricePerKm || vehicle.price_per_km_c}/km
                          </span>
                        </div>
                      </div>
                      {bookingData.selectedVehicle?.Id === vehicle.Id && (
                        <ApperIcon name="Check" size={24} className="text-primary" />
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Fare Estimate */}
              {bookingData.selectedVehicle && (
                <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Fare Estimate</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Selected Vehicle</p>
<p className="font-semibold text-gray-900">{bookingData.selectedVehicle.category || bookingData.selectedVehicle.category_c}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Estimated Fare</p>
                      <p className="text-2xl font-bold text-primary">₹{calculateFare()}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Step 3: Customer Information */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Customer Information</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  label="Full Name *"
                  value={bookingData.customerInfo.name}
                  onChange={(e) => handleInputChange("customerInfo.name", e.target.value)}
                  placeholder="Enter your full name"
                />
                <FormField
                  label="Phone Number *"
                  type="tel"
                  value={bookingData.customerInfo.phone}
                  onChange={(e) => handleInputChange("customerInfo.phone", e.target.value)}
                  placeholder="Enter your phone number"
                />
              </div>

              <FormField
                label="Email Address *"
                type="email"
                value={bookingData.customerInfo.email}
                onChange={(e) => handleInputChange("customerInfo.email", e.target.value)}
                placeholder="Enter your email address"
              />

              {/* Booking Summary */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Booking Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Trip Type:</span>
                    <span className="font-medium">{bookingData.tripType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">From:</span>
                    <span className="font-medium">{bookingData.pickup}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">To:</span>
                    <span className="font-medium">{bookingData.drop}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Date & Time:</span>
                    <span className="font-medium">{bookingData.pickupDate} at {bookingData.pickupTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Vehicle:</span>
<span className="font-medium">{bookingData.selectedVehicle?.category || bookingData.selectedVehicle?.category_c}</span>
                  </div>
                  <div className="flex justify-between border-t pt-3">
                    <span className="text-lg font-semibold text-gray-900">Total Fare:</span>
                    <span className="text-lg font-bold text-primary">₹{calculateFare()}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={handlePrevStep}
              disabled={currentStep === 1}
            >
              <ApperIcon name="ArrowLeft" size={20} />
              Previous
            </Button>
            
            {currentStep < 3 ? (
              <Button onClick={handleNextStep}>
                Next
                <ApperIcon name="ArrowRight" size={20} />
              </Button>
            ) : (
              <Button onClick={handleSubmit}>
                Confirm Booking
                <ApperIcon name="Check" size={20} />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;