import React, { useEffect, useState } from "react";
import Thumbnail from "../../components/Thumbnail/Thumbnail";
import ImageList from "./test.json";
import Detail from "../../components/Detail/Detail";

import "./Gallery.css";

export default function Gallery() {
  interface List {
    _id: string;
  }

  const [isOpen, setIsOpen] = useState(false);
  const [imgSrc, setImgSrc] = useState("");
  const image: List[] = ImageList.renderings;
  const itemsCount = `${image.length} 개의 렌더샷`;

  const onClick = (e: any) => {
    setIsOpen(true);
    setImgSrc(e.target.src);
  };

  const closeBtn = () => {
    setIsOpen(false);
    setImgSrc("");
  };

  return (
    <>
      <div className={isOpen ? "not-open" : "wrap-container"}>
        <div className="top-container">
          <div className="count">{itemsCount}</div>
          <div className="title">갤러리</div>
          <div className="options">옵션</div>
        </div>

        <div className="image-container">
          {image.length > 0
            ? image.map((el) => (
                <Thumbnail
                  onclick={onClick}
                  list={el._id}
                  key={image.indexOf(el)}
                />
              ))
            : null}
        </div>
      </div>

      <div className={isOpen ? "detail-container" : "not-open"}>
        <div className="detail-top">
          <div className="left-section">
            <button className="detail-btn" onClick={closeBtn}>
              x
            </button>
          </div>
          <div className="right-section">
            <button className="detail-btn">다운로드</button>
            <button className="detail-btn">삭제</button>
          </div>
        </div>
        <div className="image-section">
          <Detail imgSrc={imgSrc} />
        </div>
      </div>
    </>
  );
}
