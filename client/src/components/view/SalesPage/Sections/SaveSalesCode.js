import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { saveSalesCode } from "../../../../_actions/user_action";

function SaveSalesCode(props) {
  const dispatch = useDispatch();

  const [SalesCode, setSalesCode] = useState("");
  const [ProductName, setProductnName] = useState("");
  const [CreationDate, setCreationDate] = useState("");
  const [DisposalDate, setDisposalDate] = useState("");
  const [Name, setName] = useState("");

  const onSalesCodeHandler = (event) => {
    setSalesCode(event.currentTarget.value);
  };
  const onProductNameHandler = (event) => {
    setProductnName(event.currentTarget.value);
  };
  const onCreationDateHandler = (event) => {
    setCreationDate(event.currentTarget.value);
  };
  const onDisposalDateHandler = (event) => {
    setDisposalDate(event.currentTarget.value);
  };
  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log();
    //버튼 클릭시 body에 담아 dispatch로 reducer 실행
    let body = {
      salesCode: SalesCode,
      productName: ProductName,
      creationDate: CreationDate,
      disposalDate: DisposalDate,
      name: Name,
    };

    dispatch(saveSalesCode(body)).then((response) => {
      if (response.payload.success) {
        props.SearchHandler();

        setSalesCode("");
        setProductnName("");
        setCreationDate("");
        setDisposalDate("");
        setName("");

        alert("저장 완료");
      } else {
        alert("저장 실패");
      }
    });
  };

  return (
    <div>
      <form id="saveSalesCode" onSubmit={onSubmitHandler}>
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
          <tbody>
            <tr>
              <th>
                <input
                  id="salesCode"
                  className="wd100"
                  type="number"
                  name="salesCode"
                  onChange={onSalesCodeHandler}
                  value={SalesCode}
                />
              </th>
              <th>
                <input
                  className="wd100"
                  type="text"
                  name="productName"
                  onChange={onProductNameHandler}
                  value={ProductName}
                />
              </th>
              <th>
                <input
                  className="wd100"
                  type="number"
                  name="creationDate"
                  onChange={onCreationDateHandler}
                  value={CreationDate}
                />
              </th>
              <th>
                <input
                  className="wd100"
                  type="number"
                  name="disposalDate"
                  onChange={onDisposalDateHandler}
                  value={DisposalDate}
                />
              </th>
              <th>
                <input
                  className="wd100"
                  type="text"
                  name="name"
                  onChange={onNameHandler}
                  value={Name}
                />
              </th>
            </tr>
          </tbody>
        </Table>
      </form>
    </div>
  );
}

export default SaveSalesCode;
