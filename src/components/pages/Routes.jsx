import React, { useState, useEffect } from "react";
import ApperIcon from "@/components/ApperIcon";
import RouteCard from "@/components/molecules/RouteCard";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import Empty from "@/components/ui/Empty";
import { routesService } from "@/services/api/routesService";

const Routes = () => {
  const [routes, setRoutes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedType, setSelectedType] = useState("all");

  const loadRoutes = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await routesService.getAll();
      setRoutes(data);
    } catch (err) {
      setError("Failed to load routes. Please try again.");
      console.error("Error loading routes:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadRoutes();
  }, []);

  const routeTypes = [
    { value: "all", label: "All Routes },
    { value: "popular", label: "Popular Routes" },
    { value: "local", label: "Local Destinations" },
    { value: "outstation", label: "Outstation" }
  ];

  const filteredRoutes = selectedType === "all" 
    ? routes 
    : selectedType === "popular"
    ? routes.filter(route => route.popular)
    : routes.filter(route => route.type === selectedType);

  const handleBookRoute = (route) => {
    console.log("Booking route:", route);
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-16">
        <Error message={error} onRetry={loadRoutes} />
      </div>
    );
  }

  if (routes.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <Empty
          title="No routes available"
          description="Our route information is currently being updated. Please check back soon."
          icon="MapPin"
        />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Popular Routes</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore our most popular destinations and routes. Get instant fare estimates 
          and book your ride to any destination.
        </p>
      </div>

      {/* Route Type Filter */}
      <div className="flex flex-wrap gap-2 justify-center mb-12">
        {routeTypes.map((type) => (
          <button
            key={type.value}
            onClick={() => setSelectedType(type.value)}
            className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
              selectedType === type.value
                ? "bg-primary text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {type.label}
          </button>
        ))}
      </div>

      {/* Routes Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRoutes.map((route) => (
          <RouteCard
            key={route.Id}
            route={route}
            onBook={handleBookRoute}
          />
        ))}
      </div>

      {/* Popular Destinations */}
      <div className="mt-16 bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Popular Destination Categories
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: "Plane",
              title: "Airport Transfers",
              description: "Quick and reliable airport connectivity"
            },
            {
              icon: "Train",
              title: "Railway Stations",
              description: "Convenient station pickup and drop"
            },
            {
              icon: "Mountain",
              title: "Hill Stations",
              description: "Scenic mountain destinations"
            },
            {
              icon: "Building",
              title: "Business Centers",
              description: "Corporate hubs and office complexes"
            },
            {
              icon: "ShoppingBag",
              title: "Shopping Areas",
              description: "Malls and commercial districts"
            },
            {
              icon: "Heart",
              title: "Healthcare",
              description: "Hospitals and medical centers"
            },
            {
              icon: "GraduationCap",
              title: "Educational",
              description: "Schools, colleges, and universities"
            },
            {
              icon: "MapPin",
              title: "Tourist Places",
              description: "Historical and cultural attractions"
            }
          ].map((category, index) => (
            <div key={index} className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <ApperIcon name={category.icon} size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.title}</h3>
              <p className="text-gray-600 text-sm">{category.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Service Areas */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Our Service Areas
        </h2>
        <div className="bg-white rounded-lg p-8 shadow-md">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">City Coverage</h3>
              <ul className="space-y-2">
                {[
                  "All major city areas",
                  "Residential localities",
                  "Commercial districts",
                  "Industrial areas",
                  "Suburban regions"
                ].map((area, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <ApperIcon name="Check" size={16} className="text-green-500" />
                    <span className="text-gray-700">{area}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Outstation Destinations</h3>
              <ul className="space-y-2">
                {[
                  "Neighboring cities (within 500 km)",
                  "Hill stations and tourist spots",
                  "Pilgrimage destinations",
                  "Business centers",
                  "Weekend getaway locations"
                ].map((destination, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <ApperIcon name="Check" size={16} className="text-green-500" />
                    <span className="text-gray-700">{destination}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 bg-gradient-to-r from-primary to-accent rounded-lg p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">Plan Your Journey</h2>
        <p className="text-lg mb-6 text-white/90">
          Can't find your destination? Contact us for custom route planning and quotes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
            Get Custom Quote
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors duration-200">
            Call: +91 9876543210
          </button>
        </div>
      </div>
    </div>
  );
};

export default Routes;