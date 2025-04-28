const Step = ({ stepNumber, stepDescription }) => {
    return (
      <div className="flex items-center gap-4">
        {/* Dynamic Black Arrow */}
        <div className="bg-black text-white font-bold px-4 py-2 text-center relative before:content-[''] before:absolute before:right-[-10px] before:top-1/2 before:h-0 before:w-0 before:border-[10px] before:border-transparent before:border-l-black before:translate-y-[-50%]">
          Step {stepNumber}
        </div>
  
        {/* Step Description */}
        <div className="text-gray-700 font-medium text-base">
          {stepDescription}
        </div>
      </div>
    );
  };
  
  export default Step;
  