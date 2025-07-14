import React from "react";

const Loading = ({ type = "default" }) => {
  if (type === "hero") {
    return (
      <div className="bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="h-12 bg-white/20 rounded-lg animate-pulse"></div>
              <div className="h-6 bg-white/20 rounded-lg animate-pulse"></div>
              <div className="h-6 bg-white/20 rounded-lg w-3/4 animate-pulse"></div>
              <div className="h-12 bg-white/20 rounded-lg w-1/2 animate-pulse"></div>
            </div>
            <div className="bg-white/20 rounded-lg p-6 space-y-4">
              <div className="h-6 bg-white/20 rounded-lg animate-pulse"></div>
              <div className="grid grid-cols-2 gap-4">
                <div className="h-12 bg-white/20 rounded-lg animate-pulse"></div>
                <div className="h-12 bg-white/20 rounded-lg animate-pulse"></div>
              </div>
              <div className="h-12 bg-white/20 rounded-lg animate-pulse"></div>
              <div className="h-12 bg-white/20 rounded-lg animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "services") {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="bg-white rounded-lg p-6 shadow-md">
            <div className="w-12 h-12 bg-gray-200 rounded-lg animate-pulse mb-4"></div>
            <div className="h-6 bg-gray-200 rounded-lg animate-pulse mb-2"></div>
            <div className="h-4 bg-gray-200 rounded-lg animate-pulse mb-4"></div>
            <div className="h-10 bg-gray-200 rounded-lg animate-pulse"></div>
          </div>
        ))}
      </div>
    );
  }

  if (type === "fleet") {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200 animate-pulse"></div>
            <div className="p-6 space-y-4">
              <div className="h-6 bg-gray-200 rounded-lg animate-pulse"></div>
              <div className="grid grid-cols-2 gap-4">
                <div className="h-4 bg-gray-200 rounded-lg animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded-lg animate-pulse"></div>
              </div>
              <div className="h-10 bg-gray-200 rounded-lg animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center py-12">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
    </div>
  );
};

export default Loading;