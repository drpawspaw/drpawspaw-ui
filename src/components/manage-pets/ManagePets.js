import {
  faBell,
  faBellSlash,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Avatar,
  Button,
  Dropdown,
  Input,
  Loading,
  Spacer,
} from "@nextui-org/react";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import {
  CAT,
  CAT_BREEDS,
  DOG,
  DOG_BREEDS,
  NOTIFY_STATE,
} from "../../constants";
import {
  deletePetProfile,
  getPetsByOwnerId,
  getVaccines,
  updatePetProfile,
} from "../../utils/ApiUtils";
import {
  capitalize,
  convertDateFormat,
  deepCompare,
  getCatImage,
  getDogImage,
  truncate,
} from "../../utils/CommonUtils";
import "./ManagePets.scss";
import { notificationManager } from "../../utils/NotificationUtils";
import CreateNewPet from "../create-new-pet/CreateNewPet";

const ManagePets = forwardRef(({ userId }, ref) => {
  const [pets, setPets] = useState([]);
  const [vaccines, setVaccines] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isShowOverlay, setIsShowOverlay] = useState(false);

  const handleSync = () => {
    if (userId !== "") {
      getPetsByOwnerId(userId)
        .then((res) => {
          setPets(res?.data ?? []);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error(err);
          notificationManager(
            "Unable to fetch pet profiles",
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
  };

  const handleDelete = (idx) => {
    if (idx !== "") {
      deletePetProfile(idx)
        .then((res) => {
          notificationManager("Pet profile deleted", NOTIFY_STATE.success);
          handleSync();
        })
        .catch((err) => {
          console.error(err);
          notificationManager(
            "Unable to delete pet profile",
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
  };

  const handleNotification = (idx) => {
    const filteredPets = [...pets].map((curr, index) => {
      if (idx === index) {
        curr.isNotificationEnabled = !curr.isNotificationEnabled;
      }
      return curr;
    });
    setPets([...filteredPets]);
  };

  const handleOnChange = (e, idx, arg) => {
    const filteredPets = [...pets].map((curr, index) => {
      if (idx === index) {
        curr[arg] = e?.target?.value ?? curr[arg];
      }
      return curr;
    });
    setPets([...filteredPets]);
  };

  const handleOnChangeDropdown = (e, idx, arg) => {
    const filteredPets = [...pets].map((curr, index) => {
      if (idx === index) {
        curr[arg] = e?.currentKey ?? curr[arg];
      }
      return curr;
    });
    setPets([...filteredPets]);
  };

  const handleOnChangeVaccine = (e, idx, items) => {
    const filteredPets = [...pets].map((curr, index) => {
      if (idx === index) {
        curr["lastVaccination"] =
          items[e.currentKey]?.name ?? curr["lastVaccination"];
      }
      return curr;
    });
    setPets([...filteredPets]);
  };

  const handleCreateNewPetProfile = () => {
    setIsShowOverlay(!isShowOverlay);
  };

  const handleUpdateOnChange = () => {
    getPetsByOwnerId(userId)
      .then((res) => {
        const initialPets = res?.data ?? [];
        pets?.forEach((pet) => {
          const updatedPet = initialPets.find((e) => e?._id === pet?._id);
          if (!deepCompare(pet, updatedPet)) {
            delete pet["_id"];
            pet["lastVaccinationDate"] = convertDateFormat(
              pet["lastVaccinationDate"]
            );
            pet["birthdate"] = convertDateFormat(pet["birthdate"]);
            updatePetProfile(updatedPet?._id, pet)
              .then((res) => {
                if (res?.status === 200) {
                  notificationManager(
                    `${pet?.name ?? ""} updated successfully`,
                    NOTIFY_STATE.success
                  );
                }
              })
              .catch((err) => {
                console.error(err);
                notificationManager(
                  "Unable to fetch pet profiles",
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
        });
      })
      .catch((err) => {
        console.error(err);
        notificationManager("Unable to fetch pet profiles", NOTIFY_STATE.error);
        if (
          err?.response?.status === 403 &&
          window.location.pathname !== "/login"
        ) {
          window.location.href = "/login";
        }
      });
  };

  useImperativeHandle(ref, () => ({
    handleUpdateOnChange,
  }));

  useEffect(() => {
    handleSync();
  }, [userId]);

  useEffect(() => {
    getVaccines()
      .then((res) => {
        setVaccines(res?.data ?? []);
      })
      .catch((err) => {
        notificationManager("Unable to fetch vaccines", NOTIFY_STATE.error);
        console.error(err);
      });
  }, []);

  return (
    <div className="manage-screen h-100">
      {isLoading ? (
        <div className="d-flex justify-content-center align-items-center h-100 flex-column">
          <Loading type="spinner" size="xl" />
          Please Wait
        </div>
      ) : (
        <>
          {isShowOverlay ? (
            <CreateNewPet
              vaccines={vaccines}
              isShowOverlay={isShowOverlay}
              handleOverlay={handleCreateNewPetProfile}
              handleSync={handleSync}
              userId={userId}
            />
          ) : (
            <>
              <div className="manage-screen-action d-flex justify-content-end align-items-center">
                <Button onClick={(e) => handleCreateNewPetProfile()}>
                  Create Pet Profile
                </Button>
              </div>
              <div className="manage-screen-pets mt-1">
                {pets.map((pet, idx) => (
                  <div key={idx} className="manage-screen-pets-item my-3">
                    <div className="d-flex justify-content-between manage-screen-pets-item-control align-items-center">
                      <Avatar
                        src={
                          pet?.category === CAT ? getCatImage() : getDogImage()
                        }
                        css={{ size: "$20" }}
                        name={pet?.name}
                      />
                      <div className="d-flex">
                        <Button className="me-1 manage-screen-pets-item-control-button">
                          <FontAwesomeIcon
                            className="manage-screen-pets-item-icon"
                            icon={
                              pet.isNotificationEnabled ? faBell : faBellSlash
                            }
                            onClick={(e) => handleNotification(idx)}
                          />
                        </Button>
                        <Button
                          className="ms-1 manage-screen-pets-item-control-button"
                          color="error"
                          onClick={(e) => handleDelete(pet?._id)}
                        >
                          <FontAwesomeIcon
                            className="manage-screen-pets-item-control-icon"
                            icon={faTrashCan}
                          />
                        </Button>
                      </div>
                    </div>
                    <div className="d-flex w-100 justify-content-center mt-5 manage-screen-pets-item-action">
                      <div className="col-6 manage-screen-pets-item-action-left me-2">
                        <div className="d-flex justify-content-between">
                          <Input
                            bordered
                            labelPlaceholder="Name"
                            value={pet?.name}
                            type="text"
                            onChange={(e) => handleOnChange(e, idx, "name")}
                            color="primary"
                            className="manage-screen-pets-item-input w-100"
                          />
                        </div>
                        <Spacer />
                        <Spacer />
                        <Spacer />
                        <div className="d-flex justify-content-between">
                          <Input
                            bordered
                            labelPlaceholder="Birthday"
                            value={new Date(pet?.birthdate)
                              ?.toISOString()
                              ?.replace(/T.*/, "")
                              ?.split("-")
                              ?.join("-")}
                            type="date"
                            onChange={(e) =>
                              handleOnChange(e, idx, "birthdate")
                            }
                            color="primary"
                            className="manage-screen-pets-item-input w-100"
                          />
                          <Input
                            bordered
                            labelPlaceholder="Last Vaccinate Date"
                            value={new Date(pet?.lastVaccinationDate)
                              ?.toISOString()
                              ?.replace(/T.*/, "")
                              ?.split("-")
                              ?.join("-")}
                            type="date"
                            onChange={(e) =>
                              handleOnChange(e, idx, "lastVaccinationDate")
                            }
                            color="primary"
                            className="manage-screen-pets-item-input w-100"
                          />
                        </div>
                      </div>
                      <div className="col-6 manage-screen-pets-item-action-right ms-2">
                        <div className="d-flex justify-content-between">
                          <Dropdown>
                            <Dropdown.Button
                              flat
                              color="default"
                              css={{ tt: "capitalize" }}
                              className="profile-screen-details-inputs-dropdown-button"
                            >
                              {capitalize(pet?.category)}
                            </Dropdown.Button>
                            <Dropdown.Menu
                              variant="flat"
                              aria-label="single-country-selection"
                              color="default"
                              disallowEmptySelection
                              selectionMode="single"
                              selectedKeys={pet?.category}
                              onSelectionChange={(e) =>
                                handleOnChangeDropdown(e, idx, "category")
                              }
                              className="profile-screen-details-inputs-dropdown"
                            >
                              {[DOG, CAT].map((animal) => (
                                <Dropdown.Item key={animal} value={animal}>
                                  {capitalize(animal)}
                                </Dropdown.Item>
                              ))}
                            </Dropdown.Menu>
                          </Dropdown>
                          <Dropdown>
                            <Dropdown.Button
                              flat
                              color="default"
                              css={{ tt: "capitalize" }}
                              className="profile-screen-details-inputs-dropdown-button"
                            >
                              {pet?.bread}
                            </Dropdown.Button>
                            <Dropdown.Menu
                              variant="flat"
                              aria-label="single-country-selection"
                              color="default"
                              disallowEmptySelection
                              selectionMode="single"
                              selectedKeys={pet?.bread}
                              onSelectionChange={(e) =>
                                handleOnChangeDropdown(e, idx, "bread")
                              }
                              className="profile-screen-details-inputs-dropdown"
                            >
                              {pet?.category === DOG
                                ? DOG_BREEDS.map((breed) => (
                                    <Dropdown.Item key={breed} value={breed}>
                                      {truncate(breed, 35)}
                                    </Dropdown.Item>
                                  ))
                                : CAT_BREEDS.map((breed) => (
                                    <Dropdown.Item key={breed} value={breed}>
                                      {truncate(breed, 35)}
                                    </Dropdown.Item>
                                  ))}
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                        <Spacer />
                        <Spacer />
                        <Spacer />
                        <div>
                          <Dropdown>
                            <Dropdown.Button
                              flat
                              color="default"
                              css={{ tt: "capitalize" }}
                              className="profile-screen-details-inputs-dropdown-button"
                            >
                              {pet?.lastVaccination}
                            </Dropdown.Button>
                            <Dropdown.Menu
                              variant="flat"
                              aria-label="single-country-selection"
                              color="default"
                              disallowEmptySelection
                              selectionMode="single"
                              selectedKeys={pet?.lastVaccination}
                              onSelectionChange={(e) =>
                                handleOnChangeVaccine(e, idx, vaccines)
                              }
                              className="profile-screen-details-inputs-dropdown w-100"
                            >
                              {vaccines?.map((vaccine, vid) => (
                                <Dropdown.Item key={vid} value={vaccine?.name}>
                                  {truncate(vaccine?.name, 35)}
                                </Dropdown.Item>
                              ))}
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
});

export default ManagePets;
