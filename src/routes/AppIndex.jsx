import React from "react";
import { Outlet } from "react-router-dom";
import NavigationMenu from "../Components/NavigationMenu";
import Sidebar from "../Components/Sidebar";
import { Col, Row } from "reactstrap";
export default function AppIndex() {
  return (
    <>
      <NavigationMenu />
      <Row className="m-0">
        <Col md={2} className="sidebar_col">
          <Sidebar />
        </Col>
        <Col md={10} className="p-0">
          <Outlet />
        </Col>
      </Row>
    </>
  );
}
