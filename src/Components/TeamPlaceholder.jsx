import React from "react";
import { Col, Row } from "reactstrap";

function TeamPlaceholder() {
  return (
    <div>
      <Row className="m-0">
        <Col md={2}></Col>
        <Col md={8}>
          <div className=" text-center" style={{ position: "relative" }}>
            <h1 className="team_name_bold bg-danger">
              team
              <b>Galaxy</b>
            </h1>
          </div>
        </Col>
        <Col md={2}></Col>
      </Row>
    </div>
  );
}

export default TeamPlaceholder;
