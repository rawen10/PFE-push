import React, { useState } from "react";
import pic from "../assets/Fedai.png";
import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";
import { UploadDropzone } from "react-uploader";
import ReactiveButton from 'reactive-button';


function Train() {
    const [state, setState] = useState('idle');

    const onClickHandler = () => {
        setState('loading');
        setTimeout(() => {
            setState('success');
        }, 2000);
    }
  const uploader = new Uploader({
    apiKey: "free",
  });
  return (
    <div style={{ paddingTop: 150, height: "100vh" }}>
      <div id="hero" style={{ display: "flex", justifyContent: "center" }}>
        {" "}
        <div>
          <h2
            style={{
              background:
                "linear-gradient(to right, #FF3BFF 0%, #ECBFBF 38%, #5C24FF 76%, #D94FD5 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontFamily: "Inter var, sans-serif",
              fontWeight: "400",
              fontSize: 50,
              marginRight: 50, // Add margin bottom to create space between h1 and h2
            }}
          >
            Start Local Training Session
          </h2>
          <UploadDropzone
            style={{ marginTop: "-100px" }}
            uploader={uploader}
            options={{ multi: true }}
            onComplete={(files) => console.log(files)}
            width="600px"
            height="375px"
          />
        </div>
        <img  class="animated" style={{ width: 700,  borderRadius: '20px' }} src={pic} />
      </div>
      <div    style={{ display:'flex', justifyContent: 'center',marginTop: '50px' }}
>
      <ReactiveButton
            buttonState={state}
            onClick={onClickHandler}
            style={{ borderRadius: '100px', background : 'purple', display:'flex', justifyContent: 'center', width:'200px', height:'70px',fontSize: 20 , fontWeight:400}}
            idleText={'Train Model'}
            successText={'Model Trained Successfully'}
            loadingText={'Training'}

        />
        </div>
    </div>
  );
}

export default Train;
