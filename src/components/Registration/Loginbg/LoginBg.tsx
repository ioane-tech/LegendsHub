import React from "react";
import "../LoginCss/bgVideo.css";
import zed from "./zed.mp4";

const LoginBg = () => {
  return (
    <div className="video-background">
      <video className="Login_bg_video" src={zed} autoPlay muted loop />
    </div>
  );
};

export default LoginBg;
