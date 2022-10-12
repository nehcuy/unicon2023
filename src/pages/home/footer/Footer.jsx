import "./Footer.scss";
import { Link } from "react-router-dom";

//TODO: Abstract footer section from Footer cuz i used the footer thing
export default function Footer() {
  return (
    <div className="footer" style={{ background: "#D43924" }}>
      <div className="footRegion">
        {/* <div className="section">
          <div className="title">Subscribe to our Newsletter</div>
          <div className="subTitle">Stay informed on our newest updates</div>
          <div className="inputEmailWrap">
            <input placeholder={"Email"} />
            <div className="button">JOIN</div>
          </div>
        </div> */}
        <div className="section">
          <div className="socials">
            <div className="socialLogo">
              <img
                src={"/assets/images/fb-logo-white.svg"}
                onClick={(e) => {
                  e.stopPropagation()
                  window.open("https://www.facebook.com/nesunicon/")
                  // window.location.href = "https://www.facebook.com/nesunicon/";
                }}
              />
            </div>
            <div className="socialLogo">
              <img
                src={"/assets/images/instagram-white.svg"}
                onClick={(e) => {
                  e.stopPropagation()
                  window.open("https://www.instagram.com/nesunicon/")
                  // window.location.href = "https://www.instagram.com/nesunicon/";
                }}
              />
            </div>
            <div className="socialLogo">
              <img
                src={"/assets/images/linkedin-logo.svg"}
                onClick={(e) => {
                  e.stopPropagation()
                  window.open("https://www.linkedin.com/company/unicon2021/")
                  // window.location.href = "https://www.linkedin.com/company/unicon2021/";
                }}
              />
            </div>
            {/* <div className="socialLogo">
              <img
                src={"/assets/images/linkedin-logo.svg"}
                onClick={(e) => {
                  e.stopPropagation()
                  window.open("mailto:unicon@nes.org.sg")
                }}
              />
            </div> */}
          </div>
        </div>
      </div>
      <div className="footRegion">
        
        <div style={{fontSize: "24px"}} onClick={()=>{window.open("mailto:unicon@nes.org.sg")}}>
          <i class="fas fa-envelope" style={{marginRight: "16px"}}></i>
          <span style={{cursor:"pointer"}}>
            unicon@nes.org.sg
          </span>
        </div>
      </div>
      {/* <div className="lineBreaker footRegion"></div> */}
      <div className="footRegion">© 2022 UNICON. All Rights Reserved</div>
      <div className="footRegion">
        <div className="boringPageLinks">
          <Link to="/privacy">
            Privacy Policy
          </Link>
          |
          <Link to="/terms">
            Terms of Use
          </Link>
        </div>
      </div>
    </div>
  );
}
