import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Notification from './Notification'; // Import your Notification component
import Popupprofile from './popupprofile'; // Import the ProfileDropdown component

export default function Dashboard() {
    const navigate = useNavigate();
    const [currentTime, setCurrentTime] = useState(new Date());
    const [searchQuery, setSearchQuery] = useState("");
    const [showCreateTaskModal, setShowCreateTaskModal] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false); // Add notification state
    const [showProfileDropdown, setShowProfileDropdown] = useState(false); // Add profile dropdown state
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [userTasks, setUserTasks] = useState([
        {
            id: 1,
            title: "Data Analysis WebApp",
            type: "UI UX Design",
            progress: 75,
            daysLeft: 3,
            image: "/images/dataana.png"
        },
        {
            id: 2,
            title: "Mobile App Development",
            type: "UI UX Design",
            progress: 75,
            daysLeft: 3,
            image: "/images/image2.png"
        }
    ]);

    const [upcomingMeetings, setUpcomingMeetings] = useState([
        {
            id: 1,
            title: "MalHub UI/UX",
            date: "Mon, 27",
            time: "2:30 PM",
            logo: "/images/malhub.png"
        }
    ]);

    // Update time every minute
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 60000);

        return () => clearInterval(timer);
    }, []);

    const handleNavigation = (path) => {
        navigate("/" + path);
    };

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        // Implement search functionality here
    };

    const formatTime = (date) => {
        return date.toLocaleTimeString('en-US', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const formatDate = (date) => {
        return date.toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        });
    };

    return (
        <div className="w-full min-h-screen bg-[#EAEAEA] flex relative">
            {/* Sidebar - same as before */}
            <div className="bg-[#EFEFEF] w-[246px] px-6 min-h-screen opacity-100 rounded-tr-[24px] rounded-br-[24px] fixed top-0 left-0">
                <div className="w-[109px] h-[114px]">
                    <img src="/images/logo.png" alt="" className="w-[109px] mt-[3px] ml-[2px] h-[114px]"/>
                    <h1 className="w-[76px] h-[26px] text-[20px] font-[jaini]">CheckMate</h1>
                </div>
                    
                <div className="gap-[5px] mt-[30px]">
                    <div onClick={() => handleNavigation('dashboard')} className="flex gap-[10px] shadow-[0px_4px_4px_0px_#00000060] rounded-[10px] bg-black border-[1.5px] w-[195px] h-[53px] pl-[31px] pt-[13px] pr-[31px] pb-[13px] cursor-pointer hover:bg-gray-900">
                        <img src="/images/home.png" alt="" />
                        <h1 className="text-[#CACACA] text-[20px] font-semibold text-center">Dashboard</h1>
                    </div>

                    <div onClick={() => handleNavigation('tasks')} className="flex gap-[10px] pl-[31px] pt-[13px] pr-[31px] pb-[13px] cursor-pointer hover:bg-gray-200 rounded-lg">
                        <img src="/images/tdesign_task.png" alt="" />
                        <h1 className="font-semibold text-[18px] text-[#666666]">Tasks Board</h1>
                    </div>

                    <div onClick={() => handleNavigation('teams')} className="flex gap-[10px] pl-[31px] pt-[13px] pr-[31px] pb-[13px] cursor-pointer hover:bg-gray-200 rounded-lg">
                        <img src="/images/formkit_people.png" alt="" />
                        <h1 className="font-semibold text-[18px] text-[#666666]">Teams</h1>
                    </div>
                
                    <div onClick={() => handleNavigation('calendar')} className="flex gap-[10px] pl-[31px] pt-[13px] pr-[31px] pb-[13px] cursor-pointer hover:bg-gray-200 rounded-lg">
                        <img src="/images/simple-line-icons_calender.png" alt="" />
                        <h1 className="font-semibold text-[18px] text-[#666666]">Calendar</h1>
                    </div>
                
                    <div onClick={() => handleNavigation('settings')} className="flex gap-[10px] pl-[31px] pt-[13px] pr-[31px] pb-[13px] cursor-pointer hover:bg-gray-200 rounded-lg">
                        <img src="/images/setting-07.png" alt="" />
                        <h1 className="font-semibold text-[18px] text-[#666666]">Settings</h1>
                    </div>

                    <div onClick={() => handleNavigation('login')} className="flex bg-[url('/images/Ellipse.png')] gap-[10px] pl-[31px] pt-[13px] pr-[31px] pb-[13px] mt-[30px] cursor-pointer hover:opacity-80">
                        <img src="/images/line-md_logout.png" alt="" />
                        <h1>Log Out</h1>
                    </div>
                </div>
            </div>
             
            {/* Main Content Area - same as before */}
            <div className="ml-[246px] flex-1 min-h-screen bg-[#EAEAEA] p-4">
                {/* All your existing main content goes here - keeping it the same */}
                {/* Welcome Card */}
                <div className="flex w-[459px] rounded-[10px] h-[207px] shadow-[0px_4px_4px_0px_#00000040] opacity-[81%] bg-white mb-[50px]">
                    <div className="w-[285px] h-[89px] mt-[52px] ml-[10px]">
                        <h1 className="w-[252px] h-[58px] font-semibold text-[48px] text-center">Hello John!</h1>
                        <p className="font-semibold text-[20px] text-center h-[31px] text-[#5A5A5A]">It's good to see you again.</p>
                    </div>
                              
                    <div className="w-[397px] h-[192px] relative">
                        <img src="/images/frame3.png" alt="" className="w-[397px] h-[158px] absolute object-cover" />
                        <img src="/images/frame3.png" alt="" className="w-[397px] h-[158px] absolute top-[80px] object-cover" />
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="flex gap-[36px] mb-[50px] w-[460px] h-[146px]">
                    <div className="bg-[#E2E2E2] w-[212px] h-[146px] rounded-xl shadow-[0px_4px_4px_0px_#00000040] flex flex-col items-center justify-center gap-[10px]">
                        <h1 className="text-[60px] font-semibold text-black w-[174px] text-start h-[72px]">10</h1>
                        <p className="w-[156px] h-[31px] text-[24px] text-start text-[#AAAAAA]">Hours Worked</p>
                    </div>

                    <div className="bg-[#E2E2E2] w-[212px] items-center justify-center h-[146px] rounded-xl shadow-[0px_4px_4px_0px_#00000040] flex flex-col gap-[10px]">
                        <h1 className="text-[60px] font-semibold text-black w-[174px] text-start h-[72px]">20</h1>
                        <p className="w-[156px] h-[31px] text-[24px] text-start text-[#AAAAAA]">Task Done</p>
                    </div>
                </div>

                {/* Graph */}
                <div className="w-[461px] h-[248px] rounded-[10px] mb-[50px]">
                    <img src="/images/framegraph.png" alt="" className="w-full h-full object-cover" />
                </div>

                {/* Upcoming Tasks */}
                <div className="bg-[#FFFFFF40] w-[461px] rounded-[10px] h-[309px] mb-[30px]">
                    <div className="flex justify-between mx-[11px]">
                        <h1 className="mt-[11px] w-[116px] h-[24px] font-semibold text-[16px] mx-[21px]">Upcoming Task</h1>
                        <div className="flex mx-[21px] mt-[11px] gap-[10px]">
                            <img src="/images/arrow-left.png" alt="" />
                            <img src="/images/arrow-right.png" alt="" />
                        </div>
                    </div>

                    <div className="gap-[40px] flex">
                        {userTasks.map((task) => (
                            <div key={task.id} className="rounded-md w-[202px] mt-[10px] bg-[#E2E2E2] h-[247px]">
                                <img src={task.image} alt="" className="mt-[12px] w-[186px] h-[110px] ml-[8px]" />
                                
                                <div className=" h-[41px] ml-[14px] gap-[4px]">
                                    <h1 className="w-[px] h-[21px] opacity-100 gap-[4px] font-semibold text-[14px] leading-[150%] tracking-[0%] align-middle">
                                        {task.title}
                                    </h1>
                                    <h1 className="w-[80px] text-[#54577A] h-[16px] opacity-100 font-medium text-[12px] leading-[100%] tracking-[-0.02em] flex items-center">
                                        {task.type}
                                    </h1>
                                </div>
                                
                                <div className="flex justify-between gap-[28px] w-[1150px] h-[20px] mx-[8px]">
                                    <h1>Progress</h1>
                                    <h1>{task.progress}%</h1>
                                </div>

                                <div className="w-[190px] h-[10px] mt-[10px] bg-gray-200 rounded-full overflow-hidden">
                                    <div 
                                        className="h-full bg-black rounded-full"
                                        style={{ width: `${task.progress}%` }}
                                    ></div>
                                </div>
                                
                                <div className="flex gap-[3px] justify-center mt-[10px]">
                                    <img src="/images/time circle.png" alt="" />
                                    <h1>{task.daysLeft} Days Left</h1>
                                    <img src={task.id === 1 ? "/images/student.png" : "/images/student2.png"} alt="" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Panel */}
            <div className="w-[655px] min-h-screen bg-[#EAEAEA] p-4">
                {/* Header with Search - MODIFIED to include notification and profile toggles */}
                <div className="w-full h-[56px] flex gap-[20px] mb-[14px]">
                    <div className="relative flex-1 max-w-md h-[56px] bg-[#F5F5F7] rounded-[10px]">
                        <span>
                            <img 
                                src="/images/search.png" 
                                alt="Search" 
                                className="absolute left-[17px] top-1/2 -translate-y-1/2 h-[27.51px] w-auto"
                            />
                        </span>
                        <input 
                            type="text" 
                            value={searchQuery}
                            onChange={handleSearch}
                            placeholder="Search tasks, meetings..." 
                            className="w-full h-full pl-[50px] pr-[17px] pt-[14px] pb-[14px] bg-transparent border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>  
                    
                    {/* Notification icon */}
                    <div className="relative">
                        <img 
                            src="/images/notification 1.png" 
                            alt="Notifications" 
                            className="w-[47px] h-[47px] cursor-pointer hover:opacity-80" 
                            onClick={() => setShowNotifications(!showNotifications)}
                        />
                        
                        {/* Notification Panel */}
                        {showNotifications && (
                            <div className="absolute top-[55px] right-0 z-50">
                                <Notification onClose={() => setShowNotifications(false)} />
                            </div>
                        )}
                    </div>

                    {/* Profile Section - UPDATED to include dropdown */}
                    <div className="relative flex items-center">
                        <div 
                            className="flex items-center gap-2 cursor-pointer hover:opacity-80"
                            onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                        >
                            <img src="/images/smallprofile.png" alt="Profile" className="w-[47px] h-[55px]" />
                            <img 
                                src="/images/dropdown.png" 
                                alt="Dropdown" 
                                className={`w-[15px] h-[15.7px] transition-transform ${showProfileDropdown ? 'rotate-180' : ''}`}
                            />
                        </div>

                        {/* Profile Dropdown */}
                        {showProfileDropdown && (
                            <div className="absolute top-[60px] right-0 z-50">
                                <Popupprofile onClose={() => setShowProfileDropdown(false)} />
                            </div>
                        )}
                    </div>
                </div>

                {/* Rest of your right panel content remains the same */}
                {/* Create Task Card */}
                <div 
                    onClick={() => setShowCreateTaskModal(true)}
                    className="w-full h-[139px] bg-[#383838] rounded-[10px] shadow-[0px_5px_4px_0px_#00000040] opacity-100 mb-[20px] flex items-center justify-between px-6 cursor-pointer hover:bg-[#2a2a2a] transition-colors">
                    <div className="text-white">
                        <h1 className="text-2xl font-bold mb-2">Create Task</h1>
                        <h1 className="text-lg text-gray-300">Create a new task</h1>
                    </div>
                    
                    <div>
                        <img src="/images/Frame.png" alt="" className="w-12 h-12" />
                    </div>
                </div>

                {/* Time and Calendar */}
                <div className="w-full h-[239px] opacity-100 flex flex-row gap-[27px] mb-[30px]">
                    <div>
                        <h1 className="w-[167px] text-7xl h-[99px] font-bold">{formatTime(currentTime)}</h1>
                    </div>
                    
                    <div className="flex-1">
                        <div className="mt-2">
                            <h1 className="text-[20px] opacity-70 font-semibold">{formatDate(currentTime)}</h1>
                        </div>
                        
                        <div className="flex justify-between mt-[38px] items-center">
                            <h1 className="text-[28px]">Today</h1>
                            <div className="flex gap-2">
                                <img src="/images/arrow-left.png" alt="" />
                                <img src="/images/arrow-right.png" alt="" />
                            </div>
                        </div>
                        
                        <div className="mt-4">
                            <table className="w-full">
                                <thead>
                                    <tr>
                                        <th className="text-center text-[18px] p-2">Sun</th>
                                        <th className="text-center text-[18px] p-2">Mon</th>
                                        <th className="text-center text-[18px] p-2">Tue</th>
                                        <th className="text-center text-[18px] p-2">Wed</th>
                                        <th className="text-center text-[18px] p-2">Thu</th>
                                        <th className="text-center text-[18px] p-2">Fri</th>
                                        <th className="text-center text-[18px] p-2">Sat</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="text-center text-[20px] opacity-[30%] p-2">30</td>
                                        <td className="text-center text-[20px] opacity-[30%] p-2">31</td>
                                        <td className="text-center text-[20px] p-2">1</td>
                                        <td className="text-center text-[20px] p-2">2</td>
                                        <td className="text-center text-[20px] p-2">3</td>
                                        <td className="text-center text-[20px] p-2">4</td>
                                        <td className="text-center text-[20px] p-2">5</td>
                                    </tr>
                                    <tr>
                                        <td className="text-center text-[20px] p-2">6</td>
                                        <td className="text-center text-[20px] p-2">7</td>
                                        <td className="text-center text-[20px] p-2">8</td>
                                        <td className="text-center text-[20px] p-2">9</td>
                                        <td className="text-center text-[20px] p-2">10</td>
                                        <td className="text-center text-[20px] p-2 text-black font-bold rounded">11</td>
                                        <td className="text-center text-[20px] p-2">12</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Daily Reminder */}
                <div className="w-full h-[248px] bg-[#383838] rounded-[10px] shadow-[0px_5px_4px_0px_#00000040] opacity-100 mb-[20px] p-6">
                    <div className="flex justify-between items-center">
                        <h1 className="font-semibold text-lg text-white">Daily Reminder</h1>
                        <h1 className="text-white text-[24px]">07:30 PM</h1>
                    </div>
                    
                    <div className="flex justify-between items-end h-[180px]">
                        <h1 className="text-white text-[24px] font-semibold">You have a task to complete today</h1>
                        <img src="/images/darktick.png" alt="" className="w-[45px] h-[45px]" />
                    </div>
                </div>
                
                {/* Zoom Meeting */}
                <div className="w-full h-[248px] bg-[#383838] rounded-[10px] shadow-[0px_5px_4px_0px_#00000040] opacity-100 p-6">
                    {upcomingMeetings.map((meeting) => (
                        <div key={meeting.id}>
                            <div className="flex justify-between items-center mb-4">
                                <h1 className="font-semibold text-[32px] text-white">Zoom Meeting</h1>
                                
                                <div className="text-right">
                                    <h1 className="text-gray-300 text-[20px] font-semibold">{meeting.date}</h1>
                                    <h1 className="text-gray-300 text-[20px] font-semibold">{meeting.time}</h1>
                                </div>
                            </div>

                            <div className="flex justify-between items-end h-[150px]">
                                <div className="flex flex-col items-start">
                                    <h1 className="text-[24px] font-semibold text-gray-200 mb-2">{meeting.title}</h1>
                                    <img src={meeting.logo} alt="" className="w-[169px] h-[45px]" />
                                </div>
                                
                                <div className="flex gap-[3px]">
                                    <button 
                                        onClick={() => window.open('https://zoom.us')} 
                                        className="transform transition-transform hover:scale-105"
                                    >
                                        <img src="/images/no.png" alt="Decline" className="w-[45px] h-[45px] rounded-sm cursor-pointer" />
                                    </button>
                                    <button 
                                        onClick={() => window.open('https://zoom.us')}
                                        className="transform transition-transform hover:scale-105"
                                    >
                                        <img src="/images/yes.png" alt="Accept" className="w-[45px] h-[45px] rounded-sm cursor-pointer" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Create Task Modal - same as before */}
            {showCreateTaskModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div 
                        className="absolute inset-0 bg-black bg-opacity-20" 
                        onClick={() => setShowCreateTaskModal(false)}
                    ></div>
                    
                    <div className="relative bg-white rounded-lg p-6 w-[500px] shadow-2xl">
                        <h2 className="text-2xl font-bold mb-4">Create New Task</h2>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            setShowCreateTaskModal(false);
                        }}>
                            <div className="mb-4">
                                <label className="block mb-2">Task Title</label>
                                <input type="text" className="w-full p-2 border rounded" required />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2">Task Type</label>
                                <select className="w-full p-2 border rounded" required>
                                    <option>UI UX Design</option>
                                    <option>Development</option>
                                    <option>Research</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2">Due Date</label>
                                <input type="date" className="w-full p-2 border rounded" required />
                            </div>
                            <div className="flex justify-end gap-2">
                                <button 
                                    type="button" 
                                    onClick={() => setShowCreateTaskModal(false)}
                                    className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
                                >
                                    Cancel
                                </button>
                                <button 
                                    type="submit"
                                    className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
                                >
                                    Create Task
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Click outside to close dropdowns */}
            {(showNotifications || showProfileDropdown) && (
                <div 
                    className="fixed inset-0 z-40" 
                    onClick={() => {
                        setShowNotifications(false);
                        setShowProfileDropdown(false);
                    }}
                ></div>
            )}
        </div>
    );
}