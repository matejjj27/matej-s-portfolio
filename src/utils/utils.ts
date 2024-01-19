export const handleCVDownload = (url: string) => {
  const cvUrl = url;
  const link = document.createElement("a");
  link.href = cvUrl;
  link.download = "Matej Kostov Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
