import React, { useState } from "react";
import {
  LayoutDashboard,
  Users,
  UserSquare2,
  CreditCard,
  Settings,
  FolderOpen,
  Bell,
  Menu,
  X,
  LogOut,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { PiButterfly } from "react-icons/pi";
import NotificationOverlay from "./Notificaiton";
import SettingsOverlay from "./Settings";
import { useAuthStore } from "../stores/AuthStore.js";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  // Zustand Logic + State
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  const [isOpen, setIsOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isNotifOpen, setIsNotifOpen] = useState(false);

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      logout(); // Logout Logic
      navigate("/login");
    }
  };

  // SideBar Only ShoW Admin
  const menuItems = [
    { label: "Dashboard", icon: <LayoutDashboard size={20} />, path: "/" },
    { label: "Projects", icon: <FolderOpen size={20} />, path: "/projects" },
    { label: "Team", icon: <UserSquare2 size={20} />, path: "/team" },
    ...(user?.role === "Admin"
      ? [
          { label: "Clients", icon: <Users size={20} />, path: "/clients" },
          {
            label: "Payments",
            icon: <CreditCard size={20} />,
            path: "/payments",
          },
        ]
      : []),
  ];

  return (
    <>
      {/* Mobile Toggle*/}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white/10 rounded-lg text-cyan-400"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Side Bar Content */}
      <aside
        className={`fixed md:relative inset-y-0 left-0 z-40 w-72 h-[95vh] m-4 rounded-3xl flex flex-col bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-300 ${isOpen ? "translate-x-0" : "-translate-x-[120%] md:translate-x-0"}`}
      >
        {/* Logo + Title  */}
        <div className="p-8 flex items-center gap-4">
          <div className="w-11 h-11 bg-gradient-to-br from-black to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/20">
            <PiButterfly size={26} className="text-white" />
          </div>
          <div>
            <h1 className="text-white font-bold text-xl leading-none">
              STUDIO SYNC <span className="ml-10 text-cyan-400">PRO</span>
            </h1>
            <span className="mt-2 inline-block px-3 py-1 font-bold bg-gray-800 border text-cyan-400 text-[10px] rounded-full border-cyan-500/30">
              {user?.role === "Admin"
                ? "👑 Admin View"
                : user?.role === "Client"
                  ? "❤️ User View"
                  : "🔥 Editor View"}
            </span>
          </div>
        </div>

        {/* Main Side Bar */}
        <nav className="flex-1 px-4 space-y-2">
          {menuItems.map((item) => (
            <SidebarItem
              key={item.label}
              icon={item.icon}
              label={item.label}
              active={currentPath === item.path}
              onClick={() => {
                navigate(item.path);
                setIsOpen(false);
              }}
            />
          ))}
        </nav>

        {/* footer (Settings, Notif, Logout) Name & Sytles */}
        <div className="p-4 border-t border-white/10 bg-white/5 space-y-1">
          <SidebarItem
            icon={<Bell size={20} />}
            label="Notifications"
            badge="5"
            onClick={() => setIsNotifOpen(true)}
          />
          <SidebarItem
            icon={<Settings size={20} />}
            label="Settings"
            onClick={() => setIsSettingsOpen(true)}
          />

          {/*  */}
          <div
            onClick={handleLogout}
            className="flex items-center gap-4 p-4 rounded-2xl cursor-pointer text-red-400 hover:bg-red-500/10 transition-all"
          >
            <LogOut size={20} />
            <span className="font-medium text-sm">Logout</span>
          </div>
        </div>
      </aside>

      {/* Close & open Overlays */}
      <SettingsOverlay
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      />
      {user?.role === "Admin" && (
        <NotificationOverlay
          isOpen={isNotifOpen}
          onClose={() => setIsNotifOpen(false)}
        />
      )}
    </>
  );
}

//  Footer Designs
function SidebarItem({ icon, label, active, badge, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center justify-between p-4 rounded-2xl cursor-pointer transition-all duration-300 ${active ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/20" : "text-gray-400 hover:bg-white/5 hover:text-white"}`}
    >
      <div className="flex items-center gap-4">
        {icon}
        <span className="font-medium text-sm">{label}</span>
      </div>
      <div className="flex items-center gap-3">
        {badge && (
          <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full animate-pulse">
            {badge}
          </span>
        )}
        {active && (
          <div className="w-1.5 h-6 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.8)]" />
        )}
      </div>
    </div>
  );
}
