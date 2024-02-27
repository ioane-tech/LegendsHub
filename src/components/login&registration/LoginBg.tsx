
// import zedRegisterBg from '/assets/zedRegisterBg.mp4'

import BgVideo from "../../styled-components/bgVideo";

import aatroxBg from '/assets/aatroxBg.mp4'

const LoginBg = () => {


  return (

    <div>
      <BgVideo src={aatroxBg} autoPlay muted loop />
    </div>
  );
};

export default LoginBg;
