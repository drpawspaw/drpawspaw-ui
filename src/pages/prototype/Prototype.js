import React, { useState } from "react";
import "./Prototype.scss";

const Prototype = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && (
        <div className="prototype-loading d-flex justify-content-center align-items-center">
          Loading...
        </div>
      )}
      <iframe
        className="prototype-iframe"
        width="800"
        height="450"
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F6NIgSSGJiixU3w93BTyuKD%2FDrPawsPaw%3Fpage-id%3D123%253A4%26node-id%3D123%253A33%26viewport%3D323%252C351%252C0.2%26scaling%3Dscale-down%26starting-point-node-id%3D123%253A33"
        allowFullScreen={true}
        onLoad={(e) => setIsLoading(false)}
      ></iframe>
    </>
  );
};

export default Prototype;
