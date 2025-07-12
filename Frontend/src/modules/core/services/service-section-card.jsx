import React from "react";
import { ServiceCard } from "../service-card";
import { Link } from "react-router-dom";

export function ServicesSectionCard({ image, icon, title, description, slug }) {
  return (
    <div
      className="relative group h-64 flex items-end justify-center"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0" />
      <div className="relative z-10 w-[90%] h-1/2">
        <ServiceCard
          title={title}
          icon={<img src={icon} alt={title + " icon"} className="w-100" />}
          description={description}
          showReadMore={true}
          transparentBg={true}
          slug={slug}
        />
      </div>
    </div>
  );
}
