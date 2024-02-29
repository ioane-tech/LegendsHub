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
        <Cookies>
          <CookiesATag href="notice">Privacy Notice</CookiesATag>
          <CookiesATag href="terms">Terms Of Service</CookiesATag>
          <CookiesATag href="cookie">Cookie Policy</CookiesATag>
          <CookiesATag href="information">Who we are?</CookiesATag>
        </Cookies>
      </div>

      <div>
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
      </div>
    </FooterComponents>
  );
};

export default Footer;

const FooterComponents = styled.footer`
  width: 100%;
  height: 300px;
  background: linear-gradient(180deg, rgba(1, 1, 1, 0.93) 11.88%, #754112 61.72%, rgba(35, 39, 6, 0.812789) 113.36%, rgba(8, 55, 33, 0.61) 170.67%);

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  z-index: 85;
`;

const Socials = styled.div`
  background-color: red;
  border-radius: 10px;
  color: rgb(156, 112, 0);
  font-size: xx-large;
  padding: 10px;
  display: flex;
  gap: 25px;
  align-items: center;
  cursor: pointer;
  position: absolute;
  bottom: 0;
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
