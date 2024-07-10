import React from "react";
import figma from "../assets/figma.png";

function Home() {
  return (
    <div style={{ paddingTop: 150,height: "100vh"}}>
      <div
        class="home"
        style={{
          color: "white",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column", // Set flex-direction to column to stack h1 and h2 vertically
          alignItems: "center", // Align items at the center horizontally
        }}
      >
        <h1
          style={{
            background:
              "linear-gradient(to right, #FF3BFF 0%, #ECBFBF 38%, #5C24FF 76%, #D94FD5 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontFamily: "Inter var, sans-serif",
            fontWeight: "400",
            fontSize: 50,
            marginBottom: 20, // Add margin bottom to create space between h1 and h2
          }}
        >
          Welcome To SafeLearn
        </h1>
        <h2
          style={{
            fontFamily: "Inter var, sans-serif",
            fontWeight: "600",
            fontSize: 30,
            marginBottom: 30,
          }}
        >
          The Easiest And Most Secure Platform For Training Federated Learning
          Models
        </h2>
        <p
          style={{
            textAlign: "center", // Center the text
            fontSize: 18, // Adjust font size as needed
            paddinhgBottom: "100px",
          }}
        >
          Ready to dive into the world of federated learning?
          <br />
          Click ‘Start Training’ now and embark on your path to AI excellence
          with SafeLearn! 🚀🔒🌐
        </p>
        <li>
          <a class="getstarted" href="downoald">
            Start Training
          </a>
        </li>
      </div>
      <img
        style={{
          width: "80%",
          display: "flex",
          bottom: 0,
          position: "absolute",
          left: 50,
          transform: "translateX(10%)",
        }}
        src={figma}
      />
    </div>
  );
}

export default Home;
