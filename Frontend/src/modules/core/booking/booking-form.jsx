import React from "react";

export function BookingForm({ inputHeight = "h-12", inputPadding = "p-8" }) {
  const inputClass = `bg-white text-gray-800 border-0 ${inputHeight} placeholder:text-gray-500 w-full ${inputPadding} rounded-[4px]`;
  return (
    <div className="bg-[#9B1915] p-8 lg:p-12 text-white">
      <div className="space-y-6">
        <h2 className="text-[24px] font-bold mb-8 text-center lg:text-left">
          Book Roof solutions
        </h2>

        <form className="space-y-6">
          onSubmit={async (e) => {
            e.preventDefault();

            const formData = {
              name: e.target[0].value,
              email: e.target[1].value,
              date: e.target[2].value,
              location: e.target[3].value,
              message: e.target[4].value,
            };

            try {
              const res = await fetch("http://localhost:5000/api/book-roof", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
              });

              const data = await res.json();
              if (res.ok) {
                alert("Booking submitted!");
              } else {
                alert(data.error || "Something went wrong.");
              }
            } catch (err) {
              console.error(err);
              alert("Error submitting the form.");
            }
          }}

          <input
            type="text"
            placeholder="Write your name"
            className={inputClass}
          />

          <input
            type="email"
            placeholder="Email address"
            className={inputClass}
          />

          <input
            type="text"
            placeholder="Inspection Date"
            className={inputClass}
          />

          <input
            type="text"
            placeholder="Your Location"
            className={inputClass}
          />
          <textarea
            placeholder="Your Query"
            className={`bg-white text-gray-800 border-0 h-30 placeholder:text-gray-500 w-full ${inputPadding} rounded-[4px]`}
          />

          <button
            type="submit"
            className="btn-zoom w-full bg-gray-800 hover:bg-gray-700 text-white font-bold py-4 px-6 rounded-[4px] flex justify-center items-center"
          >
            <span className="btn-zoom-content ">Book Now</span>
          </button>
        </form>
      </div>
    </div>
  );
}
