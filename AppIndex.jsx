import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./src/Components/Sidebar";
import Home from "./src/Components/Home";
import NavigationMenu from "./src/Components/NavigationMenu";
export default function AppIndex() {
  return (
    <>
      <div className="pb-4">
        <NavigationMenu />
      </div>
      <Row className="m-0">
        <Col>
          <Sidebar />
        </Col>
        <Col>
          <Home />
        </Col>
      </Row>
      <Outlet />
    </>
  );
}
