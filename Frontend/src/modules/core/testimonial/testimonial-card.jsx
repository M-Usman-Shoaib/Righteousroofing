import { FaStar, FaRegStar, FaQuoteLeft } from "react-icons/fa";

export function TestimonialCard({ testimonial }) {
  const renderStars = (rating) =>
    Array.from({ length: 5 }, (_, i) =>
      i < rating ? (
        <FaStar key={i} className="w-4 h-4 text-white" />
      ) : (
        <FaRegStar key={i} className="w-4 h-4 text-white" />
      )
    );

  return (
    <div className="bg-[#F3F1F2] rounded-lg p-6 shadow-sm relative">
      <div className="absolute top-0 left-0">
        <div
          className="bg-[#9B1915] px-4 py-2 flex items-center gap-1 rounded-tl-lg"
          style={{
            clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 100%, 0 100%)",
          }}
        >
          {renderStars(testimonial.rating)}
        </div>
      </div>

      <div className="absolute top-4 right-4">
        <div className="w-8 h-8 bg-[#9B1915] rounded flex items-center justify-center">
          <FaQuoteLeft className="w-4 h-4 text-white" />
        </div>
      </div>

      <div className="pt-12 pb-6">
        <h3 className="text-lg font-bold text-gray-800 mb-3">
          {testimonial.title}
        </h3>
        <p className="text-gray-600 leading-relaxed text-sm">
          {testimonial.content}
        </p>
      </div>

      <div className="flex items-center gap-4 pt-4 border-l-2 border-red-700 pl-4">
        <img
          src={testimonial.author.avatar || "/placeholder.svg"}
          alt={testimonial.author.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-bold text-gray-800">{testimonial.author.name}</h4>
          <p className="text-sm text-gray-600">{testimonial.author.position}</p>
        </div>
      </div>
    </div>
  );
}
