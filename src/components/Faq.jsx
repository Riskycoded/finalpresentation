import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logoImage from '../assets/logo.png';
import whiteHome from '../assets/whitehome.png';
import tdesignTask from '../assets/tdesign_task.png';
import formkitPeople from '../assets/formkit_people.png';
import simplelineicons from '../assets/simple-line-icons_calender.png';
import settings07 from '../assets/setting-07.png';
import lineback from '../assets/lineback.png';
import ciSettings from '../assets/ci_settings.png';
import accountSetting from '../assets/setting-07.png';
import listSetting from '../assets/list-setting.png';
import apiWhite from '../assets/database-02.png';
import database02 from '../assets/database-02.png';
import faq from '../assets/FAQ.png';

export default function Faq() {
  const navigate = useNavigate();
  const [expandedFaq, setExpandedFaq] = useState(null);

  // FAQ data
  const faqData = [
    {
      id: 1,
      question: "What is this Task Management App about?",
      answer: "Our app is designed to help individuals and teams stay organized, prioritize tasks, and achieve goals more efficiently."
    },
    {
      id: 2,
      question: "Who created this app?",
      answer: "The app was developed by Adio AbdulMujeeb and Aisha Alabi Yetunde, product design students at Malhub, as part of their journey in UI/UX design."
    },
    {
      id: 3,
      question: "How does this app make task management easier?",
      answer: "It provides a simple, user-friendly interface for creating, tracking, and completing tasks. You can set priorities, deadlines, and reminders to stay on top of your activities."
    },
    {
      id: 4,
      question: "Can I use the app for personal and professional tasks?",
      answer: "Yes. The app is flexible and can be used for schoolwork, personal goals, or team projects."
    },
    {
      id: 5,
      question: "Why should I choose this app over others?",
      answer: "Our app emphasizes innovation, simplicity, and design clarity—built with the user in mind, making productivity feel natural and enjoyable."
    },
    {
      id: 6,
      question: "Is this a finished product or a student project?",
      answer: "This is a student-led project showcasing creativity, problem-solving, and product design skills, with potential to grow into a full-scale productivity tool."
    }
  ];

  const handleNavigation = (path) => {
    navigate("/" + path);
  };

  return (
    <div>
      <div className="flex min-h-screen bg-[#EAEAEA]">
        {/* Left Sidebar */}
        <div className="w-[123px] bg-[#EFEFEF] shadow-sm flex flex-col items-center">
          <div className="w-[62px] h-[62px] pt-[3px] pl-[7px]">
            <img src={logoImage} alt="Logo" />
          </div>
          
          <div className="flex flex-col gap-[5px] pt-[50px] pl-[17px]">
            <div onClick={() => handleNavigation('dashboard')} className="pt-[13px] pr-[31px] pl-[31px] pb-[13px] cursor-pointer hover:bg-gray-200 rounded-lg">
              <img src={whiteHome} alt="Home" />
            </div>
            <div onClick={() => handleNavigation('tasks')} className="pt-[13px] pr-[31px] pl-[31px] pb-[13px] cursor-pointer hover:bg-gray-200 rounded-lg">
              <img src={tdesignTask} alt="Tasks" />
            </div>
            <div onClick={() => handleNavigation('teams')} className="pt-[13px] pr-[31px] pl-[31px] pb-[13px] cursor-pointer hover:bg-gray-200 rounded-lg">
              <img src={formkitPeople} alt="People" />
            </div>
            <div onClick={() => handleNavigation('calendar')} className="pt-[13px] pr-[31px] pl-[31px] pb-[13px] cursor-pointer hover:bg-gray-200 rounded-lg">
              <img src={simplelineicons} alt="Calendar" />
            </div>
            <div onClick={() => handleNavigation('settings')} className="w-[89px] pr-[31px] pl-[31px] bg-black h-[53px] pt-[13px] pb-[13px] rounded-lg border-[1.5px] cursor-pointer hover:bg-gray-900">
              <img src={settings07} alt="Settings" />
            </div>
          </div>
          
          <div className="mt-[100px] w-[89px] h-[53px] flex items-center pl-[31px]">
            <div>
              <img src={lineback} alt="Back" />
            </div>
          </div>
        </div>

        {/* Settings Menu Sidebar */}
        <div className="w-[299px] bg-[#EFEFEF] shadow-sm overflow-y-auto">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-8">
              <img src={ciSettings} alt="Settings" className="w-[53px] h-[50px]" />
              <h1 className="text-[48px] font-semibold text-[#4D4A4A]">Settings</h1>
            </div>

            <div className="flex flex-col gap-[15px] pt-[20px] pl-[20px]">
              <div onClick={() => handleNavigation('settings')} className="flex items-center gap-[10px] text-[#585858] p-[10px] hover:bg-gray-50 rounded-lg cursor-pointer">
                <div>
                  <img src={accountSetting} alt="Edit Account" />
                </div>
                <span className="text-sm font-semibold">Edit Account</span>
              </div>
              
              <div onClick={() => handleNavigation('tasksettings')} className="flex items-center gap-[10px] text-[#585858] p-[10px] hover:bg-gray-50 rounded-lg cursor-pointer">
                <div className="w-[20px] h-[20px]">
                  <img src={listSetting} alt="Tasks" />
                </div>
                <span className="text-sm">Tasks</span>
              </div>
              
              <div onClick={() => handleNavigation('api')} className="flex items-center gap-[10px] text-[#585858] p-[10px] hover:bg-gray-50 rounded-lg cursor-pointer">
                <div className="w-[20px] h-[20px]">
                  <img src={apiWhite} alt="API" />
                </div>
                <span className="text-sm">API</span>
              </div>
              
              <div onClick={() => handleNavigation('aboutus')} className="flex items-center gap-[10px] text-[#585858] p-[10px] hover:bg-gray-50 rounded-lg cursor-pointer">
                <div className="w-[20px] h-[20px]">
                  <img src={database02} alt="About Us" />
                </div>
                <span className="text-sm">About Us</span>
              </div>
              
              <div className="flex items-center gap-[10px] w-[136px] h-[41px] bg-black text-white p-[10px] rounded-lg cursor-pointer">
                <div className="w-[20px] h-[20px]">
                  <img src={faq} alt="FAQs" />
                </div>
                <span className="text-sm">FAQs</span>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="flex-1 p-6 overflow-y-auto">
          <p className="text-[40px] font-semibold mb-6">Frequently Asked Questions (FAQs)</p>
          <div className="flex flex-col gap-8 max-w-[946px] w-full">
            {faqData.map((faq) => (
              <div 
                key={faq.id} 
                className="space-y-2 p-4 rounded-lg hover:bg-white transition-all duration-200 cursor-pointer"
                onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
              >
                <div className="flex justify-between items-center">
                  <p className="text-start text-[20px] font-bold">
                    {faq.id}. {faq.question}
                  </p>
                  <svg 
                    className={`w-6 h-6 transform transition-transform duration-200 ${expandedFaq === faq.id ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <div className={`overflow-hidden transition-all duration-200 ${expandedFaq === faq.id ? 'max-h-96' : 'max-h-0'}`}>
                  <p className="text-start text-[20px] text-gray-700">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}