import "./OurReach.scss";
import React, { useRef, useState, useEffect } from "react";

let statsList = [
  {
    statsIcon: "/assets/images/attendees.png",
    statsLabel: "ATTENDEES",
    statsInfo: 424,
  },
  {
    statsIcon: "/assets/images/countriesRepresent.png",
    statsLabel: "COUNTRIES REPRESENTED",
    statsInfo: 5,
  },
  {
    statsIcon: "/assets/images/tertiaryEdu.png",
    statsLabel: "TERTIARY EDUCATION INSTITUTIONS",
    statsInfo: 15,
  },
  {
    statsIcon: "/assets/images/speakers.png",
    statsLabel: "SPEAKERS",
    statsInfo: 30,
  },
  {
    statsIcon: "/assets/images/sponsorsAndPartners.png",
    statsLabel: "SPONSORS & PARTNERS",
    statsInfo: 10,
  },
];

let statsInfos2021 = [424, 5, 15, 30, 10];
let statsInfos2022 = [600, 12, 20, 40, 20];

export default function OurReach({is_mobile}) {
  const [year, toggleYear] = useState(true);
  const [curYear, setCurYear] = useState(2021);
  const [prevStats, setPrevStats] = useState([0,0,0,0,0]);
  const [curStats, setCurStats] = useState(statsInfos2021);
//   let statinfoEls = [];
useEffect(() => {
  if (is_mobile){
    setCurYear(2022);
    setPrevStats(statsInfos2021)
    setCurStats(statsInfos2022)
  }
},[]);
  useEffect(() => {
    if (!is_mobile){
      const timer = setTimeout(() => {
        toggleYear(!year);
        //   let activeList;
        if (year) {
          setCurYear(2021);
          setPrevStats(statsInfos2022)
          setCurStats(statsInfos2021)
        } else {
          setCurYear(2022);
          setPrevStats(statsInfos2021)
          setCurStats(statsInfos2022)
        }
      }, 3000);

      return () => clearTimeout(timer);
    }
  });

  
  const animateValue = (setState, start, end, duration) => {
    // const step = (timestamp) => {
    //   if (!startTimestamp) startTimestamp = timestamp;
    //   const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    //   setState(Math.floor(progress * (end - start) + start))
    //   if (progress < 1) {
    //     window.requestAnimationFrame(step);
    //   } 
    // };
    let startTimestamp = null;
    var dt = 1000 / 30; // 60fps  1000 / 60;
    var timeTarget = Date.now();
    // let timestamp = Date.now() 
    function render(){
      
      let timestamp = Date.now() 
      if ( Date.now() >= timeTarget) { 
        if (!startTimestamp) startTimestamp = Date.now();
        // console.log("timestamp - timeTarget")
        // console.log(timestamp - startTimestamp)
        // startTimestamp = timeTarget;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        // console.log(`progress: ${progress}`)
        setState(Math.floor(progress * (end - start) + start))
        // if (progress < 1) {
        //   window.requestAnimationFrame(render);
        // } 
        timeTarget += dt;
        if (Date.now() >= timeTarget) {
          timeTarget = Date.now();
          // startTimestamp = null;
        }
      }
      window.requestAnimationFrame(render);
    }

    // window.requestAnimationFrame(render);
    render()
    
  };
  const Ani_Stat = ({start,end}) => {
    // const [curStat, setCurStat] = useState(start)
    // console.log("START END")
    // console.log(start, end)
    const [displayStat, setDisplayStat] = useState(start)
    useEffect(()=>{
      // console.log("ANIMATING VALUE")
      animateValue(setDisplayStat, start, end, 1000)
    },[])
    return(
      <>
        {displayStat}
      </>
    )
  }

  const Stats = ({ statsIcon, start, end, statsLabel }) => {
    return (
      <div className="stats">
        <div className="statsIcon">
          <img
            src={statsIcon}
            style={{
              display: "block",
              width: "40%",
            }}
          />
        </div>
        <div className="statsLabel">{statsLabel}</div>
        <div className="statsInfo"><Ani_Stat start={start} end = {end}/></div>
      </div>
    );
  };
  //{year?"":"+"}
  return (
    <div className="ourReach">
      <div className="title">Our Milestones</div>
      <div className="subtitle">{curYear}</div>
      <div className={`statsWrap ${is_mobile?"mobile":""}`}>
        {statsList.map((stat,index) => (
          <Stats
            statsIcon={stat.statsIcon}
            stat = ""
            start={prevStats[index]}
            end={curStats[index]}
            statsLabel={stat.statsLabel}
          />
        ))}
      </div>
    </div>
  );
}
