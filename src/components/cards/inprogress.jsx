import React from 'react';

export const Inprogress    = ({ mainImage, title, description, SmallDes, perc, drag, time, day, pic }) => {
  return (
    <div className="bg-[#E2E2E2] rounded-[8px] p-3 shadow-[0_2px_4px_0px_rgba(0,0,0,0.15)]">
      {/* Main Image */}
      <div className="w-full mb-2">
        <img src={mainImage} alt={title} className="w-full h-[80px] rounded-[8px] object-cover" />
      </div>
      
      <div className="w-full">
        <div className='flex flex-col gap-0.5'>
          {/* Title */}
          <h3 className="text-[13px] font-semibold text-[#141522] line-clamp-1">{title}</h3>
          
          {/* Description */}
          <p className="text-[#54577A] font-medium text-[11px]">{description}</p>
        </div>
        
        <div className='flex justify-between w-full h-[18px] items-center mt-1.5'>
                  <h1 className='text-[13px] font-semibold'>{SmallDes}</h1> 
                  
                  <h1 className='text-[13px] font-semibold'>{perc}</h1> 
        </div>
      
      <div className="w-full h-[6px] rounded-[6px] mt-2">
        <img src={drag} alt="Progress" className="w-full h-[10px]" />
              </div>
              
              <div className='flex justify-between items-center mt-2'>
                  <div className='flex gap-2 items-start'>
                      <img src={time} alt="" className="w-4 h-4" />
                      <p className="font-semibold text-[11px]">{day}</p>
                  </div>

                  <div>
                      <img src={pic} alt="" className="w-[60px] h-[20px]" />
                  </div>
                  
              </div>
          </div>
          </div>
  );
};