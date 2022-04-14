import React from "react";
import "./Thumbnail.css";

interface List {
  key: number;
  list: string;
}

export default function Thumbnail({ key, list }: List) {
  const imageSrc: string = list;

  return (
    <>
      <img className="image-wrap" src={imageSrc}></img>
    </>
  );
}
