import MsgLayout from '../../layout/MsgLayout';
import { AssignWork } from '../../components/AssignWork';
import { AddEditor } from '../../components/AddEditor';
import { useState } from 'react';
import { useAuthStore } from '../../stores/AuthStore';

const teamMembers = [
  { id: 1, name: "Palani", role: "Senior Editor", projects: 5, status: "Active", email: "palani@studio.com", avatar: "S" },
  { id: 2, name: "Sridhar", role: "Colorist", projects: 3, status: "On Leave", email: "sridhar@studio.com", avatar: "A" },
  { id: 3, name: "Aegon", role: "VFX Artist", projects: 8, status: "Busy", email: "aegon@studio.com", avatar: "V" },
  { id: 4, name: "Swency", role: "Motion Designer", projects: 2, status: "Active", email: "swency@studio.com", avatar: "R" },
];

// 🎯 Active Or Busy Color Desgin 
const statusTheme = {
  "Active": "bg-green-500/10 text-green-500",
  "On Leave": "bg-red-500/10 text-red-500",
  "Busy": "bg-yellow-500/10 text-yellow-500"
};

export default function Team() {
  const [isAssignWork, setIsAssignWork] = useState(false);
  const [isAddEditor, setIsAddEditor] = useState(false);
  
 const user = useAuthStore((state)=> state.user)
  return (
    // Mobil & PC SuitAble Coding 
    <div className="flex-1 h-screen overflow-y-auto bg-[#0a0a0a] p-4 sm:p-6 lg:p-10 text-white">
      <MsgLayout/>
      
      {/* HEADER & BUTTONS */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 my-6 sm:mb-10">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight self-center ml-10 ">Team Management</h1>
          <p className="text-gray-500 text-xs sm:text-sm text-center mt-1">Manage editors and assign tasks</p>
        </div>
        
        {/* Mobile - full width, Pc  auto-width */}
          { user?.role === "Admin" && 
  <>        <div className="flex flex-row w-full md:w-auto gap-3">
          <button onClick={() => setIsAssignWork(true)} className="flex-1 md:flex-none bg-white/5 hover:bg-white/10 border border-white/10 font-bold py-2.5 px-4 rounded-xl transition-all flex items-center justify-center gap-2 text-sm sm:text-base">
            📝 Assign Work
          </button>
          <button onClick={() => setIsAddEditor(true)} className="flex-1 md:flex-none bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-2.5 px-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(34,211,238,0.3)] text-sm sm:text-base">
            + Add Editor
          </button>
        </div> </> }
      </div> 
 

      {/* STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-[#111217] border border-gray-800 p-4 rounded-xl">
          <p className="text-gray-500 text-[10px] uppercase font-bold">Total Staff</p>
          <p className="text-xl font-bold">4</p>
        </div>
        <div className="bg-[#111217] border border-gray-800 p-4 rounded-xl">
          <p className="text-gray-500 text-[10px] uppercase font-bold">Active Now</p>
          <p className="text-xl font-bold text-green-500">3</p>
        </div>
      </div>

      {/* TABLE WRAPPER */}
      <div className="bg-[#111217] border border-gray-800 rounded-2xl p-4 sm:p-6 overflow-x-auto shadow-xl">
        <table className="w-full text-left min-w-[700px]">
          <thead>
            <tr className="text-gray-500 text-xs uppercase border-b border-gray-800">
              <th className="pb-3 pr-4">Member</th>
              <th className="pb-3 pr-4">Role</th>
              <th className="pb-3 pr-4">Projects</th>
              <th className="pb-3 pr-4">Status</th>
              <th className="pb-3 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-300">
            {teamMembers.map((m) => (
              <tr key={m.id} className="border-b border-gray-800/50 hover:bg-white/5 transition-all">
                <td className="py-4 pr-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-tr from-gray-700 to-gray-800 rounded-full flex items-center justify-center font-bold border border-white/10">
                      {m.avatar}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">{m.name}</div>
                      <div className="text-[10px] text-gray-500">{m.email}</div>
                    </div>
                  </div>
                </td>
                <td className="py-4 pr-4 text-sm">{m.role}</td>
                <td className="py-4 pr-4 text-sm font-mono text-cyan-400">{m.projects}</td>
                <td className="py-4 pr-4">
                  {/* 🎯 statusTheme- */}
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${statusTheme[m.status] || "bg-gray-500/10 text-gray-400"}`}>
                    {m.status}
                  </span>
                </td>
                <td className="py-4 text-right">
                  <button className="text-gray-500 hover:text-cyan-400 transition-colors text-sm font-bold">Manage</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODALS */} 
      {isAssignWork && <AssignWork onClose={() => setIsAssignWork(false)} />}
      {isAddEditor && <AddEditor onClose={() => setIsAddEditor(false)} />}  
    </div>
  );
}