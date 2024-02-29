import styled from "styled-components";
import CarouselComp from "../../carousel/CarouselComp";
import border from "/assets/Vector2.png";
import borderIcon from "/assets/Content2.png";
import bottomBorder from "/assets/Vector3.png";
import knight from "/assets/knight.png";
import light from "/assets/light.png";

const HomeSecondSection = () => {
  return (
    <Section>
      <BorderContainer>
        <img src={border} />
        <img src={borderIcon} />
      </BorderContainer>
      <CarouselComp />
      <Announcement>
        <h2>Announcement</h2>
        <section>
          <FirstSide>
            <AnnouncementCompCont $right={true}>
              <AnnouncementComp $bottom={true}>
                <p>Who holds the championship</p>
                <h3>Nikusha Xulordava</h3>
              </AnnouncementComp>
              <AnnouncementComp $bottom={true}>
                <p>Who holds the championship</p>
                <h3>Nikusha Xulordava</h3>
              </AnnouncementComp>
              <AnnouncementComp $bottom={true}>
                <p>Who holds the championship</p>
                <h3>Nikusha Xulordava</h3>
              </AnnouncementComp>
              <AnnouncementComp>
                <p>Who holds the championship</p>
                <h3>Nikusha Xulordava</h3>
              </AnnouncementComp>
            </AnnouncementCompCont>
            <AnnouncementCompCont>
              <AnnouncementComp $bottom={true}>
                <p>Who holds the championship</p>
                <h3>Nikusha Xulordava</h3>
              </AnnouncementComp>
              <AnnouncementComp $bottom={true}>
                <p>Who holds the championship</p>
                <h3>Nikusha Xulordava</h3>
              </AnnouncementComp>
              <AnnouncementComp $bottom={true}>
                <p>Who holds the championship</p>
                <h3>Nikusha Xulordava</h3>
              </AnnouncementComp>
              <AnnouncementComp>
                <p>Who holds the championship</p>
                <h3>Nikusha Xulordava</h3>
              </AnnouncementComp>
            </AnnouncementCompCont>
          </FirstSide>
          <RightSide>
            <KnightStyle src={knight} />
            <Light src={light} />
          </RightSide>
        </section>
      </Announcement>
      <BottomBorder src={bottomBorder} />
    </Section>
  );
};

const Section = styled.section`
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(${"/assets/mandilosani.jpg"});
  background-position: center;
  background-size: cover;
  position: relative;
  height: 100vh;
  padding-top: 170px;
  color: white;
`;

const BorderContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  z-index: 1;
  img:nth-child(1) {
    width: 100%;
    position: absolute;
  }
  img:nth-child(2) {
    width: 7%;
    z-index: 1;
    margin-top: 1%;
  }
`;

const BottomBorder = styled.img`
  width: 100%;
  position: absolute;
  top: 91vh;
`;

const Announcement = styled.div`
  margin-top: 50px;
  h2 {
    font-size: 40px;
    width: 12ch;
    margin: 0 auto;
  }
  section {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: -40px;
  }
`;

const FirstSide = styled.div`
  font-family: "Roboto Slab", serif;
  display: flex;
  background-color: #29322d2e;
`;

const AnnouncementCompCont = styled.div<{ $right?: boolean }>`
  border-right: ${(props) => (props.$right ? "solid #52463b 1px" : "")};
`;

const AnnouncementComp = styled.div<{ $bottom?: boolean }>`
  border-bottom: ${(props) => (props.$bottom ? "solid #52463b 1px" : "")};
  padding: 15px 200px 15px 15px;
  p {
    font-size: 14px;
    font-weight: 300;
    color: #e5e5e5;
  }
  h3 {
    font-weight: 500;
    font-size: 22px;
    margin-top: 10px;
  }
`;

const RightSide = styled.div`
  position: relative;
`;

const KnightStyle = styled.img`
  position: absolute;
  left: 20px;
  top: 50px;
`;

const Light = styled.img``;

export default HomeSecondSection;
