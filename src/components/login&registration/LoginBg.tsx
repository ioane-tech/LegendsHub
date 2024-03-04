// import zedRegisterBg from '/assets/zedRegisterBg.mp4'

import BgVideo from "../../styled-components/bgVideo";

import animatedOrnn from "/assets/animatedOrnn.webm";

const LoginBg = () => {
  return (
    <div>
      <BgVideo src={animatedOrnn} autoPlay muted loop />
    </div>
  );
};

export default LoginBg;
