import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import MsgLayout from '../../layout/MsgLayout';
import { FaRegCopyright } from "react-icons/fa";

// --- All  DATA ---
const allStats = [
  { title: "Total Projects", value: "300", label1: "Finished", val1: "250", label2: "Pending", val2: "50", progress: 81, color: "bg-cyan-500", text: "text-cyan-400" },
  { title: "Total Amount", value: "$900.1K", label1: "Received", val1: "$750.K", label2: "Pending", val2: "$100.1K", progress: 75, color: "bg-green-500", text: "text-green-400" },
  { title: "Total Clients", value: "200", label1: "Active", val1: "120", label2: "Past", val2: "80", progress: 60, color: "bg-purple-500", text: "text-purple-400" },
];

const chartData = [
  { name: 'Nov', revenue: 24000 }, { name: 'Dec', revenue: 139000 }, { name: 'Jan', revenue: 98000 },
  { name: 'Feb', revenue: 190000 }, { name: 'Mar', revenue: 380000 }, { name: 'Apr', revenue: 270000 },
];

const recentProjects = [
  { id: 1, name: "Wedding Shoot", client: "Rahul & Priya", status: "In Progress", budget: "$3000" },
  { id: 2, name: "Corporate Event", client: "Zoho Corp", status: "Finished", budget: "$5500" },
  { id: 3, name: "Music Video", client: "Arjun Music", status: "Pending", budget: "$2000" },
];

const teamData = [
  { name: "Palani", task: "Wedding Teaser", status: "online", time: "Active Now" },
  { name: "Sridhar", task: "Corporate Video", status: "busy", time: "Busy" },
  { name: "Aegon", task: "Intro Logo", status: "online", time: "Active Now" },
  { name: "Swency", task: "Indie Album", status: "offline", time: "2h ago" },
];

const deadlines = [
  { title: "Indie Music Video", date: "Today, 6 PM", urgent: true },
  { title: "Zoho Promo Cut", date: "Tomorrow", urgent: false },
  { title: "Youtube Vlog #12", date: "22 March", urgent: false },
];

export default function Dashboard() {
  return (
    <div className="flex-1 h-screen overflow-y-auto bg-[#0a0a0a] p-6 lg:p-10 text-white">
      <MsgLayout />
      
      {/*  HEADER SECTION */}
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard Overview</h1>
        <div className="bg-gray-900 border border-gray-800 px-4 py-2 rounded-xl text-sm text-gray-400 flex items-center shadow-lg">
          <FaRegCopyright className="mr-2 text-white" /> Studio SyncPro
        </div>
      </header>

      {/*  TOP STATS CARDS */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {allStats.map((item, i) => (
          <div key={i} className="bg-[#111217] border border-gray-800 p-6 rounded-2xl shadow-xl hover:border-gray-700 transition-all">
            <h2 className="text-gray-500 text-sm font-medium mb-1">{item.title}</h2>
            <p className={`text-4xl font-bold mb-6 ${item.text}`}>{item.value}</p>
            
            <div className="flex justify-between text-xs text-gray-400 mb-4 border-t border-gray-800 pt-4">
              <span>{item.label1}: <span className="text-white font-bold">{item.val1}</span></span>
              <span>{item.label2}: <span className="text-white font-bold">{item.val2}</span></span>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
              <div className={`h-full ${item.color} transition-all duration-1000`} style={{ width: `${item.progress}%` }} />
            </div>
          </div>
        ))}
      </section>

      {/*  MIDDLE SECTION: CHART & TABLE */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        
        {/* Chart Component */}
        <div className="bg-[#111217] border border-gray-800 p-6 rounded-2xl shadow-xl">
          <h2 className="text-lg font-bold mb-6">Revenue Analytics</h2>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#22d3ee" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Tooltip contentStyle={{ backgroundColor: '#111217', borderColor: '#374151', borderRadius: '12px' }} />
                <Area type="monotone" dataKey="revenue" stroke="#22d3ee" strokeWidth={3} fill="url(#colorRev)" />
                <XAxis dataKey="name" hide />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Projects Table */}
        <div className="bg-[#111217] border border-gray-800 p-6 rounded-2xl shadow-xl overflow-x-auto">
          <h2 className="text-lg font-bold mb-6">Recent Projects</h2>
          <table className="w-full text-left min-w-[400px]">
            <thead>
              <tr className="text-gray-500 text-xs uppercase border-b border-gray-800">
                <th className="pb-4 font-semibold">Project</th>
                <th className="pb-4 font-semibold">Status</th>
                <th className="pb-4 font-semibold text-right">Budget</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              {recentProjects.map((project) => (
                <tr key={project.id} className="border-b border-gray-800/50 hover:bg-white/5 transition-all">
                  <td className="py-4 text-sm font-medium">{project.name}</td>
                  <td className="py-4">
                    <span className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-2 py-1 rounded text-[10px] font-bold">
                      {project.status} 
                    </span>
                  </td>
                  <td className="py-4 text-sm font-bold text-right text-white">{project.budget}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. BOTTOM SECTION: TEAM & DEADLINES */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-10">
        
        {/* Team List */}
        <div className="lg:col-span-2 bg-[#111217] border border-gray-800 p-6 rounded-2xl shadow-xl">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold">Team Activity</h2>
            <button className="text-cyan-400 text-xs font-medium hover:underline">View All</button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {teamData.map((member, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-gray-900/50 border border-gray-800 rounded-xl hover:bg-gray-800 transition-all cursor-pointer">
                
                <div className="relative">
                  <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center font-bold text-gray-400 border border-gray-700">
                    {member.name.charAt(0)}
                  </div>
                  <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-[#111217] 
                    ${member.status === 'online' ? 'bg-green-500' : member.status === 'busy' ? 'bg-red-500' : 'bg-gray-500'}`} 
                  />
                </div>
                
                <div className="flex-1">
                  <h4 className="text-sm font-bold">{member.name}</h4>
                  <p className="text-[11px] text-gray-500">{member.task}</p>
                </div>
                <span className="text-[10px] text-gray-400">{member.time}</span>
                
              </div>
            ))}
          </div>
        </div>

        {/* Deadlines Sidebar */}
        <div className="bg-[#111217] border border-gray-800 p-6 rounded-2xl shadow-xl">
          <h2 className="text-lg font-bold mb-6">Upcoming ⏰</h2>
          
          <div className="space-y-3">
            {deadlines.map((task, i) => (
              <div key={i} className={`p-4 rounded-xl border ${task.urgent ? 'border-red-500/30 bg-red-500/10' : 'border-gray-800 bg-gray-900/50'}`}>
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-sm font-bold">{task.title}</h4>
                  {task.urgent && <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse mt-1" />}
                </div>
                <p className="text-[11px] text-gray-500">{task.date}</p>
              </div>
            ))}
          </div>
          
    
        </div>

      </section>
    </div>
  );
}