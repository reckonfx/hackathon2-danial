import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import footer1 from '../../../public/footer1.png';
import footer2 from '../../../public/footer2.png';
import footer3 from '../../../public/footer3.png';

import { PiClockClockwiseBold } from "react-icons/pi";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black">
      <div className="flex flex-col md:flex-row justify-between items-center bg-black px-[135px] py-[50px]">
        <div className="text-white md:w-[50%] w-[100%]">
          <h2 className="text-[20px] md:text-[32px] font-semibold">
            <span className="text-[#FF9F0D]">Still</span> Need Our Support
          </h2>
          <p className="text-[10px] md:text-[16px] font-normal mt-[17px]">
            {`Don't wait, make a smart & logical quote here. It's pretty easy.`}
          </p>
        </div>

        <div className="flex md:mt-0 mt-[20px]">
          <input 
            type="text" 
            placeholder="Enter Your Email" 
            className="bg-[#FF9F0D] text-white py-[5px] px-[10px] md:py-[10px] md:px-[20px] mr-2" 
          />
          <button 
            className="text-[#FF9F0D] bg-white py-[5px] md:py-[10px] px-[10px] md:px-[20px]"
          >
            Subscribe Now
          </button>
        </div>
      </div>

      <hr className="my-4 border-[#FF9F0D] mx-[135px]" />

      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 md:gap-[50px] px-0 md:px-[135px] py-6 lg:py-8 md:grid-cols-4">
          
          {/* About Us Section */}
          <div>
            <h2 className="mb-6 text-[24px] font-semibold dark:text-white">About Us</h2>
            <ul className="text-gray-500 font-medium">
              <li className="mb-4">
                <p className="text-[#FFFFFF] text-[16px] font-normal hover:underline">
                 { `Corporate clients and leisure travelers have been relying on Groundlink for dependable, safe, and professional chauffeured car service in major cities across the world.`}
                </p>
              </li>
              <li className="flex gap-[16.5px]">
                <div className="bg-[#FF9F0D] flex justify-center items-center w-[72px] h-[72px]">
                  <PiClockClockwiseBold className="text-white text-[40px]" />
                </div>
                <div className="ml-1">
                  <h2 className="text-[16px] text-[#FFFFFF] font-normal">Opening Hours</h2>
                  <h3 className="text-[10px] font-normal text-[#FFFFFF]">Mon - Sat (8.00 - 6.00)</h3>
                  <h3 className="text-[10px] font-normal text-[#FFFFFF]">Sunday - Closed</h3>
                </div>
              </li>
            </ul>
          </div>

          {/* Useful Links Section */}
          <div>
            <h2 className="mb-6 text-[24px] font-semibold dark:text-white">Useful Links</h2>
            <ul className="text-[#FFFFFF] font-medium">
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">News</a></li>
              <li><a href="#" className="hover:underline">Partner</a></li>
              <li><a href="#" className="hover:underline">Team</a></li>
              <li><a href="#" className="hover:underline">Menu</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h2 className="mb-6 text-[24px] font-semibold dark:text-white">Help</h2>
            <ul className="text-[#FFFFFF] font-medium">
              <li> <Link href={"../faq"}></Link>
                <a href="../../../../src/app/faq" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
              <li><a href="#" className="hover:underline">Reporting</a></li>
              <li><a href="#" className="hover:underline">Documentation</a></li>
              <li><a href="#" className="hover:underline">Support Policy</a></li>
              <li><a href="#" className="hover:underline">Privacy</a></li>
            </ul>
          </div>

          {/* Recent Posts Section */}
          <div>
            <h2 className="mb-6 text-[24px] font-semibold dark:text-white">Recent Posts</h2>
            <ul className="space-y-[14px]">
              {[footer1, footer2, footer3].map((footer, index) => (
                <li className="flex gap-[16.5px]" key={index}>
                  <Image src={footer} alt={`Footer image ${index + 1}`} />
                  <div className="ml-1">
                    <h2 className="text-[16px] text-[#FFFFFF] font-normal opacity-[.49]">
                      20 Feb 2022
                    </h2>
                    <h3 className="text-[18px] font-normal text-[#FFFFFF]">Keep Your Business</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="w-[100%] px-4 py-6 bg-gray-100 dark:bg-[#FF9F0D] md:flex md:items-center md:justify-between">
        <span className="text-sm text-[#FFFFFF] sm:text-center">
          Copyright © 2024 Daniyal Hanif. All Rights Reserved.
        </span>

        <div className="flex justify-center gap-[14px]">
          {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest].map((Icon, index) => (
            <div key={index} className="bg-white w-[36px] h-[34px] flex justify-center items-center rounded">
              <Icon className="text-[#4F4F4F] text-[20px]" />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
