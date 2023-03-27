import React, { useEffect, useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Prototype from "./pages/prototype/Prototype";
import "./App.scss";
import Header from "./components/header/Header";
import Error from "./pages/error/Error";
import {
  ACCESS_TOKEN,
  NOT_FOUND,
  REFRESH_TOKEN,
  UNAUTHORISED,
} from "./constants";
import Profile from "./pages/profile/Profile";
import OAuth2Redirect from "./pages/oauth2redirect/OAuth2Redirect";

export const AppContext = React.createContext();

const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(ACCESS_TOKEN) &&  localStorage.getItem(REFRESH_TOKEN)) {
      console.log("Update isAuth");
      setIsAuth(true);
    }
  }, []); // Trigger when localstorage updated

  return (
    <AppContext.Provider value={[isAuth, setIsAuth]}>
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
      </div>
    </AppContext.Provider>
  );
};

export default App;
