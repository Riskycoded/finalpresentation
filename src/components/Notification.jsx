import React, { useState, useEffect } from 'react';

export default function Notification({ onClose }) {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        // Sample notification data matching your design
        const notificationData = [
            {
                id: 1,
                type: 'New Task',
                message: '"Content writing" was added to your task list',
                date: '01.09.2025',
                icon: '/images/notification-square.png'
            },
            {
                id: 2,
                type: 'Deadline missed',
                message: 'Task "Carshow log" missed its deadline',
                date: '01.09.2025',
                icon: '/images/notification-square.png'
            },
            {
                id: 3,
                type: 'New Task',
                message: '"Inspect the sender" was added to your Tasklist',
                date: '01.09.2025',
                icon: '/images/notification-square.png'
            },
            {
                id: 4,
                type: 'Deadline',
                message: 'Task "Workshop development" missed its deadline',
                date: '01.09.2025',
                icon: '/images/notification-square.png'
            },
            {
                id: 5,
                type: 'New Task',
                message: '"New Employees" was added your Tasklist',
                date: '01.09.2025',
                icon: '/images/notification-square.png'
            }
        ];
        setNotifications(notificationData);
    }, []);

    return (
        <div className="w-[353px] h-[616px] bg-[#EAEAEA] rounded-[10px] shadow-lg">
            {/* Header */}
            <div className="flex justify-between items-center pt-[18px] px-[12px] pb-[6px]">
                <h2 className="text-[20px] font-semibold text-black">Notification</h2>
                <button 
                    onClick={onClose}
                    className="w-6 h-6 flex items-center justify-center hover:bg-gray-300 rounded"
                >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                </button>
            </div>

            {/* Notification List */}
            <div className="px-[12px] space-y-0">
                {notifications.map((notification, index) => (
                    <div key={notification.id}>
                        <div className="flex gap-4 py-4">
                            {/* Icon */}
                            <div className="flex-shrink-0 mt-1">
                                <div className="w-[20px] h-[20px]  rounded-sm flex items-center justify-center">
                                    <div className="w-3 h-3 rounded-[2px]"><img src="/images/notification-square.png" alt="" /></div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-start gap-2">
                                    <div className="flex-1">
                                        <p className="text-[16px] font-semibold text-black mb-1">
                                            {notification.type}
                                        </p>
                                        <p className="text-[14px] text-black leading-relaxed">
                                            {notification.message}
                                        </p>
                                    </div>
                                    <span className="text-[12px] text-gray-600 flex-shrink-0 mt-1">
                                        {notification.date}
                                    </span>
                                </div>
                            </div>
                        </div>
                        
                        {/* Divider - don't show after last item */}
                        {index < notifications.length - 1 && (
                            <hr className="border-gray-300" />
                        )}
                    </div>
                ))}
            </div>

            {/* Read All Button */}
            <div className="absolute bottom-4 left-[12px] right-[12px]">
                <button className="w-full h-[41px] bg-black text-white rounded-md font-medium hover:bg-gray-800 transition-colors">
                    Read All
                </button>
            </div>
        </div>
    );
}