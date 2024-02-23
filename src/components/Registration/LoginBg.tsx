
import zedRegisterBg from '../../../public/assets/zedRegisterBg.mp4'

import BgVideo from "../../styled-components/bgVideo";

const LoginBg = () => {


  return (

    <div>
      <BgVideo src={zedRegisterBg} autoPlay muted loop />
    </div>
  );
};

export default LoginBg;
