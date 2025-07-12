import React from "react";
import { useParams } from "react-router-dom";
import { SingleService } from "./single-service";
import { serviceData } from "./serviceData";

export function DynamicService() {
  const { serviceSlug } = useParams();
  
  // Get the service data based on the URL parameter
  const currentServiceData = serviceData[serviceSlug];
  
  // If service doesn't exist, show a default or error
  if (!currentServiceData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8F8F8]">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Service Not Found</h1>
          <p className="text-gray-600">The requested service could not be found.</p>
        </div>
      </div>
    );
  }

  return <SingleService serviceData={currentServiceData} />;
} 