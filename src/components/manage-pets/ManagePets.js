import {
  faBell,
  faBellSlash,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Button, Dropdown, Input, Spacer } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import {
  CAT,
  CAT_BREEDS,
  CAT_IMAGE_URL,
  DOG,
  DOG_BREEDS,
  DOG_IMG_URL,
} from "../../constants";
import { capitalize, truncate } from "../../utils/CommonUtils";
import "./ManagePets.scss";

const ManagePets = ({ currentUser }) => {
  const [pets, setPets] = useState([]);

  const handleDelete = (idx) => {
    const filteredPets = [...pets].filter((_, index) => idx !== index);
    setPets([...filteredPets]);
  };

  const handleNotification = (idx) => {
    const filteredPets = [...pets].map((curr, index) => {
      if (idx === index) {
        curr.notificationEnabled = !curr.notificationEnabled;
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

  const handleOnSelect = (e, idx, arg) => {
    const filteredPets = [...pets].map((curr, index) => {
      if (idx === index) {
        curr[arg] = e?.currentKey ?? curr[arg];
      }
      return curr;
    });
    setPets([...filteredPets]);
  };

  const handleCreatePetProfile = () => {
    setPets([
      {
        name: "",
        type: CAT,
        breed: "",
        birthDay: new Date().toISOString().split("T")[0],
        lastVaccine: "",
        lastVaccineDate: new Date().toISOString().split("T")[0],
        notificationEnabled: false,
      },
      ...pets,
    ]);
  };

  useEffect(() => {
    setPets(currentUser?.pets ?? []);
  }, [currentUser]);

  return (
    <div className="manage-screen">
      <div className="manage-screen-action d-flex justify-content-end align-items-center">
        <Button onClick={(e) => handleCreatePetProfile()}>
          Create Pet Profile
        </Button>
      </div>
      <div className="manage-screen-pets mt-1">
        {pets.map((pet, idx) => (
          <div key={idx} className="manage-screen-pets-item my-3">
            <div className="d-flex justify-content-between manage-screen-pets-item-control align-items-center">
              <Avatar
                src={pet.type === CAT ? CAT_IMAGE_URL : DOG_IMG_URL}
                css={{ size: "$20" }}
                name={currentUser?.name}
              />
              <div className="d-flex">
                <Button className="me-1 manage-screen-pets-item-control-button">
                  <FontAwesomeIcon
                    className="manage-screen-pets-item-icon"
                    icon={!pet.notificationEnabled ? faBell : faBellSlash}
                    onClick={(e) => handleNotification(idx)}
                  />
                </Button>
                <Button
                  className="ms-1 manage-screen-pets-item-control-button"
                  color="error"
                  onClick={(e) => handleDelete(idx)}
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
                    value={pet?.birthDay}
                    type="date"
                    onChange={(e) => handleOnChange(e, idx, "birthDay")}
                    color="primary"
                    className="manage-screen-pets-item-input w-100"
                  />
                  <Input
                    bordered
                    labelPlaceholder="Last Vaccinate Date"
                    value={pet?.lastVaccineDate}
                    type="date"
                    onChange={(e) => handleOnChange(e, idx, "lastVaccineDate")}
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
                      {capitalize(pet?.type)}
                    </Dropdown.Button>
                    <Dropdown.Menu
                      variant="flat"
                      aria-label="single-country-selection"
                      color="default"
                      disallowEmptySelection
                      selectionMode="single"
                      selectedKeys={pet?.type}
                      onSelectionChange={(e) => handleOnSelect(e, idx, "type")}
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
                      {pet?.breed}
                    </Dropdown.Button>
                    <Dropdown.Menu
                      variant="flat"
                      aria-label="single-country-selection"
                      color="default"
                      disallowEmptySelection
                      selectionMode="single"
                      selectedKeys={pet?.breed}
                      onSelectionChange={(e) => handleOnSelect(e, idx, "breed")}
                      className="profile-screen-details-inputs-dropdown"
                    >
                      {pet?.type === DOG
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
                      {pet?.lastVaccine}
                    </Dropdown.Button>
                    <Dropdown.Menu
                      variant="flat"
                      aria-label="single-country-selection"
                      color="default"
                      disallowEmptySelection
                      selectionMode="single"
                      selectedKeys={pet?.lastVaccine}
                      // onSelectionChange={(e) => setCountry(e?.currentKey)}
                      className="profile-screen-details-inputs-dropdown w-100"
                    >
                      {[].map((country) => (
                        <Dropdown.Item key={country} value={country}>
                          {truncate(country, 35)}
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
    </div>
  );
};

export default ManagePets;
