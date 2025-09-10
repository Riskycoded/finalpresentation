import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Api() {
    const navigate = useNavigate();
        
    const handleNavigation = (path) => {
        navigate("/" + path);
    };

    const handleSettingsNavigation = (section) => {
        if (section === 'account') {
            navigate("/");
        } else {
            navigate(`/settings/${section}`);
        }
    };

    return (
        <div className="flex h-screen bg-[#EAEAEA] overflow-hidden">
            {/* Left Sidebar */}
            <div className="w-[123px] h-full bg-[#EFEFEF] shadow-sm flex flex-col items-center">
                <div className="w-[62px] h-[62px] pt-[3px] pl-[7px]">
                    <img src="/images/logo.png" alt="Logo" />
                </div>
                
                <div className="flex flex-col gap-[5px] pt-[50px] pl-[17px]">
                    <div 
                        onClick={() => handleNavigation('dashboard')}
                        className="pt-[13px] pr-[31px] pl-[31px] pb-[13px] cursor-pointer hover:bg-gray-200 rounded-lg transition-colors"
                    >
                        <img src="/images/whitehome.png" alt="Home" />
                    </div>
                    <div 
                        onClick={() => handleNavigation('tasks')}
                        className="pt-[13px] pr-[31px] pl-[31px] pb-[13px] cursor-pointer hover:bg-gray-200 rounded-lg transition-colors"
                    >
                        <img src="/images/tdesign_task.png" alt="Tasks" />
                    </div>
                    <div 
                        onClick={() => handleNavigation('people')}
                        className="pt-[13px] pr-[31px] pl-[31px] pb-[13px] cursor-pointer hover:bg-gray-200 rounded-lg transition-colors"
                    >
                        <img src="/images/formkit_people.png" alt="People" />
                    </div>
                    <div 
                        onClick={() => handleNavigation('calendar')}
                        className="pt-[13px] pr-[31px] pl-[31px] pb-[13px] cursor-pointer hover:bg-gray-200 rounded-lg transition-colors"
                    >
                        <img src="/images/simple-line-icons_calender.png" alt="Calendar" />
                    </div>
                    {/* Current page - Settings (highlighted) */}
                    <div className="w-[89px] pr-[31px] pl-[31px] bg-black h-[53px] pt-[13px] pb-[13px] rounded-[10px] border-[1.5px]">
                        <img src="/images/setting-07.png" alt="Settings" />
                    </div>
                </div>
                
                <div className="mt-[100px] w-[89px] h-[53px] items-center pl-[31px]">
                    <div 
                        onClick={() => handleNavigation('signout')}
                        className="cursor-pointer hover:bg-gray-200 rounded-lg p-2 transition-colors"
                    >
                        <img src="/images/lineback.png" alt="Back" />
                    </div>
                </div>
            </div> 

            {/* Settings Menu Sidebar */}
            <div className="w-[299px] h-full bg-[#EFEFEF] shadow-sm overflow-y-auto">
                <div className="p-6">
                    <div className="flex items-center gap-3 mb-8">
                        <img src="/images/ci_settings.png" alt="Settings Icon" className="w-[53px] h-[50px]"/>
                        <h1 className="text-[48px] font-semibold text-[#4D4A4A]">Settings</h1>
                    </div>

                    <div className="gap-[15px] pt-[20px] pl-[20px] h-[354px] w-[221px] space-y-3">
                        <div 
                            onClick={() => handleSettingsNavigation('account')}
                            className="flex items-center gap-[10px] text-[#585858] p-[10px] hover:bg-gray-100 rounded-lg cursor-pointer transition-colors"
                        >
                            <div><img src="/images/account-setting-02.png" alt="Account" /></div>
                            <span className="text-sm font-semibold">Edit Account</span>
                        </div>
                        
                        <div 
                            onClick={() => handleSettingsNavigation('tasks')}
                            className="flex items-center gap-[10px] rounded-[5px] text-[#585858] p-[10px] hover:bg-gray-100 rounded-lg cursor-pointer transition-colors"
                        >
                            <div className="w-[20px] h-[20px]"><img src="/images/list-setting.png" alt="Tasks" /></div>
                            <span className="text-sm">Tasks</span>
                        </div>
                        
                        {/* Current section - API (highlighted) */}
                        <div className="flex items-center gap-[10px] bg-black rounded-[5px] text-white p-[10px] rounded-lg cursor-pointer">
                            <div className="w-[20px] h-[20px]"><img src="/images/apiwhite.png" alt="API" /></div>
                            <span className="text-[20px] font-semibold">API</span>
                        </div>
                        
                        <div 
                            onClick={() => handleSettingsNavigation('about')}
                            className="flex items-center gap-[10px] rounded-[5px] text-[#585858] p-[10px] hover:bg-gray-100 rounded-lg cursor-pointer transition-colors"
                        >
                            <div className="w-[20px] h-[20px]"><img src="/images/database-02.png" alt="About" /></div>
                            <span className="text-sm">About Us</span>
                        </div>
                        
                        <div 
                            onClick={() => handleSettingsNavigation('faqs')}
                            className="flex items-center gap-[10px] rounded-[5px] text-[#585858] p-[10px] hover:bg-gray-100 rounded-lg cursor-pointer transition-colors"
                        >
                            <div className="w-[20px] h-[20px]"><img src="/images/faq.png" alt="FAQs" /></div>
                            <span className="text-sm">FAQs</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 p-6 flex flex-col justify-center items-center text-center bg-[#EAEAEA]">
                <div className="max-w-4xl">
                    <h1 className="text-[48px] font-bold text-[#4D4A4A] mb-8">API Overview</h1>
                    <p className="text-[20px] text-gray-700 leading-relaxed">
                        Our API allows developers to integrate powerful task management features into their applications. 
                        From creating tasks to managing teams, the API is built to support productivity and collaboration.
                    </p>
                    
                    {/* API Documentation Section */}
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-xl font-semibold mb-4 text-[#4D4A4A]">Getting Started</h3>
                            <p className="text-gray-600 mb-4">
                                Begin integrating our API with your application in just a few steps.
                            </p>
                            <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                                View Documentation
                            </button>
                        </div>
                        
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-xl font-semibold mb-4 text-[#4D4A4A]">API Keys</h3>
                            <p className="text-gray-600 mb-4">
                                Generate and manage your API keys for secure access to our services.
                            </p>
                            <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                                Manage Keys
                            </button>
                        </div>
                        
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-xl font-semibold mb-4 text-[#4D4A4A]">Rate Limits</h3>
                            <p className="text-gray-600 mb-4">
                                Understand the rate limits and usage guidelines for optimal performance.
                            </p>
                            <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                                View Limits
                            </button>
                        </div>
                        
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-xl font-semibold mb-4 text-[#4D4A4A]">Support</h3>
                            <p className="text-gray-600 mb-4">
                                Get help with API integration and troubleshoot common issues.
                            </p>
                            <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                                Get Support
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}