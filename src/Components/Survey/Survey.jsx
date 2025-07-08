import React from 'react';

const Survey = () => {
  return (
    <div className="w-full bg-white py-16 px-4 lg:px-0">
      <div className="lg:container mx-auto max-w-3xl bg-[#f9f9f9] p-8 rounded-lg shadow-md">
        <h3 className="text-3xl text-[#484848] font-semibold mb-4">We’d love your feedback 💬</h3>
        <p className="text-base text-[#8a8a8a] mb-6">
          Help us improve your YoungForLife shopping experience! Share your thoughts about the products and tell us what you'd love to see in future collections. Every completed survey enters you into our monthly raffle for exclusive giveaways!
        </p>
        <form className="space-y-6">
          <div>
            <label className="block text-[#484848] mb-1 text-sm font-medium">What did you like about our collection?</label>
            <textarea className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-black" rows="3"></textarea>
          </div>

          <div>
            <label className="block text-[#484848] mb-1 text-sm font-medium">What styles or products would you love to see?</label>
            <textarea className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-black" rows="3"></textarea>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <label className="block text-[#484848] mb-1 text-sm font-medium">Your Name</label>
              <input type="text" className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-black" />
            </div>
            <div className="flex-1">
              <label className="block text-[#484848] mb-1 text-sm font-medium">Your Email</label>
              <input type="email" className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-black" />
            </div>
          </div>

          <div>
            <button type="submit" className="mt-4 bg-black text-white px-6 py-3 rounded-md hover:opacity-90 transition">Submit & Enter Raffle</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Survey;
