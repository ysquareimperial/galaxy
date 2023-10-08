import React, { useState } from "react";
import { BsPlus } from "react-icons/bs";
import { Col, Row } from "reactstrap";
export default function NavigationMenu() {
  return (
    <div>
      <Row className="m-0 navbar_ shadow-sm">
        <Col
          lg={12}
          md={12}
          sm={12}
          xs={12}
          className="d-flex align-items-center justify-content-between"
        >
          <h1 className="team_name_nav m-0">
            <b>Galaxy</b>
            i35
          </h1>
        </Col>
      </Row>
    </div>
  );
}
