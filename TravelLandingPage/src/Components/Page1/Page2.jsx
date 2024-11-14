import React from "react";
import Rectangle14 from "../../assets/28.png";
import Rectangle15 from "../../assets/27.png";
import Rectangle16 from "../../assets/29.png";
import navigation1 from "../../assets/navigation1.png";

const Page2 = () => {
  return (
    <div className="space-y-8" id="destination">
      <div className="flex flex-col justify-center text-center mt-4">
        <p className="font-semibold text-gray-500">Top Selling</p>
        <h2 className="font-bold text-3xl">Top Destinations</h2>
      </div>

      {/* Cards Container with Padding and Centering */}
      <div className="flex flex-wrap justify-center gap-8 lg:flex-nowrap px-4 lg:px-16">
        {/* Card 1 */}
        <div className="flex flex-col items-center bg-white shadow-md rounded-2xl w-full sm:w-80 lg:w-80">
          <img
            src={Rectangle14}
            alt="Rome, Italy"
            className="w-full h-96 object-cover rounded-xl border-r-2"
          />
          <div className="flex justify-between items-center w-full px-4 mt-4">
            <p>Rome, Italy</p>
            <p>$5,42k</p>
          </div>
          <div className="flex items-center mt-10 px-4 w-full">
            <img
              src={navigation1}
              alt="Navigation"
              className="w-8 h-8 object-contain"
            />
            <p className="ml-2">10 Days Trip</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center bg-white shadow-md rounded-2xl w-full sm:w-80 lg:w-80">
          <img
            src={Rectangle15}
            alt="Rome, Italy"
            className="w-full h-96 object-cover rounded-xl border-r-2"
          />
          <div className="flex justify-between items-center w-full px-4 mt-4">
            <p>Rome, Italy</p>
            <p>$5,42k</p>
          </div>
          <div className="flex items-center mt-10 px-4 w-full">
            <img
              src={navigation1}
              alt="Navigation"
              className="w-8 h-8 object-contain"
            />
            <p className="ml-2">10 Days Trip</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center bg-white shadow-md rounded-2xl w-full sm:w-80 lg:w-80">
          <img
            src={Rectangle16}
            alt="Rome, Italy"
            className="w-full h-96 object-cover rounded-xl border-r-2"
          />
          <div className="flex justify-between items-center w-full px-4 mt-4">
            <p>Rome, Italy</p>
            <p>$5,42k</p>
          </div>
          <div className="flex items-center mt-10 px-4 w-full">
            <img
              src={navigation1}
              alt="Navigation"
              className="w-8 h-8 object-contain"
            />
            <p className="ml-2">10 Days Trip</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
