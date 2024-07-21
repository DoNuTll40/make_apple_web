
import { faApple } from "@fortawesome/free-brands-svg-icons/faApple"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { faBagShopping } from "@fortawesome/free-solid-svg-icons/faBagShopping"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react";

function Navbar() {

    const [isHovered, setIsHovered] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsHovered(false); // ปิด dropdown เมื่อเลือกตัวเลือกแล้ว
    };

    return (
        <div className="z-50 relative" onMouseLeave={() => setIsHovered(false)}>
            <div className="max-w-[65.3rem] h-11 mx-auto flex justify-between items-center font-sf-pro text-[12px] px-6 text-[rgb(29,29,31)]">
                <p className="text-[17px] py-0 hover:cursor-pointer"><FontAwesomeIcon icon={faApple} /></p>
                <p className="font-sf-pro-th hover:cursor-pointer" onMouseEnter={() => setIsHovered(true)}>ร้าน</p>
                <p className="hover:cursor-pointer">Mac</p>
                <p className="hover:cursor-pointer">iPad</p>
                <p className="hover:cursor-pointer">iPhone</p>
                <p className="hover:cursor-pointer">Watch</p>
                <p className="hover:cursor-pointer">AirPods</p>
                <p className="font-sf-pro-th hover:cursor-pointer"><span>TV</span> และบ้าน</p>
                <p className="font-sf-pro-th hover:cursor-pointer">ความบันเทิง</p>
                <p className="font-sf-pro-th hover:cursor-pointer">อุปกรณ์เสริม</p>
                <p className="font-sf-pro-th hover:cursor-pointer">บริการช่วยเหลือ</p>
                <p className="text-[15px] hover:cursor-pointer"><FontAwesomeIcon icon={faMagnifyingGlass} /></p>
                <p className="text-[15px] hover:cursor-pointer"><FontAwesomeIcon icon={faBagShopping} /></p>
            </div>
            <div
                className={`absolute w-full h-screen backdrop-blur-md shadow-md transition-all duration-75 ease-in-out overflow-hidden es ${isHovered ? 'max-h-screen opacity-100 translate-y-0' : 'max-h-0 opacity-0 translate-y-[-20px]'}`}
                style={{ transition: 'max-height 0.3s ease-in-out, opacity 0.5s ease-in, opacity 0.2s ease-out, transform 0.3s ease-in-out, backdrop-filter 1s ease-in-out' }}
            >
                <div className="bg-white shadow-sm" onMouseLeave={() => setIsHovered(false)}>
                    <div
                        className="p-2 cursor-pointer hover:bg-gray-200"
                        onClick={() => handleOptionClick('Option 1')}
                    >
                        Option 1
                    </div>
                    <div
                        className="p-2 cursor-pointer hover:bg-gray-200"
                        onClick={() => handleOptionClick('Option 2')}
                    >
                        Option 2
                    </div>
                    <div
                        className="p-2 cursor-pointer hover:bg-gray-200"
                        onClick={() => handleOptionClick('Option 3')}
                    >
                        Option 3
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar