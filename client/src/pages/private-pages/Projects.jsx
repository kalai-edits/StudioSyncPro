  import React, { useState } from 'react';
  import MsgLayout from '../../layout/MsgLayout';

  const projects = [
    { id: 1, title: "Wedding Teaser - Rahul", client: "Rahul & Priya", status: "Editing", progress: 65, thumb: "🎥" },
    { id: 2, title: "Corporate Promo", client: "Zoho", status: "Editing", progress: 90, thumb: "🏢" },
    { id: 3, title: "Music Video - Indie", client: "Arjun", status: "Completed", progress: 100, thumb: "🎸" },
    { id: 4, title: "Real Estate Tour", client: "Luxury Homes", status: "Review", progress: 20, thumb: "🏠" },
  ];

  export default function Projects() {

    const [ statusFilter , setStatusFilter ] = useState("All Status")

    const filterProject= projects.filter((p)=>{
      if (statusFilter === "All Status") return true ;   // Show the All Project
      return p.status === statusFilter ;  // Filter Projected Only  

    })

    return (
    
      <div className="flex-1 h-screen overflow-y-auto bg-[#0a0a0a] p-4 sm:p-6 lg:p-10 text-white">
        <MsgLayout/>
        
      
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center my-6 sm:my-10 gap-4">
          <h1 className="text-2xl sm:text-3xl font-bold">All Projects</h1>      
          <h1 className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-2.5 px-6 rounded-xl transition-all w-full sm:w-auto shadow-[0_0_10px_rgba(6,182,212,0.3)] hover:shadow-[0_0_20px_rgba(6,182,212,0.6)]">
          📂 All Project
          </h1>
        </div>

      
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <input 
            type="text" 
            placeholder="Search projects..." 
            className="flex-1 bg-[#111217] border border-gray-800  w-70 self-center rounded-xl px-4 py-3 outline-none focus:border-cyan-500/50 transition-colors" 
          />
          <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="bg-[#111217] border w-70 self-center border-gray-800 rounded-xl px-4 py-3 outline-none  sm:w-auto cursor-pointer focus:border-cyan-500/50 transition-colors">
            <option>All Status</option>
            <option>Editing</option>
            <option>Completed</option>
            <option>Review</option>
          </select>
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filterProject.length > 0 ? (
            filterProject.map((p) => (
              <div key={p.id} className="bg-[#111217] border border-gray-800 p-6 rounded-2xl hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all duration-300 group cursor-pointer">
              
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 w-fit">{p.thumb}</div>
                <h3 className="text-lg font-bold mb-1 group-hover:text-cyan-400 transition-colors duration-300">{p.title}</h3>
                <p className="text-sm text-gray-500 mb-6">{p.client}</p>
                
                <div className="flex justify-between text-xs mb-2">
                  <span className="text-gray-400 font-medium">{p.status}</span>
                  <span className="text-cyan-400 font-bold">{p.progress}%</span>
                </div>
                
                <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-cyan-500 rounded-full transition-all duration-1000 ease-out" style={{ width: `${p.progress}%` }}></div>
                </div>
              </div>
            ))
          ) : (

            <div className="col-span-full text-center text-gray-500 py-10">
              No projects found for this status.
            </div>
          )}
        </div>

      </div>
    );
  }