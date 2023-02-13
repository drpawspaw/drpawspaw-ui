import ChatPlayground from "../../components/chat-playgound/ChatPlayground";
import "./Home.scss";

const Home = () => {
  const isAuth = false;

  return (
    <div className="home container-fluid d-flex h-100">
      <div
        className={isAuth ? "home-profile col-3" : "home-profile col-3 d-none"}
      >
        Profile
      </div>
      <div
        className={isAuth ? "home-playground col-9" : "home-playground col-12"}
      >
        <ChatPlayground />
      </div>
    </div>
  );
};

export default Home;
