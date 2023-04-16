import "./SASS/styles.scss";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { Suspense, lazy } from "react";

import Layout from "./MainComponents/Layout";

import SignIn from "./Pages/SignIn/SignIn";
import Register from "./Pages/SignIn/Register";

import MainLoader from "./MainComponents/MainLoader";

const LazyLandingPage = lazy(() => import("./Pages/LandingPage/LandingPage"));

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <Suspense fallback={<MainLoader />}>
                <LazyLandingPage />
              </Suspense>
            }
          />
        </Route>

        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );

}

export default App;
