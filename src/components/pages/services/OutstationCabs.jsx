import React from "react";
import { Link } from "react-router-dom";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";

const OutstationCabs = () => {
  const vehicleRates = [
    {
      category: "Hatchback",
      models: "Alto, Swift, WagonR",
      rate: "₹9-10/km",
      seating: "4 passengers",
      luggage: "2-3 bags",
      bestFor: "Budget travel, short trips"
    },
    {
      category: "Sedan",
      models: "Dzire, Amaze, Xcent",
      rate: "₹11-13/km",
      seating: "4 passengers",
      luggage: "3-4 bags",
      bestFor: "Comfortable long trips"
    },
    {
      category: "SUV",
      models: "Ertiga, Innova, Crysta",
      rate: "₹15-20/km",
      seating: "6-7 passengers",
      luggage: "4-5 bags",
      bestFor: "Family trips, group travel"
    },
    {
      category: "Luxury",
      models: "Camry, Accord, BMW",
      rate: "₹25-35/km",
      seating: "4 passengers",
      luggage: "3-4 bags",
      bestFor: "VIP travel, business trips"
    }
  ];

  const popularRoutes = [
    { destination: "Hill Station Getaway", distance: "250 km", time: "5 hours", fare: "₹2,500" },
    { destination: "Pilgrimage Tour", distance: "180 km", time: "4 hours", fare: "₹1,800" },
    { destination: "Business City", distance: "300 km", time: "6 hours", fare: "₹3,000" },
    { destination: "Weekend Resort", distance: "150 km", time: "3 hours", fare: "₹1,500" }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Outstation Cabs</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comfortable and safe long-distance travel to your favorite destinations. 
          Professional drivers, well-maintained vehicles, and transparent pricing.
        </p>
      </div>

      {/* Service Types */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {[
          {
            icon: "ArrowRight",
            title: "One-Way Service",
            description: "Travel to your destination without return booking",
            features: ["Flexible timing", "No return commitment", "Pay for actual distance"]
          },
          {
            icon: "ArrowRightLeft",
            title: "Round Trip Service",
            description: "Complete round trip with pickup and drop back",
            features: ["Better pricing", "Same driver", "Convenient scheduling"]
          },
          {
            icon: "MapPin",
            title: "Multi-City Tours",
            description: "Visit multiple cities in a single trip",
            features: ["Custom itinerary", "Multiple stops", "Tour guide available"]
          }
        ].map((service, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mb-4">
              <ApperIcon name={service.icon} size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <ul className="space-y-2">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center space-x-2">
                  <ApperIcon name="Check" size={16} className="text-green-500" />
                  <span className="text-gray-700 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Vehicle Rates */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Vehicle Categories & Rates</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {vehicleRates.map((vehicle, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">{vehicle.category}</h3>
                <span className="text-2xl font-bold text-primary">{vehicle.rate}</span>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Models:</span>
                  <span className="text-gray-900 font-medium">{vehicle.models}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Seating:</span>
                  <span className="text-gray-900 font-medium">{vehicle.seating}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Luggage:</span>
                  <span className="text-gray-900 font-medium">{vehicle.luggage}</span>
                </div>
                <div className="pt-2 border-t">
                  <p className="text-sm text-gray-600">Best for: {vehicle.bestFor}</p>
                </div>
              </div>
              
              <Link to="/book" className="block mt-4">
                <Button className="w-full">Book Now</Button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Routes */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Popular Routes</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {popularRoutes.map((route, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">{route.destination}</h3>
                <span className="text-primary font-bold">{route.fare}</span>
              </div>
              
              <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                <div className="flex items-center space-x-1">
                  <ApperIcon name="MapPin" size={14} />
                  <span>{route.distance}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <ApperIcon name="Clock" size={14} />
                  <span>{route.time}</span>
                </div>
              </div>
              
              <Link to="/book">
                <Button variant="outline" className="w-full">Book This Route</Button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="bg-gray-50 rounded-lg p-8 mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Why Choose Our Outstation Service?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: "Shield", title: "Safe & Secure", desc: "Verified drivers and GPS tracking" },
            { icon: "Clock", title: "Flexible Timing", desc: "Pick your departure time" },
            { icon: "MapPin", title: "Door-to-Door", desc: "Pickup and drop at your location" },
            { icon: "Phone", title: "24/7 Support", desc: "Round-the-clock assistance" },
            { icon: "DollarSign", title: "Transparent Pricing", desc: "No hidden charges" },
            { icon: "Car", title: "Well-Maintained Fleet", desc: "Regular servicing and cleaning" }
          ].map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <ApperIcon name={feature.icon} size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Details */}
      <div className="bg-white rounded-lg p-8 shadow-md mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Pricing Structure</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Inclusions</h3>
            <ul className="space-y-2">
              {[
                "Professional driver",
                "Fuel charges",
                "Driver allowance",
                "Toll taxes",
                "State taxes",
                "Parking charges"
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <ApperIcon name="Check" size={16} className="text-green-500" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Additional Information</h3>
            <ul className="space-y-2">
              {[
                "Minimum 250 km per day",
                "Driver allowance: ₹300/day",
                "Night halt charges: ₹300/night",
                "Waiting charges: ₹50/hour",
                "Cancellation free up to 1 hour",
                "Advance booking recommended"
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <ApperIcon name="Info" size={16} className="text-blue-500" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary to-accent rounded-lg p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">Plan Your Outstation Journey</h2>
        <p className="text-lg mb-6 text-white/90">
          Book your outstation cab now and enjoy comfortable travel to your destination.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/book">
            <Button variant="secondary" size="lg">
              Book Outstation Cab
            </Button>
          </Link>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
            Get Custom Quote
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OutstationCabs;