
import React, { useState, useEffect } from 'react';

function PDF() {
    const [pdfFiles, setPdfFiles] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedPdf, setSelectedPdf] = useState(null);

    useEffect(() => {
        // fetchPdfFiles();
    }, []);

    const fetchPdfFiles = async () => {
        try {
            const response = await fetch(`http://localhost:8080/api/pdf?search=Home Work AR.pdf`);
            const data = await response.json();
            setPdfFiles(data.files);
        } catch (error) {
            console.error('Error fetching PDF files:', error);
            setPdfFiles([]);
        }
    };

    // console.log(pdfFiles[0].file)

    return (
        <>
            {pdfFiles !== "" && (
                <div className="mt-32 w-full h-screen p-5">
                    <h1>PDF Viewer</h1>
                    <p>ชื่อไฟล์ {pdfFiles[0]?.file}</p>
                    <p>วันที่อัพโหลด {new Date(pdfFiles[0]?.created).toLocaleString('th-TH')}</p>
                    <p>ขนาดไฟล์ {(pdfFiles[0]?.size / 1048576)?.toFixed(2)} MB</p>
                    <iframe
                        title="PDF Viewer"
                        src={`http://localhost:8080/api/pdf/สแกนปี66/พค.66/Home Work AR.pdf`}
                        width="100%"
                        height="700px"
                    />
                </div>
            )}
        </>
    )
}

export default PDF