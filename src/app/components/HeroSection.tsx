import React from "react";

const HeroSection = () => {
  return (
    <section className="container mx-auto mt-40 lg:mt-56 lg:mb-12">
      <div className="lg:grid items-center gap-6 flex flex-col-reverse lg:grid-cols-12">
      <div className="col-span-4 justify-center flex space-x-5">
          <button className="py-3 px-6 lg:py-6 lg:text-2xl lg:px-11 rounded-xl font-bold text-slate-200 hover:text-slate-800 hover:bg-blue-500 bg-blue-400">
            Get Started
          </button>
          <button className="py-2.5 lg:hidden px-6 rounded-xl font-bold text-blue-500 hover:text-slate-800 hover:bg-blue-500 border border-blue-500">
            Sign-In
          </button>
        </div>
        <div className="flex p-6 gap-5 flex-col col-span-8 items-center">
          <h1 className="text-3xl md:text-4xl lg:text-6xl text-center font-bold">
            Welcome to Your Programming Community
          </h1>
          <p className="text-center text-slate-600 md:text-lg lg:text-2xl">
            Join us to connectg with fellow developers, share knowledge, and
            collaborate on exciting projects
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
