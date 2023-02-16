import { Button, Image } from "@nextui-org/react";
import React from "react";
import { NOT_FOUND, NOT_FOUND_IMAGE_URL, UNAUTHORISED, UNAUTHORISED_IMAGE_URL } from "../../constants";
import "./Error.scss";

const Error = ({ error }) => {
  const renderError = () => {
    switch (error) {
      case NOT_FOUND:
        return (
          <>
            <Image
              showSkeleton
              maxDelay={10000}
              alt="404-Not-Found"
              src={NOT_FOUND_IMAGE_URL}
              className="custom-error-img"
            />
          </>
        );
      case UNAUTHORISED:
        return (
          <>
            <Image
              showSkeleton
              maxDelay={10000}
              alt="404-Not-Found"
              src={UNAUTHORISED_IMAGE_URL}
              className="custom-error-img"
            />
          </>
        );
      default:
        break;
    }
  };

  return (
    <div className="custom-error d-flex flex-column justify-content-center align-items-center w-100 h-100">
      {renderError()}
      <Button color="error" onClick={(e) => (window.location.href = "/")}>
        Go Back
      </Button>
    </div>
  );
};

export default Error;
