import React from 'react';


export function AssignWork({ onClose }) {


  return (
    <div className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300">
      <div className="bg-[#111217] border border-gray-800 rounded-[2.5rem] w-full max-w-xl p-8 relative shadow-2xl">
        
        <button onClick={onClose} className="absolute top-6 right-6 w-10 h-10 bg-gray-900 rounded-full text-gray-400 hover:text-white flex items-center justify-center transition-all">✕</button>
        
        <h2 className="text-2xl font-bold text-white mb-2">Assign Project</h2>
        <p className="text-sm text-gray-500 mb-8">Allocate tasks to your editors with deadlines and budget.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="md:col-span-2">
            <label className="text-xs text-gray-500 uppercase font-bold ml-1">Project Title</label>
            <input type="text" placeholder="e.g. Wedding Teaser - Rahul" className="w-full mt-1 bg-gray-900 border border-gray-800 rounded-2xl px-5 py-3 outline-none focus:border-cyan-500/50 text-white transition-all" />
          </div>
          
          <div>
            <label className="text-xs text-gray-500 uppercase font-bold ml-1">Assign To</label>
            <select className="w-full mt-1 bg-gray-900 border border-gray-800 rounded-2xl px-5 py-3 outline-none focus:border-cyan-500/50 text-white transition-all">
              <option>Palani (Video Editor)</option>
              <option>Sridhar (Colorist)</option>
              <option>Aegon (vfx Artist)</option>
              <option>Swency (Motion Designer)</option>
            </select>
          </div>

          <div>
            <label className="text-xs text-gray-500 uppercase font-bold ml-1">Due Date</label>
            <input type="date" className="w-full mt-1 bg-gray-900 border border-gray-800 rounded-2xl px-5 py-3 outline-none focus:border-cyan-500/50 text-white transition-all" />
          </div>

          <div>
            <label className="text-xs text-gray-500 uppercase font-bold ml-1">Budget / Salary</label>
            <input type="text" placeholder="$500" className="w-full mt-1 bg-gray-900 border border-gray-800 rounded-2xl px-5 py-3 outline-none focus:border-cyan-500/50 text-white transition-all" />
          </div>

          <div>
            <label className="text-xs text-gray-500 uppercase font-bold ml-1">Priority</label>
            <select className="w-full mt-1 bg-gray-900 border border-gray-800 rounded-2xl px-5 py-3 outline-none focus:border-cyan-500/50 text-white transition-all">
              <option>Normal</option>
              <option>High / Urgent</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="text-xs text-gray-500 uppercase font-bold ml-1">Drive / Assets Link (Optional)</label>
            <input type="url" placeholder="https://drive.google.com/..." className="w-full mt-1 bg-gray-900 border border-gray-800 rounded-2xl px-5 py-3 outline-none focus:border-cyan-500/50 text-white transition-all" />
          </div>

          <button onClick={()=>{
            alert ("Assign Project Successfully 🔥") , onclose()
          }} className="md:col-span-2 w-full mt-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-4 rounded-2xl transition-all shadow-lg shadow-cyan-500/20 active:scale-[0.98]">
            Confirm Assignment
          </button>
        </div>
      </div>
    </div>
  );
}