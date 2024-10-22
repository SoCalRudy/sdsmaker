"use client"
import { jsPDF } from "jspdf";
import handlePDF from "@/utilities/generatePDF";


function GeneratePDF() {
  
  const handleClick = () => {
    handlePDF();
  }

  return (
    <button onClick={handleClick}>Print</button>
  );
}

export default GeneratePDF;