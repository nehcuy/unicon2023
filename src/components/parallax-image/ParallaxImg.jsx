import "./ParallaxImg.scss";
import React, { useState, useRef } from "react";

export default function ParallaxImg(props) {
  const [curScroll, setCurScroll] = useState(props.curScroll || 0);
  const blockEl = useRef(null);
  let src = props.src || "";
  let speed = props.speed || 1;
  let blockOffset = blockEl.current?.offsetTop || 0;
//   let blockHeight = blockEl.current.innerHeight();
//     console.log(`curScroll: ${curScroll}`)
//   console.log(`blockOffset: ${blockOffset}`);
// 
      {/* <img src={{src}} className="img-parallax" style={{backgroundPosition:"50%, " + }}/> */}
  return (
    <div
      className="block"
      ref={blockEl}
      style={{
        backgroundImage: `url(${src})`,
        backgroundPosition: `50% ${(curScroll - blockOffset) * speed}px`,
      }}
    >
    </div>
  );
}
