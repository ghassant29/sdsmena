import { Fragment, LegacyRef, ReactElement, cloneElement } from "react";
import { Link, useLocation } from "react-router-dom";
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
    behavior: "smooth"
  });
};

const NavLink = ({ href, text, className }: Props) => {
  const { aboutRef, contactRef, heroRef, productsRef, servicesRef, teamRef } =
    useHome();
  const isMobile = useMobile();
  const location = useLocation();

  const handleClick = () => {
    const refsMap: { [key: string]: LegacyRef<HTMLDivElement> | undefined } = {
      "#hero": heroRef,
      "#services": servicesRef,
      "#products": productsRef,
      "#about": aboutRef,
      "#contact": contactRef,
      "#team": teamRef
    };
    const ref = refsMap[href];
    if (ref) scrollTo(ref);
  };

  const isActive = location.pathname === href || location.hash === href;

  const activeStyles = "text-black";

  const boxUnderlineStyle = isActive
    ? {
        backgroundImage:
          "linear-gradient(to right, #00aeef, #00aeef 25%, #000000 25%, #000000 50%, #fff202 50%, #fff202 75%, #ec0c8c 75%, #ec0c8c 100%)"
      }
    : {};

  const commonProps = {
    className: tw(
      className ??
        "relative py-6 px-2 text-[#333] font-semibold rounded-xl cursor-pointer hover:text-black duration-300 group",
      isActive && activeStyles
    ),
    children: (
      <Fragment>
        {text}
        {!isMobile && (
          <span
            style={boxUnderlineStyle}
            className={tw(
              "absolute left-0 bottom-0 h-0.5",
              isActive
                ? "w-full"
                : "w-0 bg-cpink group-hover:w-full transition-all duration-300"
            )}
          ></span>
        )}
      </Fragment>
    )
  };

  const element: ReactElement =
    href.startsWith("/") || href.startsWith("#") ? (
      <Link to={href} />
    ) : (
      <button onClick={handleClick} />
    );

  return cloneElement(element, commonProps);
};

export default NavLink;
