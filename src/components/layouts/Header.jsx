import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import Logo from "/src/assets/Logo.png";
import { Link } from "react-router-dom";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa6";

const Header = () => {
  return (
    <>
      <div className="div">
        <Container>
          <Flex className="">
            <div className="py-5">
              <Link to={"/"}>
                <Image imgSrc={Logo} />
              </Link>
            </div>

            <div className=" m-auto">
              <ul className="flex gap-x-5 font-normal text-[#767676] text-[14px]">
                <Link to={"/"}>
                  <li className='relative after:content[""] after:left-0 after:bottom-0 after:w-[0] after:h-[4px] after:bg-amber-400 after:absolute  after:duration-750 hover:after:w-[100%] hover:text-black'>
                    Home
                  </li>
                </Link>

                <Link to={"shop"}>
                  <li className='relative after:content[""] after:left-0 after:bottom-0 after:w-[0] after:h-[4px] after:bg-amber-400 after:absolute  after:duration-750 hover:after:w-[100%] hover:text-black'>
                    Shop
                  </li>
                </Link>

                <Link to={"about"}>
                  <li className='relative after:content[""] after:left-0 after:bottom-0 after:w-[0] after:h-[4px] after:bg-amber-400 after:absolute  after:duration-750 hover:after:w-[100%] hover:text-black'>
                    {" "}
                    About
                  </li>
                </Link>
                <Link to={"contacts"}>
                  <li className='relative after:content[""] after:left-0 after:bottom-0 after:w-[0] after:h-[4px] after:bg-amber-400 after:absolute  after:duration-750 hover:after:w-[100%] hover:text-black'>
                    Contacts
                  </li>
                </Link>
                <Link to={"jurnal"}>
                  <li className='relative after:content[""] after:left-0 after:bottom-0 after:w-[0] after:h-[4px] after:bg-amber-400 after:absolute  after:duration-750 hover:after:w-[100%] hover:text-black'>
                    Journal
                  </li>
                </Link>
              </ul>
            </div>
          </Flex>
        </Container>
      </div>

      <div className="bg-amber-200 py-5">
        <Container>
          <Flex className={"justify-between"}>
            <div className="flex items-center gap-x-3 text-[14px] text-[#262626]">
              <HiBars3BottomLeft />
              <h3 className="text-[14px] ">Shop bye Category</h3>
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Search Products"
                className="p-[15px] bg-white w-[600px] border-none outline-none "
              />
              <CiSearch className="absolute right-3 top-1/2 -translate-y-1/2" />
            </div>

            <div className=" flex gap-3">
              <div className="flex gap-1">
                <FaUser />
                <FaCaretDown />
              </div>
              <FaCartArrowDown />
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Header;
