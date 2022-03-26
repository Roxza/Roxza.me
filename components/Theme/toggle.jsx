import React from "react";
import { Transition } from "@headlessui/react";

import darkTheme from "../../hooks/dark";

export default function Toggle() {
  const [scrolled, setScrolled] = React.useState(false);
  const [music, musicSet] = React.useState(false);
  const [colorTheme, setTheme] = darkTheme();
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 120) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }, []);
  const ScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const musicPlayer = () => {
    const element = document.getElementById("music");

    if (music) {
      musicSet(false);
      element.pause();
    } else {
      musicSet(true);
      element.play();
    }
  };
  return (
    <Transition
      as={React.Fragment}
      show={scrolled ? true : false}
      enter="transform transition duration-[400ms]"
      enterFrom="opacity-0 translate-y-full"
      enterTo="opacity-100 translate-y-0"
      leave="transform duration-200 transition ease-in-out"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 translate-y-full"
    >
      <div
        style={{ zIndex: 999 }}
        className="fixed bottom-5 right-5 flex flex-row space-x-2"
      >
        <div
          onClick={() => setTheme(colorTheme)}
          className="h-12 w-12 rounded-full dark:text-white text-black text-center flex items-center justify-center space-x-3 group relative overflow-hidden transition-all duration-500 bg-gradient-to-tl dark:bg-[#101010] bg-gray-300 bg-size-200 bg-pos-0 hover:bg-pos-100 cursor-pointer"
        >
          <i
            className={
              colorTheme === "dark"
                ? "fa-solid fa-moon"
                : "fa-solid fa-sun-bright"
            }
          ></i>
        </div>
        <div
          onClick={musicPlayer}
          className="h-12 w-12 rounded-full dark:text-white text-black text-center flex items-center justify-center space-x-3 group relative overflow-hidden transition-all duration-500 bg-gradient-to-tl dark:bg-[#101010] bg-gray-300 bg-size-200 bg-pos-0 hover:bg-pos-100 cursor-pointer"
        >
          <i class={`fa ${music ? "fa-pause" : "fa-play"}`}></i>
        </div>
        <div
          onClick={ScrollTop}
          className="h-12 w-12 rounded-full dark:text-white text-black text-center flex items-center justify-center space-x-3 group relative overflow-hidden transition-all duration-500 bg-gradient-to-tl dark:bg-[#101010] bg-gray-300 bg-size-200 bg-pos-0 hover:bg-pos-100 cursor-pointer"
        >
          <i className="fal fa-chevron-up" />
        </div>
      </div>
    </Transition>
  );
}
