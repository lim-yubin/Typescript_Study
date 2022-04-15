import "./Detail.css";

interface Link {
  imgSrc: string;
}
export default function Detail({ imgSrc }: Link) {
  return (
    <>
      <img id="detail-image" src={imgSrc} alt="render"></img>
    </>
  );
}
