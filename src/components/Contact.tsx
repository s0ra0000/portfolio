import React,{FC} from "react";
import {AiFillGithub,AiFillLinkedin} from "react-icons/ai"
import {SiTelegram} from "react-icons/si"
interface ContactProps{
    [key:string]:any;
}

const Contact:FC = (props:ContactProps)=> {
    return <>
    <div className="flex bg-dark justify-center items-center h-screen">
        <div className="flex flex-col w-[800px] items-center justify-center text-white">
            <h1 className="text-5xl font-bold">Contact Me</h1>
            <div className="flex flex-col w-full mt-10 justify-center items-center">
                <form className="flex flex-col w-full">
                    <input name="username" type="text" className="w-full px-5 py-5 bg-dark border-slate-400 border-2 rounded outline-slate-300 text-lg my-3" placeholder="Your Name"></input>
                    <input name="email" type="text" className="w-full px-5 py-5 bg-dark border-slate-400 border-2 rounded outline-slate-300 text-lg my-3" placeholder="Your Email"></input>
                    <input name="subject" type="text" className="w-full px-5 py-5 bg-dark border-slate-400 border-2 rounded outline-slate-300 text-lg my-3" placeholder="Subject"></input>
                    <textarea name="message" className="w-full px-5 py-5 bg-dark border-slate-400 border-2 rounded outline-slate-300 text-lg my-3" placeholder="Message"></textarea>
                    <button className="w-full py-5 text-lg bg-dark border-2 rounded border-slate-400 hover:text-dark hover:bg-white hover:border-white my-3">SEND MESSAGE</button>
                </form>
                <div className="flex flex-row justify-center items-center mt-10 text-4xl">
                    <AiFillGithub className="mx-4" />
                    <AiFillLinkedin className="mx-4" />
                    <SiTelegram className="mx-4" />
                </div>
            </div>
        </div>
    </div>
    </>
}

export default Contact;