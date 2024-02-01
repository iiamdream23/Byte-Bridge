import React from "react";

const Navbar = () => {
  return (
    <nav className="container fixed opacity-95 left-0 right-0 bg-slate-300 rounded-b-2xl mx-auto p-6">
      <div className="flex justify-center lg:justify-between">
        <div className="text-4xl text-blue-700 font-bold cursor-pointer">Byte🌉Bridge</div>
        <div className="space-x-6 hidden lg:block">
          <button className="py-2.5 px-6 rounded-xl font-bold text-blue-500 hover:text-slate-800 hover:bg-blue-500 border border-blue-500">
            Sign-In
          </button>
          <button className="py-3 px-6 rounded-xl font-bold text-slate-200 hover:text-slate-800  hover:bg-blue-500 bg-blue-400">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
