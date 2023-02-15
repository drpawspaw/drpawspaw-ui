import { useEffect, useState } from "react";
import ChatPlayground from "../../components/chat-playgound/ChatPlayground";
import { currentUserDetails } from "../../mock-data/MockData";
import ProfileOverview from "../profile-overview/ProfileOverview";
import "./Home.scss";

const Home = () => {
  const isAuth = true;
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
