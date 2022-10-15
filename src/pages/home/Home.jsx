import Topbar from "../../components/topbar/Topbar";
import TicketOverlay from "../../components/ticketOverlay/TicketOverlay";
import ParallaxImg from "../../components/parallax-image/ParallaxImg";
import PulseStars from "../../components/pulse-stars/PulseStars";
import ImageCard from "../../components/image-card/ImageCard";
import ShootingStars from "../../components/shooting-stars/ShootStars";
import OurReach from "./reach/OurReach";
import Footer from "./footer/Footer";
import Credit from "./credits/Credits";
import {
  globalOutreachTxt,
  wordClassText,
  comAndNetworksText,
  tigerLaunchText,
  starStyles,
} from "./HomeConstants";
// import Countdown from "../../components/countdown/Countdown";
import useOnScreen from "../../utils/useOnScreen";
import React, { useRef, useState, useEffect, useMemo } from "react";
import { throttle } from "lodash";
// import Particles from "react-particles-js";
import Particles from "react-tsparticles";
import { Link } from "react-router-dom";
import "./home.scss";
import { useSpring, animated } from "react-spring";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { rgba } from "@react-spring/shared";
export default function Home({ win_width, win_height, is_mobile }) {
  console.log("Home");
  console.log(`${win_width} ${win_height} ${is_mobile}`);
  const deadline = new Date("Jan 27, 2023 00:00:00");
  // const starLayer = useRef(null);
  const [curScroll, setCurScroll] = useState(0);
  const [bkgroundPos, setBkgroundPos] = useState("translate3d(0px, 0, 3em)");
  // "translate3d(12px, 50%, 3em)"

  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  const parallaxRef = useRef(null); //true
  const [isParallaxMounted, setParallaxMounted] = useState(false);
  const numOfPages = is_mobile ? 8.4 : 8.4;  //6.4
  console.log(`numOfPages: ${numOfPages}`);
  const calc = (x, y) => [
    x - window.innerWidth / 2,
    y - window.innerHeight / 2,
  ];

  const ticket_url = "https://www.tickettailor.com/events/nusentrepreneurshipsociety/602704"
  const FrontPanel = () => {
    return (
      <div className={`frontPanel ${is_mobile ? "center" : ""}`}>
        <div className="title">UNICON 2022</div>
        <div className="subTitle">
          Southeast Asia's Largest & Craziest Student-Led Entrepreneurship &
          Tech Conference!
        </div>
        <div className="subTitle dates">15-16 January</div>
        <div className="subText">powered by NES</div>
        <div
          className="button"
          style={{ filter: "drop-shadow(0 0 0.75rem black)" }}
          onClick={() => {
            window.open(
              ticket_url
            );
          }}
        >
          Get Tickets!
        </div>
      </div>
    );
  };

  const DisplayCountdown = () => {
    const [countdown, setCountDown] = useState((deadline - Date.now()) / 1000);
    useEffect(() => {
      const timer = setTimeout(() => {
        setCountDown(countdown - 1);
      }, 1000);

      return () => clearTimeout(timer);
    });
    let hourDivider = 60 * 60;
    let dayDivider = hourDivider * 24;
    let d = Math.floor(countdown / dayDivider);
    let left = countdown - d * dayDivider;
    let h = Math.floor(left / hourDivider);
    left -= h * hourDivider;
    let m = Math.floor(left / 60);
    left -= m * 60;
    let s = Math.floor(left);
    // console.log(`${d} , ${h} , ${m} , ${s}`);
    return (
      <div className="countdownWrap">
        <div className="countdown">
          <div className="comp day">
            <div className="dhm">{d}</div>
            <div className="labels">Days</div>
          </div>
          <div className="comp hours">
            <div className="dhm">{h}</div>
            <div className="labels">Hours</div>
          </div>
          <div className="comp mins">
            <div className="dhm">{h}</div>
            <div className="labels">Minutes</div>
          </div>
          <div className="comp secs">
            <div className="justsecs">{s}</div>
            <div className="labels">Seconds</div>
          </div>
        </div>
        <div className="subTitle">Till liftoff!</div>
      </div>
    );
  };
  const resetbkgroundTransforms = (e) => {
    set({ xy: [0, 0] });
  };
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#171C1D",
          transform: bkgroundPos,
        }}
      >
        <Topbar
          style={{
            position: "absolute",
            top: 0,
          }}
          is_mobile={is_mobile}
        />

        <Parallax
          pages={numOfPages}
          className={`parallax-scroll-hook ${is_mobile ? "mobile" : ""}`}
          ref={parallaxRef}
          style={{ height: "calc(100% - 64px)" }}
        >
          {/* Now we deal wth main page */}
          <ParallaxLayer
            offset={0}
            speed={0.2}
            factor={1}
            style={{ background: "linear-gradient(#0B0F1D,75%,#D43924)" }}
          />

          <ParallaxLayer offset={0} speed={0} factor={1}>
            <PulseStars stylelist={starStyles} is_mobile={is_mobile} />
          </ParallaxLayer>
          <ParallaxLayer offset={0.4} speed={0.45}>
            <img
              src={"/assets/images/backMountains.png"}
              style={{ display: "block", width: "100%", minWidth: "1650px" }}
            />
          </ParallaxLayer>
          <ParallaxLayer offset={0.5} speed={0.15}>
            <img
              src={"/assets/images/frontMountains.png"}
              style={{ display: "block", width: "100%", minWidth: "1450px" }}
            />
          </ParallaxLayer>
          <ParallaxLayer offset={is_mobile ? 0.6 : 0.425} speed={1.5}>
            <img
              src={"/assets/images/rocketFly.png"}
              style={{
                display: "block",
                width: "10%",
                minWidth: is_mobile ? "25%" : "225px",
                margin: is_mobile ? "auto" : "",
                marginLeft: is_mobile ? "auto" : "70%",
              }}
            />
          </ParallaxLayer>

          <ParallaxLayer
            offset={0.25}
            speed={2.75}
            factor={0.25}
            onClick={() => parallaxRef.current.scrollTo(1)}
            style={{
              display: "flex",
              alignItems: "center",
              zIndex: "999",
              width: "100%",
            }}
          >
            <FrontPanel />
          </ParallaxLayer>
          <ParallaxLayer
            offset={0}
            speed={3.75}
            factor={1}
            onClick={() => parallaxRef.current.scrollTo(1)}
          >
            {!is_mobile && <DisplayCountdown />}
          </ParallaxLayer>
          <ParallaxLayer
            offset={is_mobile ? 0.8 : Math.min(0.825)}
            // ,0.825 * (win_width/1800)
            speed={0.5}
            factor={0.6}
            style={{
              background: "linear-gradient(#D43924,0%,#D43924,35%,#171C1D)",
            }}
          >
            <div
              style={{ background: "#B40000", width: "100%", height: "12px" }}
            ></div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={1}
            speed={1}
            factor={4}
            className="particleBackground"
          >
            {!is_mobile && (
              <Particles
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
                      value: 25,
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
            offset={1.1}
            speed={1}
            factor={0.8}
            className="celebrate"
            style={{
              backgroundImage: `url("/assets/images/celebratePic.png")`,

              backgroundSize: "cover",
            }}
            onClick={() => parallaxRef.current.scrollTo(2)}
          >
            {/* <ParallaxImg
              src="/assets/images/celebratePic.png"
              speed={0.5}
              curScroll={curScroll}
            /> */}
            <div
              style={{
                backgroundColor: "rgba(23,28,29,0.8)",
                height: "100%",
                width: "100%",
                position: "absolute",
                top: "0",
                zIndex: "-1",
              }}
            ></div>
            <div className="title">Celebrating the Startup Scene</div>
            <div className="info" style={{
              textAlign: "justify",
              textJustify: "inter-word"
            }}>
              In 2013, the first Global Entrepreneurship Conference (GEC) was
              launched in NUS with the goal of connecting student entrepreneurs
              all over the world to create a global network of innovators. In
              2018, GEC was rebranded as UNICON. Since then, UNICON has
              connected thousands of students, partnered with dozens of
              universities and inspired students to solve real world problems.
            </div>
          </ParallaxLayer>
          {/* <ParallaxLayer
            offset={2}
            speed={1}
            factor={0.8}
            // sticky={{ start: 2, end: 3 }}

            onClick={() => parallaxRef.current.scrollTo(3)}
            className="why"
          >
            <div className="title">Why Join UNICON?</div>
          </ParallaxLayer> */}
          <ParallaxLayer offset={2.04} speed={0}>
            <img
              className={"bg-img"}
              src={"/assets/images/people1.webp"}
              style={{
                display: "block",
                width: is_mobile ? "55%" : "20%",
                marginLeft: is_mobile ? "45%" : "75%",
              }}
            />
          </ParallaxLayer>
          <ParallaxLayer offset={2.84} speed={0.6}>
            <img
              className={"bg-img"}
              src={"/assets/images/lightBulb2.gif"}
              style={{
                display: "block",
                width: is_mobile ? "55%" : "20%",
                marginLeft: "15%",
              }}
            />
          </ParallaxLayer>
          <ParallaxLayer offset={3.04} speed={0.1}>
            <img
              className={"bg-img"}
              src={"/assets/images/people4.webp"}
              style={{
                display: "block",
                width: is_mobile ? "55%" : "20%",
                marginLeft: is_mobile ? "45%" : "75%",
              }}
            />
          </ParallaxLayer>
          <ParallaxLayer offset={3.74} speed={0.2}>
            <img
              className={"bg-img"}
              src={"/assets/images/blockchainThingy.png"}
              style={{
                display: "block",
                width: is_mobile ? "55%" : "20%",
                marginLeft: "15%",
              }}
            />
          </ParallaxLayer>
          <ParallaxLayer offset={4.6} speed={0}>
            <img
              className={"bg-img"}
              src={"/assets/images/sustainable_1.png"}
              style={{
                display: "block",
                width: is_mobile ? "85%" : "30%",
                marginLeft: is_mobile ? "25%" : "75%",
              }}
            />
          </ParallaxLayer>
          <ParallaxLayer offset={5.67} speed={0}>
            <div
              className={"bg-img"}
              style={{
                display: "block",
                width: is_mobile ? "55%" : "20%",
                marginLeft: "15%",
                position: "relative",
                height: "100%"
              }}
            >
              <img
                src={"/assets/images/theWorld.svg"}
                style={{ position: "absolute" }}
              />
              <img
                src={"/assets/images/theFuture.gif"}
                style={{
                  position: "absolute",
                  top: "-30px",
                  right: "-10px",
                  height: "15%",
                }}
              />
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={2}
            speed={1}
            factor={is_mobile ? 2 : 0.8}
            onClick={() => parallaxRef.current.scrollTo(3)}
            // sticky={{start:2.5,end:3}}
          >
            <div className="whys">
              <div className="title">Why Join UNICON?</div>
              {!is_mobile && (
                <>
                  <div className="cardRow">
                    <ImageCard
                      title={"Global Outreach"}
                      info={globalOutreachTxt}
                      image={"/assets/images/why1.jpg"}
                      styles={{
                        width: "320px",
                        height: "200px",
                      }}
                    />
                    <ImageCard
                      title={"World Class Insights"}
                      info={wordClassText}
                      image={"/assets/images/why2.png"}
                      styles={{
                        width: "320px",
                        height: "200px",
                      }}
                    />
                  </div>
                  <div className="cardRow">
                    <ImageCard
                      title={"Community & Networks"}
                      info={comAndNetworksText}
                      image={
                        "/assets/images/why3.jpg" //"https://uniconglobal.com/wp-content/uploads/2020/11/53026329_1077061912466518_7541375093264351232_o.jpg"
                      }
                      styles={{
                        width: "320px",
                        height: "200px",
                      }}
                    />
                    <ImageCard
                      title={"Tiger Launch Pitching Competition"}
                      info={tigerLaunchText}
                      image={
                        "/assets/images/why4.jpg" //"https://uniconglobal.com/wp-content/uploads/2020/11/53089489_1077065175799525_4321099912843362304_o.jpg"
                      }
                      styles={{
                        width: "320px",
                        height: "200px",
                      }}
                    />
                  </div>
                </>
              )}

              {is_mobile && (
                <>
                  <div className="cardRow">
                    <ImageCard
                      title={"Global Outreach"}
                      info={globalOutreachTxt}
                      image={"/assets/images/why1.jpg"}
                      styles={{
                        width: "320px",
                        height: "200px",
                      }}
                    />
                  </div>
                  <div className="cardRow">
                    <ImageCard
                      title={"World Class Insights"}
                      info={wordClassText}
                      image={"/assets/images/why2.png"}
                      styles={{
                        width: "320px",
                        height: "200px",
                      }}
                    />
                  </div>
                  <div className="cardRow">
                    <ImageCard
                      title={"Community & Networks"}
                      info={comAndNetworksText}
                      image={
                        "/assets/images/why3.jpg" //"https://uniconglobal.com/wp-content/uploads/2020/11/53026329_1077061912466518_7541375093264351232_o.jpg"
                      }
                      styles={{
                        width: "320px",
                        height: "200px",
                      }}
                    />
                  </div>
                  <div className="cardRow">
                    <ImageCard
                      title={"Tiger Launch Pitching Competition"}
                      info={tigerLaunchText}
                      image={
                        "/assets/images/why4.jpg" //"https://uniconglobal.com/wp-content/uploads/2020/11/53089489_1077065175799525_4321099912843362304_o.jpg"
                      }
                      styles={{
                        width: "320px",
                        height: "200px",
                      }}
                    />
                  </div>
                </>
              )}
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={is_mobile ? 6.7 : 6.7}
            speed={0}
            factor={0.3}
            style={{
              background: "linear-gradient(#171C1D,20%,#0B0F1D)",
            }}
          />
          <ParallaxLayer
            offset={is_mobile ? 4 : 3}
            speed={1.5}
            factor={1}
            onClick={() => parallaxRef.current.scrollTo(5)}
          >
            <OurReach is_mobile={is_mobile} />
          </ParallaxLayer>
          <ParallaxLayer
            offset={is_mobile ? 7 : 7}
            speed={0}
            factor={1}
            style={{
              background: "linear-gradient(#0B0F1D,75%,#D43924)",
            }}
          ></ParallaxLayer>
          <ParallaxLayer offset={is_mobile ? 6.95 : 6.95} speed={0.3}>
            <img
              src={"/assets/images/satellite.png"}
              style={{
                display: "block",
                width: is_mobile ? "35%" : "15%",
                marginLeft: is_mobile ? "55%" : "75%",
              }}
            />
          </ParallaxLayer>
          <ParallaxLayer
            offset={is_mobile ? 5.5 : 4}
            speed={1.5}
            factor={1}
            className="whatsNew"
            style={{
              backgroundImage: `url("/assets/images/new1.jpg")`,
              //https://uniconglobal.com/wp-content/uploads/2020/12/53870539_10157042893913540_7596384626369626112_o.jpg
              backgroundSize: "cover",
            }}
            onClick={() => parallaxRef.current.scrollTo(is_mobile ? 6 : 5)}
          >
            <div
              style={{
                backgroundColor: "rgba(23,28,29,0.8)",
                height: "100%",
                width: "100%",
                position: "absolute",
                top: "0",
                zIndex: "-1",
              }}
            ></div>
            <div className="title">WHAT's NEW!</div>
            <div className="info" style={{
              textAlign: "justify",
              textJustify: "inter-word"
            }}>
              In collaboration with Princeton Entrepreneurship Club, we are
              bringing the world’s largest student-run entrepreneurship pitching
              competition to Singapore and Asia. The inaugural TigerLaunch
              Singapore will be held on the second day of UNICON 2022 (16th
              January 2022) and will feature the top 16 selected startups and
              teams from all around Asia. With an amazing panel of judges from
              some of the biggest Venture Capitals in Singapore, this pitching
              competition is surely not to be missed!
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={is_mobile ? 6 : 5}
            speed={1.5}
            factor={is_mobile?1:2}
            className="credit_wrap"
          >
            <Credit is_mobile={is_mobile} />
          </ParallaxLayer>
          <ParallaxLayer
            offset={7}
            speed={0}
            factor={1}
            className="shootingCanvas"
          >
            {!is_mobile && <ShootingStars nums={10} />}
          </ParallaxLayer>
          <ParallaxLayer offset={is_mobile ? 7 : 7} speed={0} factor={1}>
            <PulseStars stylelist={starStyles} is_mobile={is_mobile} />
          </ParallaxLayer>
          <ParallaxLayer offset={is_mobile ? 7.6 : 7.6} speed={0.5}>
            {!is_mobile && (
              <img
                src={"/assets/images/backClouds.png"}
                style={{ width: "100%" }}
              />
            )}
          </ParallaxLayer>
          <ParallaxLayer offset={is_mobile ? 7.5 : 7.5} speed={0.75}>
            {!is_mobile && (
              <img
                src={"/assets/images/frontClouds.png"}
                style={{ display: "block", width: "100%" }}
              />
            )}
          </ParallaxLayer>
          <ParallaxLayer offset={is_mobile ? 7.3 : 7.3} speed={1}>
            <img
              src={"/assets/images/unicornRocket.png"}
              style={{
                display: "block",
                width: is_mobile ? "50%" : "20%",
                margin: is_mobile ? "auto" : "",
                marginLeft: is_mobile ? "auto" : "70%",
              }}
            />
          </ParallaxLayer>
          <ParallaxLayer
            offset={is_mobile ? 7.02 : 7.02}
            speed={1.5}
            onClick={() => parallaxRef.current.scrollTo(0)}
          >
            <img
              src={"/assets/images/glowingMoon.png"}
              style={{
                display: "block",
                width: is_mobile ? "45%" : "15%",
                marginLeft: "5%",
              }}
            />
          </ParallaxLayer>
          <ParallaxLayer offset={is_mobile ? 7.3 : 7.3} speed={2}>
            <img
              src={"/assets/images/uniconTitle2.png"}
              style={{
                display: "block",
                width: is_mobile ? "50%" : "20%",
                margin: is_mobile ? "auto" : "",
                marginLeft: is_mobile ? "auto" : "15%",
              }}
            />
          </ParallaxLayer>

          {/* <ParallaxLayer offset={7.9}
            speed={0}
            factor={1}
            style={{ background: "#D43924"}} /> */}
          <ParallaxLayer
            offset={is_mobile ? 7.925 : 7.925}
            speed={is_mobile ? 0 : 0.75}
            factor={is_mobile ? 0.8 : 1}
            // className="parallaxFooter"
            style={{ background: "#D43924" }}
          >
            <Footer />
          </ParallaxLayer>
        </Parallax>
        <TicketOverlay />
      </div>
    </>
  );
}
