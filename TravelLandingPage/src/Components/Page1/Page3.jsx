import React from "react";
import group11 from "../../assets/group11.png";
import group7 from "../../assets/group7.png";
import group12 from "../../assets/group12.png";
import Rectangle17 from "../../assets/Rectangle17.jpg";
import send from "../../assets/send.png";
import map from "../../assets/map.png";
import Leaf from "../../assets/LEAF.png";
import Group from "../../assets/Group.png";
import heart from "../../assets/heart.png";

const Page3 = () => {
  return (
    <div
      className="px-5 md:px-20 flex flex-col md:flex-row justify-between pl-20 pr-20"
      id="Booking"
    >
      {/* Left side with content */}
      <div className="w-full md:w-1/2 ">
        <div className="mt-10">
          <p className="font-semibold text-gray-500">Easy and Fast</p>
          <p className="font-bold text-3xl">
            Book your next <span className="">trip</span> <br /> in 3 easy steps
          </p>
        </div>

        <div className="flex mt-5">
          <div>
            <img src={group7} className="mt-3" />
          </div>
          <div className="ml-5">
            <p className="font-semibold text-gray-500">Choose Destination</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur
              <br /> adipiscing elit. Urna, tortor tempus.
            </p>
          </div>
        </div>

        <div className="flex mt-5">
          <div>
            <img src={group12} className="mt-3" />
          </div>
          <div className="ml-5">
            <p className="font-semibold text-gray-500">Make Payment</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur
              <br /> adipiscing elit. Urna, tortor tempus.
            </p>
          </div>
        </div>

        <div className="flex mt-5">
          <div>
            <img src={group11} className="mt-3" />
          </div>
          <div className="ml-5">
            <p className="font-semibold text-gray-500">
              Reach Airport on Selected Date
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur
              <br /> adipiscing elit. Urna, tortor tempus.
            </p>
          </div>
        </div>
      </div>

      {/* Right side with Rectangle17 image */}
      <div
        className=" bg-white shadow-xl p-5 rounded-2xl "
        style={{ marginTop: "30px" }}
      >
        <div>
          <img src={Rectangle17} />
          <p className="mt-5 font-medium">Trip To Greece</p>
        </div>
        <div>
          <p className="text-gray-500 font-medium">
            14-29 June | by Robbin joseph
          </p>
        </div>
        <div className="flex mt-5">
          <img src={send} style={{ marginRight: "1rem" }} />
          <img src={map} style={{ marginRight: "1rem" }} />
          <img src={Leaf} />
        </div>
        <div className="flex justify-between mt-5 ">
          <div className="flex">
            <img src={Group} style={{ marginRight: "1rem" }} />
            <p className="mr-5 text-gray-500 font-medium">24 people going</p>
          </div>
          <div className="flex ">
            <img
              src={heart}
              style={{ marginRight: "1rem" }}
              className="md:mr-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page3;
