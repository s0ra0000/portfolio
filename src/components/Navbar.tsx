"use client";
import React, { FC, useState, useEffect } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiTelegram } from "react-icons/si";
import { FaPlus } from "react-icons/fa";
import { BsList } from "react-icons/bs";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";

const Navbar: FC = () => {
    const [burgerClicked, setBurgerClicked] = useState<boolean>(true);

    const onClickMenu = () => {
        if (window.innerWidth <= 768) setBurgerClicked((prevValue) => !prevValue);
    };
    useEffect(() => {
        if (window.innerWidth <= 768) {
            setBurgerClicked(false);
        }
        const handleResize = () => {
            setBurgerClicked(window.innerWidth >= 768);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div
            className={`ease-in-out duration-500 font-poppins h-screen md:h-auto md:bg-gradient-to-b md:from-dark md:from-60% text-white flex flex-col md:fixed w-[100%] lg:justify-center xl:items-center xl:px-10 fixed z-10 top-0 md:bg-inherit bg-dark ${
                burgerClicked ? "left-0" : "left-[-100%]"
            }`}
        >
            <div className="fixed z-20 top-[10px] right-[10px] md:hidden">
                <button onClick={onClickMenu}>
                    {burgerClicked ? <FaPlus className="rotate-45 text-lg" /> : <BsList className="text-lg" />}
                </button>
            </div>
            <div className="flex w-[100%] flex-col p-10 justify-between items-center h-full md:flex-row md:h-auto  xl:w-[1200px] md:py-5">
                <ScrollLink to="header" smooth={true} duration={500} onClick={onClickMenu}>
                    <p className="block hover:border-b hover:border-rose-500 px-4 border-b border-dark cursor-pointer">
                        Home
                    </p>
                </ScrollLink>
                <ScrollLink to="about_me" smooth={true} duration={500} onClick={onClickMenu}>
                    <p className="block hover:border-b hover:border-rose-500 px-4 border-b border-dark cursor-pointer">
                        About Me
                    </p>
                </ScrollLink>
                <ScrollLink to="stack" smooth={true} duration={500} onClick={onClickMenu}>
                    <p className="block hover:border-b hover:border-rose-500 px-4 border-b border-dark cursor-pointer">
                        Tech Stack
                    </p>
                </ScrollLink>
                <ScrollLink to="contact" smooth={true} duration={500} onClick={onClickMenu}>
                    <p className="block hover:border-b hover:border-rose-500 px-4 border-b border-dark cursor-pointer">
                        Contact
                    </p>
                </ScrollLink>
                <div className="flex flex-row w-[40%] justify-between md:w-auto text-xl">
                    <Link target="_blank" href="https://github.com/s0ra0000">
                        <AiFillGithub className="mx-2 cursor-pointer hover:text-rose-500 " />
                    </Link>

                    <Link target="_blank" href="https://www.linkedin.com/in/bayasgalan-davaanyam-183a94281/">
                        <AiFillLinkedin className="mx-2 cursor-pointer hover:text-rose-500" />
                    </Link>

                    <Link target="_blank" href="https://t.me/s0ra0000">
                        <SiTelegram className="mx-2 cursor-pointer hover:text-rose-500" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
