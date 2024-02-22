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
      <Socials>
        <SocialsHover>
          <FontAwesomeIcon icon={faDiscord} />
        </SocialsHover>
        <SocialsHover>
          <FontAwesomeIcon icon={faYoutube} />
        </SocialsHover>
        <SocialsHover>
          <FontAwesomeIcon icon={faInstagramSquare} />
        </SocialsHover>
        <SocialsHover>
          <FontAwesomeIcon icon={faFacebook} />
        </SocialsHover>
      </Socials>
      <Cookies>
        <CookiesATag href="notice">Privacy Notice</CookiesATag>
        <CookiesATag href="terms">Terms Of Service</CookiesATag>
        <CookiesATag href="cookie">Cookie Policy</CookiesATag>
        <CookiesATag href="information">Who we are?</CookiesATag>
      </Cookies>
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

const Socials = styled.div`
  background-color: #000000;
  border-radius: 10px;
  color: rgb(156, 112, 0);
  font-size: xx-large;
  padding: 10px;
  display: flex;
  gap: 25px;
  align-items: center;
`;

const SocialsHover = styled.div`
  &:hover {
    color: gold;
  }
`;

const Cookies = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 40px;
`;

const CookiesATag = styled.a`
  color: white;
  text-decoration: none;
  padding: 15px;
  &:hover {
    color: gold;
  }
`;
