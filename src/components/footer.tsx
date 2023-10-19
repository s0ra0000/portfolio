import React,{FC} from "react";
interface FooterProps{
    [key:string]:any;
}

const Footer:FC = (props:FooterProps) =>{
    return <>
        <div className="flex bg-dark justify-center items-center">
            <div className="flex flex-col w-[800px] items-center justify-center text-slate-300 py-4 text-xs">
                <p>&copy;2023 Davaanyam Bayasgalan</p>
            </div>
        </div>
    </>
}

export default Footer;