"use client";
import React, { FC, useState } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiTelegram } from "react-icons/si";
import { FaPlus } from "react-icons/fa";
import { BsList } from "react-icons/bs";
interface NavbarProps {
    [key: string]: any;
}

const Navbar: FC = (props: NavbarProps) => {
    const [burgerClicked, setBurgerClicked] = useState<boolean>(true);

    const onClickMenu = () => {
        setBurgerClicked(!burgerClicked);
    };

    return (
        <>
            <div
                className={`font-poppins h-screen md:h-auto md:bg-gradient-to-b md:from-dark md:from-60% text-white flex flex-col md:fixed w-[100%] lg:justify-center lg:items-center lg:px-10 absolute z-10 top-0 md:bg-inherit bg-dark ${
                    burgerClicked ? "left-0" : "left-[-100%]"
                }`}
            >
                <div className="fixed z-20 top-[10px] right-[10px] md:hidden">
                    <button onClick={onClickMenu}>
                        {burgerClicked ? <FaPlus className="rotate-45 text-lg" /> : <BsList className="text-lg" />}
                    </button>
                </div>
                <div className="flex w-[100%] flex-col p-10 justify-between items-center h-full md:flex-row md:h-auto  lg:w-[1200px] md:py-5">
                    <p>Home</p>
                    <p>About</p>
                    <p>Tech Stack</p>
                    <p>Contact</p>
                    <div className="flex flex-row w-[40%] justify-between md:w-auto text-xl">
                        <AiFillGithub className="mx-2" />
                        <AiFillLinkedin className="mx-2" />
                        <SiTelegram className="mx-2" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
