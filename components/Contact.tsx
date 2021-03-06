import Image from "next/image";
import React from "react";
import contactMe from "../public/assets/contact/contactme.webp";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaReacteurope } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#515be5]">
          Contact
        </p>
        <h2 className="py-4 text-gray-400">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-md shadow-yellow-100 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={contactMe}
                  alt="ContactMe"
                ></Image>
              </div>
              <div>
                <h2 className="py-2 text-blue-700">Mitch Hall</h2>
                <p className="text-black font-bold">Full-Stack Web Developer</p>
                <p className="py-4 text-black lg:text-2xl">
                  I am available for a full time posistion. Contact me and lets
                  discuss how I can assist your organization.
                </p>
              </div>
              <div>
                <p className="uppercase pt-4 text-[#515be5] text-xl">
                  My Social Links
                </p>
                <div>
                  <div className="flex items-left py-4">
                    <div className="ml-3 mr-2 rounded-full bg-zinc-500 shadow-md shadow-black p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                      <a href="https://www.linkedin.com/in/mitchel-hall-software-dev/">
                        <FaLinkedinIn />
                      </a>
                    </div>
                    <div className="ml-2 rounded-full bg-zinc-500 shadow-md shadow-black p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                      <a href="https://github.com/SCUBAGUYPNW">
                        <FaGithub />
                      </a>
                    </div>
                    <div className="ml-4 rounded-full bg-zinc-500 shadow-md shadow-black p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                      <AiOutlineMail
                        onClick={() =>
                          window.open(
                            "mailto:mitch.hall@artificerdevsolutions.com"
                          )
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right */}
          <div className="col-span-3 w-full h-auto shadow-md shadow-yellow-100 rounded-xl lg:p-4">
            <div>
              <p className="text-black lg:text-2xl text-center">Coming soon</p>

              {/* <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-md text-black py-2">
                      Name
                    </label>
                    <input
                      type="text"
                      className="border-2 rounded-lg p-3 flex border-gray-300 bg-black text-white"
                      id="name"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppcase text-md text-black py-2">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      className="border-2 rounded-lg p-3 flex border-gray-300 bg-black text-white"
                      id="phone"
                      required
                    />
                  </div>
                </div>
                <div>
                  <div className="flex flex-col py-2">
                    <label className="uppcase text-md text-black py-2">
                      E-Mail
                    </label>
                    <input
                      type="email"
                      className="border-2 rounded-lg p-3 flex border-gray-300 bg-black text-white"
                      id="email"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppcase text-md text-black py-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="border-2 rounded-lg p-3 flex border-gray-300 bg-black text-white"
                    id="subject"
                    required
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-md text-black py-2">
                    Message
                  </label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300 bg-black text-white"
                    rows="10"
                    id="message"
                  ></textarea>
                </div>
                <button className="w-full p-4 text-gray-100 mt-4" type="submit">
                  Send Message
                </button>
              </form> */}
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full bg-zinc-500 shadow-md shadow-black p-4 cursor-pointer hover:scale-105 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[5651e5]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
