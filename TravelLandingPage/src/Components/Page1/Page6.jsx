import React from "react";

const Page6 = () => {
  return (
    <div className="px-5 md:px-20 mt-10">
      <div className="bg-blue-100 rounded-t-2xl py-10">
        <div className="text-center text-gray-500 text-2xl font-bold">
          <p>Subscribe to get information, latest news and other</p>
          <p>interesting offers about Jadoo</p>
        </div>
        <div className="flex justify-center mt-5 space-x-3">
          <input
            type="email"
            placeholder="Your email"
            className=" px-4 py-2 border border-black rounded-md bg-white "
          />
          <button className="text-white bg-orange-400 font-semibold rounded-md  px-4 py-2 ">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page6;
