import { useContext, useEffect } from "react";
import AllRoutes from "./components/Router/AllRoutes";
import AuthContext from "./context/AuthProvider";
import { getAccessToken } from "./context/AuthService";

function App() {
  const { setToken } = useContext(AuthContext);

  useEffect(() => {
    setToken(getAccessToken());
  }, []);

  return (
    <>
      <AllRoutes />
    </>
  );
}

export default App;
