import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
`;

export const Header = styled.header`
  width: 100%;
  background: linear-gradient(98.95deg, #302451 -0.83%, #4b3b76 97.71%);
  border-bottom: 5px solid #956fff;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
`;

export const DashboardTabsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const VideoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  iframe {
    width: 100%;
    height: 500px;
  }
`;

export const TabsContainer = styled.div`
  width: 100%;
  background-color: #302451;
  padding: 0px 20px;
  color: white;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

export const Tabs = styled.div`
  color: white;
  font-size: 16px;
  padding: 15px;
  border-bottom: 2px solid white;
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }
`;

export const CourseContent = styled.div`
  width: 100%;
  padding: 20px 0px;
  color: white;
`;

export const UnorderedList = styled.ul`
  width: 100%;
  max-width: 900px;
  height: 400px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  border: 2px solid #956fff;
  border-radius: 10px;
  margin: 0 auto;
  background-color: #302451;
  padding: 10px;
`;

export const LessonItem = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  color: white;
  padding: 20px 10px;
  list-style: none;
  border-bottom: 0.1px solid rgba(255, 255, 255, 0.19);

  input {
    background-color: red;
    height: 15px;
    width: 15px;
    border: 0.5px solid red;
  }

  p {
    padding: 0px 10px;
  }
`;
