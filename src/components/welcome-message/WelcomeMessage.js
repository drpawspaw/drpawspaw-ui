import { Modal, Spacer, Text } from "@nextui-org/react";
import React from "react";
import "./WelcomeMessage.scss";

const WelcomeMessage = ({ visible, handleClose }) => {
  return (
    <div className="message-modal">
      <Modal width="50%" blur open={visible} onClose={handleClose}>
        <Spacer />
        <Modal.Header>
          <Text h5>Welcome to DRPAWSPAW 🐶</Text>
        </Modal.Header>
        <Modal.Body>
          <Text className="message-modal-title" h6>What is DRPAWSPAW?</Text>
          <Text>
            The effective prediction of animal diseases is a crucial aspect of
            animal healthcare, especially in light of the inflation and high
            cost of veterinary charges. Despite the significance of animal
            disease prediction, there is currently no dependable application for
            house-hold animal pets owners to predict diseases. To address this
            gap, this study proposes a natural language processing approach to
            predicting animal diseases based on their symptoms. Specifically,
            the proposed approach involves named entity disambiguation using
            data in ontology knowledge base. The ontology knowledge base is used
            to identify and classify animal diseases based on their symptoms,
            thereby enabling more accurate predictions. The results of the study
            demonstrate the effectiveness of the proposed approach, highlighting
            its potential to provide valuable support for animal healthcare
            professionals and pet owners. Ultimately, the findings of this study
            have significant implications for improving animal healthcare and
            enhancing the well-being of animal populations.
          </Text>
          <Text className="message-modal-title" h6>How it works?</Text>
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
