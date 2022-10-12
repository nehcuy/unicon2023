import "./ImageCard.scss";
import React, { useState, useRef } from "react";

export default function ImageCard(props) {
    // console.log(props)
  const [isHover, setIsHover] = useState(false);
  let title = props.title || null;
  let subtitle = props.subtitle || null;
  let image = props.image || null;
  let info = props.info || null;
    let styles = props.styles || {width:"320px",height:"320px"}  //, ...styles
    // console.log(`image: ${image}`)

  return (
    <div
      className="image-card"
      style={{ backgroundImage: `url(${image})` }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
      onMouseEnter={() => {
        setIsHover(true);
      }}
    >
      <div
        style={{
          background: "linear-gradient(rgba(11,15,29,0.25), rgba(11,15,29,1))",
          height: "100%",
          width: "100%",
          position: "absolute",
          top: "0",
          left:"0",
          zIndex: "1",
          borderRadius:  "12px"
        }}
      ></div>
      <div className="image-contentWrap">
        {title ? <div className="image-title">{title}</div> : ""}
        {subtitle ? <div className="subtitle">{subtitle}</div> : ""}
        {info ? <div className="info">{info}</div> : ""}
      </div>
    </div>
  );
}
