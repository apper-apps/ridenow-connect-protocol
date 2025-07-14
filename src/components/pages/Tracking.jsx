import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import ApperIcon from "@/components/ApperIcon";
import FormField from "@/components/molecules/FormField";
import Button from "@/components/atoms/Button";

const Tracking = () => {
  const [bookingId, setBookingId] = useState("");
  const [trackingData, setTrackingData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleTrackRide = async (e) => {
    e.preventDefault();
    
    if (!bookingId.trim()) {
      toast.error("Please enter a booking ID");
      return;
    }

    setLoading(true);
    
    // Simulate tracking API call
    setTimeout(() => {
      setTrackingData({
        bookingId: bookingId,
        status: "On the way",
        driver: {
          name: "Rajesh Kumar",
          phone: "+91 9876543210",
          rating: 4.8,
          vehicle: "Swift Dzire - MH 01 AB 1234"
        },
        pickup: "123 Main Street, City Center",
        drop: "456 Business Park, Tech Hub",
        estimatedArrival: "5 minutes",
        currentLocation: "Near City Mall, approaching pickup point",
        fare: 250
      });
      setLoading(false);
      toast.success("Ride tracked successfully!");
    }, 1000);
  };

  const handleCallDriver = () => {
    toast.info("Calling driver...");
  };

  const handleCancelRide = () => {
    if (window.confirm("Are you sure you want to cancel this ride?")) {
      setTrackingData(null);
      setBookingId("");
      toast.success("Ride cancelled successfully");
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Track Your Ride</h1>
        <p className="text-xl text-gray-600">
          Enter your booking ID to track your ride in real-time
        </p>
      </div>

      {/* Tracking Form */}
      <div className="max-w-2xl mx-auto mb-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <form onSubmit={handleTrackRide} className="space-y-6">
            <FormField
              label="Booking ID"
              value={bookingId}
              onChange={(e) => setBookingId(e.target.value)}
              placeholder="Enter your booking ID (e.g., RN123456)"
            />
            
            <Button type="submit" disabled={loading} className="w-full">
              {loading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              ) : (
                <ApperIcon name="Search" size={20} />
              )}
              {loading ? "Tracking..." : "Track Ride"}
            </Button>
          </form>
        </div>
      </div>

      {/* Tracking Results */}
      {trackingData && (
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Map Area */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Live Tracking</h2>
                <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
                  <div className="text-center">
                    <ApperIcon name="MapPin" size={48} className="text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">Interactive map would be integrated here</p>
                    <p className="text-sm text-gray-500 mt-2">
                      Current location: {trackingData.currentLocation}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Ride Details */}
            <div className="space-y-6">
              {/* Status Card */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Ride Status</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    trackingData.status === "On the way" 
                      ? "bg-blue-100 text-blue-800"
                      : "bg-green-100 text-green-800"
                  }`}>
                    {trackingData.status}
                  </span>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-600">Booking ID</p>
                    <p className="font-semibold text-gray-900">{trackingData.bookingId}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Estimated Arrival</p>
                    <p className="font-semibold text-primary">{trackingData.estimatedArrival}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Fare</p>
                    <p className="font-semibold text-gray-900">₹{trackingData.fare}</p>
                  </div>
                </div>
              </div>

              {/* Driver Details */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Driver Details</h3>
                
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <ApperIcon name="User" size={24} className="text-gray-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{trackingData.driver.name}</p>
                    <div className="flex items-center space-x-1">
                      <ApperIcon name="Star" size={14} className="text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{trackingData.driver.rating}</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2">
                    <ApperIcon name="Phone" size={16} className="text-gray-500" />
                    <span className="text-sm text-gray-600">{trackingData.driver.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ApperIcon name="Car" size={16} className="text-gray-500" />
                    <span className="text-sm text-gray-600">{trackingData.driver.vehicle}</span>
                  </div>
                </div>
                
                <Button variant="outline" onClick={handleCallDriver} className="w-full">
                  <ApperIcon name="Phone" size={16} />
                  Call Driver
                </Button>
              </div>

              {/* Trip Details */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Trip Details</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm text-gray-600">Pickup</p>
                      <p className="font-medium text-gray-900">{trackingData.pickup}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm text-gray-600">Drop</p>
                      <p className="font-medium text-gray-900">{trackingData.drop}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Actions</h3>
                
                <div className="space-y-3">
                  <Button variant="outline" className="w-full">
                    <ApperIcon name="MessageSquare" size={16} />
                    Message Driver
                  </Button>
                  
                  <Button variant="outline" className="w-full">
                    <ApperIcon name="Share" size={16} />
                    Share Location
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    onClick={handleCancelRide}
                    className="w-full text-red-600 border-red-200 hover:bg-red-50"
                  >
                    <ApperIcon name="X" size={16} />
                    Cancel Ride
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Help Section */}
      <div className="max-w-4xl mx-auto mt-16">
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Need Help?</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <ApperIcon name="Phone" size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Support</h3>
              <p className="text-gray-600 mb-4">24/7 customer support</p>
              <p className="text-primary font-semibold">+91 9876543210</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <ApperIcon name="MessageSquare" size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">WhatsApp</h3>
              <p className="text-gray-600 mb-4">Quick chat support</p>
              <p className="text-primary font-semibold">+91 9876543210</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <ApperIcon name="AlertTriangle" size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Emergency</h3>
              <p className="text-gray-600 mb-4">Emergency assistance</p>
              <p className="text-red-600 font-semibold">+91 9876543211</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracking;