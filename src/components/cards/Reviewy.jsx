import React from 'react';

export const Reviewy = ({ mainImage, title, description, under }) => {
  return (
    <div className="bg-[#E2E2E2] rounded-[8px] p-3 shadow-[0_2px_4px_0px_rgba(0,0,0,0.15)]">
      {/* Main Image */}
      <div className="w-full mb-2">
        <img src={mainImage} alt={title} className="w-full h-[80px] rounded-[8px] object-cover" />
      </div>
      
      <div className="w-full flex flex-col">
        <div className='flex flex-col gap-0.5'>
            <h3 className="text-[13px] font-semibold text-[#141522] line-clamp-1">{title}</h3>
            <p className="text-[#54577A] font-medium text-[11px]">{description}</p>
            <p className="text-[#54577A] text-[11px] mt-1">{ under}</p>
        </div>
      </div>
    </div>
  );
};