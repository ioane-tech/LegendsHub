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
        slidesPerView={6}
        autoplay={true}
        draggable={true}
      >
        <SwiperSlide>
          <NavLink to="/">
            <img src={testImg} alt="" />
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink to="/">
            <img src={testImg} alt="" />
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink to="/">
            <img src={testImg} alt="" />
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink to="/">
            <img src={testImg} alt="" />
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink to="/">
            <img src={testImg} alt="" />
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink to="/">
            <img src={testImg} alt="" />
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink to="/">
            <img src={testImg} alt="" />
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink to="/">
            <img src={testImg} alt="" />
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink to="/">
            <img src={testImg} alt="" />
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink to="/">
            <img src={testImg} alt="" />
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink to="/">
            <img src={testImg} alt="" />
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink to="/">
            <img src={testImg} alt="" />
          </NavLink>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

const Container = styled.div`
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
