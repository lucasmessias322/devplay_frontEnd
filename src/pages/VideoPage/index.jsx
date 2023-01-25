import { useEffect, useState } from "react";
import * as C from "./style";
import Header from "../../components/Header";
import { useSearchParams } from "react-router-dom";

export default function VideoPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const dataCurso = JSON.parse(searchParams.get("datacurso"));
  const [cursoClasses, setCursoClasses] = useState(dataCurso.classes);
  const [currentClass, setCurrentClass] = useState(0);

  useEffect(() => {}, []);

  return (
    <C.Container>
      <Header playerPage={true} borderBottom={false}></Header>
      <C.DashboardTabsContainer>
        <C.VideoContainer>
          <iframe
            src={cursoClasses[currentClass].src}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope"
            allowfullscreen
          ></iframe>
        </C.VideoContainer>

        <C.TabsContainer>
          <C.Tabs>Aulas do curso</C.Tabs>
        </C.TabsContainer>
        <C.CourseContent>
          <C.UnorderedList>
            {cursoClasses.map((item, i) => (
              <C.LessonItem
                isCurrentClass={currentClass === i ? true : false}
                key={i}
                onClick={() => setCurrentClass(i)}
              >
                <p>{item.title}</p>
              </C.LessonItem>
            ))}
          </C.UnorderedList>
        </C.CourseContent>
      </C.DashboardTabsContainer>
    </C.Container>
  );
}
