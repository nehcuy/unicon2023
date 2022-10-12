import Topbar from "../../components/topbar/Topbar";
import Footer from "../home/footer/Footer";
import Particles from "react-tsparticles";
import TicketOverlay from "../../components/ticketOverlay/TicketOverlay";
import "./TermsOfUse.scss";

export default function TermsOfUsePage({ win_width, win_height, is_mobile }) {
  return (
    <div id="termsOfUsePage">
      <Topbar is_mobile={is_mobile}/>
      <div className="termsOfUseContent">
        <div className="termsOfUseContent__text">
          <div className="title">TERMS OF SERVICE</div>
          <p>
            <span style={{fontWeight: "400"}}>
              This website and our associated websites, mobile or web
              applications and digital platforms (
            </span>
            <b>“Sites”</b>
            <span style={{fontWeight: "400"}}>
              ) accessed by your computer browser or mobile application are
              managed by NUS Entrepreneurship Society and/or its subsidiaries
              and affiliated associations.&nbsp;
            </span>
          </p>
          <p>&nbsp;</p>
          <p>
            <b>
              By continuing to browse our Sites, you agree to our Terms of
              Service and Privacy Policy.&nbsp;
            </b>
          </p>
          <p>&nbsp;</p>
          <p>
            <span style={{fontWeight: "400"}}>These Terms of Service (</span>
            <b>“Terms of Service”</b>
            <span style={{fontWeight: "400"}}>
              ) governs your use of our Sites (excluding any third party
              content). If you do not agree with any of the terms, please
              discontinue the use of our Sites. It is your responsibility to
              ensure that you have read and understood these Terms of Service
              and any accompanying risks, obligations and
              responsibilities.&nbsp;
            </span>
          </p>
          <p>&nbsp;</p>
          <ol>
            <li>
              <b> ACCESSING OUR SITES&nbsp;</b>
            </li>
          </ol>
          <p>&nbsp;</p>
          <p>
            <span style={{fontWeight: "400"}}>
              1.1. We do not guarantee continuous accessibility or uninterrupted
              operation of our Sites and shall not be held liable, if for any
              reason, any information is or becomes unavailable at any time or
              for any period.&nbsp;
            </span>
          </p>
          <p>&nbsp;</p>
          <p>
            <span style={{fontWeight: "400"}}>
              1.2. We may decide from time to time to temporarily restrict or
              block access to, or use of, all or part of our Sites without
              notice to you.&nbsp;
            </span>
          </p>
          <p>&nbsp;</p>
          <ol start="2">
            <li>
              <b> USING OUR SITES&nbsp;</b>
            </li>
          </ol>
          <p>&nbsp;</p>
          <p>
            <span style={{fontWeight: "400"}}>
              2.1. We do not warrant or represent that (a) our Sites and/or
              their contents and/or materials is/are accurate, appropriate,
              complete, updated and/or available for use in all jurisdictions;
              and (b) the contents and/or materials available for download from
              our Sites shall be free of infection from viruses, worms, Trojan
              horses etc.&nbsp;
            </span>
          </p>
          <p>&nbsp;</p>
          <p>
            <span style={{fontWeight: "400"}}>
              2.2. You agree to use our Sites, including all features and
              functionalities associated therewith, in accordance with all
              applicable laws, rules and regulations, and other restrictions on
              use of our Sites or any content therein.&nbsp;
            </span>
          </p>
          <p>&nbsp;</p>
          <p>
            <span style={{fontWeight: "400"}}>
              2.3. We are not responsible for, and do not necessarily endorse,
              the content of any third party sites which may be linked from our
              Sites out of convenience.&nbsp;
            </span>
          </p>
          <p>&nbsp;</p>
          <ol start="3">
            <li>
              <b> LIMITATIONS OF USE&nbsp;</b>
            </li>
          </ol>
          <p>&nbsp;</p>
          <p>
            <span style={{fontWeight: "400"}}>
              3.1. You may not copy, display, distribute, modify, publish,
              reproduce, transmit and/or otherwise transfer any content obtained
              from our Sites for any commercial purpose without our prior
              written consent.&nbsp;
            </span>
          </p>
          <p>&nbsp;</p>
          <p>
            <span style={{fontWeight: "400"}}>
              3.2. You may not use our Sites for any unlawful purpose or in such
              manner as prohibited by these Terms of Service,
              particularly:&nbsp;
            </span>
          </p>
          <ol>
            <li style={{fontWeight: "400"}}>
              <span style={{fontWeight: "400"}}>
                using our Sites in any manner that could negatively affect our
                Sites;
              </span>
            </li>
            <li style={{fontWeight: "400"}}>
              <span style={{fontWeight: "400"}}>
                gaining unauthorised access to our Sites;&nbsp;
              </span>
            </li>
            <li style={{fontWeight: "400"}}>
              <span style={{fontWeight: "400"}}>
                insert any code or manipulate the content of our Sites; use any
                robot, data mining or other extraction method, or other
                automated means to access our Sites, decompile, reverse engineer
                or disassemble any software accessible through our Sites;&nbsp;
              </span>
            </li>
            <li style={{fontWeight: "400"}}>
              <span style={{fontWeight: "400"}}>
                transmit any material designed to interrupt, destroy or limit
                the functionality of our Sites; and
              </span>
            </li>
            <li style={{fontWeight: "400"}}>
              <span style={{fontWeight: "400"}}>
                obtaining any information which is not intended by us to be made
                available via our Sites.&nbsp;
              </span>
            </li>
          </ol>
          <p>&nbsp;</p>
          <ol start="4">
            <li>
              <b> DISCLAIMER AND EXCLUSION OF LIABILITY&nbsp;</b>
            </li>
          </ol>
          <p>&nbsp;</p>
          <p>
            <span style={{fontWeight: "400"}}>
              4.1. While we endeavour to use reasonable efforts to ensure
              accuracy in the information presented on our Sites, we disclaim
              all warranties and representations as to the accuracy,
              availability, completeness, timeliness, veracity and any other
              aspects of the information contained on our Sites. Our Sites are
              provided on an “as is” and “as available” basis.&nbsp;
            </span>
          </p>
          <p>&nbsp;</p>
          <p>
            <span style={{fontWeight: "400"}}>
              4.2. We and our affiliates hereby exclude our liability for any
              damage or loss arising from your inability to access our Sites,
              your use of our Sites and/or your reliance on the information
              contained in our Sites.&nbsp;
            </span>
          </p>
          <p>&nbsp;</p>
          <ol start="5">
            <li>
              <b> INTELLECTUAL PROPERTY RIGHTS&nbsp;</b>
            </li>
          </ol>
          <p>&nbsp;</p>
          <p>
            <span style={{fontWeight: "400"}}>
              5.1. All the content on our Sites (including but not limited to
              text, graphics, photographs, logos, icons, videos and sounds) is
              copyrighted and may not be used without our prior written
              permission.&nbsp;
            </span>
          </p>
          <p>&nbsp;</p>
          <p>
            <span style={{fontWeight: "400"}}>
              5.2. Your access to or use of our Sites should not be construed as
              us granting, by implication, estoppel or otherwise, any licence or
              right to use the content and/or trademarks on our Sites. Other
              than the limited grant of access to and viewing of the content
              and/or trademarks on our Sites, you shall have no privileges
              and/or rights in any content and/or trademarks on our Sites.&nbsp;
            </span>
          </p>
          <p>&nbsp;</p>
          <ol start="6">
            <li>
              <b> INDEMNIFICATION&nbsp;</b>
            </li>
          </ol>
          <p>&nbsp;</p>
          <p>
            <span style={{fontWeight: "400"}}>
              6.1. You agree to fully indemnify, keep fully indemnified and hold
              us, our affiliates, directors, employees, agents, successors or
              assigns harmless from any losses, claims, demands, liability,
              costs, expenses, actions or threat of action arising from or in
              connection with your breach these Terms of Service and/or in
              connection with your access and use of our Sites.&nbsp;
            </span>
          </p>
          <p>&nbsp;</p>
          <p>
            <span style={{fontWeight: "400"}}>
              6.2. You shall comply with our Privacy Policy as may be amended
              and supplemented from time to time, all legal requirements and
              standards under each of (i) the Singapore Personal Data Protection
              Act (2012) and its regulations, and the Singapore Personal Data
              Protection Commission’s advisory guidelines and guides; (ii) the
              European General Data Protection Regulation; and (iii) such other
              data protection and privacy legislation that are applicable to any
              personal data, (and together with all subsidiary legislation
              related thereto), as amended, revised, and/or supplemented from
              time to time, collectively referred to as “
            </span>
            <b>Data &amp; Privacy Laws</b>
            <span style={{fontWeight: "400"}}>
              ”. You agree to fully indemnify and hold us harmless from any
              cost, legal fees, investigation, penalties, sanctions and/or legal
              proceedings relating to or in connection with any breach by you of
              the Data &amp; Privacy Laws.&nbsp;
            </span>
          </p>
          <p>&nbsp;</p>
          <ol start="7">
            <li>
              <b> SEVERABILITY&nbsp;</b>
            </li>
          </ol>
          <p>&nbsp;</p>
          <p>
            <span style={{fontWeight: "400"}}>
              If any provision or any part of a provision in these Terms of
              Service is held invalid, illegal or unenforceable by a court of
              law or a tribunal, it shall be deemed modified to the minimum
              extent necessary to give effect to our commercial intention. The
              validity, legality and enforceability of the remaining provisions
              or remaining parts of a provision shall remain in full force and
              effect.&nbsp;
            </span>
          </p>
          <p>&nbsp;</p>
          <ol start="8">
            <li>
              <b> CHANGES TO OUR SITES AND TERMS OF SERVICE&nbsp;</b>
            </li>
          </ol>
          <p>&nbsp;</p>
          <p>
            <span style={{fontWeight: "400"}}>
              We reserve the right to change any part of or information
              contained in our Sites without any prior notice and to change
              these Terms of Service by posting the updated Terms of Service
              here along with the date on which the Terms of Service was
              changed. If we make material changes to these Terms of Service
              that affect the way you access and use our Sites, we will update
              these Terms of Service and notify you specifically if required by
              law.&nbsp;
            </span>
          </p>
          <p>&nbsp;</p>
          <ol start="9">
            <li>
              <b> GOVERNING LAW&nbsp;</b>
            </li>
          </ol>
          <p>&nbsp;</p>
          <p>
            <span style={{fontWeight: "400"}}>
              These Terms of Service is governed by the laws of Singapore and
              parties agree to submit to the exclusive jurisdiction of the
              Singapore courts.&nbsp;
            </span>
          </p>
          <p>&nbsp;</p>
          <ol start="10">
            <li>
              <b> CONTACT US&nbsp;</b>
            </li>
          </ol>
          <p>&nbsp;</p>
          <p>
            <span style={{fontWeight: "400"}}>
              If you have any questions, comments, requests or complaints
              regarding these Terms of Service, please contact us at{" "}
            </span>
            <a href="mailto:nesunicon@nes.org.sg">
              <span style={{fontWeight: "400"}}>nesunicon@nes.org.sg</span>
            </a>
            <span style={{fontWeight: "400"}}>.&nbsp;</span>
          </p>
          <p>&nbsp;</p>
          <p>
            <span style={{fontWeight: "400"}}>Last Updated: 1 Dec 2020</span>
          </p>
        </div>
        <div
          className="footerWrap"
          style={{ marginTop: "64px", position: "relative" }}
        >
          <Footer />
        </div>
      </div>
      <TicketOverlay />
    </div>
  );
}
