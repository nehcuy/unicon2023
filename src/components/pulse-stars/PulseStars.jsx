import "./PulseStars.scss"

export default function PulseStars(props) {
  let num = props.nums || 5;
  let is_mobile = props.is_mobile || false;
  let styles = props.stylelist || null; //if null, randomly put those stars everywhere
//   console.log(styles)
  const StarSvg = (props) => {
    //   console.log("Star Svg")
    //   console.log(props)
    let animStart = props.start || "1s";
    let animDuration = props.duration || "2s";
    let size = props.size || "16px";
    let pos = props.pos || `translate3d(0px, 0px, 1em)`;
    // console.log(`pos: ${pos}`)
    //https://stackoverflow.com/questions/59820954/syntaxerror-unknown-namespace-tags-are-not-supported-by-default
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 91 91"
        width={size}
        style={{transform: pos, width: size}}
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <g id="stars">
              <g
                className="pulse"
                style={{
                  animationDelay: animStart,
                  animationDuration: animDuration,
                  animationPlayState: is_mobile?'paused':''
                }}
              >
                <image
                  width="91"
                  height="91"
                  xlinkHref="data:image/png;base64,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"
                />
              </g>
              <polygon
                points="45.36 46.51 37.33 53.02 44.42 45.49 37.76 37.54 45.42 44.51 53.25 37.97 46.5 45.58 52.82 53.46 45.36 46.51"
                style={{fill:"#f7904c"}}
              />
              <circle cx="45.29" cy="45.5" r="4.7" style={{fill:"#f7904c"}} />
              <polygon
                points="46.02 45.94 45.39 53.3 45.09 45.99 37.81 45.29 45.07 44.94 45.82 37.71 46.1 45.03 53.4 45.72 46.02 45.94"
                 style={{fill:"#f7904c"}}
              />
            </g>
          </g>
        </g>
      </svg>
    );
  };

  return (
    <div className="starsContainer">
      {styles.map((styleObj) => {
        return (<StarSvg {...styleObj} />);
      })}
    </div>
  );
}
