import Topbar from "../../components/topbar/Topbar";
import Footer from "../home/footer/Footer";
import Particles from "react-tsparticles";
import TicketOverlay from "../../components/ticketOverlay/TicketOverlay";
import "./ContactUs.scss";
import { Link } from "react-router-dom";

const mapUrl =
  "https://www.google.com/maps/place/Icube+Building/@1.2924758,103.7734708,17z/data=!3m1!4b1!4m5!3m4!1s0x31da1a558f37cec3:0xf1ebb27a1aac903!8m2!3d1.2924704!4d103.7756595";

const contactInfo = [
  {
    icon: "fas fa-map-marker-alt",
    header: "Address",
    text: "21 Heng Mui Keng Terrace Singapore, Singapore 119613",
    link: mapUrl,
  },
  {
    icon: "fa fa-question-circle",
    header: "General Enquiries",
    text: "unicon@nes.org.sg",
    link: "mailto:unicon@nes.org.sg",
  },
  {
    icon: "fas fa-camera-retro",
    header: " Media Enquiries",
    text: "ashraf@nes.org.sg",
    link: "mailto:ashraf@nes.org.sg",
  },
  {
    icon: "far fa-object-group",
    header: "Sponsors & Exhibitors",
    text: "cheryl.kek@nes.org.sg",
    link: "mailto:cheryl.kek@nes.org.sg",
  },
];

export default function ContactUsPage({ win_width, win_height, is_mobile }) {
  console.log(`is_mobile: ${is_mobile}`)
  const ContactInfo = (props) => {
    // contactInfo;
    let val = props.val;
    return (
      <div className="contactInfo">
        <div className="contactIcon">
          <i class={val.icon}></i>
        </div>
        <div className="contactText">
          <div className="header">{val.header}</div>
          <a
            className="link"
            onClick={() => {
              window.open(val.link);
            }}
          >
            {val.text}
          </a>
        </div>
      </div>
    );
  };

  return (
    <div id="contactPage" className={`${is_mobile?"mobile":""}`}>
      <Topbar is_mobile={is_mobile} />
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

      <div className="venue">
        {/* <div className="contactForm">
            <div className="header">
                <div>
                    
                </div>
            </div>
          </div> */}
        <div className="title">Venue</div>
        <div className="directions">
          <img
            src={"/assets/images/maps/image_2021-11-02_22-54-02.png"}
            onClick={() => {
              window.location.href = mapUrl;
            }}
          />
        </div>
      </div>
      {!is_mobile ? (
        <div className="contactInfos">
          <div className="contactRow">
            {contactInfo.slice(0, 2).map((val) => (
              <ContactInfo val={val} />
            ))}
          </div>
          <div className="contactRow">
            {contactInfo.slice(2, 4).map((val) => (
              <ContactInfo val={val} />
            ))}
          </div>
        </div>
      ) : (
        <div className="contactInfos">
          {contactInfo.slice(0, 4).map((val) => (
            <div className="contactRow">
              <ContactInfo val={val} />
            </div>
          ))}
        </div>
      )}

      <div
        className="footerWrap"
        style={{ marginTop: "64px", position: "relative" }}
      >
        <Footer />
      </div>
      <TicketOverlay />
    </div>
  );
}
