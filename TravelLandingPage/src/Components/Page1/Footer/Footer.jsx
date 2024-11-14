import React from "react";
import social from "../../../assets/Social.png";
import social1 from "../../../assets/social1.png";
import GooglePlay from "../../../assets/GooglePlay.png";
import PlayStore from "../../../assets/PlayStore.png";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between mt-5 px-5 md:px-20 space-y-10 md:space-y-0">
        <div className="text-center md:text-left">
          <p className="font-medium text-purple-700 text-2xl">Jadoo.</p>
          <p className="mt-5">
            Book your trip in minutes, get full <br /> control for much longer.
          </p>
        </div>

        <div className="text-center md:text-left">
          <p className="font-bold text-2xl">Company</p>
          <div className="mt-5 space-y-2">
            <p>About</p>
            <p>Careers</p>
            <p>Mobile</p>
          </div>
        </div>

        <div className="text-center md:text-left">
          <p className="font-bold text-2xl">Contact</p>
          <div className="mt-5 space-y-2">
            <p>Help/FAQ</p>
            <p>Press</p>
            <p>Affiliates</p>
          </div>
        </div>

        <div className="text-center md:text-left">
          <p className="font-bold text-2xl">More</p>
          <div className="mt-5 space-y-2">
            <p>Airline fees</p>
            <p>Airline</p>
            <p>Low fare tips</p>
          </div>
        </div>

        <div className="text-center md:text-left">
          <div className="flex justify-center md:justify-start space-x-4 mb-4">
            <img
              src={social}
              className="w-10 h-10 md:w-20 md:h-20"
              alt="Social Icon"
            />
            <img
              src={social1}
              className="w-10 h-10 md:w-20 md:h-20"
              alt="Social Icon"
            />
          </div>
          <p className="text-center md:text-left">Discover our app</p>
          <div className="flex justify-center md:justify-start mt-4 space-x-3">
            <img
              src={GooglePlay}
              className="w-24 md:w-auto"
              alt="Google Play"
            />
            <img src={PlayStore} className="w-24 md:w-auto" alt="Play Store" />
          </div>
        </div>
      </div>
      <p className="text-center mt-10">All rights reserved@jadoo.co</p>
    </div>
  );
};

export default Footer;
