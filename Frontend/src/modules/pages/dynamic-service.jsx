import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SingleService } from "./single-service";

export function DynamicService() {
  const { serviceSlug } = useParams();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchServices() {
      try {
        const response = await fetch("/api/services");
        if (!response.ok) throw new Error("Failed to fetch services");
        const data = await response.json();
        setServices(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchServices();
  }, []);

  const currentServiceData = services.find(
    (service) =>
      service.title.toLowerCase().replace(/\s+/g, "-") === serviceSlug
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8F8F8]">
        <p className="text-gray-700 text-lg">Loading...</p>
      </div>
    );
  }

  if (error || !currentServiceData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8F8F8]">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Service Not Found</h1>
          <p className="text-gray-600">{error || "The requested service could not be found."}</p>
        </div>
      </div>
    );
  }

  return <SingleService serviceData={currentServiceData} />;
}
