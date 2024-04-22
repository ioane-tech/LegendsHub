import { useContext, useEffect } from "react";
import AllRoutes from "./components/Router/AllRoutes";
import AuthContext from "./context/AuthProvider";
import { getAccessToken } from "./context/AuthService";
import axios from "./api/axios";

function App() {
  const { setToken, setUserInfo, setTeam, token } = useContext(AuthContext);

  useEffect(() => {
    setToken(getAccessToken());
    if (typeof token === "string") {
      const getUser = async () => {
        const response = await axios.get("http://54.87.161.202:5173/api/personal_page/", {
          headers: {
            Authorization: `Token ${getAccessToken()}`,
          },
        });
        setUserInfo(response.data[0]);
        const responseOfTeam = await axios.get("http://54.87.161.202:5173/api/teams/", {
          headers: {
            Authorization: `Token ${getAccessToken()}`,
          },
        });
        setTeam(responseOfTeam.data[0]);
      };
      getUser();
    }
  }, [token]);

  return (
    <>
      <AllRoutes />
    </>
  );
}

export default App;
