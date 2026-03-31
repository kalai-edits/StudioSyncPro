import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../stores/AuthStore.js";
import axios from "axios";
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

const schema = z.object({
  email: z.string().email("Invalid Email address"),       // zod vaildation 
  password: z.string().min(7, "Min 7 characters required")
});

export default function LoginForm() {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const { register, handleSubmit, formState: { errors } } = useForm({        // hook form 
    resolver: zodResolver(schema)
  });

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", data);
      
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      if (login) login(res.data.user);

      alert("Welcome to Studio Sync Pro! 🚀");
      navigate("/");
    } catch (error) {
      alert(error.response?.data?.message || "Wrong Email or Password ❌");
    }
  };

  const handleGoogleSuccess = async (res) => {
    try {
      const { name, email, sub: googleId } = jwtDecode(res.credential);
      const response = await axios.post("http://localhost:5000/api/auth/googleLogin", { name, email, googleId });

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      if (login) login(response.data.user);

      alert("Client Login Successful! 🚀");
      navigate("/clients"); 
    } catch (error) {
      alert("Google Login failed! Please try again." , error);
    }
  };

 
  const inputClass = "w-full bg-[#1A1C23] border border-gray-700 p-3 rounded-lg focus:outline-none focus:border-[#1CFFE0] transition-colors text-sm sm:text-base";

  return (
 
    <div className="min-h-screen w-full bg-[#111317] text-white flex justify-center items-center p-4">
      
      <div className="w-full max-w-md bg-[#16181E] p-6 sm:p-8 rounded-2xl border border-gray-800 shadow-2xl space-y-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-[#1CFFE0] tracking-wide">LOGIN</h1>

        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
          
          <div>
            <label className="text-sm font-medium text-gray-400 block mb-1.5">Email Address</label>
            <input type="email" {...register("email")} placeholder="name@company.com" className={inputClass} />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-sm font-medium text-gray-400">Password</label>
              <a href="#" className="text-xs text-[#1CFFE0] hover:underline">Forgot password?</a>
            </div>
            <input type="password" {...register("password")} placeholder="••••••••" className={inputClass} />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
          </div>

          <button type="submit" className="w-full bg-[#1CFFE0] text-black font-bold p-3 rounded-xl hover:bg-[#18e8cc] hover:shadow-[0_0_15px_rgba(28,255,224,0.3)] transition-all mt-2">
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-4">
          <div className="h-px w-full bg-gray-800"></div>
          <span className="text-gray-500 text-xs font-bold uppercase">Or</span>
          <div className="h-px w-full bg-gray-800"></div>
        </div>

        {/* Google Login */}
        <div className="flex justify-center w-full">
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={() => console.error('❌ Google Login Failed')}
            theme="filled_black" 
            shape="pill"
            size="large"
          />
        </div>

      </div>
    </div>
  );
}