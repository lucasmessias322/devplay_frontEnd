import React from "react";
import * as C from "./style";
import Header from "../../components/Header";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import CursosSliderContainer from "../../components/CursosContainer";

export default function DashBoard() {
  return (
    <C.Container>
      <Header LoginSigninBtn>
        <div className="searchingContainer">
          <input type="text" placeholder="pesquise por um curso aqui..." />
          <button>
            <FaSearch />
          </button>
        </div>
      </Header>
      <br />
      <br />
      <br />

      <CursosSliderContainer
        title="Principais cursos de"
        coloredTitle="Frontend"
        cursosArray={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]}
      />

      <CursosSliderContainer
        title="Principais cursos de"
        coloredTitle="Backend"
        cursosArray={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]}
      />

      <footer></footer>
    </C.Container>
  );
}
