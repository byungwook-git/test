import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";

import SaveSalesCode from "./Sections/SaveSalesCode";

function SalesPage() {
  const [SalesCode, setSalesCode] = useState([]);
  const [LastCode, setLastCode] = useState("");
  const [SearchTerm, setSearchTerm] = useState("");
  const [UpdateSelect, setUpdateSelect] = useState("");

  const SearchHandler = (event) => {
    // //입력 값 받아오기
    // setSearchTerm(event.currentTarget.value)

    // let body ={
    //   skip: 0,
    //   li
    // }

    //데이터 받아오기
    axios.post("/api/sales/salesCode").then((response) => {
      if (response.data.success) {
        // console.log(response.data.productInfo);

        //오름차순
        const sortData = response.data.productInfo.sort(function (a, b) {
          return a.salesCode > b.salesCode
            ? -1
            : a.salesCode < b.salesCode
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

  const newSalesCode = SalesCode.map((SalesCode, index) => {
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
  useEffect(() => {
    console.log("진행중");
    //데이터 받아오기
    axios.post("/api/sales/salesCode").then((response) => {
      if (response.data.success) {
        // console.log(response.data.productInfo);

        //오름차순
        const sortData = response.data.productInfo.sort(function (a, b) {
          return a.salesCode > b.salesCode
            ? -1
            : a.salesCode < b.salesCode
            ? 1
            : 0;
        });
        // console.log(sortData);
        if (sortData.length > 0) {
          setLastCode(sortData[0].salesCode + 1);
        } else {
          setLastCode(4000001);
        }
      } else {
        alert("가져오기 실패");
      }
      console.log(LastCode);
    });
  });
  const add = () => {
    let auto = document.getElementById("salesCode");
    auto.value = LastCode;
  };
  return (
    <div className="container" style={{ marginTop: 100 }}>
      <div className="mb-3">
        <input onChange={setSearchTerm} value={SearchTerm} />

        <Button className="ml-3" onClick={SearchHandler}>
          조회
        </Button>
        <Button type="button" className="ml-3" onClick={add}>
          신규등록
        </Button>
        <Button type="form" form="saveSalesCode" className="ml-3">
          저장
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
          <tbody>{newSalesCode}</tbody>
        </Table>
      </div>
      <div>
        <SaveSalesCode SearchHandler={SearchHandler} />
      </div>
    </div>
  );
}

export default SalesPage;
