import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logoImage from '../assets/logo.png'
import whiteHome from '../assets/whitehome.png'
import tdesigntask from '../assets/tdesign_task.png'
import formkitPeople from '../assets/formkit_people.png'
import simplelineicons from '../assets/simple-line-icons_calender.png'
import settings07 from '../assets/setting-07.png'
import lineback from '../assets/lineback.png'
import ciSettings from '../assets/ci_settings.png'
import secondSettings from '../assets/secondsettings.png'
import listSettings from '../assets/list-setting.png'
import Set07 from '../assets/setting-07.png'
import faQ from '../assets/faq.png'
import databaseWhite from '../assets/databasewhite.png'

export default function Aboutus(){
    const navigate = useNavigate();
    const location = useLocation();

    // Navigation handlers for main sidebar
    const handleMainNavigation = (path) => {
        navigate(path);
    };

    // Navigation handlers for settings menu
    const handleSettingsNavigation = (path) => {
        navigate(path);
    };

    // Check if current path matches for active styling
    const isActiveRoute = (path) => {
        return location.pathname === path;
    };

    return (
        <div>
            <div className="flex h-screen bg-[#EAEAEA] overflow-hidden">
                {/* Left Sidebar */}
                <div className="w-[123px] h-full bg-[#EFEFEF] shadow-sm flex flex-col items-center">
                    <div 
                        className="w-[62px] h-[62px] pt-[3px] pl-[7px] cursor-pointer"
                        onClick={() => handleMainNavigation('/dashboard')}
                    >
                        <img src={logoImage} alt="Logo" />
                    </div>
                    
                    <div className="flex flex-col gap-[5px] pt-[50px] pl-[17px]">
                        <div 
                            className={`pt-[13px] pr-[31px] pl-[31px] pb-[13px] cursor-pointer rounded-[10px] ${
                                isActiveRoute('/dashboard') ? 'bg-black' : 'hover:bg-gray-200'
                            }`}
                            onClick={() => handleMainNavigation('/dashboard')}
                        >
                            <img src={whiteHome} alt="Dashboard" />
                        </div>
                        
                        <div 
                            className={`pt-[13px] pr-[31px] pl-[31px] pb-[13px] cursor-pointer rounded-[10px] ${
                                isActiveRoute('/tasks') ? 'bg-black' : 'hover:bg-gray-200'
                            }`}
                            onClick={() => handleMainNavigation('/tasks')}
                        >
                            <img src={tdesigntask} alt="Tasks" />
                        </div>
                        
                        <div 
                            className={`pt-[13px] pr-[31px] pl-[31px] pb-[13px] cursor-pointer rounded-[10px] ${
                                isActiveRoute('/teams') ? 'bg-black' : 'hover:bg-gray-200'
                            }`}
                            onClick={() => handleMainNavigation('/teams')}
                        >
                            <img src={formkitPeople} alt="Teams" />
                        </div>
                        
                        <div 
                            className={`pt-[13px] pr-[31px] pl-[31px] pb-[13px] cursor-pointer rounded-[10px] ${
                                isActiveRoute('/calendar') ? 'bg-black' : 'hover:bg-gray-200'
                            }`}
                            onClick={() => handleMainNavigation('/calendar')}
                        >
                            <img src={simplelineicons} alt="Calendar" />
                        </div>
                        
                        <div 
                            className={`w-[89px] pr-[31px] pl-[31px] h-[53px] pt-[13px] pb-[13px] rounded-[10px] border-[1.5px] cursor-pointer ${
                                location.pathname.startsWith('/settings') ? 'bg-black' : 'hover:bg-gray-200'
                            }`}
                            onClick={() => handleMainNavigation('/settings')}
                        >
                            <img src={settings07} alt="Settings" />
                        </div>
                    </div>
                    
                    <div 
                        className="mt-[100px] w-[89px] h-[53px] items-center pl-[31px] cursor-pointer hover:bg-gray-200 rounded-[10px]"
                        onClick={() => handleMainNavigation('/signout')}
                    >
                        <div><img src={lineback} alt="Sign Out" /></div>
                    </div>
                </div> 

                {/* Settings Menu Sidebar */}
                <div className="w-[299px] h-full bg-[#EFEFEF] shadow-sm overflow-y-auto">
                    <div className="p-6">
                        <div className="flex items-center gap-3 mb-8">
                            <img src={ciSettings} alt="Settings Icon" className="w-[53px] h-[50px]"/>
                            <h1 className="text-[48px] font-semibold text-[#4D4A4A]">Settings</h1>
                        </div>

                        <div className="gap-[15px] pt-[20px] pl-[20px] h-[354px] w-[221px]">
                            <div 
                                className={`flex items-center gap-[10px] p-[10px] rounded-lg cursor-pointer ${
                                    isActiveRoute('/settings') ? 'bg-black text-white' : 'text-[#585858] hover:bg-gray-50'
                                }`}
                                onClick={() => handleSettingsNavigation('/settings')}
                            >
                                <div><img src={secondSettings} alt="Edit Account" /></div>
                                <span className="text-sm font-semibold">Edit Account</span>
                            </div>
                            
                            <div 
                                className={`flex items-center gap-[10px] rounded-[5px] p-[10px] rounded-lg cursor-pointer ${
                                    isActiveRoute('/settings/tasks') ? 'bg-black text-white' : 'text-[#585858] hover:bg-gray-50'
                                }`}
                                onClick={() => handleSettingsNavigation('/settings/tasks')}
                            >
                                <div className="w-[20px] h-[20px]"><img src={listSettings} alt="Tasks" /></div>
                                <span className="text-sm">Tasks</span>
                            </div>
                            
                            <div 
                                className={`flex items-center gap-[10px] rounded-[5px] p-[10px] rounded-lg cursor-pointer ${
                                    isActiveRoute('/settings/api') ? 'bg-black text-white' : 'text-[#585858] hover:bg-gray-50'
                                }`}
                                onClick={() => handleSettingsNavigation('/settings/api')}
                            >
                                <div className="w-[20px] h-[20px]"><img src={Set07} alt="API" /></div>
                                <span className="text-sm">API</span>
                            </div>
                            
                            <div 
                                className="flex items-center gap-[10px] w-[136px] h-[41px] bg-black rounded-[5px] text-white p-[10px] rounded-lg"
                            >
                                <div className="w-[20px] h-[20px]"><img src={databaseWhite} alt="About Us" /></div>
                                <span className="text-sm">About Us</span>
                            </div>
                            
                            <div 
                                className={`flex items-center gap-[10px] rounded-[5px] p-[10px] rounded-lg cursor-pointer ${
                                    isActiveRoute('/settings/faqs') ? 'bg-black text-white' : 'text-[#585858] hover:bg-gray-50'
                                }`}
                                onClick={() => handleSettingsNavigation('/settings/faqs')}
                            >
                                <div className="w-[20px] h-[20px]"><img src={faQ} alt="FAQs" /></div>
                                <span className="text-sm">FAQs</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-[946px] h-[400px] p-6 flex flex-col justify-center items-center text-center">
                    <p className="text-[60px] font-semibold">About Us</p>
                    <p className="block text-[20px]">We are Malhub product design students passionate about innovation. Our task management app helps people stay organized, focused, and achieve more every day. Created by Adio AbdulMujeeb and Alabi A'isha Yetunde, it reflects our drive to reach greater heights in design and productivity.</p>
                </div>
            </div>
        </div>
    )
}