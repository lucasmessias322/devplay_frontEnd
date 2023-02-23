import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BaseUrl } from "../../services/Api.js";

export default function CursosSliderContainer({
  title,
  coloredTitle,
  cursosArray = [],
}) {
  return (
    <Container>
      <h2>
        {title} <span>{coloredTitle}:</span>
      </h2>

      <SliderContain>
        {cursosArray?.map((item, i) => (
          <CursoItem key={i}>
            <Link to={`/videopage/?cursoId=${item._id}`}>
              <img src={item.playlistVideosData[0].thumbnail} />
              <h4>{item.playlistName}</h4>
            </Link>
          </CursoItem>
        ))}
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
  width: 250px;
  padding: 5px;

  &:hover {
    transform: scale(1.1);
  }

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
      text-align: center;
      margin: 0 auto;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      width: 250px; /* some width */
      font-size: 16px;
      color: white;
      padding: 20px 10px;
    }

    span {
      color: grey;
      font-size: 16px;
    }
  }
`;

const SliderContain = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
`;
