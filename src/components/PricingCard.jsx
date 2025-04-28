import React from "react";

const PricingCard = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-[25%] text-center">
        {/* Header */}
        <div className="border-b-4 border-blue-500 pb-4 mb-6">
          <h2 className="text-2xl font-bold mb-2">April Promo</h2>
          <p className="text-3xl font-bold text-blue-600">$35<span className="text-base font-normal">/wk</span></p>
        </div>

        {/* Features List */}
        <ul className="text-gray-700 text-left space-y-3 mb-8">
          <li>• Search and Curation across 1M+ jobs, every 48 hours</li>
          <li>• Up to 20 approved job apps/week – human based, no bots, company websites only</li>
          <li>• Additional apps at $1.5/application</li>
          <li>• Dedicated application analyst</li>
          <li>• Up to 10 search criteria & 5 job titles included</li>
        </ul>

        {/* Button */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition duration-300">
          Sign up now
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
