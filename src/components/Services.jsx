import React from "react";

const services = [
  {
    title: "Resume Rebuild",
    price: "$1000",
    type: "one-time",
    features: [
      "Rebuild your resume to position you in the strongest possible way toward a seniority, specific company, industry, or function",
      "Coaching sessions – 3x / 30 minutes",
      "Best for Senior to VP level positioning",
      "Focus is on storytelling rather than moving words and format around",
      "Work directly with our co-founder who has 20+ years of leadership experience at Google and JP Morgan",
      "Work with our Executive coach (UC)",
    ],
  },
  {
    title: "Interview Prep",
    price: "$500",
    type: "one-time",
    features: [
      "Two 45-minute sessions with our co-founder, who has hired/coached 100's at Google, JP Morgan, and Reuters",
      "Targeted and real-time interview feedback",
      "Focus on clarity, confidence, empathy, communicating value",
      "Senior to executive roles, both technical and non technical",
    ],
  },
];

const SpecialServices = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-start py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full px-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center border-t-4 border-blue-500"
          >
            <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
            <p className="text-3xl font-bold text-blue-600">{service.price}</p>
            <p className="text-blue-500 font-semibold mb-6">{service.type}</p>
            <ul className="text-gray-700 text-left space-y-3 mb-8">
              {service.features.map((feature, idx) => (
                <li key={idx}>• {feature}</li>
              ))}
            </ul>
            <button className="mt-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition duration-300">
              Sign up now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialServices;
