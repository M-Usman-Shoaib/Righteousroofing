import { FaAngleDoubleRight } from "react-icons/fa";

export function PageHeader({ title, secondTitle }) {
  return (
    <div className="relative h-60 bg-about-section flex items-center justify-center">
      <div className="absolute inset-0"></div>
      <div className="relative z-10 text-center text-white cursor-pointer">
        <h1 className="text-4xl font-bold mb-2">
          {secondTitle ? secondTitle : title}
        </h1>
        <div className="flex justify-center items-center space-x-2 text-sm">
          <span className="text-gray-200">Home</span>
          <FaAngleDoubleRight className="text-white text-xs" />
          <span
            className={`${
              secondTitle ? `text-gray-200` : `text-red-500 font-semibold`
            }`}
          >
            {title}
          </span>
          {secondTitle && (
            <>
              <FaAngleDoubleRight className="text-white text-xs" />
              <span className="text-red-500 font-semibold">{secondTitle}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
