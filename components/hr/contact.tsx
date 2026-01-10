"use client";

import { markdown } from 'tinypdf'
export default function DownloadPDF() {
  const generatePdf = () => {
    const pdf = markdown(`
الشركة المشغلة,العامل
عزيز آيت محمد ,ياسين عفيون 
`)

    const blob = new Blob([pdf], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "invoice.pdf";
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <button
      onClick={generatePdf}
      className="px-4 py-2 rounded bg-black text-white"
    >
      Download PDF
    </button>
  );
}
