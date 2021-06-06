import React from "react";
import { Nav } from "react-bootstrap";
function Navbar() {
  return (
    <Nav as="ul" className="container" style={{ marginTop: 30 }}>
      <Nav.Item as="li">
        <Nav.Link href="/">홈</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/sales">영업정보 추가 수정</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/product">제품정보 추가 수정</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navbar;
