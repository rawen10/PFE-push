import React from "react";
import bg from "../assets/video.mp4";
import Button from "@mui/joy/Button";

const Download = () => {
  const [variant, setVariant] = React.useState("soft");
  const handleDownload = () => {
    // Replace 'your_exe_file_url' with the URL of your exe file
    const fileUrl = process.env.PUBLIC_URL + "/safelearnFil.exe";

    // Create an anchor element
    const link = document.createElement("a");
    link.href = fileUrl;

    // Set the download attribute to specify the file name
    link.download = "safelearnFil.exe";

    // Append the anchor to the body and click it
    document.body.appendChild(link);
    link.click();

    // Clean up by removing the anchor element
    document.body.removeChild(link);
  };

  return (
    <div style={{ position: "relative", overflow: "hidden", height: "100vh" }}>
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      >
        <source src={bg} type="video/mp4" />
      </video>
      <div
        style={{
          position: "absolute",
          top: "16%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: "1",
          color: "white",
          textAlign: "center",
          width: "100%",
          fontSize: "40px",
          fontWeight: "10px",
        }}
      >
        Download Federated Learning Model
      </div>
      <div
        style={{
          position: "absolute",
          top: "85%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: "1",
          textAlign: "center",
          width: "100%",
        }}
      >
        <Button
          onClick={handleDownload}
          size="large"
          variant={variant}
          color="primary"
          style={{ width: "200px", height: "50px" }}
        >
          Download
        </Button>
      </div>
    </div>
  );
};

export default Download;
