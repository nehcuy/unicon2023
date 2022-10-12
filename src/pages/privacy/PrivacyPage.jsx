import Topbar from "../../components/topbar/Topbar";
import Footer from "../home/footer/Footer";
import Particles from "react-tsparticles";
import TicketOverlay from "../../components/ticketOverlay/TicketOverlay";
import "./PrivacyPage.scss";

export default function PrivacyPage({ win_width, win_height, is_mobile }) {
  return (
    <div id="privacyPage">
      <Topbar is_mobile={is_mobile}/>
      <div className="privacyContent">
        <div className="privacyContent__text">
          <div className="title">PRIVACY POLICY</div>
          <p>
            <span style={{ fontWeight: "400" }}>
              This website and our associated websites, mobile or web
              applications and digital platforms (“Sites”) accessed by your
              computer browser or mobile application are managed by NUS
              Entrepreneurship Society and/or its subsidiaries and affiliated
              associations.&nbsp;
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
            <span style={{ fontWeight: "400" }}>
              We respect the privacy of all of our clients, partners,
              participants, suppliers and visitors, and are committed to
              safeguarding the Personal Data that you provide to us. This
              Privacy Policy (“Policy”) aims to help you understand your rights
              over your Personal Data as well as learn about how we collect,
              use, process, transfer, retain and secure (“Use”) it. It is your
              responsibility to ensure that you have read and understood this
              Policy and any accompanying risks, obligations and
              responsibilities.&nbsp;
            </span>
          </p>
          <p>&nbsp;</p>
          <ol>
            <li>
              <b> APPLICATION OF POLICY&nbsp;</b>
            </li>
          </ol>
          <p>&nbsp;</p>
          <p>
            <span style={{ fontWeight: "400" }}>
              1.1. Please read this Policy so that you know and understand the
              purposes for which we Use your Personal Data.&nbsp;
            </span>
          </p>
          <p>&nbsp;</p>
          <p>
            <span style={{ fontWeight: "400" }}>
              1.2. This Policy supplements but does not supersede nor replace
              any other consents you may have previously provided to us in
              respect of your Personal Data. This Policy does not affect any
              rights which we may have at law in connection with the Use of your
              Personal Data.&nbsp;
            </span>
          </p>
          <p>&nbsp;</p>
          <p>
            <span style={{ fontWeight: "400" }}>
              1.3. By providing us with your Personal Data, whether via
              registering for our event(s), using our Sites, through any other
              form of interaction or otherwise, you are deemed to have agreed to
              the terms of this Policy and our Terms of Service.&nbsp;
            </span>
          </p>
          <p>&nbsp;</p>
          <ol start="2">
            <li>
              <b> COLLECTION OF PERSONAL DATA&nbsp;</b>
            </li>
          </ol>
          <p>&nbsp;</p>
          <p>
            <span style={{ fontWeight: "400" }}>
              2.1. “Personal Data” refers to any data of an individual who can
              be identified from that data, or in combination with any other
              information. You may be requested to provide your Personal Data in
              relation to our events, and depending on the nature of your
              interaction with us, this may include the following examples
              (including but not limited to):&nbsp;
            </span>
          </p>
          <p>
            <span style={{ fontWeight: "400" }}>(a) full name;&nbsp;</span>
          </p>
          <p>
            <span style={{ fontWeight: "400" }}>
              (b) business or residential address;&nbsp;
            </span>
          </p>
          <p>
            <span style={{ fontWeight: "400" }}>
              (c) identification verification document(s);&nbsp;
            </span>
          </p>
          <p>
            <span style={{ fontWeight: "400" }}>
              (d) payment details, including credit card and banking
              information; and/or&nbsp;
            </span>
          </p>
          <p>
            <span style={{ fontWeight: "400" }}>
              (e) contact details, including telephone number(s) and/or email
              addresses.&nbsp;
            </span>
          </p>
          <p>&nbsp;</p>
          <p>
            <span style={{ fontWeight: "400" }}>
              2.2. Where any Personal Data of a third party (for example,
              information of your family members, employees) is provided by you
              for any particular purpose, you undertake and represent that the
              appropriate consent(s) have been obtained by you before you
              provide us with such Personal Data.&nbsp;
            </span>
          </p>
          <p>&nbsp;</p>
          <ol start="3">
            <li>
              <b> USE OF PERSONAL DATA COLLECTED&nbsp;</b>
            </li>
          </ol>
          <p>&nbsp;</p>
          <p>
            <span style={{ fontWeight: "400" }}>
              3.1. Any Personal Data provided by you to us may be disclosed,
              shared among ourselves and used for the following purposes (where
              relevant):&nbsp;
            </span>
          </p>
          <ol>
            <li style={{ fontWeight: "400" }}>
              <span style={{ fontWeight: "400" }}>
                send you information, updates, invitations, marketing and
                advertising materials and information in relation to our
                activities and events (including future editions) and any of our
                other products and services, as detailed below in the paragraph
                (Marketing);&nbsp;
              </span>
            </li>
            <li style={{ fontWeight: "400" }}>
              <span style={{ fontWeight: "400" }}>
                program specific uses, including but not limited to:
              </span>
            </li>
          </ol>
          <p>
            <span style={{ fontWeight: "400" }}>
              (i) call for speakers;&nbsp;
            </span>
          </p>
          <p>
            <span style={{ fontWeight: "400" }}>(ii) conferences;&nbsp;</span>
          </p>
          <p>
            <span style={{ fontWeight: "400" }}>
              (iii) digital applications and platforms;
            </span>
          </p>
          <p>
            <span style={{ fontWeight: "400" }}>
              (iv) media requests;&nbsp;
            </span>
          </p>
          <p>
            <span style={{ fontWeight: "400" }}>(v) podcast programming;</span>
          </p>
          <p>
            <span style={{ fontWeight: "400" }}>
              (vi) exhibitions; (vii) business matchmaking; and&nbsp;
            </span>
          </p>
          <p>
            <span style={{ fontWeight: "400" }}>
              (viii) networking events.&nbsp;
            </span>
          </p>
          <ol>
            <li style={{ fontWeight: "400" }}>
              <span style={{ fontWeight: "400" }}>
                process your personal particulars and/or to contact you with
                regard to any competitions, &nbsp; &nbsp; promotions, special
                offers, marketing and lucky draws etc. in relation to our
                events;&nbsp;
              </span>
            </li>
            <li style={{ fontWeight: "400" }}>
              <span style={{ fontWeight: "400" }}>
                process your personal particulars to facilitate any
                payment;&nbsp;
              </span>
            </li>
            <li style={{ fontWeight: "400" }}>
              <span style={{ fontWeight: "400" }}>
                maintain the safety and security of our premises with the use of
                security cameras;&nbsp;
              </span>
            </li>
            <li style={{ fontWeight: "400" }}>
              <span style={{ fontWeight: "400" }}>
                solicit your comments via feedback or survey;&nbsp;
              </span>
            </li>
            <li style={{ fontWeight: "400" }}>
              <span style={{ fontWeight: "400" }}>
                compile data and conduct statistical or demographic
                analysis;&nbsp;
              </span>
            </li>
            <li style={{ fontWeight: "400" }}>
              <span style={{ fontWeight: "400" }}>
                process and respond to your requests and queries;&nbsp;
              </span>
            </li>
            <li style={{ fontWeight: "400" }}>
              <span style={{ fontWeight: "400" }}>
                update our records;&nbsp;
              </span>
            </li>
            <li style={{ fontWeight: "400" }}>
              <span style={{ fontWeight: "400" }}>
                facilitate the provision of services by our third party vendors,
                service providers and professional advisors;&nbsp;
              </span>
            </li>
            <li style={{ fontWeight: "400" }}>
              <span style={{ fontWeight: "400" }}>
                facilitate any proposed/actual business assignments or transfers
                in any of our rights/obligations in relation to your Personal
                Data;&nbsp;
              </span>
            </li>
            <li style={{ fontWeight: "400" }}>
              <span style={{ fontWeight: "400" }}>
                send to insurance companies to process claims;&nbsp;
              </span>
            </li>
            <li style={{ fontWeight: "400" }}>
              <span style={{ fontWeight: "400" }}>
                compliance with our internal policies/procedures and any
                applicable laws, rules and regulations, codes of practice,
                guidelines and any other legal purposes;&nbsp;
              </span>
            </li>
            <li style={{ fontWeight: "400" }}>
              <span style={{ fontWeight: "400" }}>
                comply with a court order, other legal processes or other legal
                requirements of any governmental authority (including detecting,
                investigating and preventing any crime, offence or
                breach);&nbsp;
              </span>
            </li>
            <li style={{ fontWeight: "400" }}>
              <span style={{ fontWeight: "400" }}>
                allow us to use your Personal Data in any other ways for which
                we have notified you and obtained your consent
                accordingly.&nbsp;
              </span>
            </li>
          </ol>
          <p>&nbsp;</p>
          <p>
            <span style={{ fontWeight: "400" }}>
              We will not Use your Personal Data for purposes which are not
              stated above or for which we have not obtained your consent. If we
              wish to Use your Personal Data for another purpose not covered
              above, we will seek your prior consent.&nbsp;
            </span>
          </p>
          <p>&nbsp;</p>
          <p>
            <span style={{ fontWeight: "400" }}>
              3.2. We are the controller of Personal Data only when we collect
              it and determine the purposes and means of processing that
              Personal Data. Generally, we Use your Personal Data for one or
              more of the specific purposes identified in this Policy based on
              your consent obtained. The legal basis for our Use of your
              Personal Data could also be that it is necessary for the
              legitimate interests pursued by us, or a third party. These
              legitimate interests include providing services to you, managing
              the relationship between ourselves and you, and facilitating
              internal business purposes and administrative purposes. In some
              cases, the provision and processing of your Personal Data may be a
              statutory and/or contractual requirement, or may be necessary in
              order to perform any contract you have agreed with us or perform
              services that you have requested.&nbsp;
            </span>
          </p>
          <p>&nbsp;</p>
          <p>
            <span style={{ fontWeight: "400" }}>
              3.3. By participating in our events, you consent to being
              photographed, filmed and recorded as a participant of the Event,
              and consent to the use of any such film, image or recording for
              public transmission. We shall have the right to allow any
              authorised or official photographers and/or videographers into the
              Event venue for photography and/or videography for future
              advertising and promotional purposes without your prior
              permission. We reserve the right to use images taken at the Event
              with your photograph, name, image, likeness, voice, biography and
              abstract in any media (including publication within and outside
              Singapore) and for any purpose (including marketing materials)
              without identification, compensation or payment of any kind.&nbsp;
            </span>
          </p>
          <p>&nbsp;</p>
          <p>
            <span style={{ fontWeight: "400" }}>3.4. Marketing&nbsp;</span>
          </p>
          <p>&nbsp;</p>
          <ol>
            <li style={{ fontWeight: "400" }}>
              <span style={{ fontWeight: "400" }}>
                When you submit certain forms at our Sites or participate in our
                events, you may opt-in to receive marketing materials, our event
                collaterals as well as industry news and updates from us. If you
                opt to receive such information, we will use your email address,
                telephone number and/or other contact details to inform you of
                such information to the extent permitted by applicable laws. We
                may also disclose your email address to our partners and
                marketing agents for the purposes of carrying out the above
                marketing activities on our behalf to the extent permitted by
                applicable laws.&nbsp;
              </span>
            </li>
            <li style={{ fontWeight: "400" }}>
              <span style={{ fontWeight: "400" }}>
                If you wish to opt out of receiving forms of communication from
                us such as marketing emails, or if you wish for us to stop
                sharing your personal information with third parties for those
                parties’ direct marketing purposes, please email{" "}
              </span>
              <a href="mailto:nesunicon@nes.org.sg">
                <span style={{ fontWeight: "400" }}>nesunicon@nes.org.sg</span>
              </a>
              <span style={{ fontWeight: "400" }}>
                {" "}
                with your request.&nbsp;
              </span>
            </li>
          </ol>
          <p>&nbsp;</p>
          <ol start="4">
            <li>
              <b> DISCLOSURE OF PERSONAL DATA&nbsp;</b>
            </li>
          </ol>
          <p>&nbsp;</p>
          <p>
            <span style={{ fontWeight: "400" }}>
              4.1. All Personal Data held by us will be kept confidential, but
              we may, where such disclosure is necessary to satisfy the purpose,
              or a directly-related purpose for which your Personal Data was
              collected, provide such information to the following parties who
              may be located in Singapore or elsewhere:&nbsp;
            </span>
          </p>
          <ol>
            <li style={{ fontWeight: "400" }}>
              <span style={{ fontWeight: "400" }}>
                any person or company who is acting for, jointly or on our
                behalf, in respect of the purpose or a directly-related purpose
                for which your Personal Data was provided;&nbsp;
              </span>
            </li>
            <li style={{ fontWeight: "400" }}>
              <span style={{ fontWeight: "400" }}>
                &nbsp;third party service providers (including any third party
                service provider which hosts or manages data from our Sites who
                processes your Personal Data on our behalf;&nbsp;
              </span>
            </li>
            <li style={{ fontWeight: "400" }}>
              <span style={{ fontWeight: "400" }}>
                our marketing agents;&nbsp;
              </span>
            </li>
            <li style={{ fontWeight: "400" }}>
              <span style={{ fontWeight: "400" }}>
                our lawyers, auditors and other professional advisors;&nbsp;
              </span>
            </li>
            <li style={{ fontWeight: "400" }}>
              <span style={{ fontWeight: "400" }}>
                our agents or subcontractors acting on our behalf;&nbsp;
              </span>
            </li>
            <li style={{ fontWeight: "400" }}>
              <span style={{ fontWeight: "400" }}>
                any financial institutions, charge or credit card issuing
                companies, credit bureau, or collection agencies necessary to
                establish and support the payment of any services due or
                requested; and&nbsp;
              </span>
            </li>
            <li style={{ fontWeight: "400" }}>
              <span style={{ fontWeight: "400" }}>
                any government authority in compliance with any applicable laws,
                rules and regulations, codes of practices, guidelines, court
                order and other legal processes or requirements.&nbsp;
              </span>
            </li>
          </ol>
          <p>&nbsp;</p>
          <p>
            <span style={{ fontWeight: "400" }}>
              4.2. We may share your Personal Data with people within our
              organisation, including people within our group companies, who
              have a “need to know” that data for business or legal
              reasons.&nbsp;
            </span>
          </p>
          <p>&nbsp;</p>
          <p>
            <span style={{ fontWeight: "400" }}>
              4.3. We may share your Personal Data with other third parties that
              are not described above. When we do so we will aggregate,
              anonymise, or de-identify the information so that a third party
              would not be likely to link the data to you, your computer, or
              your device.&nbsp;
            </span>
          </p>
          <p>&nbsp;</p>
          <p>
            <span style={{ fontWeight: "400" }}>
              4.4. Our business may require us to transfer your Personal Data to
              countries outside of Singapore including to countries that may not
              provide the same level of data protection as your home country. We
              take appropriate steps to ensure that recipients of your Personal
              Data are bound to duties of confidentiality and we implement
              measures such as standard contractual clauses.&nbsp;
            </span>
          </p>
          <p>&nbsp;</p>
          <ol start="5">
            <li>
              <b> ACCURACY OF PERSONAL DATA&nbsp;</b>
            </li>
          </ol>
          <p>&nbsp;</p>
          <p>
            <span style={{ fontWeight: "400" }}>
              We will keep all Personal Data collected as accurate, complete and
              up-to-date as necessary, taking into account its intended use and
              the interests of our customers and visitors. Where possible, we
              will validate the Personal Data provided by using generally
              accepted practices and guidelines.&nbsp;
            </span>
          </p>
          <p>&nbsp;</p>
          <ol start="6">
            <li>
              <b> PROTECTION OF PERSONAL DATA&nbsp;</b>
            </li>
          </ol>
          <p>&nbsp;</p>
          <p>
            <span style={{ fontWeight: "400" }}>
              6.1. We use reasonable technical, administrative, and physical
              measures to protect your Personal Data. When Personal Data is
              shared, we will take a reasonable approach to prevent the
              unauthorised use of the Personal Data.&nbsp;
            </span>
          </p>
          <p>&nbsp;</p>
          <p>
            <span style={{ fontWeight: "400" }}>
              6.2. Please note, however, that while we attempt to safeguard your
              Personal Data, no method of transmitting or storing electronic
              information is ever completely secure, and thus we make no
              warranty, express, implied, or otherwise, that your Personal Data
              will never be Used in a manner that is inconsistent with this
              Policy.&nbsp;
            </span>
          </p>
          <p>&nbsp;</p>
          <p>
            <span style={{ fontWeight: "400" }}>
              6.3. In no event shall we be liable for any damages (whether
              consequential, direct, incidental, indirect, punitive, special or
              otherwise) arising out of, or in any way connected with, a third
              party’s unauthorised Use of your Personal Data, regardless of
              whether such damages are based on contract, strict liability, and
              also regardless of whether such damages are based on contract,
              strict liability, tort or other theories of liability, and also
              regardless of whether we are given actual or constructive notice
              that damages were possible, except as provided under applicable
              laws.&nbsp;
            </span>
          </p>
          <p>&nbsp;</p>
          <ol start="7">
            <li>
              <b> RETENTION OF PERSONAL DATA&nbsp;</b>
            </li>
          </ol>
          <p>&nbsp;</p>
          <p>
            <span style={{ fontWeight: "400" }}>
              7.1. We will retain your Personal Data only for as long as the
              purposes for which such data is collected or used (as notified to
              you) continues, or where necessary, for our legal or business
              purposes. Where we no longer require your Personal Data for those
              purposes, we will cease to retain such Personal Data.&nbsp;
            </span>
          </p>
          <p>&nbsp;</p>
          <p>
            <span style={{ fontWeight: "400" }}>
              7.2. For Residents or Nationals of the UK or EU:&nbsp;
            </span>
          </p>
          <ol>
            <li style={{ fontWeight: "400" }}>
              <span style={{ fontWeight: "400" }}>
                You may request that we erase your Personal Data we hold about
                you in the following circumstances:&nbsp;
              </span>
            </li>
          </ol>
          <p>
            <span style={{ fontWeight: "400" }}>
              (i) you believe that it is no longer necessary for us to hold your
              Personal Data;&nbsp;
            </span>
          </p>
          <p>
            <span style={{ fontWeight: "400" }}>
              (ii) we are processing your Personal Data on the basis of your
              consent and you wish to withdraw your consent and there is no
              other ground under which we can process the Personal Data;&nbsp;
            </span>
          </p>
          <p>
            <span style={{ fontWeight: "400" }}>
              (iii) we are processing your Personal Data we hold about you on
              the basis of our legitimate interest and you object to such
              processing;&nbsp;
            </span>
          </p>
          <p>
            <span style={{ fontWeight: "400" }}>
              (iv) you no longer wish us to use your Personal Data in order to
              inform you of competitions, promotions, special offers, marketing
              and lucky draws etc.; or&nbsp;
            </span>
          </p>
          <p>
            <span style={{ fontWeight: "400" }}>
              (v) you believe your Personal Data is being unlawfully processed
              by us.&nbsp;
            </span>
          </p>
          <p>&nbsp;</p>
          <ol>
            <li style={{ fontWeight: "400" }}>
              <span style={{ fontWeight: "400" }}>
                You may request us to stop processing your Personal Data we hold
                about you other than for storage purposes in the following
                circumstances:&nbsp;
              </span>
            </li>
          </ol>
          <p>
            <span style={{ fontWeight: "400" }}>
              (i) you believe your Personal Data is not accurate, for the period
              it takes for us to verify whether your Personal Data is
              accurate;&nbsp;
            </span>
          </p>
          <p>
            <span style={{ fontWeight: "400" }}>
              (ii) we wish to erase your Personal Data as it is no longer
              necessary for our purposes but you require it to be stored for the
              establishment, exercise or defence of legal claims; or&nbsp;
            </span>
          </p>
          <p>
            <span style={{ fontWeight: "400" }}>
              (iii) you have objected to us processing your Personal Data on the
              basis of our legitimate interest and you wish us to stop
              processing your Personal Data whilst we determine whether there is
              an overriding interest in us retaining your Personal Data.&nbsp;
            </span>
          </p>
          <p>&nbsp;</p>
          <p>
            <span style={{ fontWeight: "400" }}>
              Please note, however, that if we stop processing your Personal
              Data, we may use it again if there are valid grounds under data
              protection law for us to do so (for example, for the defence of
              legal claims or for another’s protection).&nbsp;
            </span>
          </p>
          <p>&nbsp;</p>
          <ol start="8">
            <li>
              <b> WITHDRAWAL OF CONSENT&nbsp;</b>
            </li>
          </ol>
          <p>&nbsp;</p>
          <p>
            <span style={{ fontWeight: "400" }}>
              Should you wish to withdraw your consent from receiving marketing
              information and/or surveys, you may send us a request for the
              Consent Withdrawal Form to{" "}
            </span>
            <a href="mailto:nesunicon@nes.org.sg">
              <span style={{ fontWeight: "400" }}>nesunicon@nes.org.sg</span>
            </a>
            <span style={{ fontWeight: "400" }}>
              . Please note that we can only process Consent Withdrawal Forms
              that are properly filled up and may need to contact you for
              clarification if such forms are deemed to be incomplete or unclear
              in any way.&nbsp;
            </span>
          </p>
          <p>&nbsp;</p>
          <ol start="9">
            <li>
              <b>
                {" "}
                DATA SUBJECT RIGHTS – ACCESS, UPDATE AND DELETION OF PERSONAL
                DATA&nbsp;
              </b>
            </li>
          </ol>
          <p>&nbsp;</p>
          <p>
            <span style={{ fontWeight: "400" }}>
              You have the right to access, update or request that we delete
              your Personal Data at any time. If you wish to exercise your
              rights, or if you have other questions, comments or concerns about
              our privacy and data protection practices, please contact us at{" "}
            </span>
            <a href="mailto:nesunicon@nes.org.sg">
              <span style={{ fontWeight: "400" }}>nesunicon@nes.org.sg</span>
            </a>
            <span style={{ fontWeight: "400" }}>.&nbsp;</span>
          </p>
          <p>&nbsp;</p>
          <ol start="10">
            <li>
              <b> SEVERAL OBLIGATION&nbsp;</b>
            </li>
          </ol>
          <p>&nbsp;</p>
          <p>
            <span style={{ fontWeight: "400" }}>
              Please note that our liability hereunder is several and each party
              shall not be liable for the respective privacy breaches of the
              other party.&nbsp;
            </span>
          </p>
          <p>&nbsp;</p>
          <ol start="11">
            <li>
              <b> CHANGES TO THIS POLICY&nbsp;</b>
            </li>
          </ol>
          <p>&nbsp;</p>
          <p>
            <span style={{ fontWeight: "400" }}>
              We reserve the right to change this Policy at any time by posting
              the updated Policy here along with the date on which the Policy
              was changed. If we make material changes to this Policy that
              affect the way we Use your Personal Data, we will update this
              Policy and notify you specifically if required by law.&nbsp;
            </span>
          </p>
          <p>&nbsp;</p>
          <ol start="12">
            <li>
              <b> CONTACT US&nbsp;</b>
            </li>
          </ol>
          <p>&nbsp;</p>
          <p>
            <span style={{ fontWeight: "400" }}>
              For any questions regarding this Policy, or to withdraw consent,
              or to access and/or correct your Personal Data, please contact us
              at{" "}
            </span>
            <a href="mailto:nesunicon@nes.org.sg">
              <span style={{ fontWeight: "400" }}>nesunicon@nes.org.sg</span>
            </a>
            <span style={{ fontWeight: "400" }}>.&nbsp;</span>
          </p>
          <p>&nbsp;</p>
          <p>
            <span style={{ fontWeight: "400" }}>Last Updated: 1 Dec 2020</span>
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
