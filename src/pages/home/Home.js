import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";
import ChatPlayground from "../../components/chat-playgound/ChatPlayground";
import ProfileOverview from "../../components/profile-overview/ProfileOverview";
import { currentUserDetails } from "../../mock-data/MockData";
import "./Home.scss";

const Home = () => {
  const [isAuth, setIsAuth] = useContext(AppContext)
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    // Fetch current user details
    setCurrentUser(currentUserDetails)
  }, [])

  return (
    <div className="home container-fluid d-flex h-100">
      <div
        className={isAuth ? "home-profile col-2" : "home-profile d-none"}
      >
        <ProfileOverview details={currentUser} />
      </div>
      <div
        className={isAuth ? "home-playground col-10" : "home-playground col-12"}
      >
        <ChatPlayground userImage={currentUser?.image} />
      </div>
    </div>
  );
};

export default Home;
