"use client";
import { useState } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiTelegram } from "react-icons/si";
import Link from "next/link";
const Contact = () => {
    const [showNotification, setShowNotification] = useState(false);

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [subject, setSubject] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [submitted, setSubmitted] = useState<boolean>(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            setSubmitted(true);
            const response = await fetch("/api/email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, name, subject, message }),
            });
            if (response.ok) {
                setEmail("");
                setName("");
                setSubject("");
                setMessage("");
                setShowNotification(true);
                setTimeout(() => {
                    setShowNotification(false);
                }, 3000);
            } else {
                console.error("Error:", response.statusText);
            }
        } catch (error) {
            let errorMessage = "Failed to do something exceptional";
            if (error instanceof Error) {
                errorMessage = error.message;
            }
            console.log(errorMessage);
        } finally {
            setSubmitted(false);
        }
    };
    return (
        <section id="contact" className="flex bg-dark justify-center items-center h-screen font-poppins">
            <div className="flex flex-col w-[800px] items-center justify-center text-white">
                <h1 className="text-3xl md:text-5xl font-bold">Contact Me</h1>
                <div className="flex flex-col w-full mt-10 justify-center items-center ">
                    <form onSubmit={handleSubmit} className="relative flex flex-col w-full px-6 md:px-0">
                        <label htmlFor="username" className="hidden">
                            Your Name
                        </label>
                        <input
                            name="username"
                            type="text"
                            className="w-full px-5 py-4 bg-dark border-slate-400 border-2 rounded outline-slate-300 text-lg my-2"
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                        ></input>
                        <label htmlFor="email" className="hidden">
                            Your Email
                        </label>
                        <input
                            name="email"
                            type="text"
                            value={email}
                            className="w-full px-5 py-4 bg-dark border-slate-400 border-2 rounded outline-slate-300 text-lg my-2"
                            placeholder="Your Email"
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        ></input>
                        <label htmlFor="subject" className="hidden">
                            Subject
                        </label>
                        <input
                            name="subject"
                            type="text"
                            value={subject}
                            className="w-full px-5 py-4 bg-dark border-slate-400 border-2 rounded outline-slate-300 text-lg my-2"
                            placeholder="Subject"
                            onChange={(e) => {
                                setSubject(e.target.value);
                            }}
                        ></input>
                        <label htmlFor="message" className="hidden">
                            Message
                        </label>
                        <textarea
                            name="message"
                            value={message}
                            className="w-full px-5 py-4 bg-dark border-slate-400 border-2 rounded outline-slate-300 text-lg my-2"
                            placeholder="Message..."
                            onChange={(e) => {
                                setMessage(e.target.value);
                            }}
                        ></textarea>
                        <button
                            type="submit"
                            name="submit"
                            value="SEND MESSAGE"
                            className={`w-full py-3 text-lg  border-2 rounded border-slate-400  my-2 ${
                                submitted
                                    ? "bg-slate-400 cursor-not-allowed"
                                    : "bg-dark hover:text-dark hover:bg-white hover:border-white"
                            }`}
                            disabled={submitted}
                        >
                            {submitted ? "Sending..." : "SEND MESSAGE"}
                        </button>
                        {showNotification && (
                            <div className="absolute bottom-0 right-0 -mb-8 md:-mb-10 mx-6 md:mx-0 bg-white text-slate-800 p-2 md:p-3 mt-2 rounded text-xs text-align transition-opacity ease-in-out duration-100">
                                Your message just sent!
                            </div>
                        )}
                    </form>
                    <div className="flex flex-row justify-center items-center mt-10 text-4xl">
                        <Link target="_blank" href="https://github.com/s0ra0000">
                            <AiFillGithub className="mx-4 cursor-pointer hover:text-rose-500 " />
                        </Link>

                        <Link target="_blank" href="https://www.linkedin.com/in/bayasgalan-davaanyam-183a94281/">
                            <AiFillLinkedin className="mx-4 cursor-pointer hover:text-rose-500" />
                        </Link>

                        <Link target="_blank" href="https://t.me/s0ra0000">
                            <SiTelegram className="mx-4 cursor-pointer hover:text-rose-500" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
