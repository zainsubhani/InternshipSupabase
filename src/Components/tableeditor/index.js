import React from "react";

const TableEditor = () => {
  return (
    <div className="lg:p-20 md:p-10 p-5 grid grid-cols-12">
      <div className="col-span-12">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/xIHjwJgxOmk"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div></div>
    </div>
  );
};

export default TableEditor;
