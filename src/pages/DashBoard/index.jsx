// import React, { useEffect, useState } from "react";
// import * as C from "./style";
// import Header from "../../components/Header";
// import { FaSearch } from "react-icons/fa";
// import CursosSliderContainer from "../../components/CursosContainer";
// import { getAllCourses } from "../../services/Api";
// import Footer from "../../components/Footer";

// export default function DashBoard() {
//   const [Courses, setCourses] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [limit, setLimit] = useState(10);

//   async function fetchCourses() {
//     const response = await getAllCourses({ page: currentPage, limit });
//     const data = response.data; // assume que a resposta da API contém um campo "data" com os cursos
//     // atualiza o estado com os dados da página atual
//     setCourses(data.courses);
//     setTotalPages(data.totalPages);
//   }

//   function handlePageChange(newPage) {
//     setCurrentPage(newPage);
//     fetchCourses();
//   }

//   // useEffect(() => {
//   //   getAllCourses({ page: 1, limit: 10 }).then((res) => {
//   //     setCourses(res.data.courses);
//   //   });
//   // }, []);
//   return (
//     <C.Container>
//       <Header LoginSigninBtn>
//         <div className="searchingContainer">
//           <input type="text" placeholder="pesquise por um curso aqui..." />
//           <button>
//             <FaSearch />
//           </button>
//         </div>
//       </Header>
//       <br />
//       <br />
//       <br />

//       <CursosSliderContainer
//         title="Principais cursos "
//         coloredTitle="Disponiveis"
//         cursosArray={Courses}
//       />

//       <Footer />
//     </C.Container>
//   );
// }

import React, { useEffect, useState } from "react";
import * as C from "./style";
import Header from "../../components/Header";
import { FaSearch } from "react-icons/fa";
import CursosSliderContainer from "../../components/CursosContainer";
import { getAllCourses } from "../../services/Api";
import Footer from "../../components/Footer";

export default function DashBoard() {
  const [courses, setCourses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalPages, setTotalPages] = useState(1);

  async function fetchCourses() {
    const response = await getAllCourses({ page: currentPage, limit });
    const data = response.data; // assume que a resposta da API contém um campo "data" com os cursos
    // atualiza o estado com os dados da página atual
    console.log(data);
    setCourses(data.courses);
    setTotalPages(data.totalPages);
  }

  function handlePageChange(newPage) {
    setCurrentPage(newPage);
  }

  useEffect(() => {
    fetchCourses();

    console.log(totalPages);
  }, [currentPage, limit]);

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
        cursosArray={courses}
        handlePageChange={handlePageChange}
        currentPage={currentPage}
        totalPages={totalPages}
      />

      <Footer />
    </C.Container>
  );
}
