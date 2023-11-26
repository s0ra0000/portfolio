import React, { FC } from "react";
import Image from "next/image";

const Stack: FC = () => {
    return (
        <div id="stack" className="flex bg-dark justify-center items-center h-screen font-poppins">
            <div className="flex flex-col w-[1200px] items-center justify-center text-white">
                <h1 className="text-2xl md:text-4xl font-bold">
                    My Tech{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-red-400 to-red-500">
                        Stack
                    </span>
                </h1>
                <div className="mt-14 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-12 md:gap-x-20 lg:gap-x-32 gap-y-10 md:gap-y-12 lg:gap-y-20">
                    <div className="w-[50px] md:w-[100px] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-rose-500 hover:via-red-400 hover:to-red-500">
                        <Image className="invert" src={"/stack/html.png"} width={100} height={100} alt={""} />
                        <p className="w-full text-center block my-1 font-bold text-xs md:text-sm tracking-wide">
                            HTML5
                        </p>
                    </div>
                    <div className="w-[50px] md:w-[100px] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-rose-500 hover:via-red-400 hover:to-red-500">
                        <Image className="invert" src={"/stack/css.png"} width={100} height={100} alt={""} />
                        <p className="w-full text-center block my-1 font-bold text-xs md:text-sm tracking-wide">CSS3</p>
                    </div>
                    <div className="w-[50px] md:w-[100px] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-rose-500 hover:via-red-400 hover:to-red-500">
                        <Image className="invert" src={"/stack/sass.png"} width={100} height={100} alt={""} />
                        <p className="w-full text-center block my-1 font-bold text-xs md:text-sm tracking-wide">SASS</p>
                    </div>
                    <div className="w-[50px] md:w-[100px] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-rose-500 hover:via-red-400 hover:to-red-500">
                        <Image className="invert" src={"/stack/tailwind.png"} width={100} height={100} alt={""} />
                        <p className="w-full text-center block my-1 font-bold text-xs md:text-sm tracking-wide">
                            TAILWIND
                        </p>
                    </div>
                    <div className="w-[50px] md:w-[100px] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-rose-500 hover:via-red-400 hover:to-red-500">
                        <Image className="invert" src={"/stack/js.png"} width={100} height={100} alt={""} />
                        <p className="w-full text-center block my-1 font-bold text-xs md:text-sm tracking-wide">
                            JAVASCRIPT
                        </p>
                    </div>
                    <div className="w-[50px] md:w-[100px] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-rose-500 hover:via-red-400 hover:to-red-500">
                        <Image className="invert" src={"/stack/react.png"} width={100} height={100} alt={""} />
                        <p className="w-full text-center block my-1 font-bold text-xs md:text-sm tracking-wide">
                            REACT
                        </p>
                    </div>
                    <div className="w-[50px] md:w-[100px] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-rose-500 hover:via-red-400 hover:to-red-500">
                        <Image className="invert" src={"/stack/next.png"} width={100} height={100} alt={""} />
                        <p className="w-full text-center block my-1 font-bold text-xs md:text-sm tracking-wide">
                            NEXT.JS
                        </p>
                    </div>
                    <div className="flex flex-col justify-between w-[50px] md:w-[100px] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-rose-500 hover:via-red-400 hover:to-red-500">
                        <Image className="invert" src={"/stack/fastify.png"} width={100} height={100} alt={""} />
                        <p className="w-full text-center block my-1 font-bold text-xs md:text-sm tracking-wide bottom-0">
                            FASTIFY
                        </p>
                    </div>
                    <div className="w-[50px] md:w-[100px] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-rose-500 hover:via-red-400 hover:to-red-500">
                        <Image className="invert" src={"/stack/git.png"} width={100} height={100} alt={""} />
                        <p className="w-full text-center block my-1 font-bold text-xs md:text-sm tracking-wide ">GIT</p>
                    </div>
                    <div className="w-[50px] md:w-[100px] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-rose-500 hover:via-red-400 hover:to-red-500">
                        <Image className="invert" src={"/stack/github.png"} width={100} height={100} alt={""} />
                        <p className="w-full text-center block my-1 font-bold text-xs md:text-sm tracking-wide">
                            GITHUB
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stack;
