import React from 'react';

export const TodoCard = ({ mainImage, title, description, bottomImage, dotted }) => {
  return (
    <div className="bg-[#E2E2E2] rounded-[8px] p-3 shadow-[0_2px_4px_0px_rgba(0,0,0,0.15)]">
      {/* Main Image */}
      <div className="w-full mb-2">
        <img src={mainImage} alt={title} className="w-full h-[80px] rounded-[8px] object-cover" />
      </div>
      
      <div className="w-full justify-between flex items-center">
        <div className='flex flex-col gap-0.5'>
          {/* Title */}
          <h3 className="text-[13px] font-semibold text-[#141522] line-clamp-1">{title}</h3>
          
          {/* Description */}
          <p className="text-[#54577A] font-medium text-[11px]">{description}</p>
        </div>
        
        <div>
          <img src={dotted} alt="" />
        </div>
      </div>
      
      {/* Bottom Image */}
      <div className="flex justify-end mt-2">
        <img src={bottomImage} alt="Progress" className="w-[60px] h-[20px]" />
      </div>
    </div>
  );
};