import { Modal, Spacer, Text } from "@nextui-org/react";
import React from "react";
import "./WelcomeMessage.scss";

const WelcomeMessage = ({ visible, handleClose }) => {
  return (
    <div className="message-modal">
      <Modal width="60%" blur open={visible} onClose={handleClose}>
        <Spacer />
        <Modal.Header>
          <Text h5>Welcome to DRPAWSPAW 🐶</Text>
        </Modal.Header>
        <Modal.Body>
          <Text className="message-modal-title" h6>
            What is DRPAWSPAW?
          </Text>
          <Text>
            Taking care of your beloved pets is important and predicting animal
            diseases is a crucial part of their healthcare. However, veterinary
            charges can be expensive and there is currently no reliable
            application available for pet owners to predict diseases in their
            pets.
            <br />
            <br />
            To address this issue, we propose a new way to predict animal
            diseases based on their symptoms, using natural language processing
            techniques. We use an ontology knowledge base to identify and
            classify animal diseases, making our predictions more accurate.
            <br />
            <br />
            Our approach has shown great effectiveness in predicting animal
            diseases, which can be extremely valuable for animal healthcare
            professionals and pet owners alike. With our method, we hope to
            improve animal healthcare and enhance the well-being of animal
            populations.
            <br />
            <br />
            Thank you for choosing our platform to help you take better care of
            your pets!
          </Text>
          <Text className="message-modal-title" h6>
            How it works?
          </Text>
          <div className="d-flex w-100 justify-content-center">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/rM8cLW_N1O8"
              title="Welcome to the DRPAWSPAW"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </Modal.Body>
        <Spacer />
      </Modal>
    </div>
  );
};

export default WelcomeMessage;
