import { useState } from "react"
import { toast } from "react-toastify"

const zodiacAnimals = [
    "หนู : ชวด", "วัว : ฉลู", "เสือ : ขาล", "กระต่าย : เถาะ", "มังกร : มะโรง", "งู : มะเส็ง",
    "ม้า : มะเมีย", "แพะ : มะแม", "ลิง : วอก", "ไก่ : ระกา", "หมา : จอ", "หมู : กุน"
]

export default function AgeAnalytics() {
    const [date, setDate] = useState("")
    const [ageDetails, setAgeDetails] = useState(null)

    const hdlChange = (e) => {
        setDate(e.target.value)
    }

    const calculateAge = (birthDay) => {
        const bDay = new Date(birthDay)
        const toDay = new Date()

        let years = toDay.getFullYear() - bDay.getFullYear()
        let months = toDay.getMonth() - bDay.getMonth()
        let days = toDay.getDate() - bDay.getDate()

        if (days < 0) {
            months--
            days += new Date(toDay.getFullYear(), toDay.getMonth(), 0).getDate()
        }

        if (months < 0) {
            years--
            months += 12
        }

        return { years, months, days }
    }

    const getZodiacAnimal = (birthDay) => {
        const birthYear = new Date(birthDay).getFullYear()
        const zodiacIndex = (birthYear - 4) % 12
        return zodiacAnimals[zodiacIndex].replace(":", "หรือ")
    }

    const hdlSubmit = () => {
        const birthDay = date
        if (birthDay === "") {
            toast.warning("กรุณากรอกเลือกวันเดือนปีเกิด", {
                theme: 'colored'
            })
        } else {
            const age = calculateAge(birthDay)
            const zodiac = getZodiacAnimal(birthDay)
            setAgeDetails({ ...age, zodiac })
        }
    }

    return (
        <div className="max-w-[25rem] mx-auto border p-4 rounded-xl shadow-md font-sf-pro-th select-none">
            <p className="text-xl px-1">ระบบตรวจสอบอายุ</p>
            <p className="my-1 px-2">กรุณากรอกข้อมูล วัน/เดือน/ปีเกิด</p>
            <div className="grid grid-cols-6 my-2 gap-2">
                <input
                    className="font-sf-pro font-semibold col-span-4 border px-3 py-1.5 rounded-md shadow-inner hover:cursor-pointer"
                    type="date"
                    name="date"
                    placeholder="dd-mm-yyyy"
                    onChange={hdlChange}
                />
                <button className="col-span-2 border px-3 py-1.5 rounded-md shadow-inner" onClick={hdlSubmit}>ยืนยัน</button>
            </div>
            {ageDetails && (
                <div className="mt-2 pt-2 border-t">
                    <p className="px-1 underline underline-offset-2">อายุของคุณ คือ</p>
                    <div className="grid grid-cols-3 text-center border-y py-1 my-2 shadow-inner">
                        <p><span className="font-sf-pro font-semibold">{ageDetails.years}</span> ปี</p>
                        <p><span className="font-sf-pro font-semibold">{ageDetails.months}</span> เดือน</p>
                        <p><span className="font-sf-pro font-semibold">{ageDetails.days}</span> วัน</p>
                    </div>
                    <p className="text-center">ปีนักษัตรของคุณคือ <span className="underline underline-offset-4">{ageDetails.zodiac}</span></p>
                </div>
            )}
        </div>
    )
}
