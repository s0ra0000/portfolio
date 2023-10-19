import React, {FC} from "react"
import Image from "next/image";
interface StackProps{
    [key:string]:any;
}

const Stack:FC = (props:StackProps) => {
    return <>
        <div className="flex bg-dark justify-center items-center h-screen">
            <div className="flex flex-col w-[1200px] items-center justify-center text-white">
                <h1 className="text-4xl font-bold">My Tech Stack</h1>
                <div className="mt-10 grid grid-cols-5 gap-x-32 gap-y-16">
                    <div><Image className="invert" src={"/stack/html.png"} width={100} height={100} alt={""}/></div>
                    <div><Image className="invert" src={"/stack/css.png"} width={100} height={100} alt={""}/></div>
                    <div><Image className="invert" src={"/stack/sass.png"} width={100} height={100} alt={""}/></div>
                    <div><Image className="invert" src={"/stack/tailwind.png"} width={100} height={100} alt={""}/></div>
                    <div><Image className="invert" src={"/stack/js.png"} width={100} height={100} alt={""}/></div>
                    <div><Image className="invert" src={"/stack/react.png"} width={100} height={100} alt={""}/></div>
                    <div><Image className="invert" src={"/stack/next.png"} width={100} height={100} alt={""}/></div>
                    <div><Image className="invert" src={"/stack/fastify.png"} width={100} height={100} alt={""}/></div>
                    <div><Image className="invert" src={"/stack/git.png"} width={100} height={100} alt={""}/></div>
                    <div><Image className="invert" src={"/stack/github.png"} width={100} height={100} alt={""}/></div>
                </div>
            </div>
        </div>
    </>
}

export default Stack;