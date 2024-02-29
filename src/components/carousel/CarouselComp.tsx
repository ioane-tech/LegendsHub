import styled from "styled-components";
import testImg from "/assets/theme-21-border.png";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const CarouselComp = () => {
  return (
    <Container>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={9}
        autoplay={true}
        draggable={true}
        loop={true}
      >
        {Array.from({ length: 10 }).map((_, index) => (
          <SwiperSlide key={index}>
            <NavLink to="/">
              <img src={testImg} alt="" />
            </NavLink>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

const Container = styled.div`
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.19) -12.5%,
    #1b4a36 37.34%,
    rgba(7, 8, 8, 0.32) 115.21%
  );

  display: flex;
  align-items: center;
  padding: 0 50px;
  div {
    height: 300px;
    display: flex;
    align-items: center;
  }
  img {
    width: 150px;
    transition: 0.3s;
    &:hover {
      scale: 1.3;
    }
    &:active {
      cursor: grab;
    }
  }
  &:active {
    cursor: grab;
  }
`;

export default CarouselComp;
