import { useState } from "react";
import Button from "./Button";

const Header = () => {
  const [isToggle, setIsToggle] = useState(false);
  return (
    <>
      <nav className="hidden lg:max-w-7xl lg:h-[70px] lg:flex lg:justify-between lg:items-center lg:mx-auto">
        <a href="#" className="text-[#209677] text-2xl font-semibold">
          MEDIBuddy
        </a>
        <ul className="flex items-center gap-8">
          <li className="hover:text-[#209677] duration-150 cursor-pointer">
            Home
          </li>
          <li className="hover:text-[#209677] duration-150 cursor-pointer">
            About Us
          </li>
          <li className="hover:text-[#209677] duration-150 cursor-pointer">
            Courses
          </li>
          <li className="hover:text-[#209677] duration-150 cursor-pointer">
            Pages
          </li>
          <li className="hover:text-[#209677] duration-150 cursor-pointer">
            Blog
          </li>
          <li className="hover:text-[#209677] duration-150 cursor-pointer">
            Contact
          </li>
        </ul>
        <div>
          <Button text="Register Now" px="px-4" py="py-2" />
        </div>
      </nav>

      {/* Sidebar */}
      <div className="lg:hidden">
        {/* Toggle Button */}
        <div className="flex items-center justify-left gap-5">
          <button
            onClick={() => setIsToggle(!isToggle)}
            className="text-[#209677] mt-2 z-10 hover:text-[#209677] ml-2 focus:outline-none
           focus:text-[#209677] transition duration-150 bg-slate-300 flex items-center justify-center 
           shadow-slate-600 w-10 h-10 rounded-[50%] ease-in-out"
            aria-label="Toggle navigation"
          >
            <svg
              className="h-8 w-8 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="hidden"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16V4H4v2zm0 5h16v-2H4v2zm0 5h16v-2H4v2z"
              />
              <path
                className="block"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 5h12v2H6V5zm0 5h12v2H6V10zm0 5h12v2H6v-2z"
              />
            </svg>
          </button>
          <a href="#" className="text-[#209677] text-2xl font-semibold">
            MEDIBuddy
          </a>
        </div>
        {/* Sidebar Content */}
        <div
          className={`${
            isToggle ? "translate-x-0" : "-translate-x-full"
          } fixed top-12 bottom-0 
          left-0 w-72 flex-col bg-gray-100 lg:bg-transparent flex items-start justify-start
          space-x-8 transition-transform z-10 duration-300 ease-in-out
          `}
        >
          <ul className="pl-3 flex flex-col space-y-4 pt-4">
            <li className="hover:text-[#209677] duration-150 cursor-pointer">
              <a href="#">Home</a>
            </li>
            <li className="hover:text-[#209677] duration-150 cursor-pointer">
              <a href="#">About Us</a>
            </li>
            <li className="hover:text-[#209677] duration-150 cursor-pointer">
              <a href="#">Courses</a>
            </li>
            <li className="hover:text-[#209677] duration-150 cursor-pointer">
              <a href="#">Pages</a>
            </li>
            <li className="hover:text-[#209677] duration-150 cursor-pointer">
              <a href="#">Blog</a>
            </li>
            <li className="hover:text-[#209677] duration-150 cursor-pointer">
              <a href="#">Contact</a>
            </li>
            <div>
              <Button text="Register Now" px="px-4" py="py-2" />
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
