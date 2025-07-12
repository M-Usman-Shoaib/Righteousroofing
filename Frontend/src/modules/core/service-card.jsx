import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
export function ServiceCard({
  title,
  icon,
  description,
  isDark = false,
  showReadMore = false,
  transparentBg = false,
  slug,
}) {
  return (
    <div
      className={`group p-10 pt-12 shadow relative border-t-2 transition duration-300
        ${
          transparentBg
            ? isDark
              ? "bg-[#2f2933]/80 text-white border-white"
              : "bg-[#F3F1F2]/80 text-black border-[#9f1313]"
            : isDark
            ? "bg-[#2f2933] text-white border-white"
            : "bg-white text-black border-[#9f1313]"
        }
        hover:bg-[#363739]/80
      `}
    >
      <div className="absolute -top-8 left-20 transform -translate-x-1/2 w-[100px]">
        {icon}
      </div>
      <h3 className="mt-6 text-lg font-semibold group-hover:text-white">
        {title}
      </h3>
      <p
        className={`text-sm mt-2 group-hover:text-white ${
          isDark ? "text-white" : "text-[#6F6E77]"
        }`}
      >
        {description}
      </p>
      {showReadMore && slug && (
        <Link
          to={`/service/${slug}`}
          className="pt-2 text-sm font-semibold text-[#9B1915] flex items-center gap-1 cursor-pointer group-hover:text-white"
        >
          READ MORE <FaArrowRight />
        </Link>
      )}
      {showReadMore && !slug && (
        <div className="pt-2 text-sm font-semibold text-[#9B1915] flex items-center gap-1 cursor-pointer group-hover:text-white">
          READ MORE <FaArrowRight />
        </div>
      )}
    </div>
  );
}
