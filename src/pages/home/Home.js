import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";
import ChatPlayground from "../../components/chat-playgound/ChatPlayground";
import ProfileOverview from "../../components/profile-overview/ProfileOverview";
import { ACCESS_TOKEN, NOTIFY_STATE } from "../../constants";
import { currentUserDetails } from "../../mock-data/MockData";
import { getEmailFromAccessToken, getProfile } from "../../utils/ApiUtils";
import { notificationManager } from "../../utils/NotificationUtils";
import "./Home.scss";

const Home = () => {
  const [isAuth, setIsAuth] = useContext(AppContext);
  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
    country: "",
    image: "",
  });
  const [isProfLoading, setIsProfLoading] = useState(true);

  useEffect(() => {
    // If tokens available and username exists in the header
    if (isAuth) {
      const username = getEmailFromAccessToken(
        localStorage.getItem(ACCESS_TOKEN)
      );
      if (username && username !== "") {
        getProfile(username)
          .then((res) => {
            if (res.status !== 200) {
              window.location.href = "/login";
            }
            const currProf = {
              id: res?.data?._id,
              name: res?.data?.name ?? "",
              email: res?.data?.email ?? "",
              country: "Sri Lanka",
              image: res?.data?.image_url ?? "",
            };
            if (currProf?.image === "") {
              currProf.image = currentUserDetails()?.image;
            }
            setCurrentUser(currProf);
            setIsProfLoading(false);
          })
          .catch((err) => {
            console.error(err);
            notificationManager(
              "Unable to fetch user details",
              NOTIFY_STATE.error
            );
            if (
              err?.response?.status === 403 &&
              window.location.pathname !== "/login"
            ) {
              window.location.href = "/login";
            }
          });
      }
    }
  }, [isAuth]);

  return (
    <div className="home container-fluid d-flex h-100">
      <div className={isAuth ? "home-profile col-2" : "home-profile d-none"}>
        <ProfileOverview details={currentUser} isProfLoading={isProfLoading} />
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
