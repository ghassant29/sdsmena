import { Fragment, ReactElement, cloneElement } from "react";
import { Link, useLocation } from "react-router-dom";
import useMobile from "../hooks/useMobile";
import { tw } from "../utils/tw";

type Props = {
  href: string;
  text: string;
  onClick?: () => void;
  className?: string;
};

const NavLink = ({ href, text, onClick, className }: Props) => {
  const isMobile = useMobile();
  const location = useLocation();

  const isActive = location.pathname === href || location.hash === href;

  const commonProps = {
    className: tw(
      className ??
        "relative py-6 px-2 text-[#333] font-semibold rounded-xl cursor-pointer hover:text-black duration-300 group",
      isActive && "text-black"
    ),
    children: (
      <Fragment>
        {text}
        {!isMobile && (
          <span
            style={{
              backgroundImage: isActive
                ? "linear-gradient(to right, #00aeef, #00aeef 25%, #000000 25%, #000000 50%, #fff202 50%, #fff202 75%, #ec0c8c 75%, #ec0c8c 100%)"
                : ""
            }}
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
      <button onClick={onClick} />
    );

  return cloneElement(element, commonProps);
};

export default NavLink;
