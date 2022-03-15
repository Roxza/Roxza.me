import { FiGithub } from "react-icons/fi";
import { SiDiscord } from "react-icons/si";
import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/", icon: "fa-regular fa-house", size: "xl" },
  { label: "About", href: "/about", icon: "fa-regular fa-user", size: "xl" },
  { label: "Projects", href: "/projects", icon: "far fa-code", size: "xl" },
  {
    label: "Bookmarks",
    href: "/bookmarks",
    icon: "fa-solid fa-bookmark",
    size: "xl",
  },
  {
    label: "Repositories",
    href: "/repositories",
    icon: "fa-solid fa-code-branch",
  },
  { label: "Contact", href: "/contact", icon: "far fa-at", size: "xl" },
];
const Header = () => {
  const router = useRouter();
  const [isActive, setActive] = useState(false);

  const navbar = () => {
    setActive(true);
  };
  return (
    <>
      <link
        href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css"
        rel="stylesheet"
      />
      <nav className="flex items-center justify-between w-full max-w-4xl p-8 mx-auto sticky-navbg-black bg-opacity-60 text-gray-100">
        <div className="flex items-center" style={{ fontSize: "15px" }}>
          <a href="https://github.com/Roxza">
            <button className="px-2 py-1 hover:text-purple-500 dark:text-gray-300 text-black text-lg">
              <FiGithub className="text-2xl sm:mr-2" />
            </button>
          </a>
          <a href="https://discord.com/users/939851664389730304">
            <button
              className="-ml-2 py-2 px-4 rounded inline-flex items-center hover:text-purple-500 dark:text-gray-300 text-black text-lg font-normal"
              styles="transform: none;"
            >
              <SiDiscord className="text-2xl sm:mr-2" />
            </button>
          </a>
        </div>
        <div className="md:relative md:top-0 md:flex-row md:w-autofloat-rightmd:bg-black dark:text-gray-100 text-black text-lg md:rounded-none md:shadow-none md:bg-transparent p-6 pt-3 md:p-0">
          {navItems.map((item) => (
            <Link href={item.href} key={item.href}>
              <a
                style={{ fontSize: "15px" }}
                className={`${
                  router.asPath === `${item.href}` &&
                  "text-purple-500 dark:text-[#ECCECE]"
                } dark:hover:text-[#ECCECE] hover:text-purple-500 font-bold  mr-2 p-1 sm:p-4`}
              >
                <i className={`${item.icon} font-bold`}></i>{" "}
              </a>
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Header;
