import "./Credits.scss";
import React, { useRef, useState, useEffect } from "react";
import { SPONSOR_DATA, PARTNER_DATA, IMG_DIR } from "./CreditsConstants";

const processData = (data, attr) => {
  // let test = data[attr];
  console.log(processData);
  for (let attri of data) {
    console.log(attri[attr]);
    for (let miao of attri[attr]) {
      console.log(miao);
      console.log(miao["img"]);
      miao["img"] = `${IMG_DIR}${miao["img"]}`;
      console.log(miao["img"]);
    }
    console.log(attri);
  }

  return data;
};

export default function Credit({ is_mobile }) {
  // let p_d = processData(PARTNER_DATA,"partners");
  console.log("Credit");
  // let s_d = processData(SPONSOR_DATA, "sponsors");
  // console.log(s_d)
  console.log(is_mobile);
  return (
    <div className={`credits ${is_mobile ? "mobile" : ""}`}>
      <div className="title">Sponsors</div>
      {SPONSOR_DATA.map((level, idx1) => (
        <div className="credit_wrap">
          <div
            className="subtitle"
            style={{
              color: level["hoverColor"],
            }}
          >
            {level["level"]}
          </div>
          <div className={`imgContainer`}>
            {level["sponsors"].map((sponsor, idx2) => (
              <div className={`imgWrap ${sponsor["importance"]}`}>
                <div
                  style={{
                    backgroundColor: sponsor["BKGROUND"],
                    boxShadow: `5px 6px 8px ${level["hoverColor"]}`,
                  }}
                >
                  <a
                    href={sponsor["link"]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={IMG_DIR + sponsor["img"]} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      {!is_mobile && (
        <>
          <div className="title">Partners</div>
          {PARTNER_DATA.map((level, idx1) => (
            <div className="credit_wrap">
              <div className="subtitle">{level["level"]}</div>
              <div className={`imgContainer`}>
                {level["partners"].map((sponsor, idx2) => (
                  <div className={`imgWrap ${sponsor["importance"]}`}>
                    <div
                      style={{
                        backgroundColor: sponsor["BKGROUND"],
                        boxShadow: `5px 6px 8px ${level["hoverColor"]}`,
                      }}
                    >
                      <a
                        href={sponsor["link"]}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={IMG_DIR + sponsor["img"]} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
