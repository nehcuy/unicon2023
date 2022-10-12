import Topbar from "../../components/topbar/Topbar";
import Footer from "../home/footer/Footer";
import Particles from "react-tsparticles";
import TicketOverlay from "../../components/ticketOverlay/TicketOverlay";
//https://flaviocopes.com/react-router-data-from-route/
import { useEffect, useState, useMemo, useRef, createRef } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { set, throttle } from "lodash";
import { ReactCSSTransitionGroup } from "react-transition-group";
import "./SpeakersPage.scss";

import { speakerInfo2021_kv, speakerInfo2022_kv } from "./SpeakerInfo";

// const uniconDP =
//   "https://instagram.fsin5-1.fna.fbcdn.net/v/t51.2885-19/s320x320/244412855_1186787335131880_688207572625348860_n.jpg?_nc_ht=instagram.fsin5-1.fna.fbcdn.net&_nc_ohc=4sY4bxNQescAX8yxB0i&edm=ABfd0MgBAAAA&ccb=7-4&oh=6089230ed54c72498ab5c9f4b2a44b88&oe=6188F921&_nc_sid=7bff83";

const uniconDP = "/assets/images/uniconInstaDp.jpg";

const uniconInsta = "https://www.instagram.com/nesunicon/";

const speaker_base_url = "/speakers"

const ProfilePic = ({ strokeWidth, width, height }) => {
  return (
    <div className="profilePic" style={{
      width:width?width:"",
      height:height?height:""
    }}>
      <div className="profilePic__ring">
        <InstaStoryCircle strokeWidth={strokeWidth} />
      </div>
      <div className="profilePic__img">
        <img
          src={uniconDP}
          style={{ width: "90%", height: "90%", borderRadius: "50%" }}
          onClick={() => {
            window.open(uniconInsta);
          }}
        />
      </div>
    </div>
  );
};

const InstaStoryCircle = ({ strokeWidth = 3 }) => {
  return (
    <svg viewBox="0 0 245 245" className={"InstaStoryCircle"}>
      <linearGradient id="linearColors1" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#CA48A0" />
        <stop offset="100%" stopColor="#F9A75F" />
      </linearGradient>
      <linearGradient id="linearColors2" x1="0" y1="1" x2="1" y2="0">
        <stop offset="0%" stopColor="#F9A75F" />
        <stop offset="100%" stopColor="#CA48A0" />
      </linearGradient>
      <circle
        id="firstCircle"
        cx="122.5"
        cy="122.5"
        r="120"
        stroke="url(#linearColors1)"
        stroke-width={strokeWidth}
      ></circle>
    </svg>
  );
};

const dict2arr = (dict) =>{
  let arr = []
  let idx = 0
  for (var key in dict){
    // console.log( key, dict[key] );
    if (!("imgsrc" in dict[key])){
      continue
    }
    let toAdd = dict[key]
    toAdd["id"] = key
    toAdd['idx'] = idx
    arr.push(toAdd)
    idx += 1
  }
  // console.log(arr)
  return arr
}



export default function SpeakersPage({ win_width, win_height, is_mobile, has_id }) {
  const history = useHistory() 

  const change_url = (url) => {
    console.log(`New url: ${url}`)
    // history.pushState(null, 'UNICON 2022 | Largest Student Entrepreuneurship Event in SEA', url);
    history.push(url)
  }
  const change_url_by_idx = (idx) => {
    if(year == 2022){
      change_url(`${speaker_base_url}/${speakerInfo2022[idx]["id"]}`)
    } else {
      change_url(`${speaker_base_url}/${speakerInfo2021[idx]["id"]}`)
    }
  }
  
  let speakerInfo2022 = dict2arr(speakerInfo2022_kv)
  let speakerInfo2021 = dict2arr(speakerInfo2021_kv)
  const url_params = useParams()
  let url_id = "/speakers"
  let init_year = 2022
  let init_list = speakerInfo2022
  let init_curpost = 0
  let init_enterpost = false
  // if ("id" in url_params){
  //   url_id = url_params["id"]
  //   console.log(`url_id: ${url_id}`)
  //   if (url_id in speakerInfo2021_kv){
  //     init_year = 2021
  //     init_list = speakerInfo2021
  //     init_curpost = speakerInfo2021_kv[url_id].idx
  //     init_enterpost = true
  //   } else if (url_id in speakerInfo2022_kv) {
  //     init_curpost = speakerInfo2022_kv[url_id].idx
  //     init_enterpost = true
  //   } else {
  //     has_id = false
  //   }
  // }
  console.log(`has_id: ${has_id}`)
  console.log(`init_curpost: ${init_curpost}`)
  const postListRef = useRef(null); //true
  const [year, setYear] = useState(init_year);
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const [speakerList, setSpeakerList] = useState(init_list);
  const [enterPost, setEnterPost] = useState(init_enterpost);
  const [curPostIdx, setCurPostIdx] = useState(init_curpost);
  const postRefs = useRef([]);
  let postlistEl = null;
  let postlistOffsetTop = 0;
  postRefs.current = Array(speakerList.length)
    .fill()
    .map((_, i) => postRefs.current[i] || createRef());
  
  const change_list = (this_year) => {
    console.log(`Changing List: ${this_year} vs ${year}`)
    if (this_year != year){
      setYear(this_year)
      if (this_year == 2021) {
        setSpeakerList(speakerInfo2021);
      } else {
        setSpeakerList(speakerInfo2022);
      }
    }
  }

  const init_from_url = () => {
    if ("id" in url_params){
      url_id = url_params["id"]
      console.log(`url_id: ${url_id}`)
      if (url_id in speakerInfo2021_kv){
        change_list(2021)
        setCurPostIdx(speakerInfo2021_kv[url_id].idx)
        setEnterPost(true)
      } else if (url_id in speakerInfo2022_kv) {
        change_list(2022)
        setCurPostIdx(speakerInfo2022_kv[url_id].idx)
        setEnterPost(true)
      } else {
        // GO BACK to speakers
        console.log(`GO BACK TO SPEAKERS`)
        has_id = false
        setEnterPost(false)
        change_url(speaker_base_url)
      }
    } else {
      setEnterPost(false)
    }
  }

  useEffect(()=>{
    init_from_url()
  })
  

  useEffect(()=>{
    if (is_mobile){
      if (has_id){
        open_info_mobile(curPostIdx)
      } else {
        closeMoreInfo()
      }
    }
  },[enterPost])

  const go_to_img_scroll = (idx) => {
    let curPost = postRefs.current[idx].current;
    console.log(curPost);
    let curTop = curPost.offsetTop;
    postlistEl.scrollTo(0, curTop - postlistOffsetTop);
  }

  const open_info_mobile = (idx) => {
    go_to_img_scroll(idx)

    const post_list = postListRef.current;
    post_list.classList.add("active");
  }

    // init over
    // i dont need mobile version to have that traceback
  const setOpenMoreInfo = (idx) => {
    console.log("setOpenMoreInfo");
    if (is_mobile) {
      open_info_mobile(idx)
    } else {
      setEnterPost(true);
      setCurPostIdx(idx);
    }
    change_url_by_idx(idx)
  };

  const closeMoreInfo = () => {
    const post_list = postListRef.current;
    post_list.classList.remove("active");
    change_url(speaker_base_url)
  };

  //   React.useEffect(() => {
  function handleResize() {
    setDimensions({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  }
  useEffect(() => {
    if (year == 2021) {
      setSpeakerList(speakerInfo2021);
    } else {
      setSpeakerList(speakerInfo2022);
    }
  }, [year]);

  const throttleResizeHandler = useMemo(() => throttle(handleResize, 200), []);

  window.addEventListener("resize", throttleResizeHandler);

  const Post = ({ id, item, year }) => {
    // console.log("POST")
    let descriptionRef = useRef(null)
    let descripWrapRef = useRef(null)
    let moreRef = useRef(null)
    const expandDescription = () => {
      let el = descripWrapRef.current
      let moreEl = moreRef.current
      if (!el || !moreEl) return
      // setCondense(false)
      el.classList.remove("minimised");
      moreEl.style.display = "none";
    }
    let condenseLen = 33
    let info = item.info ? item.info : "Good speaker"
    let description = item.description?item.description:[]
    // const [toCondense, setCondense] = useState(description.length > 1 || (description.length > 0 && description[0].length > condenseLen))
    let toCondense = description.length > 1 || (description.length > 0 && description[0].length > condenseLen)
    // let descriptionFullHeight = dimensions.height
    
    //https://stackoverflow.com/questions/3508605/how-can-i-transition-height-0-to-height-auto-using-css
    // useEffect(()=>{
    //   let descriptionEl = descriptionRef.current
    //   let descripWrapEl = descripWrapRef.current
    //   console.log("descripWrapEl")
    //   console.log(descripWrapEl)
    //   if (!descriptionEl || !descripWrapEl) return
    //   let height = //descriptionEl.getBoundingClientRect().height
    //   console.log(descriptionEl.style)
    //   console.log(`$descriptionEl: ${height}`)
    //   descripWrapEl.style.height = `${height} + px`
    // },[])

    return (
      <div className="post">
        <div className="post__info">
          {item.title ? (
            <div className="post__info__title">{item.title}</div>
          ) : (
            ""
          )}
          <img src={item.imgsrc || ""} />

          <div className="infoWrap">
            {item.subtitle ? (
              <div className="post__info__subtitle">{item.subtitle}</div>
            ) : (
              ""
            )}
            
              <div className="post__info__info">{info}</div>
            <div className={`post__info__description-wrap ${toCondense?"minimised":""}`} style={{display: "flex"}} ref={descripWrapRef}>
              <div
                ref={descriptionRef}
                className={`post__info__description`}
                style={{
                  // maxHeight: commonHeight / 2,
                  // width: "calc(100% - 51px)"
                }}
              >
                
                {description && description.map((item, index) => (
                      
                      <div key={index}>
                        {item}
                      </div>
                  ))
                }
                
                
              </div>
              {toCondense && (
                  <div onClick={()=>{
                    expandDescription()
                  }}
                  ref = {moreRef}
                    style={{
                      color: "#aaa"
                    }}
                  >
                  ...more
                  </div>
              )}
            </div>
            <div className="post__info__year">{year}</div>
          </div>
        </div>
      </div>
    );
  };

  const PostList = ({ vals, year }) => {
    useEffect(() => {
      postlistEl = document.getElementsByClassName("post-list")[0];
      postlistOffsetTop = postlistEl.offsetTop;
    }, []);

    return (
      <>
        <div className="post-list__header">
          <div className="backBtn" onClick={closeMoreInfo}>
            <i class="fas fa-arrow-left"></i>
          </div>
          <div>Speakers</div>
        </div>
        <div className="post-list">
          {vals.map((item, index) => (
            <div className="refWrap" ref={postRefs.current[index]}>
              <Post key={item.id} id={item.id} item={item} year={year} />
            </div>
          ))}
        </div>
      </>
    );
  };

  const PostOverlay = ({ vals }) => {
    console.log(`idx: ${curPostIdx}`);
    init_from_url()
    // const [curPostIdx, setCurPostIdx] = useState(parseInt(initIdx));
    // let curPostIdx = parseInt(curPost)//initIdx)
    // const [isImgLoaded, setImgLoaded] = useState(false)
    const [imgAP, setImgAP] = useState(1);
    const imgRef = useRef(null);
    let curPost = vals[curPostIdx];
    const go_next = () => {
      setCurPostIdx(curPostIdx + 1)
      change_url_by_idx(curPostIdx + 1)
    }
    const go_prev = () => {
      setCurPostIdx(curPostIdx - 1)
      change_url_by_idx(curPostIdx - 1)
    }
    const leave_overlay = () => {
      setEnterPost(false)
      change_url(speaker_base_url)
    }

    console.log(curPost);
    // useEffect(()=>{

    // },[])
    // const [viewMode, setViewMode] = useState(3)  // 2 is tablet, 3 is desktop. There's no mobile cuz wont be this view
    let viewMode = 3;
    if (dimensions.width < 736) {
      viewMode = 2;
    }

    let isFirst = false,
      isLast = false;
    if (curPostIdx == 0) {
      isFirst = true;
    } else if (curPostIdx + 1 == vals.length) {
      isLast = true;
    }

    useEffect(() => {
      let img = imgRef.current;
      if (!img){
        return
      }
      // console.log(`Ratio: ${Math.min(img.width / img.height, 1)}`)
      setImgAP(Math.min(img.width / img.height, 1));
    }, []);

    // if (isImgLoaded){
    //   let img = imgRef.current
    //   setImgAP(Math.min(img.width / img.height, 1))
    // }

    let commonHeight = (dimensions.height / 10) * 9;

    const NextPrevBtn = ({ isNext, onClick }) => {
      return (
        <div
          className="btn-wrap"
          onClick={onClick}
          style={{
            right: isNext ? "0px" : "",
            left: isNext ? "" : "0px",
          }}
        >
          <button className="btn" type="button">
            <div className="btn-pad">
              <span
                style={{
                  display: "inline-block",
                  transform: isNext ? "rotate(90deg)" : "rotate(-90deg)",
                }}
              >
                <svg
                  aria-label={isNext ? "Next" : "Previous"}
                  color="#000000"
                  fill="#000000"
                  height="16"
                  role="img"
                  viewBox="0 0 48 48"
                  width="16"
                >
                  <path d="M40 33.5c-.4 0-.8-.1-1.1-.4L24 18.1l-14.9 15c-.6.6-1.5.6-2.1 0s-.6-1.5 0-2.1l16-16c.6-.6 1.5-.6 2.1 0l16 16c.6.6.6 1.5 0 2.1-.3.3-.7.4-1.1.4z"></path>
                </svg>
              </span>
            </div>
          </button>
        </div>
      );
    };

    return (
      <div className="overlay-bg">
        <div
          className="overlay-btns"
          onClick={(e) => {
            // console.log(e.target);
            // console.log(e.currentTarget)
            if (e.target !== e.currentTarget) return;
            leave_overlay();
          }}
        >
          <button
            className="btn"
            type="button"
            style={{
              position: "absolute",
              right: "0",
            }}
            onClick={() => leave_overlay()}
          >
            <div className="btn-pad">
              <svg
                aria-label="Close"
                className=""
                color="#ffffff"
                fill="#ffffff"
                height="24"
                role="img"
                viewBox="0 0 48 48"
                width="24"
              >
                <path
                  clipRule="evenodd"
                  d="M41.8 9.8L27.5 24l14.2 14.2c.6.6.6 1.5 0 2.1l-1.4 1.4c-.6.6-1.5.6-2.1 0L24 27.5 9.8 41.8c-.6.6-1.5.6-2.1 0l-1.4-1.4c-.6-.6-.6-1.5 0-2.1L20.5 24 6.2 9.8c-.6-.6-.6-1.5 0-2.1l1.4-1.4c.6-.6 1.5-.6 2.1 0L24 20.5 38.3 6.2c.6-.6 1.5-.6 2.1 0l1.4 1.4c.6.6.6 1.6 0 2.2z"
                  fillRule="evenodd"
                ></path>
              </svg>
            </div>
          </button>
          {isLast == false && (
            <NextPrevBtn
              isNext={true}
              onClick={() => go_next()}
            />
          )}
          {isFirst == false && (
            <NextPrevBtn
              isNext={false}
              onClick={() => go_prev()}
            />
          )}
        </div>

        {/* <div className="overlay-post-container"> */}
        {viewMode == 3 && (
          <div
            className="overlay-post"
            style={{
              height: commonHeight,
            }}
          >
            <div
              className="overlay-post__img"
              style={{
                maxHeight: commonHeight,
                width: commonHeight * imgAP,
                // aspectRatio: "1 / 1",
                flexGrow: 0,
                flexShrink: 1,
                // flexBasis: "52%"
              }}
            >
              <div className="imgBackground">
                <img
                  style={
                    {
                      // width: "60%",
                      // height: "100%"
                    }
                  }
                  ref={imgRef}
                  src={curPost.imgFull || ""}
                  onLoad={() => {
                    let img = imgRef.current;
                    setImgAP(Math.min(img.width / img.height, 1));
                  }}
                />
              </div>
            </div>
            <div className="overlay-post__details">
              <div className="post__header">
                <ProfilePic strokeWidth={8} height="75%"/>
                <div>UNICON 2022</div>
                {curPost.personalLink && (
                  <div className="socialLogo">
                    <img
                      src={"/assets/images/linkedin-logo.svg"}
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(curPost.personalLink);
                        // window.location.href = "https://www.linkedin.com/company/unicon2021/";
                      }}
                    />
                  </div>
                )}
                
              </div>
              <div className="post__info">
                {curPost.title ? (
                  <div className="post__info__title">{curPost.title}</div>
                ) : (
                  ""
                )}
                <div className="infoWrap">
                  {curPost.subtitle ? (
                    <div className="post__info__subtitle">
                      {curPost.subtitle}
                    </div>
                  ) : (
                    ""
                  )}
                  {curPost.info ? (
                    <div className="post__info__info">{curPost.info}</div>
                  ) : (
                    "Good speaker"
                  )}
                  <div
                    className="post__info__description"
                    style={{
                      maxHeight: commonHeight / 2,
                    }}
                  >
                    {curPost.description
                      ? curPost.description.map((item, index) => (
                          <div key={index}>{item}</div>
                        ))
                      : ""}
                  </div>
                  <div className="post__info__year">{year}</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {viewMode == 2 && (
          <div className="overlay-post">
            <div className="overlay-post__details">
              <div className="post__header">
                <ProfilePic />
                <div>UNICON 2022</div>
              </div>
              <div className="overlay-post__img">
                <img src={curPost.imgsrc || ""} />
              </div>
              <div className="post__info">
                {curPost.title ? (
                  <div className="post__info__title">{curPost.title}</div>
                ) : (
                  ""
                )}
                <div className="infoWrap">
                  {curPost.subtitle ? (
                    <div className="post__info__subtitle">
                      {curPost.subtitle}
                    </div>
                  ) : (
                    ""
                  )}
                  {curPost.info ? (
                    <div className="post__info__info">{curPost.info}</div>
                  ) : (
                    "Good speaker"
                  )}

                  <div className="post__info__year">{year}</div>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* </div> */}
      </div>
    );
  };

  const GridItem = ({ idx, item }) => {
    let itemKey = parseInt(idx);
    const [isHover, setHover] = useState(false);
    let haveImg = item.imgsrc && item.imgsrc.length > 0;
    return (
      <div
        className={"grid-item"}
        onMouseEnter={() => {
          if (haveImg && !is_mobile) {
            setHover(true);
          }
        }}
        onMouseLeave={() => {
          if (haveImg && !is_mobile) {
            setHover(false);
          }
        }}
        onClick={() => {
          if (haveImg) {
            setOpenMoreInfo(itemKey);
          }
        }}
      >
        {haveImg && <img src={item.imgsrc || ""} />}
        {!is_mobile && isHover && (
          <div className="grid-item__overlay">
            <div className="grid-item__info">
              {item.title ? (
                <div className="grid-item__info__title">{item.title}</div>
              ) : (
                ""
              )}
              {item.subtitle ? (
                <div className="grid-item__info__subtitle">{item.subtitle}</div>
              ) : (
                ""
              )}
              {!is_mobile && item.info ? (
                <div className="grid-item__info__info">{item.info}</div>
              ) : (
                ""
              )}
            </div>
          </div>
        )}
      </div>
    );
  };

  const GridRow = (props) => {
    let rowKey = parseInt(props.id);
    let padding = !is_mobile ? 256 : 0;
    let scrollbarWidth = 10;
    let vals = props.vals;
    let numPerRow = props.numPerRow;
    if (vals.length < numPerRow) {
      for (let i = vals.length; i < numPerRow; i += 1) {
        vals.push({});
      }
    }
    return (
      <div
        className={"grid-row"}
        style={{
          height: Math.min(320, (win_width - padding - scrollbarWidth) / 3),
          marginBottom: is_mobile ? "0px" : "0px",
        }}
      >
        {vals.map((item, index) => (
          <GridItem
            // key={(rowKey + index).toString()}
            // id={rowKey + index}
            key={item.id}
            idx={rowKey + index}
            item={item}
          />
        ))}
      </div>
    );
  };

  const GridGallery = (props) => {
    let vals = props.vals;
    let defaultItemNum = 6;
    let itemPerRow = 6;
    // const [itemPerRow, setItemPerRow] = useState(defaultItemNum)
    if (dimensions.width < 1500) {
      defaultItemNum = 3;
    } else if (dimensions.width < 1800) {
      defaultItemNum = 4;
    } else if (dimensions.width < 2100) {
      defaultItemNum = 5;
    }
    let gridrows = [];
    itemPerRow = defaultItemNum;

    for (let i = 0; i < vals.length; i += itemPerRow) {
      gridrows.push(
        <GridRow
          key={i.toString()}
          id={i}
          vals={vals.slice(i, i + itemPerRow)}
          numPerRow={itemPerRow}
        />
      );
    }

    return (
      <div className="grid-gallery">
        <div>
          <div
            style={{
              flexDirection: "column",
              paddingBottom: "0px",
              paddingTop: "0px",
            }}
          >
            {gridrows}
          </div>
        </div>
      </div>
    );
  };

  return (
    // <div style={{"overflow":"hidden"}}>
    <div id="SpeakerPageWrap">
      <Topbar is_mobile={is_mobile} />
      <div id="SpeakerPage" className={`${is_mobile ? "mobile" : ""}`}>
        <div className="SpeakerPage__content">
          {!is_mobile ? (
            <div
              className="profileDetails"
              style={{
                display: "flex",
              }}
            >
              <div className="profileDetails__lcol">
                <ProfilePic width="75%"/>
              </div>
              <div className="profileDetails__rcol">
                <h2 className="username">Our UNICON Speakers</h2>
                <div className="text">
                  <span style={{ fontWeight: "500" }}>100+</span> Profiles!
                </div>
                <h2 className="text" style={{ fontWeight: "700" }}>
                  NES UNICON 2022
                </h2>
                <div className="text selfLabel">Entrepreneur</div>
                <div className="text">
                  Asia's Largest & Craziest Entrepreneurship & Tech Student
                  Conference, from 15th to 16th January 2022!
                </div>
                <div className="text">
                  By{" "}
                  <span
                    className="tag noselect"
                    onClick={() => {
                      window.open(uniconInsta);
                    }}
                  >
                    @nusentresoc
                  </span>
                </div>
                <a
                  className="link noselect"
                  onClick={() => {
                    window.open("https://linktr.ee/nesunicon");
                  }}
                >
                  linktr.ee/nesunicon
                </a>
              </div>
            </div>
          ) : (
            <div className="profileDetails">
              <div
                className="profileDetails__row"
                style={{
                  display: "flex",
                }}
              >
                <div className="profileDetails__lcol">
                  <ProfilePic />
                </div>
                <div className="profileDetails__rcol">
                  <h2 className="username">Our UNICON Speakers</h2>
                </div>
              </div>
              <div className="profileDetails__row">
                <div className="text">
                  <span style={{ fontWeight: "500" }}>100+</span> Profiles!
                </div>
                <h2 className="text" style={{ fontWeight: "700" }}>
                  NES UNICON 2022
                </h2>
                <div className="text selfLabel">Entrepreneur</div>
                <div className="text">
                  Asia's Largest & Craziest Entrepreneurship & Tech Student
                  Conference, from 15th to 16th January 2022!
                </div>
                <div className="text">
                  By{" "}
                  <span
                    className="tag noselect"
                    onClick={() => {
                      window.open(uniconInsta);
                    }}
                  >
                    @nusentresoc
                  </span>
                </div>
                <a
                  className="link noselect"
                  onClick={() => {
                    window.open("https://linktr.ee/nesunicon");
                  }}
                >
                  linktr.ee/nesunicon
                </a>
              </div>
            </div>
          )}
          {/* <div className="yearSelectionWrap"> */}
          <div className="yearSelection">
            <div className="yearBtnWrap">
              <div
                className={`yearBtn ${year == 2022 ? "active " : ""}`}
                onClick={() => {
                  setYear(2022);
                }}
              >
                2022
              </div>
            </div>
            <div className="yearBtnWrap">
              <div
                className={`yearBtn ${year == 2021 ? "active " : ""}`}
                onClick={() => {
                  setYear(2021);
                }}
              >
                2021
              </div>
            </div>
          </div>
          {/* </div> */}
          <GridGallery vals={speakerList} />
        </div>
        <div className="footerWrap">
          <Footer />
        </div>
        <TicketOverlay />
      </div>
      {is_mobile && (
        <div ref={postListRef} className={`postlist_wrap`}>
          <PostList vals={speakerList} year={year} />
        </div>
      )}
      {!is_mobile && enterPost && (
        <PostOverlay vals={speakerList}  />
      )}
    </div>
  );
}
