import { useEffect } from "react";
import AllRoutes from "./components/Router/AllRoutes";
import useAuth from "./hooks/useAuth";
import { getAccessToken, getEmail } from "./context/AuthService";

function App() {
  const { setAuth, setToken } = useAuth();

  useEffect(() => {
    setAuth(getEmail());
    setToken(getAccessToken());
  }, []);

  return (
    <>
      <AllRoutes />
    </>
  );
}

export default App;
