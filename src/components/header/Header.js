import { Button, Navbar, Text } from "@nextui-org/react";
import { useEffect, useState } from "react";
import Login from "../login/Login";
import "./Header.scss";

const Header = () => {
  const [greeting, setGreeting] = useState("Good Morning");
  const [visibleLogin, setLoginVisible] = useState(false);

  const handleVisible = () => {
    setLoginVisible(!visibleLogin);
  };

  const handleGreeting = () => {
    const hr = new Date().getHours();
    if (hr >= 0 && hr < 12) {
      setGreeting("Good Morning!");
    } else if (hr === 12) {
      setGreeting("Good Noon!");
    } else if (hr >= 12 && hr <= 17) {
      setGreeting("Good Afternoon!");
    } else {
      setGreeting("Good Evening!");
    }
  };

  useEffect(() => {
    handleGreeting();
  }, []);

  return (
    <>
      <Navbar
        variant="static"
        isBordered
        className="header d-flex align-items-center justify-content-between w-100"
      >
        <Text className="m-0 ">{greeting}</Text>
        <Button onClick={handleVisible}>Login</Button>
      </Navbar>
      <Login visible={visibleLogin} handleClose={handleVisible} />
    </>
  );
};

export default Header;
