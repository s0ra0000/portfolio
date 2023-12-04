import { FC } from "react";
import Image from "next/image";
interface StackItemProps {
    img: string;
    name: string;
}
const StackItem: FC<StackItemProps> = ({ img, name }) => {
    return (
        <div className="w-[50px] sm:w-[80px] md:w-[100px] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-rose-500 hover:via-red-400 hover:to-red-500">
            <Image className="invert" src={img} width={100} height={100} alt={""} />
            <p className="w-full text-center block my-1 font-bold text-xs md:text-sm tracking-wide">{name}</p>
        </div>
    );
};

export default StackItem;
