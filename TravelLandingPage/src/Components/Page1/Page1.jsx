import React from "react";
import group48 from "../../assets/group48.png";
import group51 from "../../assets/group51.png";
import group50 from "../../assets/group50.png";
import group49 from "../../assets/group49.png";

const Page1 = () => {
  return (
    <div className="px-4 py-8" id="Catagory">
      <div className="flex justify-center flex-col items-center">
        <h3 className="text-gray-500 font-semibold">CATEGORY</h3>
        <h2 className="text-black text-3xl font-bold mt-1">
          We Offer Best Services
        </h2>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-8 space-y-4 md:space-y-0 md:space-x-4">
        {/* Card 1 */}
        <div className="flex flex-col items-center w-full md:w-1/4 bg-white shadow-lg p-5 rounded-2xl hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out transform">
          <img
            src={group48}
            alt="Service 1"
            className="w-20 h-20 mb-4 object-contain"
          />
          <p className="text-center font-semibold text-2xl">
            Calculated Weather
          </p>
          <div className="text-center font-medium text-gray-500">
            <p>
              Built Wicket longer
              <br />
              admire do barton
              <br />
              vanity itself do in it.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center w-full sm:w-1/4 bg-white shadow-lg p-5 rounded-2xl hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out transform">
          <img
            src={group51}
            alt="Service 2"
            className="w-20 h-20 mb-4 transform -translate-x-2 object-contain"
          />
          <p className="text-center font-semibold text-2xl">Best Flights</p>
          <div className="text-center font-medium text-gray-500">
            <p>
              Engrossed listening.
              <br />
              Park gate sell they
              <br />
              west hard for the.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center w-full sm:w-1/4 bg-white shadow-lg p-5 rounded-2xl hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out transform">
          <img
            src={group50}
            alt="Service 3"
            className="w-20 h-20 mb-4 transform -translate-x-2 object-contain"
          />
          <p className="text-center font-semibold text-2xl">Local Events</p>
          <div className="text-center font-medium text-gray-500">
            <p>
              Barton vanity itself do
              <br />
              in it. Preferd to men it
              <br />
              engrossed listening.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-center w-full sm:w-1/4 bg-white shadow-lg p-5 rounded-2xl hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out transform">
          <img
            src={group49}
            alt="Service 4"
            className="w-20 h-20 mb-4 transform -translate-x-2 object-contain"
          />
          <p className="text-center font-semibold text-2xl">Customization</p>
          <div className="text-center font-medium text-gray-500">
            <p>
              We deliver outsourced
              <br />
              aviation services for
              <br />
              military customers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1;
