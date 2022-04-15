import React from "react";
import "./Thumbnail.css";

interface List {
  key: number;
  list: string;
  onclick: React.MouseEventHandler<HTMLImageElement>;
}

export default function Thumbnail({ onclick, key, list }: List) {
  const imageSrc: string = list;
  const id: number = key;
  console.log(id);
  return (
    <>
      <img id="image-wrap" alt="render" onClick={onclick} src={imageSrc}></img>
    </>
  );
}
