import { Routes, Route } from "react-router-dom";

import Home from "../home/Home";
import BgVideo from "../bg-video/BgVideo";
import RegistrationPage from "../login&registration/registration/RegistrationPage";
import Schedules from "../schedules/Schedules";
import Standings from "../standing/Standings";
import LoginPage from "../login&registration/login/LoginPage";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <BgVideo />
            </>
          }
        />
        <Route
          path="/registration"
          element={
            <>
              <RegistrationPage />
            </>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/schedules" element={<Schedules />} />
        <Route path="/standings" element={<Standings />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
