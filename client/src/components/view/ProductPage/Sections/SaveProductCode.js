import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Table } from "react-bootstrap";
import { saveProductCode } from "../../../../_actions/user_action";

function SaveProductionCode() {
  const dispatch = useDispatch();

  const [ProductCode, setProductCode] = useState("");
  const [ProductName, setProductnName] = useState("");
  const [CreationDate, setCreationDate] = useState("");
  const [DisposalDate, setDisposalDate] = useState("");
  const [Name, setName] = useState("");

  const onProductCodeHandler = (event) => {
    setProductCode(event.currentTarget.value);
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
    let body = {
      productCode: ProductCode,
      productName: ProductName,
      creationDate: CreationDate,
      disposalDate: DisposalDate,
      name: Name,
    };

    dispatch(saveProductCode(body)).then((response) => {
      if (response.payload.success) {
        alert("저장 완료");

        setProductCode("");
        setProductnName("");
        setCreationDate("");
        setDisposalDate("");
        setName("");
      } else {
        alert("저장 실패");
      }
    });
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>제품코드</th>
            <th>제품명</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input
                maxLength="11"
                id="ProductCode"
                className="wd100"
                type="number"
                value={ProductCode}
                onChange={onProductCodeHandler}
              ></input>
            </td>
            <td>
              <input
                id="ProductName"
                className="wd100"
                type="text"
                value={ProductName}
                onChange={onProductNameHandler}
              />
            </td>
          </tr>
        </tbody>
      </Table>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>생성일</th>
            <th>폐기일</th>
            <th>수정자</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input
                id="CreationDate"
                className="wd100"
                type="number"
                value={CreationDate}
                onChange={onCreationDateHandler}
              />
            </td>
            <td>
              <input
                id="DisposalDate"
                className="wd100"
                type="number"
                value={DisposalDate}
                onChange={onDisposalDateHandler}
              />
            </td>
            <td>
              <input
                id="Name"
                className="wd100"
                type="text"
                value={Name}
                onChange={onNameHandler}
              />
            </td>
          </tr>
        </tbody>
      </Table>
      <Button type="submit" className="ml-3">
        저장
      </Button>
    </form>
  );
}

export default SaveProductionCode;
