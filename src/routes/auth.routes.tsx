import { Route, Routes } from "react-router-dom";

import { SignIn } from '../pages/sign-in';

export function AuthRoutes() {
  return(
    <Routes>
      <Route path="/" element={<SignIn />}/>
    </Routes>
  );
}