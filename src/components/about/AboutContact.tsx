import styled from "styled-components";

const AboutContact: React.FC = () => {
  return (
    <AboutSection>
      <div>hello im about page</div>
    </AboutSection>
  );
};

export default AboutContact;

const AboutSection = styled.section`
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(${"/assets/mandilosani.jpg"});
  background-position: center;
  background-size: cover;
  position: relative;
  height: 120vh;
  padding-top: 170px;
  color: white;
  @media (max-height: 900px) {
    height: 130vh;
  }
`;
