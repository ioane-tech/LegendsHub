import { useEffect } from "react";
import AllRoutes from "./components/Router/AllRoutes";
import useAuth from "./hooks/useAuth";
import { getEmail } from "./context/AuthService";

function App() {
  const { setAuth } = useAuth();

  useEffect(() => {
    setAuth(getEmail());
  }, []);
  return (
    <>
      <AllRoutes />
    </>
  );
}

export default App;
