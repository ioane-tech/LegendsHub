import styled from "styled-components";
import garen from "/footer/garen.png";
import talon from "/footer/talon.png";
import Flogo from "/footer/footerLogo.png";
import gmail from "/footer/mdi_gmail.png";
import tiktok from "/footer/mage_tiktok-circle.png";
import fb from "/footer/ic_outline-facebook.png";
import discord from "/footer/ic_outline-discord.png";
const Footer: React.FC = () => {
  return (
    <FooterComponents>
      <FooterMainWrapper>
        <img src={garen} alt="garen" />
        <Cookies>
          <CookiesATag href="notice">Privacy Notice</CookiesATag>
          <CookiesATag href="terms">Terms Of Service</CookiesATag>
          <CookiesATag href="cookie">Cookie Policy</CookiesATag>
          <CookiesATag href="information">Who we are?</CookiesATag>
        </Cookies>
        <img src={Flogo} alt="Flogo" />
        <div>
          <img src={gmail} alt="gmail" />
          <img src={tiktok} alt="tiktok" />
          <img src={fb} alt="fb" />
          <img src={discord} alt="discord" />
        </div>
        <img src={talon} alt="talon" />
      </FooterMainWrapper>
    </FooterComponents>
  );
};

export default Footer;

const FooterComponents = styled.footer`
  width: 100%;
  height: 300px;
  background: linear-gradient(
    180deg,
    rgba(1, 1, 1, 0.93) 11.88%,
    #754112 61.72%,
    rgba(35, 39, 6, 0.812789) 113.36%,
    rgba(8, 55, 33, 0.61) 170.67%
  );
`;
const FooterMainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Cookies = styled.div`
  display: flex;
  flex-direction: column;
`;

const CookiesATag = styled.a`
  color: white;
  text-decoration: none;
  padding: 15px;
  &:hover {
    color: gold;
  }
`;
