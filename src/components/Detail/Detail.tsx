import "./Detail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { List } from "../../pages/Gallery/Gallery";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

interface Link {
  imgSrc: string;
  imageArray: List[];
}

export default function Detail({ imageArray, imgSrc }: Link) {
  const valueArr: string[] = imageArray.map((el) => el._id);
  const idx: number = valueArr.indexOf(imgSrc);
  const [curSrc, setCurSrc] = useState(imgSrc);
  const [curIdx, setCurIdx] = useState(idx);

  const update = () => {
    setCurIdx(idx);
  };
  useEffect(() => {
    update();
  }, [idx]);

  const gotoRight = () => {
    const nextIdx = curIdx + 1;
    const nextSrc = imageArray[nextIdx]._id;
    const imgTag = document.getElementById("detail-image") as HTMLImageElement;
    imgTag.src = nextSrc;
    setCurSrc(nextSrc);
    setCurIdx(nextIdx);
  };
  const gotoLeft = () => {
    const nextIdx = curIdx - 1;
    const nextSrc = imageArray[nextIdx]._id;
    setCurSrc(nextSrc);
    setCurIdx(nextIdx);
    const imgTag = document.getElementById("detail-image") as HTMLImageElement;
    imgTag.src = nextSrc;
  };
  return (
    <>
      <div className="detail-wrap">
        <div
          className={curIdx !== 0 ? "left-arrow" : "hidden-arrow"}
          onClick={gotoLeft}
        >
          <FontAwesomeIcon icon={faCircleArrowLeft} size="lg" />
        </div>

        <img id="detail-image" src={imgSrc} alt="render"></img>

        <div
          className={curIdx !== 117 ? "right-arrow" : "hidden-arrow"}
          onClick={gotoRight}
        >
          <FontAwesomeIcon icon={faCircleArrowRight} size="lg" />
        </div>
      </div>
    </>
  );
}
