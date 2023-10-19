import React, {FC} from "react";
import {HiOutlineLocationMarker} from "react-icons/hi"
import {HiMiniBuildingLibrary} from "react-icons/hi2"
import { BsCalendar3} from "react-icons/bs"
interface AboutMeProps {
    [key:string] :any;
}

const AboutMe:FC = (props:AboutMeProps) => {
    return <>
    <div className="flex bg-dark justify-center items-center h-screen">
        <div className=" flex flex-row w-[1200px]  justify-center text-white">
            <div className="w-1/2 flex flex-col px-8">
                <h1 className="text-3xl font-bold">About Me</h1>
                <p className="mt-5" >
                 I'm Davaanyam Bayasgalan from Ulaanbaatar, Mongolia. As a 3rd-year software engineering student at ITMO University in Saint-Petersburg, I'm passionate about crafting innovative solutions through code.  
                </p>
                <p className="mt-5">
                Outside academics, I enjoy chess, basketball, and diving deeper into coding projects. Known for being a fast learner and a collaborative teammate, I'm eager to connect and share insights in the tech realm.
                </p>              
            </div>
            <div className="w-1/2 flex flex-col items-center  px-8">
                <h1 className="text-3xl font-bold w-full">Work Experience</h1>
                <div className="flex flex-col w-full mt-5">
                    <div className="flex flex-col w-full">
                         <div className="flex flex-row justify-between text-xl">
                            <p>Junior Web Developer</p>
                            <p>Full time</p>
                        </div>       
                        <div className="flex flex-row justify-between items-center text-xs mt-2">
                            <div className="flex flex-row items-center">
                                <p className="flex items-center mr-3"><HiMiniBuildingLibrary className="mr-1"/>Golomt Bank</p>
                                <p className="flex items-center mr-3"><HiOutlineLocationMarker className="mr-1"/>Ulaanbaatar, Mongolia</p>
                            </div>
                            <p className="flex items-center"><BsCalendar3 className="mr-1" /> JUL 2023 - SEP 2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
}

export default AboutMe;