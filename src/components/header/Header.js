import { Button, Navbar, Text } from "@nextui-org/react";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";
import Login from "../login/Login";
import "./Header.scss";
import WelcomeMessage from "../welcome-message/WelcomeMessage";
import { SHOW_MESSAGE } from "../../constants";

const Header = () => {
  const [greeting, setGreeting] = useState("Good Morning");
  const [visibleLogin, setLoginVisible] = useState(false);
  const [visibleWelcome, setVisibleWelcome] = useState(false);
  const [isAuth, setIsAuth] = useContext(AppContext);

  const handleVisibleLogin = () => {
    setLoginVisible(!visibleLogin);
  };

  const handleVisibleWelcome = () => {
    setVisibleWelcome(!visibleWelcome);
  };

  const handleGreeting = () => {
    const hr = new Date().getHours();
    if (hr >= 0 && hr < 12) {
      setGreeting("Good Morning! 👋");
    } else if (hr === 12) {
      setGreeting("Good Noon! 👋");
    } else if (hr >= 12 && hr <= 17) {
      setGreeting("Good Afternoon! 👋");
    } else {
      setGreeting("Good Evening! 👋");
    }
  };

  useEffect(() => {
    handleGreeting();
    !sessionStorage?.getItem(SHOW_MESSAGE) &&
      setVisibleWelcome(true) &&
      sessionStorage.setItem(SHOW_MESSAGE, true);
  }, []);

  useEffect(() => {
    if (window.location.pathname === "/login") {
      setLoginVisible(true);
    }
  }, [window.location.pathname]);

  return (
    <>
      <Navbar
        variant="static"
        isBordered
        className="header d-flex align-items-center justify-content-between w-100"
      >
        <div className="d-flex justify-content-center align-items-center">
          <img
            src={`${window.location.href}drpawspaw-logo.png`}
            width={50}
            alt="drpawspaw-logo"
          />
          <Text h5 className="pt-2 px-1">
            DRPAWSPAW
          </Text>
        </div>
        <Text className="m-0">{greeting}</Text>
        <Button
          id="google-login"
          onClick={handleVisibleLogin}
          className={isAuth ? "d-none" : "d-flex"}
        >
          Login
        </Button>
      </Navbar>
      <Login visible={visibleLogin} handleClose={handleVisibleLogin} />
      <WelcomeMessage
        visible={visibleWelcome}
        handleClose={handleVisibleWelcome}
      />
    </>
  );
};

export default Header;
