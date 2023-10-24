"use client";

import { useRouter } from "next/navigation";
import { BiArrowBack } from "react-icons/bi";
import { useCallback } from "react";


interface HeaderProps {
    showBackArrow?: boolean;
    label: string;
}

const Header:React.FC<HeaderProps> = ({ showBackArrow, label}) => {

    const router = useRouter();
    const handleBack = useCallback(() => {
        router.back();
      }, [router]);
  return (
    <div>
        <div className="flex flex-row items-center gap-2">
            {showBackArrow && (
                <BiArrowBack 
                    onClick={handleBack} 
                    color="white" 
                    size={20} 
                    className="
                    cursor-pointer 
                    hover:opacity-70 
                    transition
                "/>
            )}
            <h1 className="text-white text-xl font-semibold">{label}</h1>
        </div>
    </div>
  )
}

export default Header