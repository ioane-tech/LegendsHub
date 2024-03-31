import { Routes, Route } from "react-router-dom";

import Home from "../home/Home";
import RegistrationPage from "../login&registration/registration/RegistrationPage";
import Schedules from "../schedules/Schedules";
import Standings from "../standing/Standings";
import LoginPage from "../login&registration/login/LoginPage";
import Playofss from "../playoff/Playofss";
import TeamRegister from "../login&registration/TeamRegister/TeamRegister";
import PreTournament from "../pre-tournament/PreTournamentPage";
import Profile from "../ProfilePage/Profile";
import { useContext, useEffect, useState } from "react";
import axios from "../../api/axios";
import AuthContext from "../../context/AuthProvider";

function AllRoutes() {
  const [team, setTeam] = useState<teamType | null>(null);

  const { token } = useContext(AuthContext);

  useEffect(() => {
    if (token) {
      const getUser = async () => {
        const responseOfTeam = await axios.get("/api/teams/", {
          headers: {
            Authorization: `Token ${token}`,
          },
        });
        setTeam(responseOfTeam.data[0]);
      };
      getUser();
    }
  }, [token]);

  console.log("this is team: ", team);
  console.log("this is token: ", token);

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
        {token !== null && (team === null || team === undefined) ? (
          <Route path="/teamRegister" element={<TeamRegister />} />
        ) : null}
        {token ? (
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
