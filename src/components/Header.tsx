import { FC } from "react";
import Image from "next/image";
import { MdWavingHand } from "react-icons/md";
interface HeaderProps {
    [key: string]: any;
}

const Header: FC = (props: HeaderProps) => {
    return (
        <>
            <div className="bg-dark flex justify-center items-center pt-4 font-poppins">
                <div className="flex flex-row w-[1200px] justify-around h-screen">
                    <div className="text-white h-full flex flex-col justify-center items-start ">
                        <p className="text-[36px]">
                            Hello!, I`m <span className="text-[36px] font-bold">Bayasgalan</span>
                        </p>
                        <p className="mt-5 text-slate-200">
                            <span className="underline underline-offset-2">Software Engineering</span> student at ITMO
                            University
                        </p>
                    </div>
                    <div className="flex h-full justify-center items-center">
                        <Image src="/iron1.png" width={500} height={500} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
