const mongoose = require("mongoose");

const ServiceSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true, // URL or path to image
  },
  heading: {
    type: String,
    required: true,
  },
  subHeading: {
    type: String,
    required: true,
  },
  headingDetails: {
    type: String,
    required: true,
  },
  subHeadingDetails: {
    type: String,
    required: true,
  },
  faqs: [
    {
      question: {
        type: String,
        required: true,
      },
      answer: {
        type: String,
        required: true,
      },
    },
  ],
  extras: {
    title: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
  },
});

const Service = mongoose.model("Service", ServiceSchema);

module.exports = Service;

