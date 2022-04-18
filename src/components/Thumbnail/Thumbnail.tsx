import React, { useState } from "react";
import "./Thumbnail.css";

interface List {
  list: {
    _id: string;
  };
  isChecked: boolean;
  isCancel: boolean;
  idx: number;
  onclick: React.MouseEventHandler<HTMLImageElement>;
  count: React.MouseEventHandler<HTMLInputElement>;
}

export default function Thumbnail({
  onclick,
  count,
  idx,
  list,
  isChecked,
  isCancel,
}: List) {
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
        {isChecked ? (
          <input
            className="image-checkbox"
            onClick={count}
            type="checkbox"
            name="thumbnail"
            value={imageSrc}
            checked={isChecked}
          />
        ) : isCancel ? (
          <input
            className="image-checkbox"
            onClick={count}
            type="checkbox"
            name="thumbnail"
            value={imageSrc}
            checked={false}
          />
        ) : (
          <input
            className="image-checkbox"
            onClick={count}
            type="checkbox"
            name="thumbnail"
            value={imageSrc}
          />
        )}
      </div>
    </>
  );
}
