import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function CursosSliderContainer({
  title,
  coloredTitle,
  cursosArray = [],
}) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container>
      <h2>
        {title} <span>{coloredTitle}:</span>
      </h2>
      <SliderContain>
        <Slider {...settings}>
          {cursosArray.map((item, i) => (
            <CursoItem key={i}>
              <Link to="/videopage">
                <img src="/assets/exempleImage.jpg" alt="" />
                <h4>Nome do curso{i}</h4>
              </Link>
            </CursoItem>
          ))}
        </Slider>
      </SliderContain>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
  margin: 20px 0px;

  h2 {
    padding: 20px 0px;
    color: white;
    font-size: 25px;
    span {
      color: #ff003d;
    }
  }

  @media (max-width: 500px) {
    margin: 0px 0px;

    h2 {
      color: white;
      font-size: 20px;
      span {
        color: #ff003d;
      }
    }
  }
`;

const CursoItem = styled.div`
  width: 200px;
  padding: 5px;

  a {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: #2e224d;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    img {
      width: 100%;
      height: 150px;
      object-fit: cover;
    }

    h4 {
      font-size: 16px;
      color: white;
      padding: 20px 5px;
    }
  }
`;

const SliderContain = styled.div`
  padding: 20px;
`;
