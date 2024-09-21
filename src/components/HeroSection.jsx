import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import Lottie from "lottie-react";
import panimation from "../panimation.json";

const HeroSection = () => {
  return (
    <div
      name="home"
      className="h-screen w-full pt-20 md:pt-0"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row md:gap-10">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-2.5xl sm:text-5xl font-bold text-black">
            Create and Sell Custom Products
          </h2>
          <p className="text-gray-500 py-4 max-w-md font-semibold">
            <ul>
              <li className="relative pl-6 before:content-['✔'] before:text-green-500 before:absolute before:left-0">
                100% Free to use
              </li>
              <li className="relative pl-6 before:content-['✔'] before:text-green-500 before:absolute before:left-0">
                900+ high quality products
              </li>
              <li className="relative pl-6 before:content-['✔'] before:text-green-500 before:absolute before:left-0">
                Largest global print network
              </li>
            </ul>
          </p>
          <div className='justify-between'>
            <button className="bg-green-500 text-gray-800 font-semibold py-2 px-4 hover:bg-gray-100 transition-all mr-4">
              Start for free
            </button>
            <button className="border border-gray-400 text-gray-800 font-semibold py-2 px-4 transition-all">
              <FontAwesomeIcon icon={faPlay} className="mr-2" />
              How it works?
            </button>
          </div>
          <p className="text-green-500 py-4 max-w-md font-semibold"> 
            Trusted by over 8M sellers around the world
          </p>
        </div>
        <div className="flex items-center justify-center h-full w-full md:ml-10">
          <Lottie animationData={panimation} loop={true} className="w-auto" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
