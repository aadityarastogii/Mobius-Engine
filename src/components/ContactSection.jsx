import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactSection = () => {
  return (
    <div className="bg-white py-16 flex flex-col items-center text-center mt-10 ">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">
        Mobius Services LLC
      </h2>
      <div className="space-y-6 text-gray-700">
        <div className="flex items-center justify-center gap-3">
          <FaMapMarkerAlt className="text-gray-500" />
          <p>1875 Mission St Ste 103 #450<br />San Francisco, CA 94103</p>
        </div>
        <div className="flex items-center justify-center gap-3">
          <FaPhoneAlt className="text-gray-500" />
          <p>Tel: 650-889-6026</p>
        </div>
        <div className="flex items-center justify-center gap-3">
          <FaEnvelope className="text-gray-500" />
          <p>finance@mobiusengine.ai</p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
