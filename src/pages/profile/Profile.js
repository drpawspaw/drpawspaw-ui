import { Avatar, Button, Dropdown, Input, Loading } from "@nextui-org/react";
import React, { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../../App";
import ManagePets from "../../components/manage-pets/ManagePets";
import { ACCESS_TOKEN, countryList, NOTIFY_STATE } from "../../constants";
import { getEmailFromAccessToken, getProfile } from "../../utils/ApiUtils";
import { truncate } from "../../utils/CommonUtils";
import { notificationManager } from "../../utils/NotificationUtils";
import "./Profile.scss";

const initialValues = {
  name: "",
  email: "",
  image_url: "",
};

const Profile = () => {
  const [currentUser, setCurrentUser] = useState(initialValues);
  const [isAuth, setIsAuth] = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(true);
  const managePetsRef = useRef(null);

  const handleUpdate = (e, field) => {
    // NOTE: No need to implement since, we are not allowed to change information grabbed from Google
    return;
  };

  const handleCancel = () => {
    window.location.href = "/";
  };

  const handleSave = (e) => {
    managePetsRef.current.handleUpdateOnChange();
  };

  const handleSync = () => {
    if (isAuth) {
      const username = getEmailFromAccessToken(
        localStorage.getItem(ACCESS_TOKEN)
      );
      if (username && username !== "") {
        getProfile(username)
          .then((res) => {
            setCurrentUser(res?.data ?? initialValues);
            setIsLoading(false);
          })
          .catch((err) => {
            console.error(err);
            notificationManager(
              "Unable to fetch user profile",
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
  };

  useEffect(() => {
    handleSync();
  }, [isAuth]);

  return (
    <div className="profile-screen d-flex m-2 h-100 w-100">
      {isLoading ? (
        <div className="d-flex justify-content-center align-items-center flex-column w-100 h-100">
          <Loading type="spinner" size="xl" />
          Please Wait
        </div>
      ) : (
        <>
          <div className="profile-screen-details px-2 py-3 col-3 d-flex flex-column align-items-center justify-content-between">
            <div className="w-100 d-flex flex-column justify-content-center align-items-center">
              <div className="profile-screen-details-avatar mb-4">
                <Avatar
                  src={currentUser?.image_url}
                  css={{ size: "$36" }}
                  name={currentUser?.name}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="profile-screen-details-inputs d-flex flex-column justify-content-center align-items-center w-100">
                <div className="my-4">
                  <Input
                    bordered
                    labelPlaceholder="Name"
                    initialValue="Viraj Lakshitha"
                    value={currentUser?.name}
                    type="text"
                    onChange={(e) => handleUpdate(e, "name")}
                    color="primary"
                    className="profile-screen-details-inputs-field"
                  />
                </div>
                <div className="my-4">
                  <Input
                    bordered
                    labelPlaceholder="Email"
                    initialValue={currentUser?.email}
                    value={currentUser?.email}
                    type="email"
                    onChange={(e) => handleUpdate(e, "email")}
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
                      {currentUser?.country}
                    </Dropdown.Button>
                    <Dropdown.Menu
                      variant="flat"
                      aria-label="single-country-selection"
                      color="default"
                      disallowEmptySelection
                      selectionMode="single"
                      selectedKeys={currentUser?.country}
                      onSelectionChange={(e) => setCurrentUser(e, "country")}
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
            <div className="profile-screen-details-action d-flex flex-column justify-content-center">
              <p className="profile-screen-details-action-text d-flex justify-content-center">
                * Logging in with Google prevents you from editing your profile.
              </p>
              <div className="profile-screen-details-action d-flex justify-content-center">
                <Button
                  onClick={(e) => handleSave(e)}
                  color="primary"
                  className="me-1"
                >
                  Save
                </Button>
                <Button
                  onClick={(e) => handleCancel()}
                  color="error"
                  className="ms-1"
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
          <div className="profile-screen-pets col-9 p-3">
            <ManagePets ref={managePetsRef} userId={currentUser?._id ?? ""} />
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
