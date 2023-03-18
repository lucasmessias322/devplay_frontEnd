import React, { useContext, useEffect, useState } from "react";
import * as C from "./style";
import Header from "../../components/Header";
import { FaSearch } from "react-icons/fa";
import CursosSliderContainer from "../../components/CursosContainer";
import { getAllCourses, searchCurso } from "../../services/Api";
import Footer from "../../components/Footer";
import { AuthContext } from "../../Context/AuthContext";

export default function DashBoard() {
  const { token } = useContext(AuthContext);
  const [courses, setCourses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalPages, setTotalPages] = useState(1);

  const [playlistname, setPlaylistname] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  async function fetchCourses() {
    const response = await getAllCourses({ page: currentPage, limit, token });
    const data = response.data; // assume que a resposta da API contém um campo "data" com os cursos
    // atualiza o estado com os dados da página atual
    // console.log(data);
    setCourses(data.courses);
    setTotalPages(data.totalPages);
  }

  function handlePageChange(newPage) {
    setCurrentPage(newPage);
  }

  useEffect(() => {
    fetchCourses();
  }, [currentPage, limit]);

  async function handleSearch(event) {
    event.preventDefault();

    await searchCurso({ playlistname, page: currentPage, limit, token }).then(
      (response) => {
        setSearchResult(response.data.curses);
        setCourses(response.data.curses);
      }
    );
  }

  return (
    <C.Container>
      <Header LoginSigninBtn>
        <form onSubmit={handleSearch} className="searchingContainer">
          <input
            type="text"
            placeholder="pesquise por um curso aqui..."
            value={playlistname}
            onChange={(e) => setPlaylistname(e.target.value)}
            required
          />
          <button>
            <FaSearch />
          </button>
        </form>
      </Header>
      <br />
      <br />
      <br />

      {searchResult.length > 0 ? (
        <CursosSliderContainer
          title="Resultado da busca"
          coloredTitle={playlistname}
          cursosArray={courses}
        />
      ) : (
        <CursosSliderContainer
          title="Principais cursos "
          coloredTitle="Disponiveis"
          cursosArray={courses}
          handlePageChange={handlePageChange}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      )}
      <Footer />
    </C.Container>
  );
}
