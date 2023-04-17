import React from "react";

const MailList = () => {
  return (
    <div className="my-12 bg-gradient-to-r from-blue-900 to-blue-600 h-[30vh] flex flex-col items-center justify-center gap-5">
      <div className="text-center text-white">
        <p className="text-2xl mb-2 font-light">Save time, save money!</p>
        <p className="text-base font-light">
          Sign up and we'll send the best deals to you
        </p>
      </div>
      <div className=" h-9 w-[400px] flex gap-1">
        <input
          type="email"
          className="flex-1 outline-none pl-4 px-1"
          placeholder="Enter Your Mail"
        />
        <button className="px-3 text-white bg-blue-400">Submit</button>
      </div>
    </div>
  );
};

export default MailList;
