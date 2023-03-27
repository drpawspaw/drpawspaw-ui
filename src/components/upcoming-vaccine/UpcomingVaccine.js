import { Text } from "@nextui-org/react";
import React from "react";
import { truncate } from "../../utils/CommonUtils";
import "./UpcomingVaccine.scss";

const UpcomingVaccine = ({ details }) => {
  return (
    <div className="upcoming-vaccine w-100 d-flex">
      <div className="upcoming-vaccine-date d-flex justify-content-center align-items-center flex-column h-100">
        <Text size={16}>{new Date(details?.date)?.toDateString()?.split(" ")[2] ?? "-"}</Text>
        <Text size={12}>{new Date(details?.date)?.toDateString()?.split(" ")[1] ?? "-"}</Text>
      </div>
      <div className="upcoming-vaccine-content w-100 ms-2 d-flex flex-column justify-content-center">
        <Text size={14}>{truncate(details?.vaccine, 15)}</Text>
        <Text size={12}>{details?.pet}</Text>
      </div>
    </div>
  );
};

export default UpcomingVaccine;