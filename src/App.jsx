import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Tasks from './components/Tasks'
import Teams from './components/Teams'
import Calendar from './components/Calendar'
import Settings from './components/settings'
import Tasksettings from './components/tasksettings'
import Api from './components/api'
import Aboutus from './components/Aboutus'
import Faq from './components/Faq'
import Signout from './components/signout'
import Plusadd from './components/Plusadd'
import Notification from './components/notification'

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/people" element={<Teams />} />
        
        {/* Settings Routes */}
        <Route path="/settings" element={<Settings />} />
        <Route path="/settings/tasks" element={<Tasksettings />} />
        <Route path="/settings/api" element={<Api />} />
        <Route path="/settings/about" element={<Aboutus />} />
        <Route path="/settings/faqs" element={<Faq />} />
        
        {/* Additional Routes */}
        <Route path="/signout" element={<Signout />} />
        <Route path="/add" element={<Plusadd />} />
        <Route path="/notifications" element={<Notification />} />
        
        {/* Legacy routes for backward compatibility */}
        <Route path="/tasksettings" element={<Tasksettings />} />
        <Route path="/api" element={<Api />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/plusadd" element={<Plusadd />} />
        <Route path="/notification" element={<Notification />} />
      </Routes>
    </Router>
  )
}

export default App