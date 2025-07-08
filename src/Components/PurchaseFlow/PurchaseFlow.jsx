import React, { useState } from 'react';

const steps = ['Product Info', 'Shipping Details', 'Payment Info', 'Confirmation'];

const PurchaseFlow = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="lg:container mx-auto max-w-3xl p-8 rounded-lg border border-gray-200 shadow-sm">
        <h3 className="text-3xl font-semibold text-[#484848] mb-6">Checkout</h3>

        {/* Step Indicators */}
        <div className="flex justify-between mb-10">
          {steps.map((label, index) => (
            <div key={index} className="flex-1 text-center">
              <div className={`w-8 h-8 mx-auto rounded-full ${index === currentStep ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'} flex items-center justify-center`}>
                {index + 1}
              </div>
              <p className="text-sm mt-2 text-[#484848]">{label}</p>
            </div>
          ))}
        </div>

        {/* Step Content */}
        <div className="min-h-[200px] mb-8">
          {currentStep === 0 && (
            <div>
              <p className="text-[#8a8a8a] mb-4">You selected the "Grecian Drape Maxi" dress. Price: $50</p>
              <button onClick={nextStep} className="bg-black text-white px-6 py-2 rounded-md">Continue</button>
            </div>
          )}
          {currentStep === 1 && (
            <div className="space-y-4">
              <input type="text" placeholder="Full Name" className="w-full border border-gray-300 p-3 rounded-md" />
              <input type="text" placeholder="Address" className="w-full border border-gray-300 p-3 rounded-md" />
              <input type="text" placeholder="City" className="w-full border border-gray-300 p-3 rounded-md" />
              <button onClick={nextStep} className="bg-black text-white px-6 py-2 rounded-md">Next</button>
              <button onClick={prevStep} className="text-sm text-gray-500 mt-2">Back</button>
            </div>
          )}
          {currentStep === 2 && (
            <div className="space-y-4">
              <input type="text" placeholder="Card Number" className="w-full border border-gray-300 p-3 rounded-md" />
              <input type="text" placeholder="Expiry Date" className="w-full border border-gray-300 p-3 rounded-md" />
              <input type="text" placeholder="CVV" className="w-full border border-gray-300 p-3 rounded-md" />
              <button onClick={nextStep} className="bg-black text-white px-6 py-2 rounded-md">Pay</button>
              <button onClick={prevStep} className="text-sm text-gray-500 mt-2">Back</button>
            </div>
          )}
          {currentStep === 3 && (
            <div className="text-center">
              <h4 className="text-2xl text-green-600 font-semibold mb-2">Thank you for your order!</h4>
              <p className="text-[#8a8a8a]">A confirmation email has been sent to you. We hope you love your new look!</p>
              <button onClick={() => setCurrentStep(0)} className="mt-6 text-sm text-black underline">Start Over</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PurchaseFlow;
