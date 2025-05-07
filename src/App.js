import React from "react";

const App = () => {
  return (
    <div className="relative flex flex-col items-center">
      <div className="w-[512px] h-[512px] flex flex-col items-center lg:absolute top-[131px] right-25 z-1">
        <img src="/hamburger.png" alt="hamburger" className="" />
      </div>
      <div className="  flex  lg:flex-col p-5 lg:absolute left-0 top-[248px]">
        <form className="flex flex-col space-y-4 items-center lg:items-start">
          <h1 className="font-bold text-[80px] color-[#DA211C]  ">LOGIN</h1>
          <input className="border-1 px-1 py-2" placeholder="Username" />
          <input className="border-1 px-1 py-2" placeholder="Password" />
          <button className="border-1 w-1/2 my-2 px-1 py-2 bg-[#DA211C] text-white">
            LOGIN
          </button>
          <div className="flex justify-between space-x-4">
            <a href="">Forgot Password</a>
            <a href="">Register</a>
          </div>
        </form>
      </div>

      <div className=" absolute w-[650px] h-[1143px] top-[-115px] left-[999px] bg-[#DA211C] transform  z-0 rotate-29"></div>
    </div>
  );
};

export default App;
