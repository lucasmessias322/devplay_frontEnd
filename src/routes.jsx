import { BrowserRouter, Routes, HashRouter, Route } from "react-router-dom";
import PresentationPage from "./pages/PresentationPage";
import LoginRegister from "./pages/LoginRegister";
import DashBoard from "./pages/DashBoard";
import VideoPage from "./pages/VideoPage";

export default function RoutesComponent() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<PresentationPage />} />
        <Route exact path="/loginregister/:login" element={<LoginRegister />} />
        <Route exact path="/dashboard" element={<DashBoard />} />
        <Route exact path="/videopage" element={<VideoPage />} />
        <Route
          path="*"
          element={
            <h1 style={{ color: "white", padding: "20px" }}>
              Essa pagina não existe
            </h1>
          }
        />
      </Routes>
    </HashRouter>
  );
}
