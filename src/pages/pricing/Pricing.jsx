import Topbar from "../../components/topbar/Topbar";
import TicketOverlay from "../../components/ticketOverlay/TicketOverlay";
import Footer from "../home/footer/Footer";
import Particles from "react-tsparticles";
import "./Pricing.scss";
import { useEffect, useState, useRef } from "react";

let benefits = [
  "50+ Speakers",
  "Immersive Virtual Experience",
  "1 to 1 Virtual Networking with Like-minded Individuals",
  "Gain valuable world-class insights",
  "Join the conference & network from home!",
  "UNICON Care Package (limited to first 250 sign-up)",
  "Selected Speakers Live Streaming from a Physical Venue",
];
const ticket_url =
  "https://www.tickettailor.com/events/nusentrepreneurshipsociety/602704";
export default function Pricing({ win_width, win_height, is_mobile }) {
  const [text, setText] = useState("Are you looking for");

  const Benefits = () => {
    return (
      <div className="list">
        {benefits.map((val) => (
          <div className="listItem">
            <div className="tick">
              <i class="fas fa-check"></i>
            </div>
            <div className="norm-text" style={{ marginLeft: "16px" }}>
              {val}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const BuyNow = () => {
    return (
      <div className="buyNow">
        <div className="title">Buy Now!</div>
        <div className="norm-text">
          Don't forget to sign up for TigerLaunch{" "}
          <a href="https://www.tigerlaunch.com/apply">here</a>
        </div>
        <div className="norm-text">
          First 250 local sign-ups will receive our curated UNICON Care Package
        </div>
      </div>
    );
  };

  const PricingSection = () => {
    return (
      <div
        style={{ zIndex: "1" }}
        className={`pricing ${is_mobile ? "mobile" : ""}`}
      >
        <div className="title">Ticket Pricing</div>

        <div className="subTitle">Transform Ideas into Action</div>
        <div className="benefits">
          <div className="header">What you will get from UNICON 2022</div>
          <Benefits />
          <div className="norm-text">
            NOT another Zoom Event! Selected Speakers will be live streaming
            from our site
          </div>
        </div>
        <div id="tickets">
          <div className="ticket">
            <div className="ticketDetails">
              <div>S$5</div>
              <div style={{ textDecoration: "line-through" }}>S$10</div>
              <div>Students</div>
              <div className="norm-text">Open To Tertiary Students</div>
            </div>
            <div
              className="link"
              onClick={() => {
                window.open(ticket_url);
              }}
            >
              <div>GET YOUR TICKET NOW</div>
            </div>
          </div>
          <div className="ticket">
            <div className="ticketDetails">
              <div>S$10</div>
              <div style={{ textDecoration: "line-through" }}>S$20</div>
              <div>Public</div>
              <div className="norm-text">Open To All Adults</div>
            </div>
            <div
              className="link"
              onClick={() => {
                window.open(ticket_url);
              }}
            >
              <div>GET YOUR TICKET NOW</div>
            </div>
          </div>
        </div>
        <div id="booths">
          <div className="header">
            Are you looking for a booth spot with us?
          </div>
          <div className="link">
            <div>GET YOUR BOOTH NOW</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div id="pricingPage">
      <div id="pricingContent">
        <Topbar is_mobile={is_mobile} />
        {!is_mobile && (
          <Particles
            style={{ height: "100%", zIndex: "-1" }}
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

        <BuyNow />
        <PricingSection />
      </div>
      <div
        className="footerWrap"
        style={{ marginTop: "128px", position: "relative" }}
      >
        <Footer />
      </div>
      <TicketOverlay />
    </div>
  );
}
