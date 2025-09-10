import React, {useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Tasksettings() {
    const navigate = useNavigate();
    
    const handleNavigation = (path) => {
        navigate("/" + path);
    };

    const handleSettingsNavigation = (section) => {
        if (section === 'account') {
            navigate("/settings");
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
                        onClick={() => handleNavigation('')}
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
                            className="flex items-center gap-[10px] rounded-[5px] p-[10px] w-[169px] text-[#585858] hover:bg-gray-100 rounded-lg cursor-pointer transition-colors"
                        >
                            <div><img src="/images/account-setting-02.png" alt="Account" /></div>
                            <span className="text-sm">Edit Account</span>
                        </div>
                        
                        {/* Current section - Tasks (highlighted) */}
                        <div className="flex items-center gap-[10px] rounded-[5px] text-white p-[10px] bg-black rounded-lg cursor-pointer">
                            <div className="w-[20px] h-[20px]"><img src="/images/list-setting.png" alt="Tasks" /></div>
                            <span className="text-[20px] font-semibold">Tasks</span>
                        </div>
                        
                        <div 
                            onClick={() => handleSettingsNavigation('Api')}
                            className="flex items-center gap-[10px] rounded-[5px] text-[#585858] p-[10px] hover:bg-gray-100 rounded-lg cursor-pointer transition-colors"
                        >
                            <div className="w-[20px] h-[20px]"><img src="/images/secondsettings.png" alt="API" /></div>
                            <span className="text-sm">API</span>
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
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Header Section with Title and Search */}
                <div className="flex justify-between items-start p-6 bg-[#EAEAEA]">
                    <div>
                        <h1 className="text-[48px] font-semibold text-[#4D4A4A]">Tasks</h1>
                    </div>
                    
                    {/* Search Bar */}
                    <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2">
                            <img src="/images/search.png" alt="Search" />
                        </div>
                        <input 
                            type="text" 
                            placeholder="Search anything" 
                            className="w-[558px] h-[56px] pl-12 pr-6 bg-gray-100 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-sm"
                        />
                    </div>
                </div>

                {/* Task Cards Section */}
                <div className="flex-1 overflow-y-auto bg-[#EAEAEA] px-6">
                    <div className="flex justify-between gap-8">
                        {/* Recently Added Section */}
                        <div className="flex-1">
                            <h2 className="text-[32px] font-semibold mb-8 text-[#4D4A4A]">Recently Added</h2>
                            {/* You can add cards here if needed */}
                        </div>

                        {/* Favourite Section */}
                        <div className="flex-1">
                            <h2 className="text-[32px] font-semibold mb-8 text-[#4D4A4A]">Favourite</h2>
                            
                            <div className="space-y-6">
                                {/* Data Analysis Card */}
                                <div className="w-[267px] bg-[#E2E2E2] rounded-[10px] shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                                    <div className="relative">
                                        <img src="/images/dataanalysis.png" alt="Data Analysis" className="w-full h-[110px] object-cover"/>
                                    </div>
                                    <div className="p-4">
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <h3 className="text-[14px] font-semibold text-gray-800">Data Analysis</h3>
                                                <p className="text-[12px] text-[#54577A]">Data Analyst</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-end">
                                            <img src="/images/malhub.png" alt="Profile" className="h-[24px] w-[24px] rounded-full"/>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Web Development Card */}
                                <div className="w-[267px] bg-[#E2E2E2] rounded-[10px] shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                                    <div className="relative">
                                        <img src="/images/webdev.png" alt="Web Development" className="w-full h-[110px] object-cover"/>
                                    </div>
                                    <div className="p-4">
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <h3 className="text-[14px] font-semibold text-gray-800">Web Development</h3>
                                                <p className="text-[12px] text-[#54577A]">Web Developers</p>
                                            </div>
                                            <button className="hover:bg-gray-100 rounded p-1 transition-colors">
                                                <img src="/images/menubarr.png" alt="Menu" className="w-[16px] h-[16px]"/>
                                            </button>
                                        </div>
                                        <div className="flex justify-end">
                                            <img src="/images/maka.png" alt="Profile" className="h-[24px] w-[24px] rounded-full"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Recently Deleted Section */}
                        <div className="flex-1">
                            <h2 className="text-[32px] font-semibold mb-8 text-[#4D4A4A]">Recently Deleted</h2>
                            
                            <div className="space-y-6">
                                {/* Project Card */}
                                <div className="w-[267px] bg-[#E2E2E2] rounded-[10px] shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer opacity-75">
                                    <div className="relative">
                                        <img src="/images/contentwriting.png" alt="Project" className="w-full h-[110px] object-cover"/>
                                    </div>
                                    <div className="p-4">
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <h3 className="text-[14px] font-semibold text-gray-800">Project</h3>
                                                <p className="text-[12px] text-[#54577A]">Project analysing</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-end">
                                            <img src="/images/malhub.png" alt="Profile" className="h-[24px] w-[24px] rounded-full"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}