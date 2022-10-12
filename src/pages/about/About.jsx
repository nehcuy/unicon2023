import Topbar from "../../components/topbar/Topbar";
import Footer from "../home/footer/Footer";
import TicketOverlay from "../../components/ticketOverlay/TicketOverlay";
import "./About.scss";
import Particles from "react-tsparticles";
import { Link } from "react-router-dom";

export default function About({ is_mobile }) {
  return (
    <div className={`aboutWrap ${is_mobile ? "mobile" : ""}`}>
      <Topbar is_mobile={is_mobile} />
      {!is_mobile && (
        <Particles
          style={{ height: "100%", position: "relative" }}
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
      )}

      <div className="contentWrap">
        <div className="content">
          <div className="title">About UNICON</div>
          <div className="subTitle">
            <div className="tech">TECH</div>
            {is_mobile ? (
              <div
                style={{ borderBottom: "4px solid white", width: "80%" }}
              ></div>
            ) : (
              <div
                style={{ borderRight: "4px solid white", height: "32px" }}
              ></div>
            )}

            <div className="entre">ENTREPRENEURSHIP </div>
            {is_mobile ? (
              <div
                style={{ borderBottom: "4px solid white", width: "80%" }}
              ></div>
            ) : (
              <div
                style={{ borderRight: "4px solid white", height: "32px" }}
              ></div>
            )}
            <div className="biz">BUSINESS</div>
          </div>
          <div className="section">
            <div className="header">About our Society</div>
            <div className="info">
              <div>
                Founded in 1992, NUS Entrepreneurship Society (NES) is the
                premier tertiary entrepreneurship organisation in Singapore.
              </div>
              <div>
                NES promotes entrepreneurship at the National University of
                Singapore (NUS) to empower the next generation of entrepreneurs.
                We work with passionate students, prominent professors and our
                ensemble of partners to drive innovation and entrepreneurship.
              </div>
              <div>
                NES’s flagship event is none other than UNICON, Southeast Asia’s
                largest & craziest student led Tech & Entrepreneurship
                conference!
              </div>
            </div>
          </div>
          <div className="section">
            <div className="header">About UNICON</div>
            <div className="info">
              In 2013, the first Global Entrepreneurship Conference (GEC) was
              launched in NUS with the goal of connecting student entrepreneurs
              all over the world to create a global network of innovators. In
              2018, GEC was rebranded as UNICON. Since then, UNICON has
              connected thousands of students, partnered with dozens of
              universities and inspired students to solve real world problems.
            </div>
          </div>
        </div>

        <div className="footerWrap">
          <Footer />
        </div>
      </div>

      <TicketOverlay />
    </div>
  );
}
