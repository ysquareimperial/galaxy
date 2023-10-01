import React, { useState } from "react";
import { Col, Row } from "reactstrap";
export default function NavigationMenu() {
  return (
    <div>
      <Row className="m-0 navbar_ shadow-sm">
        <Col lg={3} md={3} sm={3} xs={3} className="d-flex align-items-center">
          <h1 className="team_name_nav m-0">
            team
            <b>Galaxy</b>
          </h1>
        </Col>
      </Row>
    </div>
  );
}
