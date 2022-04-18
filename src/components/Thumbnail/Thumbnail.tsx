import React, { useState } from "react";
import "./Thumbnail.css";

interface List {
  list: {
    _id: string;
  };
  idx: number;
  onclick: React.MouseEventHandler<HTMLImageElement>;
  count: React.MouseEventHandler<HTMLInputElement>;
}

export default function Thumbnail({ onclick, count, idx, list }: List) {
  const imageSrc: string = list._id;
  const inputId = `image-checkbox${idx}`;
  return (
    <>
      <div className="image-wrap">
        <img
          className="thumbnail"
          alt="render"
          onClick={onclick}
          src={imageSrc}
        />

        <input
          className="image-checkbox"
          onClick={count}
          type="checkbox"
          name="thumbnail"
          value={imageSrc}
          defaultChecked={false}
        />
      </div>
    </>
  );
}
