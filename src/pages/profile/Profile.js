import { Avatar, Button, Dropdown, Input } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import ManagePets from "../../components/manage-pets/ManagePets";
import { countryList } from "../../constants";
import { currentUserDetails } from "../../mock-data/MockData";
import { truncate } from "../../utils/CommonUtils";
import "./Profile.scss";

const Profile = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [name, setName] = useState("Viraj Lakshitha");
  const [email, setEmail] = useState("viraj@drpawspaw.com");
  const [country, setCountry] = useState("Sri Lanka");

  const handleDelete = () => {
    // TODO - Integrate with APIs
  };

  const handleSave = () => {
    // TODO - Integrate with APIs
  };

  useEffect(() => {
    // Fetch the current user details from the APIs
    setCurrentUser(currentUserDetails);
  }, []);

  return (
    <div className="profile-screen d-flex m-2">
      <div className="profile-screen-details px-2 py-3 col-3 d-flex flex-column align-items-center justify-content-between">
        <div className="w-100 d-flex flex-column justify-content-center align-items-center">
          <div className="profile-screen-details-avatar mb-4">
            <Avatar
              src={currentUser?.image}
              css={{ size: "$36" }}
              name={currentUser?.name}
            />
          </div>
          <div className="profile-screen-details-inputs d-flex flex-column justify-content-center align-items-center w-100">
            <div className="my-4">
              <Input
                bordered
                labelPlaceholder="Name"
                initialValue="Viraj Lakshitha"
                value={name}
                type="text"
                onChange={(e) => setName(e.target.value)}
                color="primary"
                className="profile-screen-details-inputs-field"
              />
            </div>
            <div className="my-4">
              <Input
                bordered
                labelPlaceholder="Email"
                initialValue="viraj@drpawspaw.com"
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                color="primary"
                className="profile-screen-details-inputs-field"
              />
            </div>
            <div className="my-4">
              <Dropdown>
                <Dropdown.Button
                  flat
                  color="default"
                  css={{ tt: "capitalize" }}
                  className="profile-screen-details-inputs-dropdown-button"
                >
                  {country}
                </Dropdown.Button>
                <Dropdown.Menu
                  variant="flat"
                  aria-label="single-country-selection"
                  color="default"
                  disallowEmptySelection
                  selectionMode="single"
                  selectedKeys={country}
                  onSelectionChange={(e) => setCountry(e?.currentKey)}
                  className="profile-screen-details-inputs-dropdown"
                  defaultSelectedKeys={"Sri Lanka"}
                >
                  {countryList.map((country) => (
                    <Dropdown.Item key={country} value={country}>
                      {truncate(country, 35)}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
        <div className="profile-screen-details-action d-flex justify-content-center">
          <Button
            onClick={(e) => handleSave()}
            color="primary"
            className="me-1"
          >
            Save
          </Button>
          <Button
            onClick={(e) => handleDelete()}
            color="error"
            className="ms-1"
          >
            Delete
          </Button>
        </div>
      </div>
      <div className="profile-screen-pets col-9 p-3">
        <ManagePets currentUser={currentUser} />
      </div>
    </div>
  );
};

export default Profile;
