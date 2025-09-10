import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logoImage from '../assets/logo.png';
import whiteHome from '../assets/whitehome.png';
import tdesignTask from '../assets/tdesign_task.png';
import formkitPeople from '../assets/formkit_people.png';
import simplelineicons from '../assets/simple-line-icons_calender.png';
import settings07 from '../assets/setting-07.png';
import linebackIcon from '../assets/lineback.png';
import ciSettingsIcon from '../assets/ci_settings.png';
import accountSettingIcon from '../assets/account-setting-02.png';
import listSettingIcon from '../assets/list-setting.png';
import secondSettingsIcon from '../assets/secondsettings.png';
import databaseIcon from '../assets/database-02.png';
import faqIcon from '../assets/FAQ.png';
import searchIcon from '../assets/search.png';
import blackboyImage from '../assets/blackboy.png';

export default function Settings() {
    const navigate = useNavigate();
    const location = useLocation();
    const [events, setEvents] = useState([]);

    const handleNavigation = (path) => {
        navigate("/" + path);
    };

    // Updated: Navigation handlers for settings menu items
    const handleSettingsNavigation = (path) => {
        navigate(path);
    };

    // Check if current path matches for active styling
    const isActiveRoute = (path) => {
        return location.pathname === path;
    };

    return (
        <div className="flex h-screen bg-[#EAEAEA] overflow-hidden">
            {/* Left Sidebar */}
            <div className="w-[123px] h-full bg-[#EFEFEF] shadow-sm flex flex-col items-center">
                <div 
                    className="w-[62px] h-[62px] pt-[3px] pl-[7px] cursor-pointer"
                    onClick={() => handleNavigation('dashboard')}
                >
                    <img src={logoImage} alt="Logo" />
                </div>
                
                <div className="flex flex-col gap-[5px] pt-[50px] pl-[17px]">
                    <div 
                        onClick={() => handleNavigation('dashboard')} 
                        className={`pt-[13px] pr-[31px] pl-[31px] pb-[13px] cursor-pointer rounded-lg transition-colors ${
                            isActiveRoute('/dashboard') ? 'bg-black' : 'hover:bg-gray-200'
                        }`}
                    >
                        <img src={whiteHome} alt="Dashboard" />
                    </div>
                    <div 
                        onClick={() => handleNavigation('tasks')} 
                        className={`pt-[13px] pr-[31px] pl-[31px] pb-[13px] cursor-pointer rounded-lg transition-colors ${
                            isActiveRoute('/tasks') ? 'bg-black' : 'hover:bg-gray-200'
                        }`}
                    >
                        <img src={tdesignTask} alt="Tasks" />
                    </div>
                    <div 
                        onClick={() => handleNavigation('teams')} 
                        className={`pt-[13px] pr-[31px] pl-[31px] pb-[13px] cursor-pointer rounded-lg transition-colors ${
                            isActiveRoute('/teams') ? 'bg-black' : 'hover:bg-gray-200'
                        }`}
                    >
                        <img src={formkitPeople} alt="Teams" />
                    </div>
                    <div 
                        onClick={() => handleNavigation('calendar')} 
                        className={`pt-[13px] pr-[31px] pl-[31px] pb-[13px] cursor-pointer rounded-lg transition-colors ${
                            isActiveRoute('/calendar') ? 'bg-black' : 'hover:bg-gray-200'
                        }`}
                    >
                        <img src={simplelineicons} alt="Calendar" />
                    </div>
                    {/* Current page - Settings (highlighted) */}
                    <div className="w-[89px] pr-[31px] pl-[31px] bg-black h-[53px] pt-[13px] pb-[13px] rounded-[10px] border-[1.5px]">
                        <img src={settings07} alt="Settings" />
                    </div>
                </div>
                
                <div className="mt-[100px] w-[89px] h-[53px] items-center pl-[31px]">
                    <div 
                        onClick={() => handleNavigation('signout')} 
                        className="cursor-pointer hover:bg-gray-200 rounded-lg p-2 transition-colors"
                    >
                        <img src={linebackIcon} alt="Sign Out" />
                    </div>
                </div>
            </div> 

            {/* Settings Menu Sidebar */}
            <div className="w-[299px] h-full bg-[#EFEFEF] shadow-sm overflow-y-auto">
                <div className="p-6">
                    <div className="flex items-center gap-3 mb-8">
                        <img src={ciSettingsIcon} alt="Settings Icon" className="w-[53px] h-[50px]"/>
                        <h1 className="text-[48px] font-semibold text-[#4D4A4A]">Settings</h1>
                    </div>

                    <div className="gap-[15px] pt-[20px] pl-[20px] h-[354px] w-[221px] space-y-3">
                        {/* Current section - Edit Account (highlighted) */}
                        <div className={`flex items-center gap-[10px] rounded-[5px] p-[10px] w-[169px] rounded-lg cursor-pointer ${
                            isActiveRoute('/settings') ? 'bg-black text-white' : 'bg-black text-white'
                        }`}>
                            <div><img src={accountSettingIcon} alt="Edit Account" /></div>
                            <span className="text-[20px] font-semibold">Edit Account</span>
                        </div>
                        
                        {/* Tasks Settings */}
                        <div 
                            onClick={() => handleSettingsNavigation('/settings/tasks')}
                            className={`flex items-center gap-[10px] rounded-[5px] p-[10px] rounded-lg cursor-pointer transition-colors ${
                                isActiveRoute('/settings/tasks') ? 'bg-black text-white' : 'text-[#585858] hover:bg-gray-100'
                            }`}
                        >
                            <div className="w-[20px] h-[20px]"><img src={listSettingIcon} alt="Tasks Settings" /></div>
                            <span className="text-sm">Tasks</span>
                        </div>
                        
                        {/* API Settings */}
                        <div 
                            onClick={() => handleSettingsNavigation('/settings/api')}
                            className={`flex items-center gap-[10px] rounded-[5px] p-[10px] rounded-lg cursor-pointer transition-colors ${
                                isActiveRoute('/settings/api') ? 'bg-black text-white' : 'text-[#585858] hover:bg-gray-100'
                            }`}
                        >
                            <div className="w-[20px] h-[20px]"><img src={secondSettingsIcon} alt="API Settings" /></div>
                            <span className="text-sm">API</span>
                        </div>
                        
                        {/* About Us */}
                        <div 
                            onClick={() => handleSettingsNavigation('/settings/about')}
                            className={`flex items-center gap-[10px] rounded-[5px] p-[10px] rounded-lg cursor-pointer transition-colors ${
                                isActiveRoute('/settings/about') ? 'bg-black text-white' : 'text-[#585858] hover:bg-gray-100'
                            }`}
                        >
                            <div className="w-[20px] h-[20px]"><img src={databaseIcon} alt="About Us" /></div>
                            <span className="text-sm">About Us</span>
                        </div>
                        
                        {/* FAQs */}
                        <div 
                            onClick={() => handleSettingsNavigation('/settings/faqs')}
                            className={`flex items-center gap-[10px] rounded-[5px] p-[10px] rounded-lg cursor-pointer transition-colors ${
                                isActiveRoute('/settings/faqs') ? 'bg-black text-white' : 'text-[#585858] hover:bg-gray-100'
                            }`}
                        >
                            <div className="w-[20px] h-[20px]"><img src={faqIcon} alt="FAQs" /></div>
                            <span className="text-sm">FAQs</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-1 p-3 bg-[#EAEAEA] overflow-y-auto">
                {/* Search Bar */}
                <div className="relative max-w-md mb-8 items-end ml-auto">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2">
                        <div><img src={searchIcon} alt="Search" /></div>
                    </div>
                    <input 
                        type="text" 
                        placeholder="Search anything" 
                        className="w-full h-12 pl-12 pr-4 bg-gray-100 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-sm"
                    />
                </div>

                {/* Profile Section */}
                <div className="max-w-4xl">
                    <div className="flex flex-col items-start gap-4 mb-8">
                        <div className="w-16 h-16 rounded-full overflow-hidden">
                            <div><img src={blackboyImage} alt="Profile" /></div>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600 cursor-pointer hover:text-black transition-colors">Change Pic</p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        {/* Name Row */}
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                <input 
                                    type="text" 
                                    placeholder="Doe"
                                    className="w-full h-12 px-4 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                <input 
                                    type="text" 
                                    placeholder="John"
                                    className="w-full h-12 px-4 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                                />
                            </div>
                        </div>

                        {/* Gender and DOB Row */}
                        <div className="grid grid-cols-2 gap-6 w-[364px] h-[81px]">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                                <select className="w-full h-12 px-4 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-black bg-white">
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
                                <input 
                                    type="date" 
                                    defaultValue="1990-10-21"
                                    className="w-full h-12 px-4 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-black bg-white"
                                />
                            </div>
                        </div>

                        {/* Email and Phone Row */}
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Alternative Email</label>
                                <input 
                                    type="email" 
                                    placeholder="johndoe@yahoo.com"
                                    className="w-full h-12 px-4 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                <div className="flex gap-2">
                                    <div className="w-20 h-12 px-3 border border-black rounded-lg bg-white flex items-center text-sm text-gray-600">
                                        +234
                                    </div>
                                    <input 
                                        type="tel" 
                                        placeholder="08103811859"
                                        className="flex-1 h-12 px-4 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Location Row */}
                        <div className="grid grid-cols-2 gap-6 w-[364px]">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Nationality</label>
                                <select className="w-full h-12 px-4 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-black bg-white">
                                    <option>Nigeria</option>
                                    <option>India</option>
                                    <option>UK</option>
                                    <option>United States of America</option>
                                    <option>Ghana</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">State/Province</label>
                                <select className="w-full h-12 px-4 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-black bg-white">
                                    <option>Lagos</option>
                                    <option>Ibadan</option>
                                    <option>Ilorin</option>
                                    <option>Abeokuta</option>
                                </select>
                            </div>
                        </div>

                        {/* Address Row */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Resident Address/Office Address</label>
                            <input 
                                type="text" 
                                placeholder="12 Ilaje Road, Bariga"
                                className="w-full h-12 px-4 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                            />
                        </div>

                        {/* Save Button */}
                        <div className="flex justify-end h-full pt-6">
                            <button className="px-8 w-[267px] h-[66px] py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors">
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}