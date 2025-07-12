import React from "react";
import {BookingDetails} from "./booking-details";
import {BookingForm} from "./booking-form";
export function Booking() {
  return (
    <div className=" flex items-center justify-center my-20">
      <div className="max-w-6xl w-full px-6 mx-auto">
        <div className="grid lg:grid-cols-2 gap-0">
          <BookingDetails />
          <BookingForm />
        </div>
      </div>
    </div>
  );
}
