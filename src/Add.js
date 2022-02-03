import React, { useRef } from "react";
import styled from "styled-components";
import "./App.css";

import { useDispatch } from "react-redux";
import { createMainFB } from "./redux/modules/main";

import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

const Add = (props) => {
  const word = React.useRef(null);
  const mean = React.useRef(null);
  const example = React.useRef(null);

  const dispatch = useDispatch();
  const history = useHistory();

  const params = useParams();
  const id_index = params.id;

  const addMain = () => {
    dispatch(
      createMainFB({
        word: word.current.value,
        mean: mean.current.value,
        example: example.current.value,
      })
    );
    history.push("/");
  };

  return (
    <div>
      <div className="addContainer">
        <H3>단어 추가하기</H3>
        <Form>
          <Word>
            <label>단어 </label>
            <input type="text" ref={word} />
          </Word>
          <Mean>
            <label>의미 </label>
            <input type="text" ref={mean} />
          </Mean>
          <Ex>
            <label>예문 </label>
            <input type="text" ref={example} />
          </Ex>
          <Button onClick={addMain}>밈추가</Button>
        </Form>
      </div>
    </div>
  );
};

const H3 = styled.div`
  max-width: 350px;
  min-height: 40px;
  background-color: #a8dadc;
  color: black;
  margin: 70px auto 0px auto;
  padding: 20px;
  font-size: 30px;
  font-weight: 900;
  color: #1d3557;
  border: 2px solid #a8dadc;
`;

const Form = styled.div`
  max-width: 350px;
  min-height: 40px;
  background-color: #f1faee;
  padding: 20px;
  margin: 0px auto;
  border: 2px solid #a8dadc;
  font-size: 18px;
  font-weight: 900;
  color: #1d3557;
`;

const Button = styled.div`
  width: 60px;
  height: 20px;
  font-color: blue;
  background-color: #a8dadc;
  display: block;
  margin: auto;
  padding: 7px;
  border: 2px solid #457b9d;
`;

const Word = styled.div`
  padding: 20px;
`;

const Mean = styled.div`
  padding: 20px;
`;

const Ex = styled.div`
  padding: 20px;
`;

export default Add;
