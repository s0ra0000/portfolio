import React, { FC } from "react";
import StackItem from "./StackItem";

const Stack: FC = () => {
    return (
        <section id="stack" className="flex bg-dark justify-center items-center h-screen font-poppins">
            <div className="flex flex-col w-[1200px] items-center justify-center text-white">
                <h1 className="text-2xl md:text-4xl font-bold">
                    My Tech{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-red-400 to-red-500">
                        Stack
                    </span>
                </h1>
                <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-12 md:gap-x-20 lg:gap-x-32 gap-y-10 md:gap-y-12 lg:gap-y-20">
                    <StackItem img="/stack/html.png" name="HTML5" />
                    <StackItem img="/stack/css.png" name="CSS3" />
                    <StackItem img="/stack/sass.png" name="SASS" />
                    <StackItem img="/stack/tailwind.png" name="TAILWIND" />
                    <StackItem img="/stack/js.png" name="JAVASCRIPT" />
                    <StackItem img="/stack/react.png" name="REACT" />
                    <StackItem img="/stack/next.png" name="NEXT.JS" />
                    <StackItem img="/stack/fastify.png" name="FASTIFY" />
                    <StackItem img="/stack/git.png" name="GIT" />
                    <StackItem img="/stack/github.png" name="GITHUB" />
                </div>
            </div>
        </section>
    );
};

export default Stack;
