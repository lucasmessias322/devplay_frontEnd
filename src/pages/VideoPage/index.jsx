import { useEffect, useState } from "react";
import * as C from "./style";
import Header from "../../components/Header";
import { getCourse } from "../../services/Api";
import { useSearchParams } from "react-router-dom";
import Footer from "../../components/Footer";

export default function VideoPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [curse, setCourse] = useState({
    _id: "",
    playlistName: "",
    playlistVideosData: [],
  });
  const [cursoClasses, setCursoClasses] = useState([
    {
      publishedAt: "",
      title: "",
      link: "",
      thumbnail: "",
      playlistTitle: "",
      playlistId: "",
      videoOwnerChannelTitle: "",
      description: "",
    },
  ]);
  const [currentClass, setCurrentClass] = useState(0);

  const cursoId = searchParams.get("cursoId");

  useEffect(() => {
    getCourse(cursoId).then((res) => {
      setCourse(res.data);
      setCursoClasses(res.data.playlistVideosData);
    });
  }, []);

  return (
    <C.Container>
      <Header
        playerPage={true}
        curseName={curse.playlistName}
        borderBottom={false}
      ></Header>
      <C.DashboardTabsContainer>
        <C.VideoContainer>
          <iframe
            src={cursoClasses[currentClass].link}
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
      <Footer />
    </C.Container>
  );
}
