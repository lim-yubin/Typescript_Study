import { useEffect, useState } from "react";
import axios from "axios";
import Thumbnail from "../../components/Thumbnail/Thumbnail";
import ImageList from "./test.json";
import Detail from "../../components/Detail/Detail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Gallery.css";
import {
  faSquareXmark,
  faDownload,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

export interface List {
  _id: string;
}

export default function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [imgSrc, setImgSrc] = useState("");
  const [imgIdx, setImgIdx] = useState(-1);

  const image: List[] = ImageList.renderings;
  const itemsCount = `${image.length} 개의 렌더샷`;

  const onClick = (e: any) => {
    setIsOpen(true);
    setImgSrc(e.target.src);
  };
  const closeBtn = () => {
    setIsOpen(false);
    setImgSrc("");
    // setImgIdx(-1);
  };
  // useEffect(() => {}, [imgSrc]);

  const downloadBtn = () => {
    axios({
      url: imgSrc,
      method: "GET",
      responseType: "blob",
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "archisketch.png");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

  return (
    <>
      <div className={isOpen ? "not-open" : "wrap-container"}>
        <div className="top-container">
          <div className="count">{itemsCount}</div>
          <div className="title">갤러리</div>
          <div className="options"></div>
        </div>

        <div className="image-container">
          {image.length > 0
            ? image.map((el, idx) => (
                <Thumbnail
                  onclick={onClick}
                  list={el}
                  key={el._id}
                  index={idx}
                />
              ))
            : null}
        </div>
      </div>

      <div className={isOpen ? "detail-container" : "not-open"}>
        <div className="detail-top">
          <div className="left-section">
            <FontAwesomeIcon
              icon={faSquareXmark}
              size="2x"
              onClick={closeBtn}
            />
          </div>
          <div className="right-section">
            <button className="download-btn" onClick={downloadBtn}>
              <FontAwesomeIcon icon={faDownload} size="lg" />
              <span className="download-text">다운로드</span>
            </button>

            <div className="delete-btn">
              <FontAwesomeIcon icon={faTrashCan} size="lg" />
            </div>
          </div>
        </div>
        <div className="image-section">
          <Detail imageArray={image} imgSrc={imgSrc} />
        </div>
      </div>
    </>
  );
}
