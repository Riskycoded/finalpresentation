import React from 'react';
import { Link } from 'react-router-dom';

export default function ProfileDropdown({ onClose }) {
    const handleNavigation = (path) => {
        // Handle navigation logic here
        console.log('Navigate to:', path);
        onClose();
    };

    const handleLogout = () => {
        // Handle logout logic here
        console.log('Logging out...');
        onClose();
    };

    return (
        <div className="w-[295px] bg-[#E5E5E5] rounded-[12px] shadow-lg p-4 relative">
            {/* Frame number - top left */}
            {/* <div className="absolute top-2 left-4 text-[10px] text-gray-400">
                Frame 3472755
            </div> */}

            {/* Close button - top right */}
            <button 
                onClick={onClose}
                className="absolute top-3 right-4 w-5 h-5 flex items-center justify-center hover:bg-gray-300 rounded"
            >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
            </button>

            {/* Profile Section */}
            <div className="mt-8 mb-6">
                <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                        <img 
                            src="/images/smallprofile.png" 
                            alt="Profile" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <h3 className="font-semibold text-[16px] text-black">John Doe's CheckMate</h3>
                        <p className="text-[12px] text-gray-600">Premium Plan • 1 member</p>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 mb-4">
                    <button 
                        onClick={() => handleNavigation('settings')}
                        className="flex items-center gap-2 px-4 py-2 border border-black rounded-[20px] hover:bg-gray-50 transition-colors"
                    >
                        <img src="/images/ci_settings.png" alt="" className='w-28px] h-[28px]'/>
                        <Link to="/settings">Settings</Link>
                    </button>

                    <button 
                        onClick={() => handleNavigation('invite')}
                        className="flex items-center gap-2 px-4 py-2 border border-black rounded-[20px] hover:bg-gray-50 transition-colors"
                    >
                        <img src="/images/addfriend.png" alt="" className='h-[28px]'/>
                        <span className="text-[14px] font-medium">Invite a Friend</span>
                    </button>
                </div>
            </div>

            {/* Menu Options */}
            <div className="space-y-0">
                <hr className="border-gray-300 mb-3" />
                
                <div 
                    onClick={() => handleNavigation('signup')}
                    className="py-3 px-2 hover:bg-gray-200 rounded cursor-pointer transition-colors"
                >
                    <Link to="/signout">Add another account</Link>
                </div>

                <hr className="border-gray-300" />

                <div 
                    onClick={ () => handleLogout ('logout')}
                    className="py-3 px-2 hover:bg-gray-200 rounded cursor-pointer transition-colors"
                >
                    <Link to="/login">Logout</Link>
                </div>

                <hr className="border-gray-300" />

                <div 
                    onClick={() => handleNavigation('windows-app')}
                    className="py-3 px-2 hover:bg-gray-200 rounded cursor-pointer transition-colors"
                >
                    <span className="text-[14px] text-black">Get Windows app</span>
                </div>
            </div>
        </div>
    );
}