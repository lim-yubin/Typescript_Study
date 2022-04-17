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
  console.log(curIdx);
  const update = () => {
    setCurIdx(idx);
  };
  useEffect(() => {
    update();
  }, [idx]);

  // 썸네일 누를때 현재 인덱스랑, 현재 src 변경해야함.

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
        <div className="left-arrow" onClick={gotoLeft}>
          <FontAwesomeIcon icon={faCircleArrowLeft} size="2x" />
        </div>

        <img id="detail-image" src={imgSrc} alt="render"></img>

        <div className="right-arrow" onClick={gotoRight}>
          <FontAwesomeIcon icon={faCircleArrowRight} size="2x" />
        </div>
      </div>
    </>
  );
}
// const render = () => {
//   const tmp = imageArray.map((el) => {
//     return el._id;
//   });
//   const a = tmp.indexOf(imgSrc);
//   setCurSrc(tmp[a]);
//   setCurIdx(a);
//   console.log(curIdx, curSrc);
// };

// useEffect(() => {
//   render();
// }, [curSrc, curIdx]);
// useEffect(() => {
//   setDefaultSrc(imgSrc);

//   console.log("hi");
// });
