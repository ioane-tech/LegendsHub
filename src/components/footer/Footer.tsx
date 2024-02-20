import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faYoutube,
  faInstagramSquare,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";
const Footer: React.FC = () => {
  return (
    <FooterComponents>
      <div>
        <FontAwesomeIcon icon={faDiscord} />
        <FontAwesomeIcon icon={faYoutube} />
        <FontAwesomeIcon icon={faInstagramSquare} />
        <FontAwesomeIcon icon={faFacebook} />
      </div>
      <div>
        <a href="notice">Privacy Notice</a>
        <a href="terms">Terms Of Service</a>
        <a href="cookie">Cookie Policy</a>
        <a href="information">Who we are?</a>
      </div>
    </FooterComponents>
  );
};

export default Footer;

const FooterComponents = styled.footer`
  width: 100%;
  height: 300px;
  background-color: rgba(0, 0, 0, 0.479);
  display: flex;
  z-index: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
