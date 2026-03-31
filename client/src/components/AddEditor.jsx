import { useForm } from "react-hook-form";

export function AddEditor({ onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data, // name, email, password, skill
          role: "Editor", // default role
        }),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Add Editor Successfully 😍❤️");
        onClose();
      } else {
        alert(result.message || "Something went wrong! ❌");
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <div className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300">
      <div className="bg-[#111217] border border-gray-800 rounded-[2.5rem] w-full max-w-lg p-8 relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 bg-gray-900 rounded-full text-gray-400 hover:text-white flex items-center justify-center transition-all"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-white mb-2">Add New Editor</h2>
        <p className="text-sm text-gray-500 mb-8">
          Create a new account for your team member.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="text-xs text-gray-500 uppercase font-bold ml-1">
              Editor Name
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Enter Full Name"
              className="w-full mt-1 bg-gray-900 border border-gray-800 rounded-2xl px-5 py-3 outline-none focus:border-cyan-500/50 text-white transition-all"
            />
            {errors.name && (
              <span className="text-red-500 text-xs font-bold ml-2 mt-1 block">
                Name is required
              </span>
            )}
          </div>

          <div>
            <label className="text-xs text-gray-500 uppercase font-bold ml-1">
              Skill
            </label>
            <select
              {...register("skill")}
              className="w-full mt-1 bg-gray-900 border border-gray-800 rounded-2xl px-5 py-3 outline-none focus:border-cyan-500/50 text-white transition-all"
            >
              <option value="After Effects">After Effects</option>
              <option value="Sfx Editor">Sfx Editor</option>
              <option value="Motion Graphic">Motion Graphic</option>
            </select>
          </div>
          <div>
            <label className="text-xs text-gray-500 uppercase font-bold ml-1">
              Email Address
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="editor@studiosync.com"
              className="w-full mt-1 bg-gray-900 border border-gray-800 rounded-2xl px-5 py-3 outline-none focus:border-cyan-500/50 text-white transition-all"
            />
            {errors.email && (
              <span className="text-red-500 text-xs font-bold ml-2 mt-1 block">
                Email is required
              </span>
            )}
          </div>
          <div>
            <label className="text-xs text-gray-500 uppercase font-bold ml-1">
              Password
            </label>
            <input
              {...register("password", { required: true, minLength: 6 })}
              type="password"
              placeholder="••••••••"
              className="w-full mt-1 bg-gray-900 border border-gray-800 rounded-2xl px-5 py-3 outline-none focus:border-cyan-500/50 text-white transition-all"
            />
            {errors.password && (
              <span className="text-red-500 text-xs font-bold ml-2 mt-1 block">
                Must be 6 Letters
              </span>
            )}
          </div>
          <button
            type="submit"
            className="w-full mt-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-4 rounded-2xl transition-all shadow-lg shadow-cyan-500/20 active:scale-[0.98]"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}
