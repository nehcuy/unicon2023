import Topbar from "../../components/topbar/Topbar";
import Footer from "../home/footer/Footer";
import TicketOverlay from "../../components/ticketOverlay/TicketOverlay";
import "./StartupBooth.scss";
import Particles from "react-tsparticles";

export default function StartupBooth({ is_mobile }) {
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
          <div className="title">Startup Booth</div>
        </div>
      </div>
    </div>
  );
}