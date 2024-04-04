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
import { useEffect, useState } from "react";
import axios from "../../api/axios";
import { getAccessToken } from "../../context/AuthService";

function AllRoutes() {
  type teamMember = {
    member_id: number;
    in_game_name: string;
    role: string;
  };

  type teamType = {
    creator: number;
    id: number;
    logo: string | null;
    member_count: number;
    name: string;
    status: boolean;
    members: teamMember[];
  };

  const [, setTeam] = useState<teamType | null>(null);

  const Token = getAccessToken();

  useEffect(() => {
    if (Token) {
      const getUser = async () => {
        const responseOfTeam = await axios.get("/api/teams/", {
          headers: {
            Authorization: `Token ${getAccessToken()}`,
          },
        });
        setTeam(responseOfTeam.data[0]);
      };
      getUser();
    }
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
        {Token !== undefined && (
          <Route path="/teamRegister" element={<TeamRegister />} />
        )}
        {Token ? (
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
