import React from "react";

const BasicVideo = () => {
  return (
    <div>
      <iframe
        width="98%"
        height="315"
        src="https://www.youtube.com/embed/dBOSUER_5T4"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default BasicVideo;
