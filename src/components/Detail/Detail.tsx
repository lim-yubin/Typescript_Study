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
  const [curSrc, setCurSrc] = useState(imgSrc);
  const [defaultSrc, setDefaultSrc] = useState(imgSrc);
  const [curIdx, setCurIdx] = useState(0);

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

  const gotoRight = () => {
    const nextIdx = curIdx + 1;
    const nextSrc = imageArray[nextIdx]._id;
    setCurIdx(nextIdx);
    const imgTag = document.getElementById("detail-image") as HTMLImageElement;
    imgTag.src = nextSrc;
  };
  const gotoLeft = () => {
    const nextIdx = curIdx - 1;
    const nextSrc = imageArray[nextIdx]._id;
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
