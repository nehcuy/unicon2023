import "./Countdown.scss";
import { Link } from "react-router-dom";

export default function Countdown() {
  const digitSpans = (max) => {
    let digits = Array.from({ length: max + 1 }, (v, i) => i);
    // console.log(digits);
    let spans = digits.map((i) => (<span className="digit">{i}</span>));
    
    return <>{spans}</>;
  };

  return (
    <div className="wrapper">
      <div className="time-part-wrapper">
        <div className="time-part days tens">
          <div className="digit-wrapper">
            <span className="digit">0</span>
            {digitSpans(9)}
          </div>
        </div>
        <div className="time-part days ones">
          <div className="digit-wrapper">
            <span className="digit">0</span>
            {digitSpans(9)}
          </div>
        </div>
        <div className="time-part hours tens">
          <div className="digit-wrapper">{digitSpans(2)}</div>
        </div>
        <div className="time-part hours ones">
          <div className="digit-wrapper">{digitSpans(3)}</div>
        </div>
        <div className="time-part minutes tens">
          <div className="digit-wrapper">{digitSpans(5)}</div>
        </div>
        <div className="time-part minutes ones">
          <div className="digit-wrapper">{digitSpans(9)}</div>
        </div>
        <div className="time-part seconds tens">
          <div className="digit-wrapper">{digitSpans(5)}</div>
        </div>
        <div className="time-part seconds ones">
          <div className="digit-wrapper">{digitSpans(9)}</div>
        </div>
      </div>
    </div>
  );
}
