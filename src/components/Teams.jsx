
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logoImage from '../assets/logo.png';
import whiteHome from '../assets/whitehome.png';
import tdesignTask from '../assets/tdesign_task.png';
import formkitPeople from '../assets/formkit_people.png';
import simplelineicons from '../assets/simple-line-icons_calender.png';
import settings07 from '../assets/setting-07.png';
import logoutIcon from '../assets/line-md_logout.png';
import charlieImage from '../assets/charlie.png';
import charmieImage from '../assets/charmie.png';
import victoriaImage from '../assets/victoria.png';
import melanieImage from '../assets/melanie.png';
import michaelImage from '../assets/michael.png';
import ellipse233Image from '../assets/Ellipse 233.png';
import ellipse234Image from '../assets/Ellipse 234.png';
import ellipse235Image from '../assets/Ellipse 235.png';
import ellipse236Image from '../assets/Ellipse 236.png';
import ellipse237Image from '../assets/Ellipse 237.png';
import addCircleIcon from '../assets/add-circle.png';
import socialGroupIcon from '../assets/socialgroup.png';
import menuBarImage from '../assets/menubarr.png';
import plusyIcon from '../assets/plusy.png';
import greaterIcon from '../assets/greater.png';
import callIcon from '../assets/call.png';
import videoIcon from '../assets/video.png';
import docsendIcon from '../assets/docsend.png';
import picsendIcon from '../assets/picsend.png';
import emojisIcon from '../assets/emojis.png';
import camsendIcon from '../assets/camsend.png';
import sendsendIcon from '../assets/sendsend.png';
import cancelIcon from '../assets/cancel.png';
import searchIcon from '../assets/search.png';

export default function Teams() {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedChat, setSelectedChat] = useState('product-designers');
    const [privateMessages, setPrivateMessages] = useState({});
    const [messages, setMessages] = useState([
        {
            id: 1,
            name: "Chris Morich",
            avatar: charlieImage,
            lastMessage: "Hi Angelina! How are You?",
        },
        {
            id: 2,
            name: "Charmie",
            avatar: charmieImage,
            lastMessage: "Do you need that design?",
        },
        {
            id: 3,
            name: "Victoria Mandala",
            avatar: victoriaImage,
            lastMessage: "What is the price of hourly...",
        },
        {
            id: 4,
            name: "Melanie Chu",
            avatar: melanieImage,
            lastMessage: "Awesome Design!!",
        }
    ]);
    const [groupMessages, setGroupMessages] = useState([
        {
            id: 1,
            sender: "Chris Morich",
            avatar: charlieImage,
            message: "Hi! Everyone, What's the update about the design",
            time: "12:30pm",
            type: "received"
        },
        {
            id: 2,
            sender: "Me",
            avatar: michaelImage,
            message: "Hi Chris, Hi Cris, Im working on the variables and components",
            time: "12:45pm",
            type: "sent"
        },
        {
            id: 3,
            sender: "Charmie",
            avatar: charmieImage,
            message: "Thats good. Jay keep it up",
            time: "12:46pm",
            type: "received"
        },
        {
            id: 4,
            sender: "Me",
            avatar: michaelImage,
            message: "Don't forget to put the deadline on calendar for easy reminder need.",
            time: "1:05pm",
            type: "sent"
        },
        {
            id: 5,
            sender: "Charmie",
            avatar: charmieImage,
            message: "Doing that right away and im done with styles.",
            time: "1:10pm",
            type: "received"
        },
        {
            id: 6,
            sender: "Chris Morich",
            avatar: charlieImage,
            message: "Okay everyone, keep me updated.",
            time: "1:56pm",
            type: "received"
        }
    ]);

    const [newMessage, setNewMessage] = useState("");
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [showCreateGroup, setShowCreateGroup] = useState(false);
    const [newGroupName, setNewGroupName] = useState("");
    const [collaborators, setCollaborators] = useState([
        { id: 1, name: "Angela", avatar: charlieImage },
        { id: 2, name: "Charmie", avatar: charmieImage }
    ]);
    const [groups, setGroups] = useState([
        {
            id: 'product-designers',
            name: 'Product Designers',
            members: ['Chris Morich', 'Charmie', 'Victoria Mandala', 'Melanie Chu'],
            lastMessage: "Melanie: What's the latest update"
        }
    ]);
    const [onlineUsers] = useState(['Chris Morich', 'Melanie Chu']); // In a real app, this would be managed by a backend
    const [typingUsers, setTypingUsers] = useState({});
    const [messageReactions, setMessageReactions] = useState({});
    const [selectedMemberIds, setSelectedMemberIds] = useState([]);
    const [lastTypingUpdate, setLastTypingUpdate] = useState(0);
    
    const handleNavigation = (path) => {
        navigate("/" + path);
    };

    const handleSendMessage = (messageText) => {
        if (!messageText.trim()) return;

        const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        if (selectedChat === 'product-designers' || selectedChat.startsWith('group-')) {
            const targetGroupId = selectedChat === 'product-designers' ? 'product-designers' : selectedChat.split('-')[1];
            setGroupMessages(prev => [...prev, {
                id: prev.length + 1,
                sender: "Me",
                avatar: michaelImage,
                message: messageText,
                time: currentTime,
                type: "sent"
            }]);
            
            // Update last message in groups
            setGroups(prev => prev.map(group => 
                group.id === targetGroupId 
                    ? { ...group, lastMessage: `Me: ${messageText}` }
                    : group
            ));
        } else if (selectedChat.startsWith('private-')) {
            const recipientId = selectedChat.split('-')[1];
            const newMessage = {
                id: Date.now(),
                sender: "Me",
                message: messageText,
                time: currentTime,
                type: "sent"
            };
            setPrivateMessages(prev => ({
                ...prev,
                [recipientId]: [...(prev[recipientId] || []), newMessage]
            }));
            
            // Update last message in messages list
            setMessages(prev => prev.map(msg => 
                msg.id === parseInt(recipientId)
                    ? { ...msg, lastMessage: messageText }
                    : msg
            ));
        }
        
        setNewMessage("");
    };

    const handleCreateGroup = () => {
        if (!newGroupName.trim()) return;
        
        const newGroup = {
            id: `group-${Date.now()}`,
            name: newGroupName,
            members: collaborators.map(c => c.name),
            lastMessage: "Group created"
        };
        
        setGroups(prev => [...prev, newGroup]);
        setNewGroupName("");
        setCollaborators([]);
        setShowCreateGroup(false);
    };

    const handleRemoveCollaborator = (collaboratorId) => {
        setCollaborators(prev => prev.filter(c => c.id !== collaboratorId));
    };

    const handleAddEmoji = (emoji) => {
        setNewMessage(prev => prev + emoji);
        setShowEmojiPicker(false);
    };

    const handleTyping = () => {
        const now = Date.now();
        if (now - lastTypingUpdate > 2000) { // Only update every 2 seconds
            setTypingUsers(prev => ({
                ...prev,
                [selectedChat]: true
            }));
            setLastTypingUpdate(now);
            
            // Clear typing indicator after 3 seconds
            setTimeout(() => {
                setTypingUsers(prev => ({
                    ...prev,
                    [selectedChat]: false
                }));
            }, 3000);
        }
    };

    const handleReaction = (messageId, reaction) => {
        setMessageReactions(prev => ({
            ...prev,
            [messageId]: {
                ...(prev[messageId] || {}),
                [reaction]: ((prev[messageId] || {})[reaction] || 0) + 1
            }
        }));
    };

    const handleAddMember = (userId) => {
        setSelectedMemberIds(prev => {
            if (prev.includes(userId)) {
                return prev.filter(id => id !== userId);
            }
            return [...prev, userId];
        });
    };

    const emojis = ['😀', '😂', '😍', '👍', '❤️', '😢', '😡', '🎉', '🔥', '💯'];

    return (
       <div className="w-full min-h-screen bg-[#EAEAEA] flex">
            {/* Sidebar */}
            <div className="bg-[#EFEFEF] w-[246px] px-6 min-h-screen opacity-100 rounded-tr-[24px] rounded-br-[24px] fixed top-0 left-0">
                <div className="w-[109px] h-[114px]">
                    <img src={logoImage} alt="Logo" className="w-[109px] mt-[3px] ml-[2px] h-[114px]"/>
                    <h1 className="w-[76px] h-[26px] text-[20px] font-[jaini]">CheckMate</h1>
                </div>
                    
                <div className="gap-[5px] mt-[30px]">
                    <div onClick={() => handleNavigation('dashboard')} className="flex gap-[10px] pl-[31px] pt-[13px] pr-[31px] pb-[13px] cursor-pointer hover:bg-gray-200 rounded-lg">
                        <img src={whiteHome} alt="Dashboard" />
                        <h1 className="text-[#666666] text-[20px] font-semibold text-center">Dashboard</h1>
                    </div>

                    <div onClick={() => handleNavigation('tasks')} className="flex gap-[10px] pl-[31px] pt-[13px] pr-[31px] pb-[13px] cursor-pointer hover:bg-gray-200 rounded-lg">
                        <img src={tdesignTask} alt="Tasks" />
                        <h1 className="font-semibold text-[18px] text-[#666666]">Tasks Board</h1>
                    </div>

                    <div className="flex gap-[10px] shadow-[0px_4px_4px_0px_#00000060] w-[195px] h-[53px] rounded-[10px] bg-black border-[1.5px] pl-[31px] pt-[13px] pr-[31px] pb-[13px]">
                        <img src={formkitPeople} alt="Teams" />
                        <h1 className="font-semibold text-[18px] text-white">Teams</h1>
                    </div>
                
                    <div onClick={() => handleNavigation('calendar')} className="flex gap-[10px] pl-[31px] pt-[13px] pr-[31px] pb-[13px] cursor-pointer hover:bg-gray-200 rounded-lg">
                        <img src={simplelineicons} alt="Calendar" />
                        <h1 className="font-semibold text-[18px] text-[#666666]">Calendar</h1>
                    </div>
                
                    <div onClick={() => handleNavigation('settings')} className="flex gap-[10px] pl-[31px] pt-[13px] pr-[31px] pb-[13px] cursor-pointer hover:bg-gray-200 rounded-lg">
                        <img src={settings07} alt="Settings" />
                        <h1 className="font-semibold text-[18px] text-[#666666]">Settings</h1>
                    </div>

                    <div onClick={() => handleNavigation('login')} className="flex bg-[url('/images/Ellipse.png')] gap-[10px] pl-[31px] pt-[13px] pr-[31px] pb-[13px] mt-[30px] cursor-pointer hover:opacity-80">
                        <img src={logoutIcon} alt="Log Out" />
                        <h1>Log Out</h1>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="ml-[230px] flex-1 p-6 min-h-screen bg-[#EAEAEA]">
                {/* Header Section */}
                <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center gap-[19px]">
                        <img src={formkitPeople} alt="Teams Icon" className="w-[38px] pt-[7px] h-[46px]"/>
                        <h1 className="font-semibold text-[60px]">Teams</h1>
                    </div>

                    <div className="relative flex-1 max-w-md h-[56px] bg-[#F5F5F7] rounded-[10px] ml-6">
                        <span>
                            <img 
                                src={searchIcon} 
                                alt="Search" 
                                className="absolute left-[17px] top-1/2 -translate-y-1/2 h-[27.51px] w-auto"
                            />
                        </span>
                        <input 
                            type="text" 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search teams and messages..." 
                            className="w-full h-full pl-[50px] pr-[17px] pt-[14px] pb-[14px] bg-transparent border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>  
                </div>

                
                <div className="mt-8 flex">
                    <div>
                        <div className=" -space-x-4 flex mb-8">
                            <img src={ellipse233Image} alt="Collaborator 1" className="w-[50px] h-[50px]"/>
                            <img src={ellipse234Image} alt="Collaborator 2" className="w-[50px] h-[50px]"/>
                            <img src={ellipse235Image} alt="Collaborator 3" className="w-[50px] h-[50px]"/>
                            <img src={ellipse236Image} alt="Collaborator 4" className="w-[50px] h-[50px]"/>
                            <img src={ellipse237Image} alt="Collaborator 5" className="w-[50px] h-[50px]"/>
                            <img src={addCircleIcon} alt="Add Collaborator" className="w-[50px] h-[50px]"/>
                        </div>

                        <div className="gap-4 space-y-[15px]">
                            <p className="w-[80px] font-semibold h-[42px] text-[32px] mt-[20px]">Messages</p>

                            {messages
                                .filter(msg => 
                                    msg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                    msg.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
                                )
                                .map((message) => (
                                    <div 
                                        key={message.id} 
                                        className="flex flex-row w-[268px] h-[70px] cursor-pointer hover:bg-gray-300 rounded-lg p-2 transition-colors relative"
                                        onClick={() => setSelectedChat(`private-${message.id}`)}
                                    >
                                        <div className="relative">
                                            <img src={message.avatar} alt={message.name} className="w-[50px] h-[40px] rounded-full"/>
                                            {onlineUsers.includes(message.name) && (
                                                <div className="absolute bottom-0 right-0 w-3 h-3 0 rounded-full border-2 border-white"></div>
                                            )}
                                        </div>

                                        <div className="ml-4 flex-1">
                                            <div className="flex justify-between items-center">
                                                <p className="font-semibold text-[18px] text-start">{message.name}</p>
                                                {selectedMemberIds.includes(message.id) && (
                                                    <div className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                                                        ✓
                                                    </div>
                                                )}
                                            </div>
                                            {typingUsers[`private-${message.id}`] ? (
                                                <p className="text-[16px] text-[#808080] w-[196px] italic">typing...</p>
                                            ) : (
                                                <p className="text-[16px] text-[#808080] w-[190px]">{message.lastMessage}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                        
                        </div>

                        <div className="mt-[30px]">
                            <p className="text-[32px] font-semibold">Groups</p>

                            {groups.map(group => (
                                <div 
                                    key={group.id}
                                    onClick={() => setSelectedChat(group.id)}
                                    className={`bg-[${selectedChat === group.id ? '#323232' : '#4A4A4A'}] rounded-[10px] gap-[15px] w-[320px] flex flex-row h-[70px] cursor-pointer bg-[#323232] transition-colors mb-4`}
                                >
                                    <div className="my-auto" >
                                        <img src={socialGroupIcon} alt="Group Icon" className="my-auto"/>
                                    </div>

                                    <div className="text-white gap-[1px] my-auto">
                                        <p className="text-[18px] font-semibold ">{group.name}</p>
                                        <p className="text-[16px] font-semibold">{group.lastMessage}</p>
                                    </div>
                                </div>
                            ))}

                            <div className="flex flex-row w-[364px] mt-[3px] gap-[190px]">
                                <div 
                                    className="mt-[18px] cursor-pointer"
                                    onClick={() => setShowCreateGroup(true)}
                                >
                                    <p className="text-[20px] font-semibold">New Group</p>
                                    <p className="text-[15px] font-500 text-[#808080]">GroupName</p>
                                </div>

                                <div className="mt-[18px]">
                                    <img src={menuBarImage} alt="Menu" className="cursor-pointer"/>
                                </div>
                                
                            </div>

                            {showCreateGroup && (
                                <div className="mt-4 gap-[10px]">
                                    <div className="flex border-none w-[364px] h-[56px] rounded-[5px] pl-4 pr-4 pt-2 pb-2 bg-[#CCCCCC]">
                                        <input 
                                            type="text"  
                                            value={newGroupName}
                                            onChange={(e) => setNewGroupName(e.target.value)}
                                            placeholder="Create new group"
                                            className="w-[364px] h-[40px] border-0 bg-transparent"
                                        />
                                    </div>
                                </div>
                            )}

                            <div>
                                <p className="text-[15px] text-[#808080] mt-4">Add Collaborators</p>
                                <div className="flex items-center gap-[10px] mt-2 flex-wrap">
                                    {collaborators.map(collaborator => (
                                        <div 
                                            key={collaborator.id}
                                            className="flex items-center gap-[8px] bg-gray-200 rounded-full px-[12px] py-[6px]"
                                        >
                                            <img src={collaborator.avatar} alt={collaborator.name} className="w-[25px] h-[25px] rounded-full"/>
                                            <p className="text-[13px] font-medium">{collaborator.name}</p>
                                            <img 
                                                src={cancelIcon} 
                                                alt="Remove Collaborator" 
                                                className="w-[15px] h-[15px] cursor-pointer"
                                                onClick={() => handleRemoveCollaborator(collaborator.id)}
                                            />
                                        </div>
                                    ))}

                                    <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center cursor-pointer">
                                        <img src={plusyIcon} alt="Add Collaborator" className="w-[35px] h-[35px]"/>
                                    </div>

                                    {showCreateGroup && (
                                        <div 
                                            className="w-[40px] h-[40px] rounded-full flex items-center justify-center cursor-pointer"
                                            onClick={handleCreateGroup}
                                        >
                                            <img src={greaterIcon} alt="Create Group" className="w-[35px] h-[35px]"/>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Emoji Picker under Groups */}
                            {showEmojiPicker && (
                                <div className="mt-4 p-3 bg-white border rounded-lg shadow-lg">
                                    <div className="grid grid-cols-5 gap-2">
                                        {emojis.map((emoji, index) => (
                                            <button
                                                key={index}
                                                onClick={() => handleAddEmoji(emoji)}
                                                className="text-2xl hover:bg-gray-100 p-2 rounded"
                                            >
                                                {emoji}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div>
                        <hr className="w-px h-[1050px] ml-[1px] bg-black border-1 mx-4" />
                    </div>
                    
                    <div>
                        <div className="flex w-[751px] h-[87px] gap-[21px] p-[10px] bg-[#FFFFFF] rounded-[15px]">
                            <div>
                                <img src={socialGroupIcon} alt="Chat Icon" className="w-[67px] border-0.5 h-[67px]"/>
                            </div>

                            <div>
                                <p className="text-[32px] font-semibold ">
                                    {selectedChat === 'product-designers' ? 'Product Designers' : 
                                     messages.find(m => `private-${m.id}` === selectedChat)?.name || 'Chat'}
                                </p>
                                <div className="flex items-center gap-2">
                                    <p className="text-[15px] font-medium">
                                        {selectedChat === 'product-designers' ? 
                                            'Chris Morich, Charmie, Victoria Mandala, Melanie Chu' :
                                            messages.find(m => `private-${m.id}` === selectedChat)?.name}
                                    </p>
                                    {typingUsers[selectedChat] && (
                                        <p className="text-[14px] text-gray-500 italic animate-pulse">
                                            typing...
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="pl-[111px] p h-[52px] margin-left: auto gap-[5px] flex items-end justify-end">
                                <img src={callIcon} alt="Call" className="w-[60px] h-[52px]"/>
                                <img src={videoIcon} alt="Video" className="w-[60px] h-[52px]"/>
                            </div>

                        </div>

                        <div className="mx-auto w-[86px] h-[31px] pt-[5px] pr-[10px] pb-[5px] pl-[10px] bg-[#808080] rounded-[19px]">
                            <p className="text-[14px] font-semibold">Yesterday</p>
                        </div>

                        {selectedChat === 'product-designers' ? (
                            groupMessages.map((msg) => (
                                <div key={msg.id}>
                                    {msg.type === 'sent' ? (
                                        <>
                                            <div className="bg-[#F5F5F5] ml-auto w-[364px] rounded-[8px] h-[94px] p-[8px] gap-[31px] mt-[10px]">
                                                <div className="flex items-center gap-[31px] h-full my-auto">
                                                    <div className="my-center">
                                                        <p className="text-[20px] my-auto font-semibold">{msg.sender}</p>
                                                        <p className="text-[16px] my-auto font-semibold">{msg.message}</p>
                                                    </div>
                                                    <div className="my-center">
                                                        <img src={michaelImage} alt="Me" className="w-[80px] h-[50px]" />
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-[14px] text-end text-[#808080]">{msg.time}</p>
                                        </>
                                    ) : (
                                        <>
                                            <div className="bg-[#F5F5F5] w-[364px] rounded-[8px] h-[116px] p-[18px] gap-[16px] flex flex-row mt-[20px]">
                                                <div>
                                                    <img src={msg.avatar} alt={msg.sender} className="w-[50px] h-[50px]"/>
                                                </div>
                                                <div>
                                                    <p className="text-[20px] font-semibold">{msg.sender}</p>
                                                    <p className="text-[16px] font-semibold w-[200px] h-[48px]">{msg.message}</p>
                                                </div>
                                            </div>
                                            <p className="text-[14px] text-[#808080]">{msg.time}</p>
                                        </>
                                    )}
                                </div>
                            ))
                        ) : (
                            selectedChat.startsWith('private-') && privateMessages[selectedChat.split('-')[1]]?.map((msg) => (
                                <div key={msg.id}>
                                    {msg.type === 'sent' ? (
                                        <>
                                            <div className="bg-[#F5F5F5] ml-auto w-[364px] rounded-[8px] h-[94px] p-[8px] gap-[31px] mt-[10px]">
                                                <div className="flex items-center gap-[31px] h-full my-auto">
                                                    <div className="my-center">
                                                        <p className="text-[20px] my-auto font-semibold">{msg.sender}</p>
                                                        <p className="text-[16px] my-auto font-semibold">{msg.message}</p>
                                                    </div>
                                                    <div className="my-center">
                                                        <img src={michaelImage} alt="Me" className="w-[80px] h-[50px]" />
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-[14px] text-end text-[#808080]">{msg.time}</p>
                                        </>
                                    ) : (
                                        <>
                                            <div className="bg-[#F5F5F5] w-[364px] rounded-[8px] h-[116px] p-[18px] gap-[16px] flex flex-row mt-[20px]">
                                                <div>
                                                    <img src={messages.find(m => m.id === parseInt(selectedChat.split('-')[1]))?.avatar} alt={msg.sender} className="w-[50px] h-[50px]"/>
                                                </div>
                                                <div>
                                                    <p className="text-[20px] font-semibold">{msg.sender}</p>
                                                    <p className="text-[16px] font-semibold w-[200px] h-[48px]">{msg.message}</p>
                                                </div>
                                            </div>
                                            <p className="text-[14px] text-[#808080]">{msg.time}</p>
                                        </>
                                    )}
                                </div>
                            ))
                        )}

                        <div className="mt-[20px] flex flex-col w-[750px] mb-[20px]">
                            
                            <div className="flex flex-row rounded-[15px] h-[60px] p-[8px] gap-[16px]">
                                <input 
                                    type="text" 
                                    value={newMessage}
                                    onChange={(e) => {
                                        setNewMessage(e.target.value);
                                        handleTyping();
                                    }}
                                    onKeyPress={(e) => {
                                        if (e.key === 'Enter') {
                                            handleSendMessage(newMessage);
                                        }
                                    }}
                                    placeholder="Type your message..." 
                                    className="flex-1 text-[#555555] h-[60px] rounded-[15px] p-[10px] border-[1px] border-gray-300 focus:border-blue-500 focus:outline-none"
                                />
                                <div className="flex gap-[8px] items-center justify-center">
                                    <label className="cursor-pointer hover:opacity-80">
                                        <input type="file" className="hidden" onChange={(e) => {
                                            if (e.target.files?.[0]) {
                                                const file = e.target.files[0];
                                                handleSendMessage(`📎 Attached: ${file.name}`);
                                            }
                                        }}/>
                                        <img src={docsendIcon} alt="Send Document" className="w-[44px] h-[44px]"/>
                                    </label>
                                    <label className="cursor-pointer hover:opacity-80">
                                        <input type="file" accept="image/*" className="hidden" onChange={(e) => {
                                            if (e.target.files?.[0]) {
                                                const file = e.target.files[0];
                                                handleSendMessage(`🖼️ Image: ${file.name}`);
                                            }
                                        }}/>
                                        <img src={picsendIcon} alt="Send Image" className="w-[44px] h-[44px]"/>
                                    </label>
                                    <img 
                                        src={emojisIcon} 
                                        alt="Emojis" 
                                        onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                                        className="cursor-pointer hover:opacity-80 w-[44px] h-[44px]"
                                    />
                                    <img 
                                        src={camsendIcon} 
                                        alt="Send Camera Photo" 
                                        className="cursor-pointer hover:opacity-80 w-[44px] h-[44px]"
                                        onClick={() => {
                                            // This would typically integrate with a camera API
                                            handleSendMessage("📸 Photo taken");
                                        }}
                                    />
                                    <img 
                                        src={sendsendIcon} 
                                        alt="Send Message" 
                                        onClick={() => handleSendMessage(newMessage)}
                                        className="cursor-pointer hover:opacity-80 w-[44px] h-[44px]"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
        );
}