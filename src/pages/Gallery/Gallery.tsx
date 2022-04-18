import { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react";
import axios from "axios";
import Thumbnail from "../../components/Thumbnail/Thumbnail";
import ImageList from "../../test.json";
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
  const [isChecked, setIsChecked] = useState(false);
  const [countText, setCountText] = useState("");
  const [propCancel, setPropCancel] = useState(false);
  const [propCheck, setPropCheck] = useState(false);
  const image: List[] = ImageList.renderings;
  const itemsCount = `${image.length} 개의 렌더샷`;

  const checkedCount = () => {
    const query = 'input[name="thumbnail"]:checked';
    const selected = document.querySelectorAll(query);
    setIsChecked(true);
    setCountText(`${selected.length}개의 렌더 이미지 선택됨`);
    if (selected.length === 0) {
      setIsChecked(false);
    }
    setPropCancel(false);
  };

  const onClick = (e: any) => {
    setIsOpen(true);
    setImgSrc(e.target.src);
  };
  const closeBtn = () => {
    setIsOpen(false);
    setImgSrc("");
  };

  const makeDownList = () => {
    const query = 'input[name="thumbnail"]:checked';
    const selected = document.querySelectorAll(query);
    const src: string[] = [];
    selected.forEach((el) => {
      const tmp: string | null = el.getAttribute("value");
      if (tmp !== null) {
        src.push(tmp);
      }
    });
    src.forEach((el) => {
      axios({
        url: el,
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
    });
  };

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
  const checkAll = (e: ChangeEvent<HTMLInputElement>) => {
    setPropCheck(e.target.checked);
  };

  const cancelCheck = () => {
    setPropCheck(false);
    setIsChecked(false);
    setPropCancel(true);
  };
  useEffect(() => {
    checkedCount();
    console.log("render");
  }, [propCheck, propCancel]);
  return (
    <>
      <div className={isOpen ? "not-open" : "wrap-container"}>
        <div className="top-container">
          {isChecked ? (
            <div className="check-section">
              <div className="check-count">{countText}</div>
              <input
                type="checkbox"
                className="select-all"
                name="select-all"
                onChange={checkAll}
              />
              <div className="select-all-txt">모두 선택</div>
            </div>
          ) : (
            <div className="count">{itemsCount}</div>
          )}
          <div className="title">갤러리</div>
          <div className="options">
            {isChecked ? (
              <>
                <button className="select-download" onClick={makeDownList}>
                  <FontAwesomeIcon icon={faDownload} size="1x" />
                </button>
                <button className="select-delete">
                  <FontAwesomeIcon icon={faTrashCan} size="1x" />
                </button>
                <button className="cancel-select" onClick={cancelCheck}>
                  선택취소
                </button>
              </>
            ) : (
              <div></div>
            )}
          </div>
        </div>

        <div className="image-container">
          {image.length > 0
            ? image.map((el, idx) => (
                <Thumbnail
                  onclick={onClick}
                  list={el}
                  key={el._id}
                  idx={idx}
                  count={checkedCount}
                  isChecked={propCheck}
                  isCancel={propCancel}
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
              size="lg"
              onClick={closeBtn}
            />
          </div>
          <div className="right-section">
            <button className="download-btn" onClick={downloadBtn}>
              <FontAwesomeIcon icon={faDownload} size="1x" />
              <span className="download-text">다운로드</span>
            </button>

            <div className="delete-btn">
              <FontAwesomeIcon icon={faTrashCan} size="1x" />
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
