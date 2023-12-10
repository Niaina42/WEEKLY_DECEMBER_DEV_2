import Router from "./router/Router";
import "./assets/css/main.css";
import "./assets/css/login.css";
import { AuthProvider } from "./services/context/auth-context";

function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}

export default App;