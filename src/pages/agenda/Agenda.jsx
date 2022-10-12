import Topbar from "../../components/topbar/Topbar";
import Footer from "../home/footer/Footer";
import TicketOverlay from "../../components/ticketOverlay/TicketOverlay"
import Particles from "react-tsparticles";
import { useEffect, useState,useRef, useMemo } from "react";
import { throttle } from "lodash";
import { Link } from "react-router-dom";
import { agendaConsts_kv, o_venue, p_venue } from "./AgendaConstants";
import { speakerInfo2022_kv } from "../speakers/SpeakerInfo";
import { useSpring, animated } from "react-spring";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./Agenda.scss";


const dict2arr = (dict) =>{
  let arr = []
  for (var key in dict){
    console.log( key, dict[key] );
    // if (!("imgsrc" in dict)) continue
    let toAdd = dict[key]
    toAdd["id"] = key
    arr.push(toAdd)
  }

  return arr
}
export default function Agenda({ win_width, win_height, is_mobile }) {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  function handleResize() {
    setDimensions({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  }
  const throttleResizeHandler = useMemo(() => throttle(handleResize, 200), []);
  window.addEventListener("resize", throttleResizeHandler);

  const [day, setDay] = useState(1);
  const parallaxRef = useRef(); //true

  const just_time = (dt_obj) => {
    let mins = dt_obj.getMinutes()
    return `${dt_obj.getHours()}:${mins < 10?"0":""}${mins}`
  }

  const AgendaItem = (props) => {
    const [isExpanded, setExpand] = useState(false);
    let val = props.val;
    let startObj = new Date(val["startTime"])
    let endObj = new Date(val["endTime"])
    let curObj = new Date()
    // console.log(curObj<startObj)   // works
    let isActive = curObj >= startObj && curObj <= endObj

    // Now for speakers

    const pop_speakers = (val) => {
      let arr = []
      console.log(val)
      for(let x in val){
        console.log(x)
        let id = val[x]
        let speakerObj = speakerInfo2022_kv[id]
        speakerObj['id'] = id
        arr.push(speakerObj)
      }
      return arr
    }

    const pop_imgs = (val) => {
      let arr = []
      for(let x in val){
        let id = val[x]
        let speakerObj = speakerInfo2022_kv[id]
        if ("imgsrc" in speakerObj){
          speakerObj['id'] = id
          arr.push(speakerObj)
        }
      }
      return arr
    }

    // speakerInfo2022_kv
    let hasSpeakers = "speakerIds" in val && (val["speakerIds"].length > 0)
    let speakers = hasSpeakers?pop_speakers(val["speakerIds"]):null

    let isJudging = val.isJudging?true:false;

    let withImgs = hasSpeakers?pop_imgs(val["speakerIds"]):null

    let pushImgDown = (is_mobile && dimensions.width < 700) || (!is_mobile && dimensions.width < 952)

    let baseURL = "/speakers"

    return (
      <div
        className={`agendaItem  ${isActive? "active":""} `}
        onMouseEnter={() => setExpand(true)}
        onMouseLeave={() => setExpand(false)}
      >
        <div className="agenda-brief">
          <div className="agenda-title">{val["topic"]}</div>
          {val['setting'] && (
            <div className="agenda-venue">
              
              Online Venue: <span style={{textDecoration: "underline"}}>{o_venue}</span>
              
            </div>
          )}
          {val['setting'] && val['setting']=='physical' && (
            <div className="agenda-venue">
              
              Physical Venue:  <span style={{textDecoration: "underline"}}>{p_venue}</span>
              
            </div>
          )}
          
          <div className={`agenda-time`}>
            {just_time(startObj)} - {just_time(endObj)}
          </div>
          {
            speakers && (
              <div className={`agenda-speakers`}>
                {isJudging?"Judges: ":"Speakers: "} 
                {speakers.map((item,idx)=>(
                  <>
                  <a target="_blank" key={item.id} className="speaker-link" href={item.personalLink}>
                      {item.title}({item.info})
                  </a>
                  {(idx != speakers.length - 1) && (
                    <>
                    {", "}
                    </>
                  )}
                  </>
                ))}
              </div>
            )
          }
          
          { withImgs && (
              <div className={`agenda-speaker-imgs ${pushImgDown?"down":""}`}>
                {withImgs.map((item,idx)=>(
                  <Link key={item.id} className="speaker-link" to={`${baseURL}/${item.id}`}>
                      <img src={item.imgsrc} />
                  </Link>
                ))}
              </div>
            )
          }
          
        </div>
        
        {isExpanded && val["description"] && (
          <div className="description">{val["description"]}</div>
        )}
      </div>
    );
  };

  const DayAgenda = (props) => {
    let day = props.day || 1;
    let agenda = dict2arr(agendaConsts_kv[day]);
    return agenda.map((val) => <AgendaItem key={val.id} val={val} />);
  };

  return (
      <>
    <Topbar is_mobile={is_mobile}/>
    <div id="agendaPage" className={`${is_mobile ? "mobile" : ""}`}>
      
      <Parallax pages={2.5} className="parallax-scroll-hook" ref={parallaxRef}>
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={2.25}
          style={{
            background: "#2E383B"}}
        >
          <Particles
            style={{height: "100%"}}
            options={{
              fpsLimit: 30,
              fullScreen: { enable: true },
              particles: {
                color: {
                  value: "#F7904C",
                },
                links: {
                  color: "#F7904C",
                  distance: 200,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                number: {
                  value: 35,
                  density: {
                    enable: true,
                    value_area: 1000,
                  },
                },
                move: {
                  enable: true,
                  speed: 2.5,
                  direction: "top",
                  outMode: "bounce",
                },
              },
            }}
          />
        </ParallaxLayer>
        {/* onClick={() => parallaxRef.current.scrollTo(1)} */}
        <ParallaxLayer offset={0} speed={1} factor={1} >
          <div className="agendaWrap">
            <div className="agenda">
              <div className="main-title">UNICON 2022</div>
              <div id="dayHeader">
                <div
                  className={day == 1 ? "active" : ""}
                  onClick={(e) => {
                    e.stopPropagation();
                    setDay(1);
                  }}
                >
                  Day 1, Jan 15
                </div>
                <div
                  className={day == 2 ? "active" : ""}
                  onClick={(e) => {
                    e.stopPropagation();
                    setDay(2);
                  }}
                >
                  Day 2, Jan 16
                </div>
              </div>
              <div className="agendaContainer">
                <DayAgenda day={day} />
              </div>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1} factor={1} onClick={() => parallaxRef.current.scrollTo(0)}>
          <div className="main-title">HIGHLIGHTS FOR UNICON 2022</div>
          {is_mobile?(
            <div className={`highlights`}>
              <div className="highlight-row">
                <div className="highlight-col">
                  <div className="highlight-icon">
                      <i class="fa fa-bullhorn" aria-hidden="true"></i>
                  </div>
                  <div className="highlight-details">
                      <div className="highlight-header">Panel Discussion</div>
                      <div className="highlight-info">Seed to Unicorn</div>
                  </div>
                </div>
              </div>
              <div className="highlight-row">
                <div className="highlight-col">
                  <div className="highlight-icon">
                      <i class="fa fa-bullhorn" aria-hidden="true"></i>
                  </div>
                  <div className="highlight-details">
                      <div className="highlight-header">Panel Discussion</div>
                      <div className="highlight-info">Securing Funding</div>
                  </div>
                </div>
              </div>
              <div className="highlight-row">
                <div className="highlight-col">
                  <div className="highlight-icon">
                  <i class="fas fa-fire"></i>
                  </div>
                  <div className="highlight-details">
                      <div className="highlight-header">Keynote Speaker</div>
                      <div className="highlight-info">Startup to IPO</div>
                  </div>
                </div>
              </div>
              <div className="highlight-row">
                <div className="highlight-col">
                  <div className="highlight-icon">
                      {/* TO DO: Change to tiger launch */}
                  <i class="fas fa-fire"></i>   
                  </div>
                  <div className="highlight-details">
                      <div className="highlight-header">TigerLaunch Singapore</div>
                      <div className="highlight-info">Big opportunities await</div>
                  </div>
                </div>
              </div>
            </div>
          ):(
            <div className={`highlights`}>
              <div className="highlight-row">
                <div className="highlight-col">
                  <div className="highlight-icon">
                      <i class="fa fa-bullhorn" aria-hidden="true"></i>
                  </div>
                  <div className="highlight-details">
                      <div className="highlight-header">Panel Discussion</div>
                      <div className="highlight-info">Seed to Unicorn</div>
                  </div>
                </div>
                <div className="highlight-col">
                  <div className="highlight-icon">
                      <i class="fa fa-bullhorn" aria-hidden="true"></i>
                  </div>
                  <div className="highlight-details">
                      <div className="highlight-header">Panel Discussion</div>
                      <div className="highlight-info">Securing Funding</div>
                  </div>
                </div>
              </div>
              <div className="highlight-row">
                <div className="highlight-col">
                  <div className="highlight-icon">
                  <i class="fas fa-fire"></i>
                  </div>
                  <div className="highlight-details">
                      <div className="highlight-header">Keynote Speaker</div>
                      <div className="highlight-info">Startup to IPO</div>
                  </div>
                </div>
                <div className="highlight-col">
                  <div className="highlight-icon">
                      {/* TO DO: Change to tiger launch */}
                  <i class="fas fa-fire"></i>   
                  </div>
                  <div className="highlight-details">
                      <div className="highlight-header">TigerLaunch Singapore</div>
                      <div className="highlight-info">Big opportunities await</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </ParallaxLayer>
      
        <ParallaxLayer offset={2} speed={0} factor={0.5} onClick={() => parallaxRef.current.scrollTo(0)}>
            <div
              id="footerWrap"
              style={{ height: "100%", position: "relative" }}
            >
              <Footer />
            </div>
        </ParallaxLayer>
      
      </Parallax>
      <TicketOverlay />
    </div>
    </>
  );
}
