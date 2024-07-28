import { useState } from "react"

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
        const age = calculateAge(birthDay)
        const zodiac = getZodiacAnimal(birthDay)
        setAgeDetails({ ...age, zodiac })
    }

    return (
        <div className="max-w-[25rem] mx-auto border p-4 rounded-xl shadow-md font-sf-pro-th">
            <p className="text-xl">ระบบตรวจสอบอายุ</p>
            <p>กรุณากรอกข้อมูล วัน/เดือน/ปีเกิด</p>
            <div className="">
                <input
                    className="font-sf-pro font-semibold"
                    type="date"
                    name="date"
                    placeholder="dd-mm-yyyy"
                    onChange={hdlChange}
                />
                <button onClick={hdlSubmit}>ยืนยัน</button>
            </div>
            {ageDetails && (
                <div className="mt-2 pt-2 border-t">
                    <p>อายุของคุณคือ</p>
                    <div className="grid grid-cols-3 text-center">
                        <p><span className="font-sf-pro font-semibold">{ageDetails.years}</span> ปี</p>
                        <p><span className="font-sf-pro font-semibold">{ageDetails.months}</span> เดือน</p>
                        <p><span className="font-sf-pro font-semibold">{ageDetails.days}</span> วัน</p>
                    </div>
                    <p>ปีนักษัตรของคุณคือ {ageDetails.zodiac}</p>
                </div>
            )}
        </div>
    )
}
