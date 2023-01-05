import React from "react";
import * as C from "./style";
import Header from "../../components/Header";

export default function VideoPage() {
  return (
    <C.Container>
      <Header playerPage={true} borderBottom={false}></Header>
      <C.DashboardTabsContainer>
        <C.VideoContainer>
          <iframe
            src="https://www.youtube.com/embed/wru9jNgBvaI"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope"
            allowfullscreen
          ></iframe>
        </C.VideoContainer>

        <C.TabsContainer>
          <C.Tabs>Conteudo do Curso</C.Tabs>
        </C.TabsContainer>
        <C.CourseContent>
          <C.UnorderedList>
            <C.LessonItem>
              <p>Curso de CMD - 01: Apresentação</p>
            </C.LessonItem>
            <C.LessonItem>
              <p>Curso de CMD - 02: O Console CMD.EXE</p>
            </C.LessonItem>
            <C.LessonItem>
              <p>Curso de CMD - 02: O Console CMD.EXE</p>
            </C.LessonItem>
            <C.LessonItem>
              <p>Curso de CMD - 02: O Console CMD.EXE</p>
            </C.LessonItem>
            <C.LessonItem>
              <p>Curso de CMD - 02: O Console CMD.EXE</p>
            </C.LessonItem>
            <C.LessonItem>
              <p>Curso de CMD - 02: O Console CMD.EXE</p>
            </C.LessonItem>
          </C.UnorderedList>
        </C.CourseContent>
      </C.DashboardTabsContainer>
    </C.Container>
  );
}
