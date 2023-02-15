import { Avatar, Button, Text } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import UpcomingVaccine from "../../components/upcoming-vaccine/UpcomingVaccine";
import { CAT_IMAGE_URL, DOG, DOG_IMG_URL } from "../../constants";
import { currentUserDetails } from "../../mock-data/MockData";
import { truncate } from "../../utils/CommonUtils";
import "./ProfileOverview.scss";

const ProfileOverview = ({ details }) => {
  const [vaccines, setVaccines] = useState([]);

  useEffect(() => {
    setVaccines(details?.upcomingVaccines)
  }, [details]);

  return (
    <div className="profile-overview h-100 d-flex flex-column align-items-center justify-content-between">
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
          {truncate(details?.name  ?? "-", 20)}
        </Text>
        <Text className="m-0 profile-overview-info-email" size={10}>
          <a href={`mailto:${details?.email ?? ""}`}>{truncate(details?.email  ?? "-", 30)}</a>
        </Text>
      </div>
      <div className="profile-overview-pets d-flex align-items-center">
        {details?.pets?.map((pet, idx) => (
          <Avatar
            key={idx}
            src={pet?.type === DOG ? DOG_IMG_URL : CAT_IMAGE_URL}
            bordered
            css={{ size: "$18" }}
          />
        ))}
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
            <Text>No upcoming vaccines!</Text>
          </div>
        )}
      </div>
      <div className="profile-overview-controls d-flex flex-column w-100 justify-content-between">
        <Button shadow color="primary" auto>
          Edit Profile
        </Button>
        <Button shadow color="error" auto>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default ProfileOverview;
