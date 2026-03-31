import { BrowserRouter, Route, Routes, Outlet, Navigate } from "react-router-dom";
import Dashboard from "./pages/private-pages/DashBoard";
import Projects from "./pages/private-pages/Projects";
import Clients from "./pages/private-pages/Clients";
import Team from "./pages/private-pages/Team";
import Payments from "./pages/private-pages/Payment";
import Error from "./pages/private-pages/Error";
import LoginForm from "./pages/public-pages/LoginForm";
import Sidebar from "./layout/SideBar";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute"; //  Protected Routes
import { useAuthStore } from "./stores/AuthStore.js";

// 1. Main Layout (Sidebar + Content)
const MainLayout = () => {
  return (
    <div className="flex h-screen w-full bg-[#0f1115] text-white overflow-hidden">
      <Sidebar />
      <div className="flex-1 overflow-y-auto">
        <Outlet />    {/* Dashboard + Other Pages  */}
      </div>
    </div>
  );
};

function App() {

  const user =useAuthStore((state)=> state.user)
  
  return (
    <BrowserRouter>
      <Routes>
        {/*  Public Route  */}
        <Route path="/login" element={<LoginForm />} />
              
        {/*  Error Page  */}
        <Route path="*" element={<Error />} />

        {/*  Protected Routes */}
        <Route element={<ProtectedRoute />}>
          
          {/*  Layout Wrapper  */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/team" element={<Team />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/payments" element={<Payments />} /> 
          </Route>

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;