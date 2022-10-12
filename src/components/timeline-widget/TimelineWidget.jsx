import "./TimelineWidget.scss";

export default function TimelineWidget(props) {
  let timeList = props.timeline || [];
    let styles = props.style || {}
  let is_mobile = props.is_mobile || false;

  const TimeItem = (props) => {
    let date = props.val.date || "";
    let time = props.val.time || "";
    let index = props.idx || 0;
    console.log(`index: ${index}`);
    let title = props.val.title || "";
    let description = props.val.description || "";
    return (
      <article
        className={`twae-timeline-entry ${
          !is_mobile && index % 2 == 1 ? "twae-left-aligned" : "twae-right-aligned"
        }`}
      >
        <div className="twae-timeline-entry-inner">
          <div className="twae-label-extra-label">
            <span className="twae-label">{date}</span>
            {time.length > 0 && (
              <span className="twae-extra-label">{time}</span>
            )}
          </div>
          <div className="twae-icon"></div>
          <div className="twae-data-container ">
            <span className="twae-title">{title}</span>
            {description.length > 0 && (
              <div className="twae-description">
                <p>{description}</p>
              </div>
            )}
          </div>
        </div>
      </article>
    );
  };
  const TimeList = (props) => {
    // let timeList = props.time
    return timeList.map((val, index) => <TimeItem val={val} idx={index} />);
  };

  return (
    <div className={`timelineContainer ${is_mobile ? "mobile" : ""}`} style={styles}>
      <div className={`twae-vertical twae-wrapper twae-centered`}>
        <div className={`twae-timeline-centered twae-timeline-sm twae-line`}>
          <TimeList />
        </div>
      </div>
    </div>
  );
}
