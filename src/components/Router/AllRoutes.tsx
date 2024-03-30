import { Routes, Route } from "react-router-dom";

import Home from "../home/Home";
import RegistrationPage from "../login&registration/registration/RegistrationPage";
import Schedules from "../schedules/Schedules";
import Standings from "../standing/Standings";
import LoginPage from "../login&registration/login/LoginPage";
import Playofss from "../playoff/Playofss";
import TeamRegister from "../login&registration/TeamRegister/TeamRegister";
import PreTournament from "../pre-tournament/PreTournamentPage";
import useAuth from "../../hooks/useAuth";
import Profile from "../ProfilePage/Profile";
import { useEffect, useState } from "react";
import axios from "../../api/axios";
import { getAccessToken } from "../../context/AuthService";

function AllRoutes() {
  const { auth } = useAuth();

  type userType = {
    full_name: string;
    id: number;
    in_game_name: string;
    teams_roles: [];
    username: string;
  };

  const [user, setUser] = useState<userType | null>(null);

  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get("/api/personal_page/", {
        headers: {
          Authorization: `Token ${getAccessToken()}`,
        },
      });
      setUser(response.data[0]);
      console.log(response.data[0]);
    };
    getUser();
  }, []);
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        />
        {auth && user?.teams_roles === undefined && (
          <Route path="/teamRegister" element={<TeamRegister />} />
        )}
        {auth ? (
          <>
            <Route path="/profile" element={<Profile />} />
          </>
        ) : (
          <>
            <Route path="/registration" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
          </>
        )}

        <Route path="/schedules" element={<Schedules />} />
        <Route path="/standings/regular-season" element={<Standings />} />
        <Route path="/standings/playoffs" element={<Playofss />} />
        <Route
          path="/standings/pre-tournament-brackets"
          element={<PreTournament />}
        />
      </Routes>
    </div>
  );
}

export default AllRoutes;
