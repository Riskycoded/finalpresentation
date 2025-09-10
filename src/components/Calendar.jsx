import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Import all images from assets folder
import logoImage from '../assets/logo.png';
import whiteHome from '../assets/whitehome.png';
import tdesignTask from '../assets/tdesign_task.png';
import formkitPeople from '../assets/formkit_people.png';
import simplelineicons from '../assets/simple-line-icons_calender.png';
import settings07 from '../assets/setting-07.png';
import lineMdLogout from '../assets/line-md_logout.png';
import ellipse from '../assets/Ellipse.png';
import calendarIcon from '../assets/calendar_.png';
import arrowLeft from '../assets/arrow-left.png';
import arrowRight from '../assets/arrow-right.png';
import addCircle from '../assets/add-circle.png';
import outOfOffice from '../assets/outofoffice.png';
import ppux from '../assets/ppux.png';
import checkGreen from '../assets/checkgreen.png';
import cancelRed from '../assets/cancelred.png';
import notification1 from '../assets/Notification 1.png';
import yellowStuff from '../assets/yellowstuff.png';
import emojil from '../assets/emojil.png';

export default function Calendar() {
    const navigate = useNavigate();
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [showEventModal, setShowEventModal] = useState(false);
    const [events, setEvents] = useState([
        {
            id: 1,
            title: "UX Consultations",
            date: new Date(2025, 4, 23, 15, 30),
            endDate: new Date(2025, 4, 23, 16, 30),
            type: "team",
            participants: ["Chris Morich", "Melanie Chu", "Charmie"],
            icon: ppux,
            confirmed: false
        }
    ]);
    const [newEvent, setNewEvent] = useState({
        title: "",
        date: new Date(),
        endDate: new Date(),
        type: "team",
        participants: [],
        description: ""
    });
    const [viewType, setViewType] = useState("team"); // team or personal
    const [notifications, setNotifications] = useState(true);
    
    const getDaysInMonth = (date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        return new Date(year, month + 1, 0).getDate();
    };
    
    const getFirstDayOfMonth = (date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        return new Date(year, month, 1).getDay() || 7; // Convert Sunday (0) to 7
    };

    const handleNavigation = (path) => {
        navigate("/" + path);
    };

    const handleNextMonth = () => {
        setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() + 1));
    };

    const handlePrevMonth = () => {
        setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() - 1));
    };

    const handleDateClick = (date) => {
        setSelectedDate(date);
    };

    const handleEventConfirm = (eventId) => {
        setEvents(prev => prev.map(event => 
            event.id === eventId ? { ...event, confirmed: true } : event
        ));
    };

    const handleEventCancel = (eventId) => {
        setEvents(prev => prev.filter(event => event.id !== eventId));
    };

    const handleCreateEvent = () => {
        if (!newEvent.title) return;
        
        setEvents(prev => [...prev, {
            id: Date.now(),
            ...newEvent,
            confirmed: false
        }]);
        
        setNewEvent({
            title: "",
            date: new Date(),
            endDate: new Date(),
            type: viewType,
            participants: [],
            description: ""
        });
        setShowEventModal(false);
    };

    const handleNotificationToggle = () => {
        setNotifications(prev => !prev);
    };

    const handleViewTypeChange = (type) => {
        setViewType(type);
    };
    return (
        <div className="flex">
            {/* Sidebar */}
            <div className="bg-[#EFEFEF] w-[246px] px-6 min-h-screen opacity-100 rounded-tr-[24px] rounded-br-[24px] fixed top-0 left-0">
                <div  className="w-[109px] h-[114px]">
                    <img src={logoImage} alt="" className="w-[109px] mt-[3px] ml-[2px] h-[114px]"/>
                    <h1 className="w-[76px] h-[26px] text-[20px] font-[jaini]">CheckMate</h1>
                </div>
                    
                <div className="gap-[5px] mt-[30px]">
                    <div onClick={() => handleNavigation('dashboard')} className="flex gap-[10px]  pl-[31px] pt-[13px] pr-[31px] pb-[13px]">
                        <img src={whiteHome} alt="" />
                        <h1 className=" text-[#666666] text-[20px] font-semibold text-center">Dashboard</h1>
                    </div>

                    <div onClick={() => handleNavigation('tasks')} className="flex gap-[10px] pl-[31px] pt-[13px] pr-[31px] pb-[13px]">
                        <img src={tdesignTask} alt="" />
                        <h1 className="font-semibold text-[18px] text-[#666666]">Tasks Board</h1>
                    </div>

                    <div onClick={() => handleNavigation('teams')} className="flex gap-[10px] pl-[31px] pt-[13px] pr-[31px] pb-[13px]">
                        <img src={formkitPeople} alt="" />
                        <h1 className="font-semibold text-[18px] text-[#666666]">Teams</h1>
                    </div>
                
                    <div  className="flex gap-[10px] pl-[31px] shadow-[0px_4px_4px_0px_#00000060] rounded-[10px] bg-black border-[1.5px] w-[195px] h-[53px] pt-[13px] pr-[31px] pb-[13px]">
                        <img src={simplelineicons} alt="" className=""/>
                        <h1 className="font-semibold text-[18px] text-white">Calendar</h1>
                    </div>
                
                    <div onClick={() => handleNavigation('settings')} className="flex gap-[10px] pl-[31px] pt-[13px] pr-[31px] pb-[13px]">
                        <img src={settings07} alt="" />
                        <h1 className="font-semibold text-[18px] text-[#666666]">Settings</h1>
                    </div>

                    <div onClick={() => handleNavigation('login')} className={`flex gap-[10px] pl-[31px] pt-[13px] pr-[31px] pb-[13px] mt-[30px]`} style={{backgroundImage: `url(${ellipse})`}}>
                        <img src={lineMdLogout} alt="" />
                        <h1>Log Out</h1>
                    </div>
                </div>
            </div>

            
            <div className="ml-[246px] flex-1 p-6 min-h-screen w-[600px] bg-[#EAEAEA] flex">
                
                <div className="flex-1">
                    <div className="flex justify-between items-center w-full mb-8">
                        <div className="flex items-center gap-[19px]">
                            <img src={calendarIcon} alt="" className="w-[72px] h-[73px]"/>
                            <h1 className="font-semibold text-[60px]">Calendar</h1>
                        </div> 
                    </div>

                
                <div className="mt-8 bg-white w-[849px] rounded-sm min-h-[341px]">
                    <div className="w-[849px] h-[67px] p-6 flex justify-between items-center">
                        <div className="flex items-center gap-4">
                            <p className="text-xl font-semibold">
                                {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
                            </p>
                        </div>
                        
                        <div className="flex gap-4">
                            <button 
                                onClick={handlePrevMonth}
                                className="hover:bg-gray-100 p-2 rounded-full"
                            >
                                <img src={arrowLeft} alt="Previous" className="w-6 h-6" />
                            </button>
                            <button 
                                onClick={handleNextMonth}
                                className="hover:bg-gray-100 p-2 rounded-full"
                            >
                                <img src={arrowRight} alt="Next" className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                    <hr />
                    <div className="p-4">
                        <div className="grid grid-cols-7 gap-4 mb-4">
                            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                                <div key={day} className="text-center font-medium text-gray-600">
                                    {day}
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-7 gap-4">
                            {(() => {
                                const daysInMonth = getDaysInMonth(currentDate);
                                const firstDay = getFirstDayOfMonth(currentDate);
                                const days = [];

                                // Previous month days
                                const prevMonthDays = getDaysInMonth(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
                                for (let i = firstDay - 1; i > 0; i--) {
                                    const day = prevMonthDays - i + 1;
                                    days.push(
                                        <div key={`prev-${day}`} className="text-center p-2 text-gray-400">
                                            {day}
                                        </div>
                                    );
                                }

                                // Current month days
                                for (let day = 1; day <= daysInMonth; day++) {
                                    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
                                    const isSelected = selectedDate.toDateString() === date.toDateString();
                                    const hasEvents = events.some(event => event.date.toDateString() === date.toDateString());

                                    days.push(
                                        <div 
                                            key={day}
                                            onClick={() => handleDateClick(date)}
                                            className={`text-center p-2 cursor-pointer relative ${
                                                isSelected ? 'bg-black text-white rounded-lg' : 
                                                hasEvents ? 'font-bold' : ''
                                            } hover:bg-gray-100`}
                                        >
                                            {day}
                                            {hasEvents && (
                                                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2">
                                                    <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                                                </div>
                                            )}
                                        </div>
                                    );
                                }

                                // Next month days
                                const remainingCells = 42 - days.length; // 6 rows * 7 days = 42
                                for (let day = 1; day <= remainingCells; day++) {
                                    days.push(
                                        <div key={`next-${day}`} className="text-center p-2 text-gray-400">
                                            {day}
                                        </div>
                                    );
                                }

                                return days;
                            })()}
                        </div>
                    </div>
                </div>

                {/* Add Event Button */}
                <button 
                    onClick={() => setShowEventModal(true)}
                    className="fixed bottom-8 right-8 bg-black text-white rounded-full p-4 shadow-lg hover:bg-gray-800 transition-colors"
                >
                    <img src={addCircle} alt="Add Event" className="w-6 h-6" />
                </button>

                <div className="gap-[18px] pt-10">
                    <p className="text-[20px] font-semibold">23rd May</p>
                    <div className="pt-10 pb-10">
                        <p>2:00 PM</p>
                        <hr className="border-dotted border-t-4"/>
                    </div>
                    
                    <div>
                        <div className="flex justify-between pr-[10px]">
                            <p>2:00 PM</p>
                            <img src={outOfOffice} alt=""  className="pb-[5px]"/>
                        </div>
                        <hr className="border-dotted border-t-4"/>
                    </div>
                    
                    <div className="pt-10 pb-10">
                        <p>3:00 PM</p>
                        <hr className="border-dotted border-t-4"/>
                    </div>

                    <div className="flex justify-between pr-[10px]">
                        <div>
                            <p>3:30 PM</p>
                            <hr className="border-dotted border-t-4 w-[50px]"/>
                         </div>

                        <div className=" bg-[#BFBFBF] w-[709px] h-[115px] flex flex-row justify-between rounded-[22px]">
                            <div className="w-316px h-[70px] p-[20px] gap-[15px] flex">
                                <div>
                                    <img src={ppux} alt="" />
                                </div>

                                <div className="">
                                    <p className="text-[14px] font-semibold">UX Consultations</p>
                                    <div>
                                        <ul className="flex flex-row gap-[20px]">
                                            <li>
                                                Chris Morich
                                            </li>

                                            <li>
                                                Melanie Chu
                                            </li>

                                            <li>
                                                Charmie
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="flex justify-between gap-10 pt-3">
    <button className="text-green-600 flex items-center gap-2">
        <img src={checkGreen} alt="" />
        <span>Confirm</span>
    </button>
    <button className="text-red-600 flex items-center gap-2">
        <img src={cancelRed} alt="" />
        <span>Cancel</span>
    </button>
</div>

                                </div>

                            </div>

                            <div className="items-center">
                                <img src={notification1} alt="" className=" w-[30px] h-[30px]"/>
                            </div>

                        </div>
                    </div>
                </div>
                </div>

                
            <div className="bg-white w-[400px] h-[735px] ml-[20px] p-3 rounded-[15px] mt-[120px] ml-8">
    <p className="text-xl font-semibold mb-6">Activity</p>
    
    {/* Team/Personal Toggle */}
    <div className="mb-6">
        <div className="flex gap-2 mb-4 bg-[#EFEFEF] rounded-lg p-1 w-fit">
            <button className="px-4 py-2 bg-black text-white rounded-lg text-sm font-medium">Team</button>
            <button className="px-4 py-2 text-gray-600 rounded-lg text-sm font-medium">Personal</button>
        </div>
        
        {/* Pie Chart */}
        <div className="relative w-32 h-32 mx-auto mb-4">
            <div className="w-32 h-32 rounded-full">
                <img src={yellowStuff} alt="" />
            </div>
        </div>
    </div>

    {/* Notifications Section */}
    <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
            <p className="text-lg font-semibold">Notifications</p>
            {/* Toggle Switch */}
            <div className="relative">
                <input type="checkbox" className="sr-only" id="notifications-toggle" defaultChecked />
                <label htmlFor="notifications-toggle" className="flex items-center cursor-pointer">
                    <div className="relative">
                        <div className="block bg-black w-14 h-8 rounded-full"></div>
                        <div className="absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition transform translate-x-6"></div>
                    </div>
                </label>
            </div>
        </div>
    </div>

    {/* Notification Items */}
    <div className="space-y-4">
        {/* Victoria Mandala */}
        <div className="p-4 bg-gray-50">
            <div className="flex gap-4">
                <div className="relative">
                    <img src={emojil} alt="" className="rounded-full bg-gray-300" />
                    
                </div>
                <div className="flex-1">
                    <p className="font-semibold text-sm">Victoria Mandala</p>
                    <p className="text-gray-600 text-sm">Upload 2 sketch file</p>
                    <p className="text-green-600 cursor-pointer text-sm hover:underline">Show in folder</p>
                </div>
            </div>
        </div>

        {/* Melanie Chu */}
        <div className="p-4 bg-white">
            <div className="flex gap-4">
                <div className="relative">
                    <img src={emojil} alt="" className=" rounded-full bg-gray-300" />
                    
                </div>
                <div className="flex-1">
                    <p className="font-semibold text-sm">Melanie Chu</p>
                    <p className="text-gray-600 text-sm">Sent you a message</p>
                    <p className="text-green-600 cursor-pointer text-sm hover:underline">Reply now</p>
                </div>
            </div>
        </div>

        {/* Charmie */}
        <div className="p-4 bg-white rounded-lg">
            <div className="flex gap-4">
                <div className="relative">
                    <img src={emojil} alt="" className="rounded-full bg-gray-300" />
                    
                </div>
                <div className="flex-1">
                    <p className="font-semibold text-sm">Charmie</p>
                    <p className="text-gray-600 text-sm">Added an appointment</p>
                    <p className="text-gray-350 cursor-pointer text-sm hover:underline">Open calendar</p>
                </div>
            </div>
        </div>
    </div>
</div>
            </div>

        </div>
    );
}