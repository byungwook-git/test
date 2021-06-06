import React, { useState } from "react";
import axios from "axios";
import { Button, Table, Row, Col } from "react-bootstrap";

import SaveProductCode from "./Sections/SaveProductCode";

function ProductPage() {
  const [SalesCode, setSalesCode] = useState([]);

  const [ProductCode, setProductCode] = useState([]);

  const SearchButton = () => {
    //데이터 받아오기
    axios.post("/api/sales/salesCode").then((response) => {
      if (response.data.success) {
        // console.log(response.data.productInfo);

        //내림 차순
        const sortData = response.data.productInfo.sort(function (a, b) {
          return a.salesCode < b.salesCode
            ? -1
            : a.salesCode > b.salesCode
            ? 1
            : 0;
        });
        // console.log(sortData);
        setSalesCode(sortData);
      } else {
        alert("가져오기 실패");
      }
    });
  };
  const renderSalesCode = SalesCode.map((SalesCode, index) => {
    return (
      <tr key={index}>
        <td>{SalesCode.salesCode}</td>
        <td>{SalesCode.productName}</td>
        <td>{SalesCode.creationDate}</td>
        <td>{SalesCode.disposalDate}</td>
        <td>{SalesCode.name}</td>
      </tr>
    );
  });

  const renderProductCode = ProductCode.map((ProductCode, index) => {
    return (
      <tr key={index}>
        <td>{ProductCode.productCode}</td>
        <td>{ProductCode.productName}</td>
        <td>{ProductCode.creationDate}</td>
        <td>{ProductCode.disposalDate}</td>
        <td>{ProductCode.name}</td>
      </tr>
    );
  });

  const productButton = () => {
    //데이터 받아오기
    axios.post("/api/product/productCode").then((response) => {
      if (response.data.success) {
        // console.log(response.data.productInfo);

        //내림 차순
        const sortData = response.data.productInfo.sort(function (a, b) {
          return a.productCode > b.productCode
            ? -1
            : a.productCode < b.productCode
            ? 1
            : 0;
        });

        // console.log(sortData);
        setProductCode(sortData);
        productButton();
      } else {
        alert("가져오기 실패");
      }
    });
  };

  return (
    <div className="container" style={{ marginTop: 100 }}>
      <div className="mb-3">
        <input />
        <Button className="ml-3" onClick={SearchButton}>
          조회
        </Button>
      </div>
      <div className="mb-3">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>영업코드</th>
              <th>제품명</th>
              <th>생성일</th>
              <th>폐기일</th>
              <th>수정자</th>
            </tr>
          </thead>
          <tbody>{renderSalesCode}</tbody>
        </Table>
      </div>
      <Row>
        <Col>
          <div>
            <div className="mb-3">
              <span>세부내역</span>
              <Button className="ml-3">신규등록</Button>
            </div>
            <div>
              <Button className="ml-3" onClick={productButton}>
                제품코드 임시버튼
              </Button>
            </div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>영업코드</th>
                  <th>제품명</th>
                </tr>
              </thead>
              <tbody></tbody>
            </Table>
          </div>
          <div>
            <Table>
              <thead>
                <tr>
                  <th>제품코드</th>
                  <th>제품명</th>
                  <th>생성일</th>
                  <th>폐기일</th>
                  <th>수정자</th>
                </tr>
              </thead>
              <tbody>{renderProductCode}</tbody>
            </Table>
          </div>
        </Col>
        <Col>
          <SaveProductCode />
        </Col>
      </Row>
    </div>
  );
}

export default ProductPage;
