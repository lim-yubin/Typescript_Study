import Thumbnail from "../../components/Thumbnail/Thumbnail";
import ImageList from "./test.json";
import "./Gallery.css";

export default function Gallery() {
  interface List {
    _id: string;
  }

  const image: List[] = ImageList.renderings;
  const itemsCount = `${image.length} 개의 렌더샷`;

  return (
    <>
      <div className="wrap-container">
        <div className="top-container">
          <div className="count">{itemsCount}</div>
          <div className="title">갤러리</div>
          <div className="options">옵션</div>
        </div>

        <div className="image-container">
          {image.length > 0
            ? image.map((el, i) => <Thumbnail list={el._id} key={i} />)
            : null}
        </div>
      </div>
    </>
  );
}
