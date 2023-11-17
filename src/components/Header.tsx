import { FC } from "react";
import Image from "next/image";

const Header: FC = () => {
    return (
        <>
            <div className="bg-dark flex justify-center items-center font-poppins">
                <div className="flex flex-col-reverse md:flex-row w-[1200px] justify-around items-center md:justify-around h-screen">
                    <div className="text-white md:h-full flex flex-col justify-start items-center md:w-1/2 w-full h-1/2 md:h-screen md:justify-center">
                        <p className="text-2xl  md:text-4xl">
                            Hello!, I`m <span className="text-2xl font-bold md:text-4xl">Bayasgalan</span>
                        </p>
                        <p className="mt-5 text-slate-200 text-xs md:text-lg">
                            <span className="underline underline-offset-2">Software Engineering</span> student at ITMO
                            University
                        </p>
                    </div>
                    <div className="flex md:h-full justify-center md:items-center w-full md:w-1/2 h-1/2 relative">
                        <div className="relative w-[250px] h-auto flex justify-center items-end md:w-[400px]">
                            <Image src="/iron1.png" width={512} height={512} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
