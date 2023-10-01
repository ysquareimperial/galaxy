import React from "react";
import { Col, Row } from "reactstrap";
import { BiSend } from "react-icons/bi";
function Home() {
  return (
    <div className="_ddddd">
      <div className="answers_div text-center">
        <h1 className="team_name_bold">
          team
          <b>Galaxy</b>
        </h1>
      </div>
      <div className="textarea_div">
        <Row className="m-0">
          <Col lg={2} md={2} sm={2} xs={2} className=""></Col>
          <Col lg={8} md={8} sm={12} xs={12}>
            <div className="textarea_group">
              <textarea
                className="textarea_"
                name=""
                id=""
                cols="30"
                rows="1"
                placeholder="Write here"
              ></textarea>
              <BiSend size="2.2rem" className="send_icon" />
            </div>
            <div className="text-center">
              <p
                className="m-0 mt-1 bottom_"
                style={{
                  //   fontWeight: 500,
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
