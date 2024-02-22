import { Routes, Route } from "react-router-dom";

import Home from "../home/Home";
import BgVideo from "../bg-video/BgVideo";
import LoginPage from "../Registration/LoginPage";
import Schedules from "../schedules/Schedules";

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
      </Routes>
    </div>
  );
}

export default AllRoutes;
