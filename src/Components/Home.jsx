import React, { useEffect, useState } from "react";
import { Col, Row } from "reactstrap";
import { BiClipboard, BiSend } from "react-icons/bi";
import {
  BsClipboard,
  BsFileEarmarkPdfFill,
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
  const [loading, setLoading] = useState(false);

  const sendDomSpecQues = () => {
    setShowPlaceholder(false);
  };

  const getAnswer = () => {
    setLoading(true);
    axios
      .get(
        `https://a237-197-210-198-114.ngrok-free.app/q/question?question=${questionText}`
      )
      .then((response) => {
        console.log(response);
        setAnswer(response?.data);
        setLoading(false);
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
                      <div className="">{questionText}</div>
                    </div>
                    <div className="tab-content">
                      {activeTab === 0 && (
                        <div>
                          <div
                            className="answer p-3"
                            style={{ marginBottom: 120 }}
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
                            style={{ marginBottom: 120 }}
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
                </>
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
                {domSpecQue.map((q, i) => (
                  <Col
                    md={6}
                    key={i}
                    className="mb-2"
                    onClick={sendDomSpecQues}
                  >
                    <div className="dom_spec d-flex justify-content-between align-items-center">
                      <div>
                        <p className="m-0" style={{ fontWeight: "bold" }}>
                          {q.question_h}
                        </p>
                        <p className="m-0" style={{ color: "grey" }}>
                          {q.question_sub}
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
                ))}
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
