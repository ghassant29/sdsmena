import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import LogoSVG from "../assets/logo";
import useMobile from "../hooks/useMobile";
import { tw } from "../utils/tw";
import NavLink from "./NavLink";

type Props = {
  onlyHome?: boolean;
};

const Navbar = ({ onlyHome }: Props) => {
  const [nav, setNav] = useState(false);

  const isMobile = useMobile();

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = onlyHome
    ? [{ id: "/", text: "Home" }]
    : [
        { id: "#hero", text: "Home" },
        // { id: "#services", text: "Services" },
        { id: "#products", text: "Products" },
        { id: "#about", text: "About" },
        // { id: "#contact", text: "Our Location" },
        { id: "#contact", text: "Contact" },
      ];

  return (
    <nav className="md:absolute md:top-0 md:left-0 flex justify-between px-8 md:px-0 md:justify-center items-center w-full mx-auto text-white bg-white">
      <div className="w-full block md:hidden">
        <img className="h-28 w-28" src="/logo.svg" />
      </div>

      <ul className="hidden md:flex md:items-center md:justify-center gap-8">
        <div>
          <LogoSVG className="h-24 w-fit" />
        </div>
        <div className="flex items-center justify-center gap-4">
          {navItems.map((item) => (
            <NavLink key={item.id} href={item.id} text={item.text} />
          ))}
        </div>
      </ul>

      {!nav && (
        <div onClick={handleNav} className="block mr-8 md:hidden">
          <AiOutlineMenu size={26} color="#333" className="font-bold" />
        </div>
      )}

      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-300 bg-light ease-in-out duration-500 z-10"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%] z-10"
        }
      >
        {nav && (
          <div onClick={handleNav} className="absolute top-4 right-4">
            <AiOutlineClose size={26} color="#333" className="font-bold" />
          </div>
        )}
        <div className="w-full flex justify-center md:hidden">
          <img className="h-28 w-28" src="/logo-transparent.svg" />
        </div>

        {navItems.flat().map((item) => (
          <NavLink
            key={item.id}
            href={item.id}
            text={item.text}
            className="p-4 w-full flex text-start border-b duration-300 text-primary cursor-pointer border-gray-600"
          />
        ))}
      </ul>
      {/* Backdrop */}
      {isMobile && (
        <div
          className={tw(
            "fixed top-0 left-0 w-full h-full bg-black duration-300",
            nav
              ? "bg-opacity-50 pointer-events-auto"
              : "bg-opacity-0 pointer-events-none"
          )}
          onClick={handleNav}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
