"use client";
import React from "react";
import Image from "next/image";
import { Facebook, Instagram, Smartphone } from "lucide-react";

const Footer = () => {
  const menuData = [
    {
      topic: "Quick Access",
      items: [
        "Shop",
        "Contact Us",
        "Returns and refunds",
        "Track order",
        "FAQ",
      ],
    },
    {
      topic: "Shop By",
      items: ["Pickle", "Amla", "Papad", "Snacks"],
    },
    {
      topic: "Customer Services",
      items: [
        "Rules and Regulations",
        "Terms of Use",
        "Return Procedures",
        "Privacy Policy",
      ],
    },
  ];

  return (
    <footer className="bg-[#f2f5f7] relative pt-10 w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 md:gap-20 px-4 sm:px-6">
        {/* Left side - Logo & Contact */}
        <div className="flex-1 space-y-6 max-w-full md:max-w-[350px] break-words">
          <div className="w-32 md:w-40">
            <Image
              src="/assets/logo/logo-main-brown.svg"
              height={800}
              width={800}
              alt="Logo-Main"
              className="w-full h-auto -m-3"
            />
          </div>
          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-[#b36949]">
              Stay Connected
            </h2>
            <p className="text-sm">
              <span className="font-semibold text-[#b36949]">Address: </span>
              <span className="text-[#d9a78c]">
                01, Godha Bhawan, Opp OBC Bank, Near Head Post Office,
                Bhopalganj, Bhilwara, Rajasthan, 311001
              </span>
            </p>
            <p className="text-sm">
              <span className="font-semibold text-[#b36949]">Phone: </span>
              <span className="text-[#d9a78c]">(+91) 80588 24007</span>
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-[#b36949]">
              Follow us on social media
            </h3>
            <div className="flex gap-4 text-[#b36949] text-xl">
              <Facebook className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
              <Instagram className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
              <Smartphone className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
            </div>
          </div>
        </div>

        {/* Right side - Menu sections */}
        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-6">
          {menuData.map((section, index) => (
            <div key={index}>
              <h3 className="text-[#b36949] font-bold mb-4">{section.topic}</h3>
              <ul className="space-y-2">
                {section.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-[#d9a78c] hover:underline cursor-pointer text-sm sm:text-base"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="bg-[#b36949] w-full mt-10 flex justify-center items-center h-12 md:h-14">
        <h2 className="text-white text-center text-sm md:text-base">
          © All Rights Reserved for GodhaJi
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
