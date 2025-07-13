import React from "react";
import { useState, useEffect, useRef } from "react";

export function BookingForm({ inputHeight = "h-12", inputPadding = "p-8" }) {
  const inputClass = `bg-white text-gray-800 border-0 ${inputHeight} placeholder:text-gray-500 w-full ${inputPadding} rounded-[4px]`;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    location: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {


    e.preventDefault();

    const formElements = e.target.elements;

    const formData = {
      name: formElements[0].value,
      email: formElements[1].value,
      date: formElements[2].value,
      location: formElements[3].value,
      message: formElements[4].value,
    };

    try {
      const res = await fetch("/api/book-roof", {
        // ❗ Change to your production URL if needed
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Booking submitted!");
        e.target.reset(); // ✅ Reset form after success
      } else {
        alert(data.error || "Something went wrong.");
      }
    } catch (err) {
      console.error("Failed to fetch:", err.message);
      alert("Error submitting the form.");
    }
  };

  return (
    <div className="bg-[#9B1915] p-8 lg:p-12 text-white">
      <div className="space-y-6">
        <h2 className="text-[24px] font-bold mb-8 text-center lg:text-left">
          Book Roof solutions
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Write your name"
            className={inputClass}
            required
          />

          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email address"
            className={inputClass}
            required
          />
          
          <input
            name="date"
            type="date"
            placeholder="Inspection date"
            value={formData.date}
            onChange={handleChange}
            className={inputClass}
            required
          />

          <input
            name="location"
            value={formData.location}
            placeholder="Location"
            onChange={handleChange}
            className={inputClass}
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your query"
            className="bg-white text-gray-800 border-0 h-30 p-8 placeholder:text-gray-500 w-full rounded-[4px]"
          />
          <button
            type="submit"
            className="btn-zoom w-full bg-gray-800 hover:bg-gray-700 text-white font-bold py-4 px-6 rounded-[4px] flex justify-center items-center"
          >
            <span className="btn-zoom-content">Book Now</span>
          </button>
        </form>
      </div>
    </div>
  );
}
