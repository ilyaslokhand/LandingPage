import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import CloseIcon from "../../assets/circle.png";
import HamburgerIcon from "../../assets/square.png";
import playicon from "../../assets/PlayButton.png";
import Traveller1 from "../../assets/Traveller1.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="p-4 relative">
      {/* Main Header Section */}
      <div className="flex justify-between items-center w-full">
        {/* Logo */}
        <div className="pl-2">
          <img src={Logo} alt="Logo" className="h-8 w-auto" />
        </div>

        {/* Hamburger / Close icon for mobile */}
        <div className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <img
            src={menuOpen ? CloseIcon : HamburgerIcon}
            alt="Menu"
            className="h-8 w-8 cursor-pointer"
          />
        </div>

        {/* Navigation Section */}
        <nav
          className={`${
            menuOpen
              ? "absolute top-16 right-4 bg-white shadow-lg rounded-lg p-4 space-y-4"
              : "hidden"
          } md:flex md:relative md:top-0 md:left-0 md:flex-row md:space-x-8 md:p-0 items-center text-black list-none cursor-pointer`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8">
            <li className="mb-2 md:mb-0">
              <a href="#destination">Destination</a>
            </li>
            <li className="mb-2 md:mb-0">
              <a href="#Catagory">Catagory</a>
            </li>
            <li className="mb-2 md:mb-0">
              <a href="#Testimonials">Testimonials</a>
            </li>
            <li className="mb-2 md:mb-0">
              <a href="#Booking">Booking</a>
            </li>
            <li className="mb-2 md:mb-0">Login</li>
            <li className="mb-2 md:mb-0">
              <button className="border-2 border-black px-4 py-1 rounded-full">
                Signup
              </button>
            </li>
            <li className="mb-2 md:mb-0">EN</li>
          </ul>
        </nav>
      </div>

      {/* Additional Header Content (Heading and Title) */}
      <div className="flex flex-col md:flex-row mt-20 pl-20 pr-20 relative z-10">
        {/* Left Section - Text */}
        <div className="w-full md:w-1/2">
          <p className="text-orange-600 font-bold uppercase ">
            Best Destinations around the world
          </p>
          <h1 className="text-black mt-5 text-6xl capitalize">
            Travel,{" "}
            <span className="underline decoration-orange-500">enjoy</span>
            <br />
            and live a new
            <br />
            and full life
          </h1>
          <p className="capitalize text-black mt-5 text-sm font-normal">
            Built Wicket longer admire do barton vanity itself do in it.
            <br />
            Preferred to sportsmen it engrossed listening. Park gate
            <br />
            sell they west hard for the.
          </p>

          <div className="flex   mt-8">
            <div className="sm:-ml-2 md:ml-0">
              {" "}
              {/* Apply left margin shift only for small screens */}
              <button className="bg-orange-400 text-white px-4 py-2 rounded-md font-semibold border border-r-0 whitespace-nowrap max-w-xs">
                Find Out More
              </button>
            </div>

            <div className="flex items-center ml-4">
              <img src={playicon} alt="Play Icon" className="h-14 w-14" />
              <button className="text-black font-medium mb-4 ml-2 flex items-center whitespace-nowrap">
                <span className="mr-2">Play Demo</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Section - Images */}
        {/* Right Section - Images */}
        {/* Right Section - Images */}
        <div className="w-full md:w-1/2 relative flex justify-center items-center mt-10 md:mt-[-50px]">
          <img
            src={Traveller1}
            alt="Traveller"
            className="z-10 w-5/6 h-auto md:w-90 object-contain mt-6 md:mt-0 mx-auto"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
