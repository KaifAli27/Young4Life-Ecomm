import React from 'react';

const filterOptions = {
  Category: ['Tops', 'Bottoms', 'Dresses', 'Outerwear', 'Accessories'],
  Size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  Color: ['Black', 'White', 'Blue', 'Red', 'Green', 'Pink', 'Gray', 'Brown'],
  Price: ['Under $25', '$25-50', '$50-100', '$100-200', 'Over $200'],
  Brand: ['Chanel', 'Louis Vuitton', 'Prada', 'Calvin Klein', 'Denim', 'Zara'],
  Style: ['Casual', 'Formal', 'Sporty', 'Bohemian', 'Vintage'],
  Material: ['Cotton', 'Polyester', 'Denim', 'Silk', 'Wool']
};

const FacetedFilter = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-md p-6 mb-10 shadow-sm">
      <h3 className="text-xl font-semibold text-[#484848] mb-4">Filter by</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(filterOptions).map(([category, options]) => (
          <div key={category}>
            <h4 className="text-lg text-[#484848] font-medium mb-2">{category}</h4>
            <div className="flex flex-wrap gap-3">
              {options.map((option) => (
                <label key={option} className="flex items-center space-x-2 text-[#8a8a8a] font-poppins text-sm">
                  <input type="checkbox" className="accent-black w-4 h-4" />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacetedFilter;
