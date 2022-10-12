import Topbar from "../../components/topbar/Topbar";
import TicketOverlay from "../../components/ticketOverlay/TicketOverlay";
import TimelineWidget from "../../components/timeline-widget/TimelineWidget";
import { useSpring, animated } from "react-spring";
import Particles from "react-tsparticles";
import { useEffect, useState, useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Footer from "../home/footer/Footer";
import { t_l_timeline } from "./TigerLaunchConstants";
import "./Tigerlaunch.scss";

export default function TigerLaunchPage({ win_width, win_height, is_mobile }) {
  const [curPage, setCurPage] = useState(0);
  const parallaxRef = useRef(); //true
  const maxPages = 7;
  const incrementPage = () => {
    if (curPage == maxPages) {
      setCurPage(0);
    } else {
      setCurPage(curPage + 1);
    }
    parallaxRef.current.scrollTo(curPage);
  };
  return (
    <div id="tigerlaunch-page" className={`${is_mobile ? "mobile" : ""}`}>
      <Topbar is_mobile={is_mobile}/>
      <div className="tigerlaunch">
        <Parallax
          pages={maxPages}
          className="parallax-scroll-hook"
          ref={parallaxRef}
          style={{ height: "calc(100% - 64px)" }}
        >
          <ParallaxLayer
            offset={0}
            speed={0}
            factor={maxPages}
            style={{
              background: "#2E383B",
            }}
          >
            {!is_mobile && (
              <Particles
                style={{ height: "100%" }}
                options={{
                  fpsLimit: 30,
                  fullScreen: { enable: true },
                  particles: {
                    color: {
                      value: "#F7904C",
                    },
                    links: {
                      color: "#F7904C",
                      distance: 150,
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
            )}
          </ParallaxLayer>
          <ParallaxLayer
            sticky={{
              start: 0.4,
              end: is_mobile?0.85:1,
            }}
            factor={0.5}
            onClick={incrementPage}
          >
            <div
              className="title"
              style={{ fontSize: "64px", top: "0px", position: "relative" }}
            >
              UNICON x TIGERLAUNCH 2022
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={1}
            speed={2}
            factor={1}
            onClick={() => parallaxRef.current.scrollTo(2)}
            className={"infoLayer"}
          >
            <div className="infoSection">
              <div className="header">What is TIGERLAUNCH?</div>
              <div className="info">
                TigerLaunch is the world’s biggest student-run entrepreneurship
                pitching competition founded by Princeton Entrepreneurship Club.
                It is dedicated to building an ecosystem of student founders at
                the university, regional, national, and international levels by
                providing mentorship, networking, and funding opportunities.
              </div>
              <div className="info">
                TigerLaunch consists of 2 rounds: Regionals held virtually
                during UNICON 2022 & Finals held physically at Princeton
                University in New Jersey, United States.
              </div>
            </div>
            <div className="infoSection">
              <div className="header">Who can apply?</div>
              <ul className="info">
                <li>
                  Teams of 2-3 from all stages and verticals are welcomed!
                </li>
                <li>
                  At least one current student founder currently enrolled in an
                  accredited undergraduate, graduate, or doctoral program
                </li>
                <li>Teams can have members who have graduated from school</li>
                <li>
                  Only full-time enrolled students are eligible to pitch their
                  ideas at TigerLaunch
                </li>
              </ul>
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            sticky={{
              start: 2.4,
              end: is_mobile?2.7:3,
            }}
            factor={0.5}
            onClick={incrementPage}
          >
            <div
              className="title"
              style={{ fontSize: "64px", top: "0px", position: "relative" }}
            >
              TIMELINE
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={3.2}
            speed={2}
            factor={1.5}
            className={"infoLayer"}
          >
            <TimelineWidget
              timeline={t_l_timeline}
              style={{ width: "90%" }}
              is_mobile={is_mobile}
            />
          </ParallaxLayer>
          <ParallaxLayer
            sticky={{
              start: 4.4,
              end: 5,
            }}
            factor={0.5}
            onClick={incrementPage}
          >
            <div
              className="title"
              style={{ fontSize: "64px", top: "0px", position: "relative" }}
            >
              PRIZES
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={5}
            speed={2}
            factor={1}
            className={"infoLayer"}
            style={{ flexDirection: "column" }}
          >
            <div className="subTitle" style={{ marginTop: "64px" }}>
              Finals
            </div>
            <div className="prizeRow">
              <div className="prizeCol">
                <div className="prizeImg">
                  <img src={"/assets/images/medals/second.png"} />
                </div>
              </div>
              <div className="prizeCol">
                <div className="prizeImg">
                  <img src={"/assets/images/medals/first.png"} />
                </div>
              </div>
              <div className="prizeCol">
                <div className="prizeImg">
                  <img src={"/assets/images/medals/third.png"} />
                </div>
              </div>
            </div>
            <div className="prizeRow">
              <div className="prizeCol">
                <div className="info" style={{ fontWeight: "700" }}>
                  2nd Prize
                </div>
                <div className="info">$10,000 USD</div>
              </div>
              <div className="prizeCol">
                <div className="info" style={{ fontWeight: "700" }}>
                  1st Prize
                </div>
                <div className="info">$25,000 USD</div>
              </div>
              <div className="prizeCol">
                <div className="info" style={{ fontWeight: "700" }}>
                  3rd Prize
                </div>
                <div className="info">$5,000 USD</div>
              </div>
            </div>
            <div className="subHeader" style={{ margin: "32px" }}>
              Regional winners will win a trip to Princeton to pitch at the
              Finals!
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={6.5} speed={2} factor={0.5}>
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
    </div>
  );
}
