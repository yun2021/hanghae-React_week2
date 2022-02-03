import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteMainFB } from "./redux/modules/main";

import { ImBin } from "react-icons/im";

const Main = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const words = useSelector((state) => state.main.list);

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {words.map((list, index) => {
        return (
          <Cards key={index} id={list.id}>
            <Word>{list.word}</Word>
            <P>의미</P>
            <Mean>{list.mean}</Mean>
            <P>예시</P>
            <Ex>{list.example}</Ex>
            <Button_D
              onClick={() => {
                dispatch(deleteMainFB(list.id));
                history.push("/");
              }}
            >
              <ImBin className="icon" size="20" color="#1d3557" />
            </Button_D>
          </Cards>
        );
      })}
      <Button
        onClick={() => {
          history.push("/Add");
        }}
      >
        밈 추가
      </Button>
    </div>
  );
};

const Cards = styled.div`
  box-sizing: border-box;
  width: 500px;
  height: 450px;
  font-size: 20px;
  background-color: #f1faee;
  border: 2px solid #a8dadc;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  float: left;
  margin: 40px 20px 40px 20px;
`;

const Word = styled.div`
  max-width: 100%;
  background-color: #a8dadc;
  font-size: 25px;
  font-weight: 900;
  color: #1d3557;
  margin: 0px;
  padding: 20px;
`;

const P = styled.div`
  color: #1d3557;
  font-weight: 600;
  border-bottom: 2px solid #a8dadc;
  padding: 5px;
`;

const Mean = styled.div`
  height: 125px;
  color: #1d3557;
  border-bottom: 2px solid #a8dadc;
  padding: 10px;
  overflow: auto;
`;

const Ex = styled.div`
  height: 125px;
  color: blue;
  padding: 10px;
  overflow: auto;
`;

const Button = styled.div`
  width: 60px;
  height: 20px;
  background-color: #a8dadc;
  margin: 20px;
  padding: 7px;
  border: 2px solid #457b9d;
  position: absolute;
  left: 0px;
  top: 10px;
`;

const Button_D = styled.div`
  margin: 0px;
`;

export default Main;
