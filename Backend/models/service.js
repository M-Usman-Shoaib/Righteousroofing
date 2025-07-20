const mongoose = require("mongoose");

const ServiceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  heroImage: {
    type: String,
    required: true,
  },
  heroImageAlt: {
    type: String,
    required: false,
  },
  mainTitle: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  extraTitle: {
    type: String,
    required: true,
  },
  extraDescription: {
    type: String,
    required: true,
  },
  serviceCards: [
    {
      title: {
        type: String,
        required: true,
      },
      icon: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      isDark: {
        type: Boolean,
        default: false,
      },
    },
  ],
  sidebarServices: [
    {
      type: String,
      required: true,
    }
  ],
  activeService: {
    type: String,
    required: true,
  },
  faqData: [
    {
      id:{
        type: Number,
        required: true,
      },
      question: {
        type: String,
        required: true,
      },
      answer: {
        type: String,
        required: true,
      },
    }
  ]
});

const Service = mongoose.model("Service", ServiceSchema);

module.exports = Service;
