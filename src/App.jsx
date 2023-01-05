import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RoutesComponent from "./routes";
import AuthProvider from "./Context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <RoutesComponent />
    </AuthProvider>
  );
}

export default App;
