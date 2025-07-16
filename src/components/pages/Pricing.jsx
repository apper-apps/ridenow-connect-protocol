import React from "react";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";

const Pricing = () => {
const localTaxiRates = [
    { duration: "4 Hours / 40 KM", hatchback: "₹480", sedan: "₹600", suv: "₹800" },
    { duration: "8 Hours / 80 KM", hatchback: "₹960", sedan: "₹1200", suv: "₹1600" },
    { duration: "12 Hours / 120 KM", hatchback: "₹1440", sedan: "₹1800", suv: "₹2400" }
  ];

  const outstationRates = [
    { category: "Hatchback", rate: "₹9-10", example: "Alto, Swift, WagonR" },
    { category: "Sedan", rate: "₹11-13", example: "Dzire, Amaze, Xcent" },
    { category: "SUV", rate: "₹15-20", example: "Ertiga, Innova, Crysta" },
    { category: "Luxury", rate: "₹25-35", example: "Camry, Accord, BMW" },
    { category: "Tempo Traveller", rate: "₹25-35", example: "9-17 Seater" }
  ];

  const airportRates = [
    { zone: "Zone 1 (0-10 KM)", rates: "₹300-500" },
    { zone: "Zone 2 (10-20 KM)", rates: "₹500-800" },
    { zone: "Zone 3 (20-30 KM)", rates: "₹800-1200" },
    { zone: "Zone 4 (30+ KM)", rates: "₹1200+" }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Transparent Pricing</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          No hidden charges, no surprises. Our pricing is transparent and competitive 
          across all service categories.
        </p>
      </div>

      {/* Local Taxi Rates */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Local Taxi Rates</h2>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-6 py-3 text-left">Package</th>
                  <th className="px-6 py-3 text-center">Hatchback</th>
                  <th className="px-6 py-3 text-center">Sedan</th>
                  <th className="px-6 py-3 text-center">SUV</th>
                </tr>
              </thead>
              <tbody>
                {localTaxiRates.map((rate, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-6 py-4 font-medium text-gray-900">{rate.duration}</td>
                    <td className="px-6 py-4 text-center text-primary font-semibold">{rate.hatchback}</td>
                    <td className="px-6 py-4 text-center text-primary font-semibold">{rate.sedan}</td>
                    <td className="px-6 py-4 text-center text-primary font-semibold">{rate.suv}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Outstation Rates */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Outstation Rates (Per KM)</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {outstationRates.map((rate, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">{rate.category}</h3>
                <span className="text-2xl font-bold text-primary">{rate.rate}</span>
              </div>
              <p className="text-gray-600 text-sm">{rate.example}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Airport Transfer Rates */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Airport Transfer Rates</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {airportRates.map((rate, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">{rate.zone}</h3>
                <span className="text-xl font-bold text-primary">{rate.rates}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Charges */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Additional Charges</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Toll Taxes", description: "As per actual", icon: "Road" },
            { title: "State Taxes", description: "As applicable", icon: "FileText" },
            { title: "Parking Charges", description: "As per actual", icon: "Car" },
            { title: "Night Charges", description: "10% extra (11 PM - 5 AM)", icon: "Moon" }
          ].map((charge, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <ApperIcon name={charge.icon} size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{charge.title}</h3>
              <p className="text-gray-600">{charge.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Payment Methods */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Payment Methods</h2>
        <div className="bg-white rounded-lg p-8 shadow-md">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Cash", icon: "Banknote" },
              { name: "UPI", icon: "Smartphone" },
              { name: "Cards", icon: "CreditCard" },
              { name: "Net Banking", icon: "Globe" }
            ].map((method, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <ApperIcon name={method.icon} size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{method.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cancellation Policy */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Cancellation Policy</h2>
        <div className="bg-white rounded-lg p-8 shadow-md">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ApperIcon name="Check" size={24} className="text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Free Cancellation</h3>
              <p className="text-gray-600">Up to 1 hour before pickup</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ApperIcon name="AlertTriangle" size={24} className="text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">50% Charge</h3>
              <p className="text-gray-600">30 minutes to 1 hour before pickup</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ApperIcon name="X" size={24} className="text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No Refund</h3>
              <p className="text-gray-600">Less than 30 minutes before pickup</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary to-accent rounded-lg p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Book Your Ride?</h2>
        <p className="text-lg mb-6 text-white/90">
          Get instant fare estimates and book your ride with transparent pricing.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="secondary" size="lg">
            Book Now
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
            Call: +91 9876543210
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;