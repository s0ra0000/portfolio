import React, { FC } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiMiniBuildingLibrary } from "react-icons/hi2";
import { BsCalendar3 } from "react-icons/bs";

const AboutMe: FC = () => {
    return (
        <section id="about_me" className="flex bg-dark justify-center items-center h-screen font-poppins">
            <div className="flex justify-center items-center w-full lg:w-[1200px]">
                <div className=" flex flex-col lg:flex-row xl:w-[1200px] justify-center text-white h-full items-start">
                    <header className="w-full lg:w-1/2 flex flex-col lg:px-8 sm:py-16 sm:px-16 p-4">
                        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-red-400 to-red-500">
                            About Me
                        </h1>
                        <p className="mt-5 text-slate-200">
                            I&apos;m Davaanyam Bayasgalan from Ulaanbaatar, Mongolia. As a 3rd-year software engineering
                            student at ITMO University in Saint-Petersburg, I&apos;m passionate about crafting
                            innovative solutions through code.{" "}
                        </p>
                        <p className="mt-5 text-slate-200">
                            Outside academics, I enjoy chess, basketball, and diving deeper into coding projects. Known
                            for being a fast learner and a collaborative teammate, I&apos;m eager to connect and share
                            insights in the tech realm.
                        </p>
                    </header>
                    <div className="w-full lg:w-1/2 flex flex-col justify-start items-center  lg:px-8 sm:py-16 sm:px-16 p-4">
                        <h1 className="text-3xl font-bold w-full text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-red-400 to-red-500">
                            Work Experience
                        </h1>
                        <div className="flex flex-col w-full mt-5">
                            <div className="flex flex-col w-full">
                                <div className="flex flex-row justify-between text-xl font-medium">
                                    <p>Junior Web Developer</p>
                                    <p className="flex  items-center bg-white text-dark text-sm px-2 rounded font-medium ">
                                        Intern
                                    </p>
                                </div>
                                <article className="flex flex-row justify-between items-center text-xs mt-2 text-slate-200">
                                    <div className="flex flex-row items-center">
                                        <p className="flex items-center sm:mr-3">
                                            <HiMiniBuildingLibrary className="mr-1" />
                                            Golomt Bank
                                        </p>
                                        <p className="flex items-center sm:mr-3">
                                            <HiOutlineLocationMarker className="mr-1" />
                                            Ulaanbaatar, Mongolia
                                        </p>
                                    </div>
                                    <p className="flex items-center">
                                        <BsCalendar3 className="mr-1" /> JUL 2023 - SEP 2023
                                    </p>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
