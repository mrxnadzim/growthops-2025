import logo from "../assets/logo.svg";
import navbarIcon from "../assets/bars.svg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling when menu is open
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const navItems = [
    { path: "/services", label: "Services" },
    { path: "/work", label: "Work" },
    { path: "/insights", label: "Insights" },
    { path: "/careers", label: "Careers" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav
        className="h-[60px] absolute top-2 left-3 right-3 z-2 border-2 border-[#F5F5F514]
            rounded-full bg-gradient-to-b from-[#0405068F] to-[#04050666] flex items-center justify-between
            px-4 backdrop-blur-lg font-montserrat"
      >
        <Link to="/">
          <div>
            <img
              src={logo}
              alt="Growthops logo"
              className="h-[40px] pointer-events-none"
            />
          </div>
        </Link>
        <div
          className="rounded-lg flex items-center text-white text-[14px] cursor-pointer hover:bg-[#F5F5F514]"
          onClick={toggleMenu}
        >
          <span className="font-bold pl-3 hidden sm:inline">MENU</span>
          <img
            src={navbarIcon}
            alt="Navbar icon"
            className="p-3 pointer-events-none"
          />
        </div>
      </nav>

      <div
        className={`${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        } fixed top-0 right-0 w-full h-full transition ease-in-out duration-300 bg-gradient-to-b from-[#040506A3] to-[#04050666] backdrop-blur-sm z-50`}
      >
        <div
          className="font-montserrat flex items-center absolute top-8 right-16 text-white cursor-pointer z-50"
          onClick={toggleMenu}
        >
          <span className="pr-3 font-bold hidden sm:inline">CLOSE</span>
          <FaTimes size={30} />
        </div>
        <div className="flex flex-col justify-center gap-y-13 pr-16 items-end w-full h-full">
          {navItems.map((item) => (
            <Link
              key={item.index}
              to={item.path}
              className="text-white text-5xl lg:text-6xl font-black font-montserrat uppercase"
              onClick={toggleMenu}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Navbar;
