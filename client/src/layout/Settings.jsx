import React from 'react';

export default function SettingsOverlay({ isOpen, onClose }) {
  // 1. isOpen false- Screen Hide View
  if (!isOpen) return null;

  return (
  
    <div className="fixed inset-0 z-[999] bg-[#0a0a0a] flex flex-col animate-in zoom-in duration-300 text-white">
      
      {/* TOP HEADER WITH CLOSE BUTTON */}
      <div className="flex justify-between items-center p-8 border-b border-gray-800/50">
        <h1 className="text-3xl font-bold">Account Settings</h1>
        
        {/* CLOSE BUTTON */}
        <button 
          onClick={onClose}
          className="w-12 h-12 flex items-center justify-center bg-gray-900 hover:bg-red-500/20 hover:text-red-500 rounded-2xl transition-all text-2xl border border-gray-800"
        >
          ✕
        </button>
      </div>

      {/* SETTINGS CONTENT AREA */}
      <div className="flex-1 overflow-y-auto p-10 flex justify-center">
        <div className="max-w-4xl w-full space-y-10">
          
          {/* PROFILE SECTION */}
          <div className="bg-[#111217] border border-gray-800 p-8 rounded-[3rem] shadow-2xl relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[80px]"></div>

            <h2 className="text-xl font-bold mb-8 relative z-10 text-cyan-400">Profile Information</h2>
            
            <div className="flex items-center gap-8 mb-10 relative z-10">
              <div className="w-28 h-28  from-cyan-500 to-blue-600 rounded-[2rem] flex items-center justify-center text-4xl font-bold border-4 border-gray-900 shadow-2xl shadow-cyan-500/20">
                K
              </div>
              <div className="space-y-3">
                <button className="bg-gray-800 hover:bg-gray-700 px-6 py-2.5 rounded-xl text-xs font-bold transition-all border border-gray-700">
                  Change Avatar
                </button>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">JPG, PNG or GIF. Max 5MB.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              <div className="space-y-3">
                <label className="text-xs text-gray-500 uppercase font-bold ml-1">Full Name</label>
                <input type="text" defaultValue="Kalai" className="w-full bg-gray-900 border border-gray-800 rounded-2xl px-6 py-4 outline-none focus:border-cyan-500/50 transition-all text-sm" />
              </div>
              <div className="space-y-3">
                <label className="text-xs text-gray-500 uppercase font-bold ml-1">Email Address</label>
                <input type="email" defaultValue="admin@studiosync.pro" className="w-full bg-gray-900 border border-gray-800 rounded-2xl px-6 py-4 outline-none focus:border-cyan-500/50 transition-all text-sm" />
              </div>
            </div>
          </div>

          {/* SECURITY SECTION */}
          <div className="bg-[#111217] border border-gray-800 p-8 rounded-[3rem] shadow-2xl">
            <h2 className="text-xl font-bold mb-6 text-red-400">Security & Privacy</h2>
            <div className="space-y-4">
              <button className="w-full text-left p-6 bg-gray-900/50 border border-gray-800 rounded-[2rem] hover:bg-gray-800/80 transition-all flex justify-between items-center group">
                <div className="flex items-center gap-4">
                  <span className="text-xl">🔒</span>
                  <span className="font-bold text-sm">Update Password</span>
                </div>
                <span className="text-gray-600 group-hover:translate-x-1 transition-transform">→</span>
              </button>
              
              <button className="w-full text-left p-6 bg-gray-900/50 border border-gray-800 rounded-[2rem] hover:bg-gray-800/80 transition-all flex justify-between items-center group">
                <div className="flex items-center gap-4">
                  <span className="text-xl">🛡️</span>
                  <span className="font-bold text-sm">Two-Factor Authentication</span>
                </div>
                <span className="text-cyan-500 text-[10px] font-bold uppercase tracking-widest bg-cyan-500/10 px-3 py-1 rounded-lg">Recommended</span>
              </button>
            </div>
          </div>

          {/* SAVE BUTTON */}
          <div className="flex justify-end pr-15  md:pb-10">
             <button className="bg-cyan-500 hover:bg-cyan-400  text-black font-bold py-5 px-12 rounded-[2rem] transition-all shadow-xl shadow-cyan-500/20 active:scale-95">
              Save All Changes
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}