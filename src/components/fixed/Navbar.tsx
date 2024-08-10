import { useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { navList } from "../../utils/constants";
import { HamburgerMenu } from "./HamburgerMenu";

export const Navbar = () => {
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <h1 className="block w-[8rem] font-bold text-xl">Survz</h1>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navList.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-sm lg:font-semibold z-2 lg:text-n-1 lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>

          <HamburgerMenu />
        </nav>

        <button className="hidden text-sm lg:flex navbar-button cursor-pointer hover:scale-105 duration-200">Connect Wallet</button>

        <button
          onClick={toggleNavigation}
          className="ml-auto lg:hidden px-3"
        ></button>

        <button className="ml-auto lg:hidden px-3" onClick={toggleNavigation}>
          <svg
            className="overflow-visible"
            width="20"
            height="12"
            viewBox="0 0 20 12"
          >
            <rect
              className="transition-all origin-center"
              y={openNavigation ? "5" : "0"}
              width="20"
              height="2"
              rx="1"
              fill="white"
              transform={`rotate(${openNavigation ? "45" : "0"})`}
            />
            <rect
              className="transition-all origin-center"
              y={openNavigation ? "5" : "10"}
              width="20"
              height="2"
              rx="1"
              fill="white"
              transform={`rotate(${openNavigation ? "-45" : "0"})`}
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
