import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Prototype from "./pages/prototype/Prototype";
import "./App.scss";
import Header from "./components/header/Header";
import Error from "./pages/error/Error";
import {
  ACCESS_TOKEN,
  NON_DESKTOP_MEDIA_QUERY,
  NOT_FOUND,
  REFRESH_TOKEN,
  UNAUTHORISED,
} from "./constants";
import Profile from "./pages/profile/Profile";
import OAuth2Redirect from "./pages/oauth2redirect/OAuth2Redirect";
import { ToastContainer } from "react-toastify";
import { Spacer } from "@nextui-org/react";
import "react-toastify/dist/ReactToastify.css";

export const AppContext = React.createContext();

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [isNonDesktop, setIsNonDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsNonDesktop(window.matchMedia(NON_DESKTOP_MEDIA_QUERY).matches);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (
      localStorage.getItem(ACCESS_TOKEN) &&
      localStorage.getItem(REFRESH_TOKEN)
    ) {
      setIsAuth(true);
    }
  }, []); // Trigger when localstorage updated

  return (
    <AppContext.Provider value={[isAuth, setIsAuth]}>
      {isNonDesktop ? (
        <div className="app-helper d-flex flex-column text-center justify-content-center align-items-center h-100 p-4">
          Hey 👋,
          <Spacer />
          DRPAWSPAW research preview only support for web version.
          <Spacer />
          Thank you for being with us.
          <Spacer />
          <iframe
            src="https://www.youtube-nocookie.com/embed/rM8cLW_N1O8"
            title="Welcome to DRPAWSPAW"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <div className="app h-100">
          <div className="app-preivew h-100">
            <Header />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/prototype" element={<Prototype />} />
                <Route
                  path="/api/auth/authenticate"
                  element={<OAuth2Redirect />}
                />
                <Route
                  path="/unauthorized"
                  element={<Error error={UNAUTHORISED} />}
                />
                <Route path="*" element={<Error error={NOT_FOUND} />} />
              </Routes>
            </BrowserRouter>
          </div>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            pauseOnHover
            closeOnClick
            hideProgressBar={false}
          />
        </div>
      )}
    </AppContext.Provider>
  );
};

export default App;
