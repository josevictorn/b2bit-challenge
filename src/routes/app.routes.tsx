import { Route, Routes } from "react-router-dom";

import { Profile } from "../pages/profile";

export function AppRoutes() {
  return(
    <Routes>
      <Route path="/" element={<Profile />} />
    </Routes>
  );
}