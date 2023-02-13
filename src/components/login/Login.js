import { Button, Modal, Spacer, Text } from "@nextui-org/react";
import React from "react";
import "./Login.scss";

const Login = ({ visible, handleClose }) => {
  return (
    <div className="login-modal">
      <Modal blur open={visible} onClose={handleClose}>
        <Spacer />
        <Modal.Header>
          <Text h6>
            Welcome to DRPAWSPAW!
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Button className="login-modal-button">
            <i className="fab fa-google me-3" />
            Sign in with Google
          </Button>
        </Modal.Body>
        <Spacer />
      </Modal>
    </div>
  );
};

export default Login;
