
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

export default function Excel() {
  const message = [
    { no: "1", username: "Donut", message: "test message 01", role: "user" },
    { no: "2", username: "Donut", message: "test message 02", role: "user" },
    { no: "3", username: "Nutdo", message: "test message 01", role: "admin" },
    { no: "4", username: "Donut", message: "test message 03", role: "user" },
    { no: "5", username: "Donut", message: "test message 04", role: "user" },
    { no: "6", username: "Donut", message: "test message 05", role: "user" },
    { no: "7", username: "Nutdo", message: "test message 02", role: "admin" },
    { no: "8", username: "Donut", message: "test message 06", role: "user" },
    { no: "9", username: "Donut", message: "test message 07", role: "user" },
    { no: "10", username: "Donut", message: "test message 08", role: "user" },
  ];

  const exportToExcel = () => {

    const worksheet = XLSX.utils.json_to_sheet(message); // ข้อมูลที่ได้มา
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'ชีทแรก');

    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(blob, 'ชื่อไฟล์อะไรไม่รู้.xlsx');
  };

  return (
    <div className="h-screen px-4 flex flex-col items-center justify-center font-sf-pro border-t-8 border-black">
      <table className="table-auto w-full border-collapse border border-gray-400">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">No</th>
            <th className="border border-gray-300 px-4 py-2">Username</th>
            <th className="border border-gray-300 px-4 py-2">Message</th>
            <th className="border border-gray-300 px-4 py-2">Role</th>
          </tr>
        </thead>
        <tbody>
          {message.map((msg) => (
            <tr key={msg.no}>
              <td className="border border-gray-300 px-4 py-2">{msg.no}</td>
              <td className="border border-gray-300 px-4 py-2">{msg.username}</td>
              <td className="border border-gray-300 px-4 py-2">{msg.message}</td>
              <td className="border border-gray-300 px-4 py-2">{msg.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 ">
        <button onClick={exportToExcel} className="bg-slate-100 px-4 py-2 rounded-lg border border-blue-400 select-none hover:bg-blue-50 hover:border-blue-600 transition-all hover:animate-spin duration-150 ease-in-out shadow-md">Export To Excel</button>
      </div>
    </div>
  );
}