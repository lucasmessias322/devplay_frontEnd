import "react-toastify/dist/ReactToastify.css";
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
