import React, { useState } from "react";
import "./Thumbnail.css";

interface List {
  index: number;
  list: {
    _id: string;
  };
  onclick: React.MouseEventHandler<HTMLImageElement>;
}

export default function Thumbnail({ onclick, index, list }: List) {
  const imageSrc: string = list._id;

  return (
    <>
      <img id="image-wrap" alt="render" onClick={onclick} src={imageSrc}></img>
    </>
  );
}
