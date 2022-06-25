import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("rgb(212 212 216)");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === "/project1" ||
      router.asPath === "/project2" ||
      router.asPath === "/project3" ||
      router.asPath === "/project4"
    ) {
      setNavBg("transparent");
      setLinkColor("#ecf0f3");
    } else {
      setNavBg("rgb(212 212 216)");
      setLinkColor("#1f2937");
    }
  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);
  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-md shadow-yellow-100 z-[100] ease-in-out duration-300"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className=" flex justify-between items-center w-full h-full px-2 2xl:px-16 md:mr-20 lg:mr-5">
        <Link href="/">
          <Image
            src="/../public/assets/ads.png"
            alt="ADS"
            width="75"
            height="75"
          />
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <div className="md:hidden lg:flex bg-current rounded-lg shadow-lg shadow-slate-200 pb-2 pr-2 lg:mr-0 2xl:mr-5 ml-10">
              <Image
                src="/../public/assets/Headerlogo.png"
                alt="ADS"
                width="1000"
                height="50"
              />
            </div>
            <Link href="/">
              <li className="  md:ml-5 lg:ml-20 text small uppercase hover:border-b">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li className="md:ml-2 lg:ml-5 text small uppercase hover:border-b">
                About
              </li>
            </Link>
            <Link href="/#skills">
              <li className="md:ml-2 lg:ml-5 text small uppercase hover:border-b">
                Skills
              </li>
            </Link>
            <Link href="/#projects">
              <li className="md:ml-2 lg:ml-5 text small uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="md:ml-2 md:mr-0 lg:ml-5 lg:mr-10 text small uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : " "
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[65%] md:w-[75%] h-screen bg-slate-700 p-10 ease-in duration-500"
              : "fixed left-[-100%] p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Image
                  src="/../public/assets/ads.png"
                  alt="ADS"
                  width="45"
                  height="45"
                />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-md shadow-black p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-600 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Lets add an Arcane Jolt to your organization.
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#007bff] ml-14">
                My Social Links
              </p>
              <div className=" flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-md shadow-black ml-10 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <a href="https://www.linkedin.com/in/mitchel-hall-software-dev/">
                    <FaLinkedinIn />
                  </a>
                </div>
                <div className="rounded-full shadow-md shadow-black p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <a href="https://github.com/SCUBAGUYPNW">
                    <FaGithub />
                  </a>
                </div>
                <div className="rounded-full shadow-md shadow-black p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineMail
                    onClick={() =>
                      window.open("mailto:mitch.hall@artificerdevsolutions.com")
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
