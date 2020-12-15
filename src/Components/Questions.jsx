import React, { useContext, useEffect, useState } from "react";
import { QuizContext } from "./QuestionContext";
import { Row, Col } from "antd";
import styled from "styled-components";

const Input = styled.input`
  outline: none;
  padding: 0px 20px;
`;
const StyledButton = styled.button`
  padding: 5px 20px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: tomato;
  color: white;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;
const Questions = () => {
  const [qs, setQs] = useContext(QuizContext);
  const [qn, setQn] = useState(1);
  const [q, setQ] = useState("");
  const [a1, setA1] = useState("");
  const [a2, setA2] = useState("");
  const [a3, setA3] = useState("");
  const [a4, setA4] = useState("");
  const [cA, setCA] = useState("");

  const updateQn = (e) => {
    setQn(e.target.value);
  };
  const updateQ = (e) => {
    setQ(e.target.value);
  };
  const updateA1 = (e) => {
    setA1(e.target.value);
  };
  const updateA2 = (e) => {
    setA2(e.target.value);
  };
  const updateA3 = (e) => {
    setA3(e.target.value);
  };
  const updateA4 = (e) => {
    setA4(e.target.value);
  };
  const updateCA = (e) => {
    setCA(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setQn((prevState) => prevState + 1);

    setQs((prevState) => [
      ...prevState,
      { Qn: qn, Q: q, A1: a1, A2: a2, A3: a3, A4: a4, CA: cA }
    ]);
  };
  const handleDelete = (e) => {
    const value = e.target.getAttribute("value");
    setQs(qs.map((q) => q.Qn !== value));
  };

  return (
    <div>
      <h1>List of Quiz Questions</h1>

      <form onSubmit={submitHandler}>
        <Row gutter={[10, 10]}>
          <Col span={6} xs={24} sm={12} md={12} lg={6} xl={6}>
            Q No.){" "}
            <Input type="number" name="Q" value={qn} onChange={updateQn} />
          </Col>
          <Col span={6} xs={24} sm={12} md={12} lg={6} xl={6}>
            Q) <Input type="text" name="Q" value={q} onChange={updateQ} />
          </Col>
          <Col span={6} xs={24} sm={12} md={12} lg={6} xl={6}>
            A1) <Input type="text" name="A1" value={a1} onChange={updateA1} />
          </Col>
          <Col span={6} xs={24} sm={12} md={12} lg={6} xl={6}>
            A2) <Input type="text" name="A2" value={a2} onChange={updateA2} />
          </Col>
          <Col span={6} xs={24} sm={12} md={12} lg={6} xl={6}>
            A3) <Input type="text" name="A3" value={a3} onChange={updateA3} />
          </Col>
          <Col span={6} xs={24} sm={12} md={12} lg={6} xl={6}>
            A4) <Input type="text" name="A4" value={a4} onChange={updateA4} />
          </Col>
          <Col span={6} xs={24} sm={12} md={12} lg={6} xl={6}>
            Correct Ans)
            <Input type="text" name="A4" value={cA} onChange={updateCA} />
          </Col>
          <Col span={6} xs={24} sm={12} md={12} lg={6} xl={6}>
            <StyledButton type="submit">Add Quiz</StyledButton>
          </Col>
        </Row>
      </form>

      <Row gutter={[10, 10]}>
        {qs.map((Q, i) => {
          return (
            <Col key={i} span={8} xs={24} sm={12} md={12} lg={8} xl={6}>
              <div
                style={{
                  marginTop: 30,
                  listStyle: "none",
                  textAlign: "left",
                  paddingLeft: 30
                }}
              >
                <li>
                  Q{Q.Qn}) {Q.Q}
                </li>
                <li>A1) {Q.A1}</li>
                <li>A2) {Q.A2}</li>
                <li>A3) {Q.A3}</li>
                <li>A4) {Q.A4}</li>
                <StyledButton value={Q} onClick={handleDelete}>
                  Delete
                </StyledButton>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};
export default Questions;
