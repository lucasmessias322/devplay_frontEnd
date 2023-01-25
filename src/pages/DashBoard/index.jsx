import React, { useEffect, useState } from "react";
import * as C from "./style";
import Header from "../../components/Header";
import { FaSearch } from "react-icons/fa";
import CursosSliderContainer from "../../components/CursosContainer";
import { getCourses } from "../../services/Api";

export default function DashBoard() {
  const [Courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then((res) => {
      setCourses(res.data);
    });

    console.log(Courses);
  }, []);

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
        title="Principais cursos "
        coloredTitle="Disponiveis"
        cursosArray={Courses}
      />

      <footer></footer>
    </C.Container>
  );
}
