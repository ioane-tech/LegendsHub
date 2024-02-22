import styled from "styled-components";
import testImg from "/assets/theme-21-border.png";
import { Carousel } from "antd";
import { NavLink } from "react-router-dom";

const CarouselComp = () => {
  return (
    <Container>
      <Carousel
        arrows={false}
        autoplay={true}
        draggable={false}
        dots={false}
        slidesPerRow={6}
        pauseOnHover={false}
        infinite={true}
        autoplaySpeed={7000}
        speed={5000}
        centerMode={true}
      >
        <NavLink to="/">
          <img src={testImg} alt="" />
        </NavLink>
        <NavLink to="/">
          <img src={testImg} alt="" />
        </NavLink>
        <NavLink to="/">
          <img src={testImg} alt="" />
        </NavLink>
        <NavLink to="/">
          <img src={testImg} alt="" />
        </NavLink>
        <NavLink to="/">
          <img src={testImg} alt="" />
        </NavLink>
        <NavLink to="/">
          <img src={testImg} alt="" />
        </NavLink>
        <NavLink to="/">
          <img src={testImg} alt="" />
        </NavLink>
        <NavLink to="/">
          <img src={testImg} alt="" />
        </NavLink>
        <NavLink to="/">
          <img src={testImg} alt="" />
        </NavLink>
        <NavLink to="/">
          <img src={testImg} alt="" />
        </NavLink>
        <NavLink to="/">
          <img src={testImg} alt="" />
        </NavLink>
        <NavLink to="/">
          <img src={testImg} alt="" />
        </NavLink>
      </Carousel>
    </Container>
  );
};

const Container = styled.div`
  background-color: black;
  transition: ease 1;
  height: 300px;
  img {
    width: 150px;
    &:hover {
      scale: 1.3;
    }
  }
  div {
    margin-top: 25px;
  }
`;

export default CarouselComp;
