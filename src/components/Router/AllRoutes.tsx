import { Routes, Route } from "react-router-dom";

import Home from "../home/Home";
import BgVideo from "../bg-video/BgVideo";
import LoginPage from "../login&registration/registration/RegistrationPage";
import Schedules from "../schedules/Schedules";
import Standings from "../standing/Standings";

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
              <LoginPage />
            </>
          }
        />
        <Route path="/schedules" element={<Schedules />} />
        <Route path="/standings" element={<Standings />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
