
function Header() {
    return (
        <div className="sticky top-0 z-20 w-full bg-[rgb(249,249,249)]/80 backdrop-blur-xl font-extrabold font-sf-pro text-xl">
            <div className="max-w-[65.3rem] mx-auto px-6">
                <div className="h-12 flex justify-between items-center">
                    <h1>Mac Studio</h1>
                    <div className="flex text-[12px] gap-5">
                        <p className="font-sf-pro-th hover:cursor-pointer">ภาพรวม</p>
                        <p className="font-sf-pro-th hover:cursor-pointer">ข้อมูลทางเทคนิค</p>
                        <p className="font-sf-pro-th hover:cursor-pointer">เปรียบเทียบ</p>
                        <p className="font-sf-pro-th hover:cursor-pointer">มือใหม่ใช้ <span className="font-sf-pro">Mac</span></p>
                        <div className="flex items-center">
                            <button className="font-sf-pro-th bg-blue-600 rounded-full px-4 h-6 text-white flex items-center" type="button">ซื้อ</button>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Header