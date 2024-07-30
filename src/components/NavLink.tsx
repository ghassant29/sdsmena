import { LegacyRef } from "react";
import { Link } from "react-router-dom";
import { useHome } from "../context/providers/homepage.provider";
import useMobile from "../hooks/useMobile";
import { tw } from "../utils/tw";

type Props = {
  href: string;
  text: string;
  className?: string;
};

const scrollTo = (ref: LegacyRef<HTMLDivElement> | undefined) => {
  // @ts-ignore
  ref?.current?.scrollIntoView({
    behavior: "smooth",
  });
};

const NavLink = ({ href, text, className }: Props) => {
  const { aboutRef, contactRef, heroRef, productsRef, servicesRef, teamRef } =
    useHome();

  const isMobile = useMobile();

  const handleClick = () => {
    switch (href) {
      case "#hero":
        scrollTo(heroRef);
        break;
      case "#services":
        scrollTo(servicesRef);
        break;
      case "#products":
        scrollTo(productsRef);
        break;
      case "#about":
        scrollTo(aboutRef);
        break;
      case "#contact":
        scrollTo(contactRef);
        break;
      case "#team":
        scrollTo(teamRef);
        break;
      default:
        break;
    }
  };

  if (href.startsWith("/"))
    return (
      <Link
        to={href}
        className={
          className ??
          "relative p-2 text-[#333] font-semibold rounded-xl cursor-pointer hover:text-black duration-300 group"
        }
      >
        {text}
        {!isMobile && (
          <span
            className={tw(
              "absolute left-0 bottom-0 h-0.5 w-0 bg-secondary group-hover:w-full transition-all duration-300"
            )}
          ></span>
        )}
      </Link>
    );

  return (
    <button
      onClick={handleClick}
      className={
        className ??
        "relative p-2 text-[#333] font-semibold rounded-xl cursor-pointer hover:text-black duration-300 group"
      }
    >
      {text}
      {!isMobile && (
        <span
          className={tw(
            "absolute left-0 bottom-0 h-0.5 w-0 bg-secondary group-hover:w-full transition-all duration-300"
          )}
        ></span>
      )}
    </button>
  );
};

export default NavLink;
