import React, { useState } from "react";
import Carousel from "../swiper/ImageSlider";
import { CoursesList } from "./CoursesList";
import { Disclosure } from "@headlessui/react";
import { Link } from "react-router-dom";

export default function Home() {
  const [selectedItem, setSelectedItem] = useState(null);
  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  let slides = [
    "./teacher.jpg",
    "./girl-smile.jpg",
    "https://wallpaperaccess.com/full/809523.jpg",
    "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
  ];
  return (
    <div className="w-full pt-0">
      <div>
        <Carousel slides={slides} />
      </div>

      {/* <div className=' flex justify-center items-center'>
   <p className=' items-center text-white py-4 px-20 font-semibold my-3 rounded-xl text-xl bg-gray-950'>Our courses</p>
   </div> */}

      <Disclosure>
        <div className="flex flex-col px-2 mt-2 md:justify-between md:flex-row md:mx-10 md:py-0">
          <ul className=" flex flex-row space-x-5 my-2 md:my-0">
            <li>
              <Link to="">
                <Disclosure.Button
                  className={`cursor-pointer block w-20 rounded-md px-3 py-2 text-sm text-center font-medium border border-indigo-600 ${
                    selectedItem === 0
                      ? "bg-gray-950 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                  onClick={() => handleItemClick(0)}
                >
                  X
                </Disclosure.Button>
              </Link>
            </li>
            <Link to="">
              <Disclosure.Button
                className={`cursor-pointer block w-20 rounded-md px-3 py-2 text-sm font-medium border border-indigo-600 ${
                  selectedItem === 1
                    ? "bg-gray-950 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
                onClick={() => handleItemClick(1)}
              >
                XI
              </Disclosure.Button>
            </Link>

            <li>
              <Link to="">
                <Disclosure.Button
                  className={`cursor-pointer block w-20 rounded-md px-3 py-2 text-sm font-medium border border-indigo-600 ${
                    selectedItem === 2
                      ? "bg-gray-950 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                  onClick={() => handleItemClick(2)}
                >
                  XII
                </Disclosure.Button>
              </Link>
            </li>
          </ul>

          {/* <div className=" w-full md:w-1/4">
            <form>
              <label
                for="default-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
              >
                Search
              </label>
              <div class="relative">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    class="w-5 h-5 text-white dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  class="block p-2 text-white bg-gray-800 pl-10 w-full text-sm rounded-lg border border-indigo-600 focus:ring-gray-500 focus:border-blue-500 placeholder:text-white"
                  placeholder="Search Mockups, Logos..."
                  required
                />
                <button
                  type="submit"
                  class="text-white absolute right-0 bottom-0 bg-indigo-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </button>
              </div>
            </form>
          </div> */}
        </div>
      </Disclosure>

      <div>
        <CoursesList />
      </div>
    </div>
  );
}
