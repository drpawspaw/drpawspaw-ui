import { Avatar, Button, Loading, Text } from "@nextui-org/react";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";
import UpcomingVaccine from "../../components/upcoming-vaccine/UpcomingVaccine";
import {
  ACCESS_TOKEN,
  CAT_IMAGE_URL,
  DOG,
  DOG_IMG_URL,
  NOTIFY_STATE,
  REFRESH_TOKEN,
} from "../../constants";
import { getPetsByOwnerId, getUpComingVaccineByOwnerId } from "../../utils/ApiUtils";
import { truncate } from "../../utils/CommonUtils";
import { notificationManager } from "../../utils/NotificationUtils";
import "./ProfileOverview.scss";

const ProfileOverview = ({ details, isProfLoading }) => {
  const [pets, setPets] = useState([]);
  const [vaccines, setVaccines] = useState([]);
  const [isAuth, setIsAuth] = useContext(AppContext);

  useEffect(() => {
    if (details?.id) {
      getPetsByOwnerId(details?.id)
        .then((res) => {
          setPets(...[res?.data]);
        })
        .catch((err) => {
          console.error(err)
          notificationManager("Unable to fetch pets", NOTIFY_STATE.error)
          if (
            err?.response?.status === 403 &&
            window.location.pathname !== "/login"
          ) {
            window.location.href = "/login";
          }
        });
    }
  }, [details?.id]);

  useEffect(() => {
    if (details?.id) {
      getUpComingVaccineByOwnerId(details?.id)
        .then((res) => {
          const sorted = res?.data?.sort((date1, date2) => new Date(date1.date) - new Date(date2.date)) 
          setVaccines(...[sorted]);
        })
        .catch((err) => {
          console.error(err);
          notificationManager("Unable to fetch vaccine details", NOTIFY_STATE.error)
          if (
            err?.response?.status === 403 &&
            window.location.pathname !== "/login"
          ) {
            window.location.href = "/login";
          }
        });
    }
  }, [details?.id]);

  const handleLogout = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
    setIsAuth(false);
  };

  return (
    <div className="profile-overview h-100 d-flex flex-column align-items-center justify-content-between">
      {isProfLoading ? (
        <div className="h-100 d-flex align-items-center justify-content-center flex-column">
          <Loading type="spinner" size="xl" />
          Please Wait
        </div>
      ) : (
        <>
          <div className="profile-overview-user d-flex align-items-center">
            <Avatar
              src={details?.image}
              css={{ size: "$32" }}
              bordered
              name={details?.name}
              color="primary"
            />
          </div>
          <div className="profile-overview-info d-flex flex-column justify-content-center align-items-center w-100">
            <Text className="m-0 profile-overview-info-name" size={20}>
              {truncate(details?.name ?? "-", 20)}
            </Text>
            <Text className="m-0 profile-overview-info-email" size={10}>
              <a href={`mailto:${details?.email ?? ""}`}>
                {truncate(details?.email ?? "-", 30)}
              </a>
            </Text>
          </div>
          <div className="profile-overview-pets d-flex align-items-center justify-content-center">
            {pets?.length !== 0 ? (
              <>
                {pets?.map((pet, idx) => (
                  <Avatar
                    key={idx}
                    src={pet?.category === DOG ? DOG_IMG_URL : CAT_IMAGE_URL}
                    bordered
                    css={{ size: "$18" }}
                  />
                ))}
              </>
            ) : (
              <div className="d-flex justify-content-center align-items-center h-100">
                <Text className="profile-overview-text">
                  No pets registered!
                </Text>
              </div>
            )}
          </div>
          <div className="profile-overview-vaccines p-2 my-1 w-100 d-flex flex-column">
            {vaccines?.length !== 0 ? (
              <>
                <Text
                  size={16}
                  className="profile-overview-vaccines-title m-0 w-100 pb-2"
                >
                  Upcoming Vaccinations
                </Text>
                {vaccines?.map((vaccine, idx) => (
                  <UpcomingVaccine key={idx} details={vaccine} />
                ))}
              </>
            ) : (
              <div className="d-flex justify-content-center align-items-center h-100">
                <Text className="profile-overview-text">
                  No upcoming vaccines!
                </Text>
              </div>
            )}
          </div>
          <div className="profile-overview-controls d-flex flex-column w-100 justify-content-between">
            <Button
              shadow
              onClick={(e) => (window.location.href = "/profile")}
              color="primary"
              auto
            >
              Edit Profile
            </Button>
            <Button shadow color="error" onClick={(e) => handleLogout()}>
              Logout
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default ProfileOverview;
