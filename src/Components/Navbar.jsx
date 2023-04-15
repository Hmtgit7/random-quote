import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const navbarItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Bookmarks",
      link: "/bookmarks",
    },
  ];

  return (
    <div className="w-full">
      <div className="container mx-auto px-40">
        <div className="flex justify-between">
          <div className="flex space-x-96">
            {/* <!-- Website Logo --> */}
            {/* <!-- Primary Navbar items --> */}
            <div className=" md:flex items-center space-x-96 justify-center">
              {navbarItems.map((item, index) => {
                //     <a
                //     href="#"
                //     className="py-4 px-2 text-white text-sm font-semibold hover:bg-gray-700 rounded"
                //   >
                //     Home
                //   </a>
                return (
                  <Link
                    to={item.link}
                    key={index}
                    className="py-4 px-2 text-white text-xl font-semibold hover:scale-75"
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
