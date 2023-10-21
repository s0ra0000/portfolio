import React, { FC } from "react";

const Footer: FC = () => {
    return (
        <>
            <div className="flex bg-dark justify-center items-center font-poppins">
                <div className="flex flex-col w-[800px] items-center justify-center text-slate-300 py-4 text-xs">
                    <p>&copy;2023 Davaanyam Bayasgalan</p>
                </div>
            </div>
        </>
    );
};

export default Footer;
