import React from 'react';
import { FaFileImport, FaRegCircle, FaHome, FaStream, FaBullhorn, FaChartBar, FaBell } from 'react-icons/fa';
import "./sidebar.css"
function SidebarItem({ icon, label }) {
    return (
        <div className="sidebar-item">
            <div className="icon">{icon}</div>
            <span>{label}</span>
        </div>
    );
}

function TodoItem({ label, points, date }) {
    return (
        <div className="todo-item">
            <div className="circle"><FaRegCircle /></div>
            <div className="todo-content">
                <div>{label}</div>
                <div>{points} • {date}</div>
            </div>
        </div>
    );
}

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarItem icon={<FaFileImport />} label="Import Existing Content" />
            <SidebarItem icon={<FaFileImport />} label="Import from Commons" />
            <SidebarItem icon={<FaHome />} label="Choose Home Page" />
            <SidebarItem icon={<FaStream />} label="View Course Stream" />
            <SidebarItem icon={<FaBullhorn />} label="New Announcement" />
            <SidebarItem icon={<FaChartBar />} label="New Analytics" />
            <SidebarItem icon={<FaBell />} label="View Course Notifications" />

            <h3>To Do</h3>
            <TodoItem label="Grade A1 - ENV + HTML" points="100 points" date="Sep 18 at 11:59pm" />
            <TodoItem label="Grade A2 - CSS + BOOTSTRAP" points="100 points" date="Oct 2 at 11:59pm" />
        </div>
    );
}

export default Sidebar;
