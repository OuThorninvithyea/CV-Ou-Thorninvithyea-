/**
 * Temporarily disables CSS animations and transitions for clean PDF capture.
 * Returns a cleanup function that restores them.
 */
export const disableAnimationsTemporarily = () => {
  const style = document.createElement("style");
  style.setAttribute("data-capture-style", "true");
  style.innerHTML = `* { animation: none !important; transition: none !important; }`;
  document.head.appendChild(style);
  return () => {
    style.remove();
  };
};

/**
 * Captures the Resume component and exports it as an A4 PDF.
 * Uses html2canvas for rendering and jsPDF for PDF generation.
 */
export const exportResumePdf = async (setIsExporting) => {
  try {
    setIsExporting(true);
    const target =
      document.querySelector("#resume-print") ||
      document.querySelector("#about");
    if (!target) {
      setIsExporting(false);
      return;
    }

    // Ensure the section is in view so framer-motion "whileInView" content is rendered
    if (target.id !== "resume-print") {
      target.scrollIntoView({ behavior: "instant", block: "start" });
    }

    // Temporarily disable animations/transitions to avoid blank renders
    disableAnimationsTemporarily();

    // Wait a tick for layout/paint before capturing
    await new Promise((resolve) => setTimeout(resolve, 400));

    const [{ jsPDF }, html2canvasModule] = await Promise.all([
      import("jspdf"),
      import("html2canvas"),
    ]);
    const html2canvas = html2canvasModule.default;

    const canvas = await html2canvas(target, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff",
      windowWidth: 794,
      windowHeight: 1123,
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = pageWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save("CV_OuThorninvithyea.pdf");
  } catch (error) {
    console.error("PDF export failed:", error);
  } finally {
    // Restore animations regardless of success/failure
    const styleTag = document.querySelector(
      "style[data-capture-style='true']"
    );
    if (styleTag) styleTag.remove();
    setIsExporting(false);
  }
};
