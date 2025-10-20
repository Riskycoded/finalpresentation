import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TodoCard } from "./cards/todo";
import { Inprogress } from "./cards/inprogress";
import { Reviewy } from "./cards/Reviewy";
import { Completed } from "./cards/completed";
import Plusadd from "./Plusadd";

import logoImage from "../assets/logo.png";
import whiteHome from "../assets/whitehome.png";
import tdesignTask from "../assets/tdesign_task.png";
import formkitPeople from "../assets/formkit_people.png";
import simplelineicons from "../assets/simple-line-icons_calender.png";
import settings07 from "../assets/setting-07.png";
import logoutIcon from "../assets/line-md_logout.png";
import vectorIcon from "../assets/Vector.png";
import searchIcon from "../assets/search.png";
import plussyIcon from "../assets/plussy.png";
import contentWritingImage from "../assets/contentwriting.png";
import studentImage from "../assets/Student.png";
import menuBarImage from "../assets/Menubarr.png";
import dataAnalysisImage from "../assets/dataanalysis.png";
import makaImage from "../assets/maka.png";
import webDevImage from "../assets/webdev.png";
import c1Image from "../assets/c1.png";
import contentWriImage from "../assets/contentwri.png";
import creatingMobileImage from "../assets/creatingmobile.png";
import progressImage from "../assets/Progress.png";
import timeImage from "../assets/Time_.png";
import productResImage from "../assets/productres.png";
import fiftyPerImage from "../assets/50per.png";
import dataAnnImage from "../assets/dataann.png";
import mobileAppImage from "../assets/mobileapp.png";
import ressImage from "../assets/ress.png";
import dataAnaImage from "../assets/dataana.png";

const todoData = [
  {
    title: "Content Writing",
    description: "Content Writers",
    mainImage: contentWritingImage,
    bottomImage: studentImage,
    dotted: menuBarImage,
  },
  {
    title: "Data Analysis",
    description: "Data Analysts",
    mainImage: dataAnalysisImage,
    bottomImage: makaImage,
    dotted: menuBarImage,
  },
  {
    title: "Web Development",
    description: "Web Developers",
    mainImage: webDevImage,
    bottomImage: c1Image,
    dotted: menuBarImage,
  },
  {
    title: "Content Writing",
    description: "Content Writers",
    mainImage: contentWriImage,
    bottomImage: c1Image,
    dotted: menuBarImage,
  },
];

const inprogress = [
  {
    title: "Creating Mobile App",
    description: "Web Developers",
    SmallDes: "Progress",
    perc: "70%",
    mainImage: creatingMobileImage,
    drag: progressImage,
    time: timeImage,
    day: "3 days left",
    pic: studentImage,
  },
  {
    title: "Product Research",
    description: "Product Owner",
    SmallDes: "Progress",
    perc: "50%",
    mainImage: productResImage,
    drag: fiftyPerImage,
    time: timeImage,
    day: "3 days left",
    pic: studentImage,
  },
  {
    title: "Data Analysis",
    description: "UIUX Design",
    mainImage: dataAnnImage,
    SmallDes: "Progress",
    perc: "75%",
    drag: fiftyPerImage,
    time: timeImage,
    day: "3 days left",
    pic: studentImage,
  },
];

const reviewy = [
  {
    mainImage: mobileAppImage,
    title: "Design Review",
    description: "UIUX Design",
    under: "Under review",
  },
  {
    mainImage: ressImage,
    title: "Product Research for Drive9ja",
    description: "Researchers",
    under: "Under review",
  },
  {
    mainImage: dataAnaImage,
    title: "Data Analysis WebApp",
    description: "UI UX Design",
    under: "Under review",
  },
  {
    mainImage: webDevImage,
    title: "Web Development",
    description: "Web Developers",
    under: "Web Developers",
  },
];

const completed = [
  {
    mainImage: mobileAppImage,
    title: "Design Review",
    description: "UIUX Design",
    under: "Completed",
  },
  {
    mainImage: ressImage,
    title: "Product Research for Drive9ja",
    description: "Researchers",
    under: "Completed",
  },
  {
    mainImage: dataAnaImage,
    title: "Data Analysis WebApp",
    description: "UI UX Design",
    under: "Completed",
  },
];

export default function Tasks() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);
  const [tasks, setTasks] = useState({
    todo: todoData,
    inProgress: inprogress,
    review: reviewy,
    completed: completed,
  });
  const [draggedTask, setDraggedTask] = useState(null);
  const [draggedFrom, setDraggedFrom] = useState(null);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleNavigation = (path) => {
    navigate("/" + path);
  };

  const handleDragStart = (task, category) => {
    setDraggedTask(task);
    setDraggedFrom(category);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (category) => {
    if (!draggedTask || category === draggedFrom) return;

    const updatedTasks = { ...tasks };
    updatedTasks[draggedFrom] = tasks[draggedFrom].filter(
      (task) => task.title !== draggedTask.title
    );
    updatedTasks[category] = [...tasks[category], draggedTask];

    setTasks(updatedTasks);
    setDraggedTask(null);
    setDraggedFrom(null);
  };

  const addNewTask = (taskData) => {
    setTasks((prev) => ({
      ...prev,
      todo: [...prev.todo, taskData],
    }));
    setShowAddTaskModal(false);
  };

  const filteredTasks = {
    todo: tasks.todo.filter(
      (task) =>
        task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task.description.toLowerCase().includes(searchQuery.toLowerCase())
    ),
    inProgress: tasks.inProgress.filter(
      (task) =>
        task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task.description.toLowerCase().includes(searchQuery.toLowerCase())
    ),
    review: tasks.review.filter(
      (task) =>
        task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task.description.toLowerCase().includes(searchQuery.toLowerCase())
    ),
    completed: tasks.completed.filter(
      (task) =>
        task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task.description.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  };

  return (
    <div className="w-full min-h-screen bg-[#EAEAEA] flex h-full">
      {/* Sidebar */}
      <div className="bg-[#EFEFEF] w-[246px] px-6 h-full min-h-screen opacity-100 rounded-tr-[24px] rounded-br-[24px] fixed top-0 left-0">
        <div className="w-[109px] h-[114px]">
          <img
            src={logoImage}
            alt="Logo"
            className="w-[109px] mt-[3px] ml-[2px] h-[114px]"
          />
          <h1 className="w-[76px] h-[26px] text-[20px] font-[jaini]">
            CheckMate
          </h1>
        </div>

        <div className="gap-[5px] mt-[30px]">
          <div
            onClick={() => handleNavigation("dashboard")}
            className="flex gap-[10px] w-[195px] h-[53px] pl-[31px] pt-[13px] pr-[31px] pb-[13px] cursor-pointer hover:bg-gray-200 rounded-lg"
          >
            <img src={whiteHome} alt="Dashboard" />
            <h1 className="text-[#666666] text-[20px] font-semibold text-center">
              Dashboard
            </h1>
          </div>

          <div className="flex shadow-[0px_4px_4px_0px_#00000060] rounded-[10px] bg-black border-[1.5px] gap-[10px] pl-[31px] pt-[13px] pr-[31px] pb-[13px]">
            <img src={tdesignTask} alt="Tasks" />
            <h1 className="font-semibold text-[18px] text-[#CACACA]">
              Tasks Board
            </h1>
          </div>

          <div
            onClick={() => handleNavigation("teams")}
            className="flex gap-[10px] pl-[31px] pt-[13px] pr-[31px] pb-[13px] cursor-pointer hover:bg-gray-200 rounded-lg"
          >
            <img src={formkitPeople} alt="Teams" />
            <h1 className="font-semibold text-[18px] text-[#666666]">Teams</h1>
          </div>

          <div
            onClick={() => handleNavigation("calendar")}
            className="flex gap-[10px] pl-[31px] pt-[13px] pr-[31px] pb-[13px] cursor-pointer hover:bg-gray-200 rounded-lg"
          >
            <img src={simplelineicons} alt="Calendar" />
            <h1 className="font-semibold text-[18px] text-[#666666]">
              Calendar
            </h1>
          </div>

          <div
            onClick={() => handleNavigation("settings")}
            className="flex gap-[10px] pl-[31px] pt-[13px] pr-[31px] pb-[13px] cursor-pointer hover:bg-gray-200 rounded-lg"
          >
            <img src={settings07} alt="Settings" />
            <h1 className="font-semibold text-[18px] text-[#666666]">
              Settings
            </h1>
          </div>

          <div
            onClick={() => handleNavigation("login")}
            className="flex bg-[url('/images/Ellipse.png')] gap-[10px] pl-[31px] pt-[13px] pr-[31px] pb-[13px] mt-[30px] cursor-pointer hover:opacity-80"
          >
            <img src={logoutIcon} alt="Log Out" />
            <h1>Log Out</h1>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="ml-[246px] flex-1 p-4 min-h-screen bg-[#EAEAEA]">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-[15px]">
            <img
              src={vectorIcon}
              alt="Tasks Icon"
              className="w-[38px] h-[48px]"
            />
            <h1 className="font-semibold text-[48px]">Tasks</h1>
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
              onChange={handleSearch}
              placeholder="Search tasks..."
              className="w-full h-full pl-[50px] pr-[17px] pt-[14px] pb-[14px] bg-transparent border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Content Area */}
        <div className="flex gap-3 px-2">
          {/* To-do Column */}
          <div
            className="flex-1 min-w-0 px-3 py-2 bg-gray-50/30 rounded-lg"
            onDragOver={handleDragOver}
            onDrop={() => handleDrop("todo")}
          >
            <h1 className="text-lg font-bold mb-3 text-[#141522]">To-do</h1>
            <div className="space-y-3">
              {filteredTasks.todo.map((todo, index) => (
                <div
                  key={index}
                  draggable
                  onDragStart={() => handleDragStart(todo, "todo")}
                >
                  <TodoCard
                    mainImage={todo.mainImage}
                    title={todo.title}
                    description={todo.description}
                    bottomImage={todo.bottomImage}
                    dotted={todo.dotted}
                  />
                </div>
              ))}
            </div>
          </div>

          <div
            className="flex-1 min-w-0 px-3 py-2 bg-gray-50/30 rounded-lg"
            onDragOver={handleDragOver}
            onDrop={() => handleDrop("inProgress")}
          >
            <h1 className="text-xl font-bold mb-4 text-[#141522]">In Progress</h1>
            <div className="space-y-5">
              {filteredTasks.inProgress.map((item, index) => (
                <div
                  key={index}
                  draggable
                  onDragStart={() => handleDragStart(item, "inProgress")}
                >
                  <Inprogress
                    mainImage={item.mainImage}
                    title={item.title}
                    description={item.description}
                    SmallDes={item.SmallDes}
                    perc={item.perc}
                    drag={item.drag}
                    time={item.time}
                    day={item.day}
                    pic={item.pic}
                  />
                </div>
              ))}
            </div>
          </div>

          <div
            className="flex-1 min-w-0 px-3 py-2 bg-gray-50/30 rounded-lg"
            onDragOver={handleDragOver}
            onDrop={() => handleDrop("review")}
          >
            <h1 className="text-lg font-bold mb-3 text-[#141522]">Review</h1>
            <div className="space-y-3">
              {filteredTasks.review.map((review, index) => (
                <div
                  key={index}
                  draggable
                  onDragStart={() => handleDragStart(review, "review")}
                >
                  <Reviewy
                    mainImage={review.mainImage}
                    title={review.title}
                    description={review.description}
                    under={review.under}
                  />
                </div>
              ))}
            </div>
          </div>

          <div
            className="flex-1 min-w-0 px-3 py-2 bg-gray-50/30 rounded-lg"
            onDragOver={handleDragOver}
            onDrop={() => handleDrop("completed")}
          >
            <h1 className="text-lg font-bold mb-3 text-[#141522]">Completed</h1>
            <div className="space-y-3">
              {filteredTasks.completed.map((completed, index) => (
                <div
                  key={index}
                  draggable
                  onDragStart={() => handleDragStart(completed, "completed")}
                >
                  <Completed
                    mainImage={completed.mainImage}
                    title={completed.title}
                    description={completed.description}
                    under={completed.under}
                  />
                </div>
              ))}
            </div>
            <div className="mt-30 ml-auto flex justify-end">
              <img
                src={plussyIcon}
                alt="Add Task"
                className="w-[70px] h-[70px] cursor-pointer hover:opacity-80 transition-opacity transform hover:scale-105"
                onClick={() => setShowAddTaskModal(true)}
              />
            </div>
          </div>

          {/* Add Task Modal */}
          {showAddTaskModal && (
            <Plusadd
              onClose={() => setShowAddTaskModal(false)}
              onAdd={addNewTask}
            />
          )}
        </div>
      </div>
    </div>
  );
}
