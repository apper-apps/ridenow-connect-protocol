import React from "react";
import ApperIcon from "@/components/ApperIcon";

const Empty = ({ 
  title = "No data available", 
  description = "There's nothing to show here yet.", 
  actionText = "Get Started",
  onAction,
  icon = "FileX"
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
          <ApperIcon name={icon} size={32} className="text-gray-400" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600 max-w-md">{description}</p>
        {onAction && (
          <button
            onClick={onAction}
            className="btn-primary inline-flex items-center gap-2 mt-4"
          >
            <ApperIcon name="Plus" size={16} />
            {actionText}
          </button>
        )}
      </div>
    </div>
  );
};

export default Empty;