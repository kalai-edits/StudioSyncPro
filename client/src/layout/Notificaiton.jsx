import React from 'react';

const notify = [
  { id: 1, type: "payment", title: "Payment Received", msg: "Zoho Corp sent $2,500 for Corporate Promo.", time: "10 mins ago", unread: true },
  { id: 2, type: "system", title: "New Project Assigned", msg: "You assigned 'Wedding Teaser' to Suresh.", time: "1 hour ago", unread: true },
  { id: 3, type: "alert", title: "Deadline Approaching", msg: "Music Video - Indie is due in 4 hours!", time: "3 hours ago", unread: false },
  { id: 4, type: "system", title: "Profile Updated", msg: "Your account password was changed successfully.", time: "Yesterday", unread: false },
];

export default function NotificationOverlay({ isOpen, onClose }) {
 
  if (!isOpen) return null;

  return (
   
    <div className="fixed inset-0 z-[999] bg-[#0a0a0a] flex flex-col animate-in slide-in-from-right duration-500 text-white">
      
      {/* TOP HEADER WITH CLOSE BUTTON */}
      <div className="flex justify-between items-center p-8 border-b border-gray-800/50">
        <h1 className="text-3xl font-bold">Notifications</h1>
        
        <div className="flex items-center gap-6">
          <button className="text-xs text-cyan-400 hover:underline">Mark all as read</button>
          
       
          <button 
            onClick={onClose}
            className="w-12 h-12 flex items-center justify-center bg-gray-900 hover:bg-red-500/20 hover:text-red-500 rounded-2xl transition-all text-2xl border border-gray-800"
          >
            ✕
          </button>
        </div>
      </div>

      {/* NOTIFICATIONS LIST AREA */}
      <div className="flex-1 overflow-y-auto p-10 flex justify-center">
        <div className="space-y-4 w-full max-w-3xl">
          {notify.map((alert) => (
            <div key={alert.id} className={`p-6 rounded-[2.5rem] border transition-all ${
              alert.unread ? 'bg-cyan-500/5 border-cyan-500/20 shadow-[0_0_20px_rgba(34,211,238,0.05)]' : 'bg-[#111217] border-gray-800'
            } relative overflow-hidden group`}>
              
              {alert.unread && <div className="absolute top-6 right-6 w-2.5 h-2.5 bg-cyan-400 rounded-full animate-pulse"></div>}
              
              <div className="flex items-start gap-6">
                <div className={`w-14 h-14 rounded-3xl flex items-center justify-center text-2xl border ${
                  alert.type === 'payment' ? 'bg-green-500/10 text-green-500 border-green-500/20' : 
                  alert.type === 'alert' ? 'bg-red-500/10 text-red-500 border-red-500/20' : 'bg-gray-800 text-gray-400 border-gray-700'
                }`}>
                  {alert.type === 'payment' ? '💰' : alert.type === 'alert' ? '⚠️' : '🔔'}
                </div>
                
                <div className="flex-1">
                  <h3 className={`font-bold text-lg mb-1 ${alert.unread ? 'text-white' : 'text-gray-300'}`}>{alert.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{alert.msg}</p>
                  <p className="text-[10px] text-gray-600 mt-4 font-bold uppercase tracking-widest">{alert.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}