import React from 'react';

export default function AddClient({ onClose }) {
  return (
    <div className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-[#111217] border border-gray-800 rounded-[2.5rem] w-full max-w-lg p-8 relative shadow-2xl">
        
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-6 right-6 w-10 h-10 bg-gray-900 rounded-full text-gray-400 hover:text-white flex items-center justify-center transition-all">✕</button>

        <h2 className="text-2xl font-bold text-white mb-2">Add New Client</h2>
        <p className="text-sm text-gray-500 mb-8">Register a new business partner or client.</p>

        <div className="space-y-5">
          {/* Client Name */}
          <div>
            <label className="text-xs text-gray-500 uppercase font-bold ml-1">Client / Company Name</label>
            <input type="text" placeholder="e.g. Zoho Corp" className="w-full mt-1 bg-gray-900 border border-gray-800 rounded-2xl px-5 py-3 outline-none focus:border-cyan-500/50 text-white transition-all"/>
          </div>

          {/* Category */}
          <div>
            <label className="text-xs text-gray-500 uppercase font-bold ml-1">Category</label>
            <select className="w-full mt-1 bg-gray-900 border border-gray-800 rounded-2xl px-5 py-3 outline-none focus:border-cyan-500/50 text-white transition-all cursor-pointer">
              <option value="corporate">🏢 Corporate</option>
              <option value="youtube">🥘 YouTube</option>
              <option value="wedding">💍 Wedding</option>
              <option value="music">🎸 Music Video</option>
            </select>
          </div>

          {/* Contact Details */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-gray-500 uppercase font-bold ml-1">Email Address</label>
              <input type="email"  placeholder="contact@client.com" className="w-full mt-1 bg-gray-900 border border-gray-800 rounded-2xl px-5 py-3 outline-none focus:border-cyan-500/50 text-white transition-all"/>
            </div>
            <div>
              <label className="text-xs text-gray-500 uppercase font-bold ml-1">Phone Number</label>
              <input type="text" placeholder="+91 98765 43210" className="w-full mt-1 bg-gray-900 border border-gray-800 rounded-2xl px-5 py-3 outline-none focus:border-cyan-500/50 text-white transition-all"/>
            </div>
          </div>
        </div>

        <button 
          onClick={() => { alert("Client Added Successfully!"); onClose(); }}
          className="w-full mt-8 bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-4 rounded-2xl transition-all shadow-lg shadow-cyan-500/20 active:scale-[0.98]"
        >
          + Add Client
        </button>
      </div>
    </div>
  );
}