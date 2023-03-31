import {
  Button,
  Dropdown,
  Input,
  Modal,
  Spacer,
  Text,
} from "@nextui-org/react";
import React, { useState } from "react";
import {
  CAT,
  CAT_BREEDS,
  DOG,
  DOG_BREEDS,
  NOTIFY_STATE,
} from "../../constants";
import { createPetProfile } from "../../utils/ApiUtils";
import {
  capitalize,
  convertDateFormat,
  isDateBefore,
  truncate,
} from "../../utils/CommonUtils";
import { notificationManager } from "../../utils/NotificationUtils";
import "./CreateNewPet.scss";

const initialValues = {
  name: "",
  birthdate: new Date(),
  lastVaccinationDate: new Date(),
  lastVaccination: "Rabies + Parvo",
  category: "dog",
  bread: "Shitzu",
  owner: "",
  isNotificationEnabled: false,
};

const CreateNewPet = (props) => {
  const { isShowOverlay, handleOverlay, handleSync, vaccines, userId } = props;
  const [newPet, setNewPet] = useState(initialValues);

  const handleOnChange = (e, attribute) => {
    if (["birthdate", "lastVaccinationDate", "name"].includes(attribute)) {
      setNewPet({ ...newPet, [attribute]: e?.target?.value });
    }

    if (["lastVaccination", "category", "bread"].includes(attribute)) {
      setNewPet({ ...newPet, [attribute]: e?.currentKey });
    }
  };

  const handleClose = () => {
    setNewPet(initialValues);
    handleOverlay();
  };

  const handleSave = () => {
    if (
      newPet?.name !== "" &&
      isDateBefore(newPet?.birthdate, newPet?.lastVaccinationDate)
    ) {
      newPet["lastVaccinationDate"] = convertDateFormat(
        newPet?.lastVaccinationDate
      );
      newPet["birthdate"] = convertDateFormat(newPet?.birthdate);
      newPet["owner"] = userId;
      createPetProfile(newPet)
        .then((res) => {
          if (res.status === 201) {
            console.log(res);
            handleSync();
            notificationManager(
              "New pet profile created",
              NOTIFY_STATE.success
            );
            handleClose();
          }
        })
        .catch((err) => {
          console.error(err);
          notificationManager(
            "Unable to create new pet profile",
            NOTIFY_STATE.error
          );
          if (
            err?.response?.status === 403 &&
            window.location.pathname !== "/login"
          ) {
            window.location.href = "/login";
          }
        });
    } else {
      handleClose();
      notificationManager("Invalid user inputs", NOTIFY_STATE.warning);
    }
  };

  return (
    <Modal
      blur
      aria-labelledby="modal-title"
      open={isShowOverlay}
      onClose={handleClose}
    >
      <Modal.Header>
        <Text id="modal-title" size={18}>
          Create New Pet Profile
        </Text>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex flex-column">
          <Input
            bordered
            labelPlaceholder="Name"
            value={newPet?.name}
            type="text"
            onChange={(e) => handleOnChange(e, "name")}
            color="primary"
            className="manage-screen-pets-item-input w-100"
          />
          <Spacer y={2} />
          <Input
            bordered
            labelPlaceholder="Birthday"
            value={new Date(newPet?.birthdate)
              ?.toISOString()
              ?.replace(/T.*/, "")
              ?.split("-")
              ?.join("-")}
            type="date"
            onChange={(e) => handleOnChange(e, "birthdate")}
            color="primary"
            className="manage-screen-pets-item-input w-100"
          />
          <Spacer y={2} />
          <Input
            bordered
            labelPlaceholder="Last Vaccinate Date"
            value={new Date(newPet?.lastVaccinationDate)
              ?.toISOString()
              ?.replace(/T.*/, "")
              ?.split("-")
              ?.join("-")}
            type="date"
            onChange={(e) => handleOnChange(e, "lastVaccinationDate")}
            color="primary"
            className="manage-screen-pets-item-input w-100"
          />
          <Spacer y={1} />
          <Dropdown>
            <Dropdown.Button
              flat
              color="default"
              css={{ tt: "capitalize" }}
              className="profile-screen-details-inputs-dropdown-button"
            >
              {capitalize(newPet?.category)}
            </Dropdown.Button>
            <Dropdown.Menu
              variant="flat"
              aria-label="single-country-selection"
              color="default"
              disallowEmptySelection
              selectionMode="single"
              selectedKeys={newPet?.category}
              onSelectionChange={(e) => handleOnChange(e, "category")}
              className="profile-screen-details-inputs-dropdown"
            >
              {[DOG, CAT].map((animal) => (
                <Dropdown.Item key={animal} value={animal}>
                  {capitalize(animal)}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Spacer y={1} />
          <Dropdown>
            <Dropdown.Button
              flat
              color="default"
              css={{ tt: "capitalize" }}
              className="profile-screen-details-inputs-dropdown-button"
            >
              {newPet?.bread}
            </Dropdown.Button>
            <Dropdown.Menu
              variant="flat"
              aria-label="single-country-selection"
              color="default"
              disallowEmptySelection
              selectionMode="single"
              selectedKeys={newPet?.bread}
              onSelectionChange={(e) => handleOnChange(e, "bread")}
              className="profile-screen-details-inputs-dropdown"
            >
              {newPet?.category === DOG
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
          <Spacer y={1} />
          <Dropdown>
            <Dropdown.Button
              flat
              color="default"
              css={{ tt: "capitalize" }}
              className="profile-screen-details-inputs-dropdown-button"
            >
              {newPet?.lastVaccination}
            </Dropdown.Button>
            <Dropdown.Menu
              variant="flat"
              aria-label="single-country-selection"
              color="default"
              disallowEmptySelection
              selectionMode="single"
              selectedKeys={newPet?.lastVaccination}
              onSelectionChange={(e) => handleOnChange(e, "lastVaccination")}
              className="profile-screen-details-inputs-dropdown w-100"
            >
              {vaccines?.map((vaccine, vid) => (
                <Dropdown.Item key={vaccine?.name} value={vaccine?.name}>
                  {truncate(vaccine?.name, 35)}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button auto color="error" onPress={handleClose}>
          Cancel
        </Button>
        <Button auto onPress={handleSave}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateNewPet;
