import React, { useState } from 'react';
import MsgLayout from '../../layout/MsgLayout';
import AddClient from '../../components/AddClient';

const clientsList = [
  { id: 1, name: "Zoho Corp", category: "Corporate", projects: 12, totalSpent: "$25,400", lastActive: "2 days ago", logo: "🏢" },
  { id: 2, name: "Village Cooking", category: "YouTube", projects: 45, totalSpent: "$18,200", lastActive: "Today", logo: "🥘" },
  { id: 3, name: "Rahul & Priya", category: "Wedding", projects: 2, totalSpent: "$2,500", lastActive: "1 month ago", logo: "💍" },
  { id: 4, name: "Indie Music India", category: "Music Video", projects: 8, totalSpent: "$9,800", lastActive: "5 days ago", logo: "🎸" },
];

export default function Clients() {
   const [ addClient , setAddClient] =useState(false)
  return (
    <div className="flex-1 h-screen overflow-y-auto bg-[#0a0a0a] p-10 text-white">
      
      {/* HEADER */}
      <div className="flex justify-between items-center mb-10">
        <div >
          <h1 className="text-2xl md:text-3xl   mt-10 font-bold">Client Directory</h1>
          <p className="text-gray-500 text-sm mt-1">Manage your business partners and accounts</p>
        </div>
        <button  onClick={()=>{
          setAddClient(true)
        }} className="bg-cyan-500 mt-10  hover:bg-cyan-400 text-black font-bold py-2 px-5 rounded-2xl transition-all">
          + Add New Client
        </button>
      </div>

      {/* CLIENT CARDS GRID */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {clientsList.map((client) => (
          <div key={client.id} className="bg-[#111217] border border-gray-800 p-8 rounded-[2.5rem] hover:border-cyan-500/30 transition-all group relative overflow-hidden">
            
        
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-[50px] group-hover:bg-cyan-500/10 transition-all"></div>

            <div className="flex items-start justify-between relative z-10">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 bg-gray-800 rounded-3xl flex items-center justify-center text-3xl border border-gray-700 shadow-inner">
                  {client.logo}
                </div>
    

                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-all">{client.name}</h3>
                  <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">{client.category}</span>
                </div>
              </div>
              <button className="text-gray-500 hover:text-white text-xl">•••</button>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-gray-800/50">
              <div>
                <p className="text-[10px] text-gray-500 mb-1 uppercase">Projects</p>
                <p className="font-bold text-lg">{client.projects}</p>
              </div>
              <div>
                <p className="text-[10px] text-gray-500 mb-1 uppercase">Revenue</p>
                <p className="font-bold text-lg text-green-400">{client.totalSpent}</p>
              </div>
              <div>
                <p className="text-[10px] text-gray-500 mb-1 uppercase">Active</p>
                <p className="font-bold text-sm text-gray-300 mt-1">{client.lastActive}</p>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <button className="flex-1 py-3 bg-gray-800 hover:bg-gray-700 rounded-xl text-xs font-bold transition-all">View History</button>
              <button className="flex-1 py-3 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 rounded-xl text-xs font-bold transition-all border border-cyan-500/10">Contact</button>
            </div>
          </div>
          
        ))}
           <MsgLayout/>
      </div>
      { addClient && (
        <AddClient onClose={()=> { setAddClient(false)}}/>

      )}
    </div>
  );
}