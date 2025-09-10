import React, { useState } from "react";

export default function Plusadd({ onClose, onAdd }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [teamName, setTeamName] = useState("");

  const handleFile = (file) => {
    setSelectedFile(file);
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  return (
    <div className="fixed bottom-10 right-6 z-50">
      <div className="w-[300px] h-[500px] bg-[#EAEAEA] rounded-[15px] p-6 shadow-xl">
        <div className="flex justify-between items-center mb-4">
          <p className="text-lg font-semibold text-web3-green">Add New Task</p>
          <div className="w-5 h-5 rounded cursor-pointer" onClick={onClose}>
            <img src="/images/cancel.png" alt="" className="hover:opacity-80" />
          </div>
        </div>

        <div className="space-y-4 mb-4">
          <input
            type="text"
            placeholder="Task name"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            className="w-full h-[35px] px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-web3-green focus:border-transparent"
          />
          <input
            type="text"
            placeholder="Team name"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            className="w-full h-[35px] px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-web3-green focus:border-transparent"
          />
          <input
            type="date"
            placeholder="DD/MM/YYYY"
            className="w-full h-[35px] px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-web3-green focus:border-transparent"
          />
        </div>

        <div className="mb-4">
          <div className="relative w-full h-[150px] border-2 border-dashed border-gray-300 rounded-lg overflow-hidden cursor-pointer hover:border-web3-green-light transition-colors">
            <input
              type="file"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              onChange={handleChange}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              accept="image/*"
            />
            <div
              className={`w-full h-full bg-gradient-to-br from-web3-dark to-gray-200 flex flex-col items-center justify-center ${
                dragActive ? 'border-web3-green bg-web3-dark/50' : ''
              }`}
            >
              <div className="w-16 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center mb-3">
                <svg className="w-8 h-8 text-web3-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <p className="text-gray-600 text-sm font-medium">Add image or illustration</p>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-1">Maximum of 500kb</p>
          {selectedFile && (
            <div className="mt-3 p-2 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-xs text-green-700">Selected: {selectedFile.name}</p>
            </div>
          )}
        </div>

        <div className="mb-4">
          <p className="text-sm font-medium mb-3">Add Collaborators</p>
          <div className="flex items-start gap-[-8px]">
            <div className="flex">
            <div className="w-8 h-8 bg-gradient-to-br from-web3-green to-web3-green-light rounded-full border-2 border-white shadow-sm">
              <img src="/images/charlie.png" alt="" />
            </div>
            <div className="w-6 h-6 border rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors">
              <img src="/images/cancel.png" alt="" />
              </div>
            </div>
            <div className="pl-[70px] ml-auto">
          <button 
            onClick={() => {
              if (taskName && teamName) {
                const newTask = {
                  title: taskName,
                  description: teamName,
                  mainImage: "/images/contentwriting.png", // Default image
                  bottomImage: "/images/student.png", // Default image
                  dotted: "/images/menubarr.png"
                };
                onAdd(newTask);
                onClose();
              }
            }}
            className="w-32 bg-black  text-white h-8 rounded-lg text-sm font-medium transition-colors cursor-pointer hover:bg-gray-800"
          >
            Done
          </button>
        </div>
          </div>
        </div>

        
      </div>
    </div>
  );
}