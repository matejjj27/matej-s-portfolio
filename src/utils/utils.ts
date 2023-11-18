export const handleCVDownload = () => {
  const cvUrl = import.meta.env.VITE_CV_URL;
  const link = document.createElement("a");
  link.href = cvUrl;
  link.download = "Matej Kostov Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
