import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Header from "./Header"
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus"
import { faArrowDownUpLock, faFloppyDisk, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons"
import { useState } from "react"
import { faArrowUp } from "@fortawesome/free-solid-svg-icons/faArrowUp"
import { faChevronUp } from "@fortawesome/free-solid-svg-icons/faChevronUp"
import PDF from "./PDF"
import { Splide, SplideSlide } from '@splidejs/react-splide';

// Default theme
import '@splidejs/react-splide/css';
// or only core styles
import '@splidejs/react-splide/css/core';

import Excel from "./Excel"
import QRCodeGenerate from "./QRCode"
import AgeAnalytics from "./AgeAnalytics"

function Body() {

    const [isHovered, setIsHovered] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsHovered(false); // ปิด dropdown เมื่อเลือกตัวเลือกแล้ว
    };
    
    const hdlChange = (e) => {
        setInput((prevInput) => ({
            ...prevInput,
            [e.target.name]: e.target.value
        }));
    };

    const [input, setInput] = useState({
        datetime: "",
    });

    const time = [
        { value: '10:00', label: '10:00' },
        { value: '11:00', label: '11:00' },
        { value: '13:00', label: '13:00' },
        { value: '14:00', label: '14:00' },
        { value: '15:00', label: '15:00' },
        { value: '16:00', label: '16:00' },
    ]

    return (
        <div>
            <Header />
            <div className="bg-[rgb(249,249,249)]">
                <div className="max-w-[65.3rem] mx-auto flex justify-center">
                    <div className="flex justify-center flex-col items-center">
                        <div className="flex justify-center flex-col items-center my-5">
                            <p className="font-sf-pro text-2xl font-bold my-5">Mac Studio</p>
                            <h1 className="font-sf-pro-th text-7xl font-extrabold">ขุมพลังที่ยิ่งใหญ่อย่างแท้จริง</h1>
                        </div>
                        <img className="my-10" src="https://www.apple.com/v/mac-studio/f/images/overview/hero/static_front__fmvxob6uyxiu_large.jpg" alt="" />
                        <div className="flex justify-center gap-7">
                            <p className="font-sf-pro-th font-medium text-xl">เริ่มต้นที่ ฿74,900</p>
                            <p className="font-bold">|</p>
                            <div className="flex gap-4">
                                <p className="font-sf-pro-th text-xl hover:underline hover:cursor-pointer">ดูกิจกรรม</p>
                                <p className="font-sf-pro font-bold text-xl">{">"}</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-20 mt-40 mb-40 items-center font-sf-pro-th font-bold text-7xl">
                            <p>ความกะทัดรัดที่น่าทึ่ง</p>
                            <p>การเชื่อมต่อที่หลากหลาย</p>
                            <p>อัดฉีดพลังแรงโดย</p>
                            <p>ชิป M2 Max และ M2 Ultra</p>
                        </div>
                    </div>
                </div>

                <div className="bg-black flex flex-col items-center py-52 gap-8 select-none pointer-events-none">
                    <div className="text-white font-sf-pro-th text-8xl w-[700px] mx-auto text-center">
                        <h1 className="">เลือกพลังพิเศษของคุณ</h1>
                    </div>
                    <div className="flex gap-10">
                        <div className="relative w-max">
                            <img className=" absolute left-[4.5rem] top-[4.5rem] w-[310px]" src="https://www.apple.com/v/mac-studio/f/images/overview/hero/mx_max__f9o887nvw2mq_medium.jpg" alt="" />
                            <img className="w-[450px]" src="https://www.apple.com/v/mac-studio/f/images/overview/hero/mx_max_glow__dbxncltafrcm_medium.png" alt="" />
                            <div className="flex flex-col justify-center items-center gap-3">
                                <p className="bg-gradient-to-r from-[rgba(214,118,235,1)] to-[rgba(130,39,255,1)] inline-block text-transparent bg-clip-text text-3xl font-sf-pro-th font-semibold">CPU แบบ 12-core</p>
                                <p className="bg-gradient-to-r from-[rgba(214,118,235,1)] to-[rgba(130,39,255,1)] inline-block text-transparent bg-clip-text text-3xl font-sf-pro-th font-semibold">GPU สูงสุดแบบ 38-core</p>
                                <p className="bg-gradient-to-r from-[rgba(214,118,235,1)] to-[rgba(130,39,255,1)] inline-block text-transparent bg-clip-text text-3xl font-sf-pro-th font-semibold">หน่วยความจำแบบรวม</p>
                                <p className="bg-gradient-to-r from-[rgba(214,118,235,1)] to-[rgba(130,39,255,1)] inline-block text-transparent bg-clip-text text-3xl font-sf-pro-th font-semibold">ขนาดสูงสุด 96GB</p>
                                <p className="bg-gradient-to-r from-[rgba(214,118,235,1)] to-[rgba(130,39,255,1)] inline-block text-transparent bg-clip-text text-3xl font-sf-pro-th font-semibold">แบนด์วิดท์หน่วยความจำ 400GB/s</p>
                            </div>
                        </div>
                        <div className="relative w-max">
                            <img className=" absolute left-[4.5rem] top-[4.5rem] w-[310px]" src="https://www.apple.com/v/mac-studio/f/images/overview/hero/mx_ultra__b7zrsiv2zomq_medium.jpg" alt="" />
                            <img className="w-[450px]" src="https://www.apple.com/v/mac-studio/f/images/overview/hero/mx_ultra_glow__d0ygqj9edkia_medium.png" alt="" />
                            <div className="flex flex-col justify-center items-center gap-3">
                                <p className="bg-gradient-to-r from-pink-200 via-purple-400 to-blue-500 inline-block text-transparent bg-clip-text text-3xl font-sf-pro-th font-semibold">CPU แบบ 24-core</p>
                                <p className="bg-gradient-to-r from-pink-200 via-purple-400 to-blue-500 inline-block text-transparent bg-clip-text text-3xl font-sf-pro-th font-semibold">GPU สูงสุดแบบ 76-core</p>
                                <p className="bg-gradient-to-r from-pink-200 via-purple-400 to-blue-500 inline-block text-transparent bg-clip-text text-3xl font-sf-pro-th font-semibold">หน่วยความจำแบบรวม</p>
                                <p className="bg-gradient-to-r from-pink-200 via-purple-400 to-blue-500 inline-block text-transparent bg-clip-text text-3xl font-sf-pro-th font-semibold">ขนาดสูงสุด 192GB</p>
                                <p className="bg-gradient-to-r from-pink-200 via-purple-400 to-blue-500 inline-block text-transparent bg-clip-text text-3xl font-sf-pro-th font-semibold">แบนด์วิดท์หน่วยความจำ 800GB/s</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white">
                <div className="max-w-[65.3rem] mx-auto flex flex-col justify-center">
                    <div className="flex justify-center flex-col items-center py-48 px-32">
                        <div className="font-sf-pro-th text-[2.3rem] font-semibold w-fit flex flex-col justify-center">
                            <p>Mac Studio ที่มือโปรด้านงานสร้างสรรค์ต่างก็</p>
                            <p>ยกนิ้วให้ วันนี้มาพร้อมขุมพลังเจเนอเรชั่นถัดไป</p>
                            <p>ในรูปแบบของชิป M2 Max ที่เร็วสุดขั้ว และ</p>
                            <p>ชิป M2 Ultra ที่แรงทะลุขีดจำกัด แถมยังอัดแน่น</p>
                            <p>ด้วยประสิทธิภาพที่แรงสุดพลังและการเชื่อมต่อ</p>
                            <p>อันหลากหลายในรูปทรงที่กะทัดรัดอย่างไม่น่าเชื่อ</p>
                            <p>ให้คุณเอื้อมถึงทุกอย่างที่ต้องการได้ง่ายและ</p>
                            <p>พร้อมพลิกโฉมทุกพื้นที่ให้กลายเป็นสตูดิโอ</p>
                            <p>ได้ในทันที</p>
                        </div>
                        <div className="flex justify-start w-full mt-10 items-center">
                            <button className="font-sf-pro-th text-xl font-semibold py-4 px-5 rounded-full border-2 border-black flex items-center gap-2 hover:bg-black hover:text-white transition duration-500 ease-in-out" type="button">เจาะลึกชิป M2 Max และชิป M2 Ultra <FontAwesomeIcon className="border-2 px-1 py-[3px] text-sm border-black rounded-full" icon={faPlus} /></button>
                        </div>
                    </div>
                </div>

                <div className="bg-[rgb(249,249,249)] max-w-[80rem] h-screen mx-auto rounded-t-[2.5rem] flex justify-center flex-col py-48 px-56 font-sf-pro-th font-semibold">
                    <p className="bg-gradient-to-r from-[rgba(214,118,235,1)] to-[rgba(130,39,255,1)] inline-block text-transparent bg-clip-text text-[96px] my-2">ชิป M2 Max</p>
                    <p className="text-[28px]">ชิป M2 Max มาพร้อมขุมพลังสำหรับรับมือกับงานท้าทายเกือบ</p>
                    <p className="text-[28px]">ทุกระดับ ไม่ว่าจะอัดเพลงของคุณเอง หรือมิกซ์เพลงคุณภาพระดับ</p>
                    <p className="text-[28px]">มืออาชีพ ไปจนถึงตัดต่อวิดีโอชิ้นแรกของคุณ หรือเพิ่มเอฟเฟ็กต์ลง</p>
                    <p className="text-[28px]">ในภาพยนตร์ขนาดยาว ก็มั่นใจได้เลยว่าชิป M2 Max ที่เร็วสุดขั้ว</p>
                    <p className="text-[28px]">พร้อมลุยไปกับคุณเต็มที่</p>
                    <div className="flex justify-between my-5">
                        <div>
                            <p className="text-[17px]">ประสิทธิภาพ CPU</p>
                            <p>เร็วขึ้นสูงสุด<sup>1</sup></p>
                            <p className="text-[64px]">1.8 เท่า</p>
                        </div>
                        <div>
                            <p className="text-[17px]">ประสิทธิภาพ GPU</p>
                            <p>เร็วขึ้นสูงสุด<sup>2</sup></p>
                            <p className="text-[64px]">3.6 เท่า</p>
                        </div>
                        <div>
                            <p className="text-[17px]">การเรียนรู้ของระบบ</p>
                            <p>เร็วขึ้นสูงสุด<sup>3</sup></p>
                            <p className="text-[64px]">4.4 เท่า</p>
                        </div>
                    </div>
                </div>

                <div className="max-w-[80rem] mx-auto relative font-sf-pro-th font-semibold text-white">
                    <img className=" object-cover" src="https://www.apple.com/v/mac-studio/f/images/overview/performance/specs_max_startframe__dgooude1ylg2_large.jpg" alt="" />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col gap-10 py-48 px-56 text-[28px]">
                        <div className="w-[350px]">
                            <p>เล่นวิดีโอ ProRes ระดับ 8K ได้สูงสุด 10 สตรีม<sup>4</sup></p>
                        </div>
                        <div className="w-[200px]">
                            <p>ทรานซิสเตอร์ 6.7 หมื่นล้านตัว</p>
                        </div>
                        <div className="w-[350px]">
                            <p>รายการประมวลผลต่อวินาที สูงสุด 15.8 ล้านล้านรายการ</p>
                        </div>
                        <div>
                            <p>รองรับสูงสุด 5 จอภาพ</p>
                        </div>
                        <div className="w-[350px]">
                            <p>เข้ารหัสและถอดรหัส H.264, HEVC และ ProRes</p>
                        </div>
                    </div>
                </div>

                <div className="bg-black h-screen mx-auto flex justify-center flex-col py-48 px-56 font-sf-pro-th font-semibold text-white">
                    <div className="max-w-[63.3rem] mx-auto">
                        <p className="bg-gradient-to-r from-[rgba(214,118,235,1)] to-[rgba(130,39,255,1)] inline-block text-transparent bg-clip-text text-[96px] my-2">ชิป M2 Max</p>
                        <p className="text-[28px]">ชิป M2 Max มาพร้อมขุมพลังสำหรับรับมือกับงานท้าทายเกือบ</p>
                        <p className="text-[28px]">ทุกระดับ ไม่ว่าจะอัดเพลงของคุณเอง หรือมิกซ์เพลงคุณภาพระดับ</p>
                        <p className="text-[28px]">มืออาชีพ ไปจนถึงตัดต่อวิดีโอชิ้นแรกของคุณ หรือเพิ่มเอฟเฟ็กต์ลง</p>
                        <p className="text-[28px]">ในภาพยนตร์ขนาดยาว ก็มั่นใจได้เลยว่าชิป M2 Max ที่เร็วสุดขั้ว</p>
                        <p className="text-[28px]">พร้อมลุยไปกับคุณเต็มที่</p>
                        <div className="flex justify-between my-5">
                            <div>
                                <p className="text-[17px]">ประสิทธิภาพ CPU</p>
                                <p>เร็วขึ้นสูงสุด<sup>1</sup></p>
                                <p className="text-[64px]">1.8 เท่า</p>
                            </div>
                            <div>
                                <p className="text-[17px]">ประสิทธิภาพ GPU</p>
                                <p>เร็วขึ้นสูงสุด<sup>2</sup></p>
                                <p className="text-[64px]">3.6 เท่า</p>
                            </div>
                            <div>
                                <p className="text-[17px]">การเรียนรู้ของระบบ</p>
                                <p>เร็วขึ้นสูงสุด<sup>3</sup></p>
                                <p className="text-[64px]">4.4 เท่า</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full h-screen bg-slate-200 font-sf-pro">
                    <div className="flex p-10 max-w-[80rem] justify-center mx-auto gap-5 pt-16">
                        <div className="w-2/6 p-5 pt-0 bg-white rounded-3xl shadow-lg">
                            <img className="mx-auto rounded-md shadow-md mt-2 mb-5" src="https://picsum.photos/id/120/200" alt="photo" />
                            <div className="flex gap-2 my-5 justify-between">
                                <p>My profile</p>
                                <div className="text-end">
                                    <p>26/03/2002</p>
                                    <p>123 SNRU, Sakon Nakhon</p>
                                </div>
                            </div>
                            <div className="flex justify-between mt-5">
                                <p>Sami Ratman</p>
                                <p>+1-567-789-321-4567</p>
                            </div>
                            <hr />
                            <div className="mt-5">
                                <p>samiratman002@gmail.com</p>
                            </div>
                            <hr />
                            <div className="flex items-center gap-5 mt-5">
                                <p>SMS alert activation</p>
                                <FontAwesomeIcon className="bg-green-500 rounded-full text-white" icon={faCheckCircle} />
                            </div>
                            <div className="flex justify-center items-center mt-5">
                                <button className="bg-slate-600 rounded-full px-10 py-2 text-white flex gap-2 items-center" type="button"><FontAwesomeIcon icon={faFloppyDisk} />Save</button>
                            </div>
                        </div>

                        <div className="flex gap-4 w-2/6 flex-col">
                            <div className="flex flex-col justify-between items-center bg-white rounded-3xl shadow-lg">
                                <div className="w-full flex justify-between my-4 px-8">
                                    <p className="font-bold">My Xpay accounts</p>
                                    <div className="flex gap-4 items-center">
                                        <FontAwesomeIcon className="text-gray-400" icon={faMagnifyingGlass} />
                                        <button className="bg-gray-300 font-bold px-4 h-5 text-slate-600 rounded-full text-[10px]" type="button">Edit</button>
                                    </div>
                                </div>
                                <hr className="w-full" />
                                <div className="w-full px-8 py-4 flex flex-col gap-4">
                                    <div className="flex items-center gap-2 justify-between">
                                        <div className="text-[12px]">
                                            <p className="font-bold">Active account</p>
                                            <p>asd4t-qwf5a-aswr8-ggds5</p>
                                        </div>
                                        <div className="text-[12px]">
                                            <button type="button">Block Accounts</button>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 justify-between mb-6">
                                        <div className="text-[12px]">
                                            <p className="font-bold">Blocked account</p>
                                            <p>ty4t8-yqf1p-mfd28-u5teq</p>
                                        </div>
                                        <div className="text-[12px]">
                                            <button type="button">Unblock Accounts</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between items-center bg-white rounded-3xl shadow-lg">
                                <div className="w-full flex justify-between my-4 px-8">
                                    <p className="font-bold">My Bills</p>
                                    <button className="bg-gray-300 font-bold px-4 h-5 text-slate-600 rounded-full text-[10px]" type="button">Filter by</button>
                                </div>
                                <hr className="w-full" />
                                <div className="w-full px-8 py-4 flex flex-col gap-4">
                                    <div className="flex items-center gap-2 justify-between">
                                        <div className="text-[12px]">
                                            <p className="font-bold">Phone bill</p>
                                        </div>
                                        <button className="bg-gray-300 font-bold px-4 h-5 text-slate-600 rounded-full text-[10px]" type="button">Bill paid</button>
                                    </div>
                                    <div className="flex items-center gap-2 justify-between">
                                        <div className="text-[12px]">
                                            <p className="font-bold">internet bill</p>
                                        </div>
                                        <button className="bg-gray-300 font-bold px-4 h-5 text-slate-600 rounded-full text-[10px]" type="button">Not paid</button>
                                    </div>
                                    <div className="flex items-center gap-2 justify-between">
                                        <div className="text-[12px]">
                                            <p className="font-bold">123456</p>
                                        </div>
                                        <button className="bg-gray-300 font-bold px-4 h-5 text-slate-600 rounded-full text-[10px]" type="button">Bill paid</button>
                                    </div>
                                    <div className="flex items-center gap-2 justify-between mb-6">
                                        <div className="text-[12px]">
                                            <p className="font-bold">Blocked account</p>
                                        </div>
                                        <button className="bg-gray-300 font-bold px-4 h-5 text-slate-600 rounded-full text-[10px]" type="button">Bill paid</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative" onMouseLeave={() => setIsHovered(false)}>
                            <div
                                className="flex items-center gap-1 py-3 px-5 bg-blue-500 text-white cursor-pointer rounded-full"
                                onMouseEnter={() => setIsHovered(true)}
                            >
                                Hover over me
                                <FontAwesomeIcon
                                    className={`ml-1 p-0.5 transition ease-in-out duration-300 bg-white rounded-full text-blue-500 ${isHovered ? 'rotate-180' : 'rotate-0'
                                        }`}
                                    icon={faChevronUp}
                                />
                            </div>
                            <div
                                className={` absolute top-12 rounded-md w-[12rem] mt-2 p-2 bg-gray-100 border border-gray-300 shadow-lg transition-all duration-300 ease-in-out ${isHovered ? 'block' : 'hidden'
                                    }`}
                                style={{
                                    opacity: isHovered ? 1 : 0,
                                    maxHeight: isHovered ? '1000px' : '0',
                                }}
                            >
                                <div
                                    className="p-2 rounded-md shadow-sm my-1 cursor-pointer hover:bg-gray-200"
                                    onClick={() => handleOptionClick('Option 1')}
                                >
                                    Option 1
                                </div>
                                <div
                                    className="p-2 rounded-md shadow-sm my-1 cursor-pointer hover:bg-gray-200"
                                    onClick={() => handleOptionClick('Option 2')}
                                >
                                    Option 2
                                </div>
                                <div
                                    className="p-2 rounded-md shadow-sm my-1 cursor-pointer hover:bg-gray-200"
                                    onClick={() => handleOptionClick('Option 3')}
                                >
                                    Option 3
                                </div>
                            </div>
                            {selectedOption && (
                                <div className="mt-4 p-4 bg-green-200">
                                    Selected Option: {selectedOption}
                                </div>
                            )}
                        </div>

                    </div>
                </div>

                {/* <PDF /> */}
                <div className="w-full mx-auto border-t-8 border-black">
                    <Splide
                        options={{
                            type: 'loop',
                            rewind: true,
                            speed: 600,
                            // perPage: 3,
                            perMove: 1,
                            focus: 'center',
                            autoWidth: true,
                            // autoHeight: true,
                            autoplay: true,
                            // interval: 3000,
                            // pauseOnHover: true,
                            pauseOnFocus: true,
                            resetProgress: false,
                            lazyLoad: 'nearby',
                            // start: 0,
                            gap: '1rem',
                            // padding: { left: '2rem', right: '2rem' },
                            arrows: true,
                            pagination: true,
                            keyboard: true,
                            drag: true,
                            // direction: 'ltr',
                            // heightRatio: 0.5,
                        }}
                        aria-label="My Favorite Images"
                    >
                        <SplideSlide>
                            <img src="https://picsum.photos/id/125/200" alt="Image 1" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src="https://picsum.photos/id/130/200" alt="Image 2" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src="https://picsum.photos/id/130/200" alt="Image 2" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src="https://picsum.photos/id/130/200" alt="Image 2" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src="https://picsum.photos/id/130/200" alt="Image 2" />
                        </SplideSlide>
                    </Splide>
                </div>

                <div className="max-w-full mx-auto py-5 my-10 font-sf-pro text-sm border-t-8 border-black ">
                    <p className="text-xl font-bold mb-2">Time</p>
                    <div className="grid grid-cols-3 gap-3">
                        {time.map((el, index) => (
                            <label key={index} className={`flex justify-center items-center px-2 py-2 rounded-md border border-slate-400 bg-white ${input.datetime.trim() === el.value.trim() ? "font-semibold border border-blue-400" : ""}`}>
                                {console.log(input.datetime.trim() === el.value.trim())}
                                <input
                                    type="radio"
                                    name="datetime"
                                    value={el.value}
                                    checked={input.datetime === el.value}
                                    onChange={hdlChange}
                                    className="mr-2 hidden"
                                />
                                <span>{el.label}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <Excel />

                <QRCodeGenerate price={50.50} />

                <div className="my-2 border-t p-2">
                    <AgeAnalytics />
                </div>

            </div>
        </div>
    )
}

export default Body