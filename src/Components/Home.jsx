import React, { useEffect, useState } from "react";
import { Col, Row } from "reactstrap";
import { BiClipboard, BiSend } from "react-icons/bi";
import {
  BsClipboard,
  BsFileEarmarkPdfFill,
  BsPlus,
  BsQuestionCircle,
} from "react-icons/bs";
import { domSpecQue } from "./DomSpecQ";
import { AiOutlineCheck, AiOutlineLink } from "react-icons/ai";
import TeamPlaceholder from "./TeamPlaceholder";
import { FiExternalLink } from "react-icons/fi";
import { MdOutlineChatBubbleOutline } from "react-icons/md";
import axios from "axios";
function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  const [copying, setCopying] = useState(false);
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const [questionText, setQuestionText] = useState("");
  const [answer, setAnswer] = useState({});
  const [dom1, setDom1] = useState({});
  const [loading, setLoading] = useState(false);
  const [hide, setHide] = useState(false);

  const getDom1 = () => {
    setLoading(true);
    axios
      .get(`https://8e1b-105-112-87-70.ngrok-free.app/1/question`)
      .then((response) => {
        console.log(response);
        setDom1(response?.data);
        setLoading(false);
        // setQuestionText('')
      })
      .catch((err) => {
        setLoading(false);
        console.log("error fetching data", err);
      });
  };

  const sendDomSpecQues = () => {
    getDom1();
    setShowPlaceholder(false);
    setHide(true);
  };

  const getDom3 = () => {
    setLoading(true);
    axios
      .get(`https://8e1b-105-112-87-70.ngrok-free.app/3/question`)
      .then((response) => {
        console.log(response);
        setDom1(response?.data);
        setLoading(false);
        // setQuestionText('')
      })
      .catch((err) => {
        setLoading(false);
        console.log("error fetching data", err);
      });
  };

  const sendDomSpecQues3 = () => {
    getDom3();
    setShowPlaceholder(false);
    setHide(true);
  };

  const getDom4 = () => {
    setLoading(true);
    axios
      .get(`https://8e1b-105-112-87-70.ngrok-free.app/4/question`)
      .then((response) => {
        console.log(response);
        setDom1(response?.data);
        setLoading(false);
        // setQuestionText('')
      })
      .catch((err) => {
        setLoading(false);
        console.log("error fetching data", err);
      });
  };

  const sendDomSpecQues4 = () => {
    getDom4();
    setShowPlaceholder(false);
    setHide(true);
  };

  const getDom5 = () => {
    setLoading(true);
    axios
      .get(`https://8e1b-105-112-87-70.ngrok-free.app/5/question`)
      .then((response) => {
        console.log(response);
        setDom1(response?.data);
        setLoading(false);
        // setQuestionText('')
      })
      .catch((err) => {
        setLoading(false);
        console.log("error fetching data", err);
      });
  };

  const sendDomSpecQues5 = () => {
    getDom5();
    setShowPlaceholder(false);
    setHide(true);
  };

  const getAnswer = () => {
    setLoading(true);
    axios
      .get(
        `https://8e1b-105-112-87-70.ngrok-free.app/q/question?question=${questionText}`
      )
      .then((response) => {
        console.log(response);
        setAnswer(response?.data);
        setLoading(false);
        // setQuestionText('')
      })
      .catch((err) => {
        setLoading(false);
        console.log("error fetching data", err);
      });
  };

  const sendQuestion = () => {
    setShowPlaceholder(false);
    // setQuestionText("");
    getAnswer();
    console.log(questionText);
  };

  const copy = () => {
    navigator.clipboard.writeText(answer?.texts);
    setCopying(true);
    setTimeout(() => {
      setCopying(false);
    }, 2000);
  };

  return (
    <div className="_ddddd">
      {showPlaceholder ? (
        <div
          className="text-center"
          style={{ paddingTop: 100, backgroundColor: "" }}
        >
          <h1 className="team_name_bold">
            team
            <b>Galaxy</b>
          </h1>
        </div>
      ) : (
        ""
      )}
      {!showPlaceholder ? (
        <div className="answers_div" style={{ position: "absolute" }}>
          <Row className="m-0">
            <Col md={2} className=""></Col>
            <Col md={8} className="">
              {/* {JSON.stringify(answer)} */}

              {loading ? (
                <>
                  <div
                    class="text-center mt-5 d-flex align-items-center justify-content-center gap-2"
                    style={{ color: "#008fb7" }}
                  >
                    <span
                      style={{ width: "2rem", height: "2rem" }}
                      class="spinner-border"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    <p className="m-0">Generating your answer...</p>
                  </div>
                </>
              ) : (
                <>
                  {!hide ? (
                    <div>
                      <div className="tab-buttons d-flex justify-content-between">
                        <button
                          className={activeTab === 0 ? "active" : "not_active"}
                          onClick={() => handleTabClick(0)}
                        >
                          Text
                        </button>
                        <button
                          className={activeTab === 1 ? "active" : "not_active"}
                          onClick={() => handleTabClick(1)}
                        >
                          PDFs
                        </button>
                        <button
                          className={activeTab === 2 ? "active" : "not_active"}
                          onClick={() => handleTabClick(2)}
                        >
                          Videos
                        </button>
                      </div>
                      <div className="question p-3 mt-2 mb-2">
                        <BsQuestionCircle
                          size="1.2rem"
                          color="rgb(0, 143, 183)"
                        />
                        <div className="">
                          <b style={{ color: "rgb(0, 143, 183)" }}>
                            {questionText}
                          </b>
                        </div>
                      </div>
                      <div className="tab-content">
                        {activeTab === 0 && (
                          <div>
                            <div
                              className="answer p-3"
                              style={{ marginBottom: 150 }}
                            >
                              <div className="d-flex justify-content-between mb-3">
                                <MdOutlineChatBubbleOutline
                                  size="1.2rem"
                                  color="rgb(0, 143, 183)"
                                />
                                <span
                                  style={{ cursor: "pointer" }}
                                  onClick={copy}
                                >
                                  {copying ? (
                                    <AiOutlineCheck
                                      size="1.2rem"
                                      color="rgb(0, 143, 183)"
                                    />
                                  ) : (
                                    <BiClipboard
                                      size="1.2rem"
                                      color="rgb(0, 143, 183)"
                                    />
                                  )}
                                  Copy{" "}
                                </span>
                              </div>
                              <div>{answer?.texts}</div>
                            </div>
                          </div>
                        )}
                        {activeTab === 1 && (
                          <div>
                            <div
                              className="pdfs mt-3"
                              style={{ marginBottom: 150 }}
                            >
                              {answer?.pdfs?.map((item, index) => (
                                <div className="pdf">
                                  <div className="d-flex align-items-center gap-2 mb-2">
                                    <BsFileEarmarkPdfFill color="#008fb7" />
                                    <p className="m-0">
                                      <b>{item?.title}</b>
                                    </p>
                                  </div>
                                  <div className="d-flex align-items-center gap-2">
                                    <AiOutlineLink color="#008fb7" />

                                    <a
                                      className="m-0 link"
                                      href={item?.link}
                                      target="_blank"
                                      // style={{ overflowWrap: "break-word" }}
                                    >
                                      {item?.link.length > 83
                                        ? `${item?.link.substring(0, 83)}...`
                                        : item?.link}{" "}
                                      <FiExternalLink color="#008fb7" />
                                    </a>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        {activeTab === 2 && (
                          <div>
                            <div className="mt-3">
                              <Row>
                                {answer?.videos?.map((item, index) => (
                                  <Col md={3} className="mb-3">
                                    <a href={item?.link} target="_blank">
                                      <img
                                        src={item?.thumbnail}
                                        alt={item?.title}
                                        style={{ borderRadius: 10 }}
                                      />
                                    </a>
                                    <p
                                      style={{
                                        fontWeight: "",
                                        fontSize: 13,
                                        fontWeight: "bold",
                                        color: "grey",
                                      }}
                                    >
                                      {item?.title.length > 20
                                        ? `${item?.title.substring(0, 20)}...`
                                        : item?.title}
                                    </p>
                                  </Col>
                                ))}
                              </Row>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </>
              )}
              {hide ? (
                <>
                  {loading ? (
                    ""
                  ) : (
                    <div className="answer p-3" style={{ marginBottom: 150 }}>
                      <h4>{dom1?.title}</h4>
                      <div>
                        <img
                          src={dom1?.url}
                          alt=""
                          style={{ width: "100%", borderRadius: 10 }}
                        />
                      </div>
                      <div className="mt-3">
                        <p>{dom1?.explanation}</p>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                ""
              )}
            </Col>
            <Col className="" md={2}></Col>
          </Row>
        </div>
      ) : (
        ""
      )}
      <div className="textarea_div">
        {showPlaceholder ? (
          <Row className="mb-2" style={{ marginRight: 10, marginLeft: 10 }}>
            <Col md={2}></Col>
            <Col md={8}>
              <Row className="">
                <Col
                  md={6}
                  // key={i}
                  className="mb-2"
                  onClick={sendDomSpecQues}
                >
                  <div className="dom_spec d-flex justify-content-between align-items-center">
                    <div>
                      <p className="m-0" style={{ fontWeight: "bold" }}>
                        {domSpecQue[1]}
                      </p>
                      <p className="m-0" style={{ color: "grey" }}>
                        Celestial Beauty: Astronomy Picture of the Day
                      </p>
                    </div>
                    <div className="">
                      <BiSend
                        size="2.2rem"
                        className="dom_spec_icon _send_icon"
                      />
                    </div>
                  </div>
                </Col>
                <Col
                  md={6}
                  // key={i}
                  className="mb-2"
                  onClick={sendDomSpecQues3}
                >
                  <div className="dom_spec d-flex justify-content-between align-items-center">
                    <div>
                      <p className="m-0" style={{ fontWeight: "bold" }}>
                        {domSpecQue[3]}
                      </p>
                      <p className="m-0" style={{ color: "grey" }}>
                        A Comprehensive Dataset Since 1995
                      </p>
                    </div>
                    <div className="">
                      <BiSend
                        size="2.2rem"
                        className="dom_spec_icon _send_icon"
                      />
                    </div>
                  </div>
                </Col>
                <Col
                  md={6}
                  // key={i}
                  className="mb-2"
                  onClick={sendDomSpecQues4}
                >
                  <div className="dom_spec d-flex justify-content-between align-items-center">
                    <div>
                      <p className="m-0" style={{ fontWeight: "bold" }}>
                        {domSpecQue[4]}
                      </p>
                      {/* <p className="m-0" style={{ color: "grey" }}>
                          {q.question_sub}
                        </p> */}
                    </div>
                    <div className="">
                      <BiSend
                        size="2.2rem"
                        className="dom_spec_icon _send_icon"
                      />
                    </div>
                  </div>
                </Col>
                <Col
                  md={6}
                  // key={i}
                  className="mb-2"
                  onClick={sendDomSpecQues5}
                >
                  <div className="dom_spec d-flex justify-content-between align-items-center">
                    <div>
                      <p className="m-0" style={{ fontWeight: "bold" }}>
                        {domSpecQue[5]}
                      </p>
                      {/* <p className="m-0" style={{ color: "grey" }}>
                        DDD
                      </p> */}
                    </div>
                    <div className="">
                      <BiSend
                        size="2.2rem"
                        className="dom_spec_icon _send_icon"
                      />
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col md={2}></Col>
          </Row>
        ) : (
          ""
        )}
        <Row className="m-0 bg-white">
          <Col lg={2} md={2} sm={2} xs={2} className=""></Col>
          <Col lg={8} md={8} sm={12} xs={12}>
            {/* {JSON.stringify(questionText)} */}
            <button
              className="new_chat m-0 mb-2 mt-1"
              onClick={() => {
                setShowPlaceholder(true);
                setQuestionText("");
                window.location.reload();
              }}
            >
              <BsPlus size="1rem" className="m-0" /> New Chat
            </button>
            <div className="textarea_group">
              <textarea
                className="textarea_"
                name=""
                id=""
                cols="30"
                rows="1"
                placeholder="Write here"
                value={questionText}
                onChange={(e) => setQuestionText(e.target.value)}
              ></textarea>
              <BiSend
                size="2.2rem"
                className="send_icon"
                onClick={sendQuestion}
              />
            </div>
            <div className="text-center pb-1">
              <p
                className="m-0 mt-1 bottom_"
                style={{
                  letterSpacing: 0.5,
                  color: "grey",
                  fontSize: 12,
                }}
              >
                <span className="name_">teamGalaxy | </span>NASA International
                Space Apps Challenge
              </p>
            </div>
          </Col>
          <Col lg={2} md={2} sm={2} xs={2} className=""></Col>
        </Row>
      </div>
    </div>
  );
}

export default Home;
