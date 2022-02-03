import React, { useEffect } from "react";
import styled from "styled-components";
import "./App.css";

import { Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { loadMainFB } from "./redux/modules/main";

import Add from "./Add";
import Main from "./Main";

function App() {
  const history = useHistory();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadMainFB());
  }, [dispatch]);

  return (
    <div className="App">
      <Title
        onClick={() => {
          history.push("/");
        }}
      >
        👉Yun's 밈 사전👈
      </Title>
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/Add" exact>
          <Add />
        </Route>
      </Switch>
    </div>
  );
}

const Title = styled.div`
  max-width: 100%;
  background-color: #a8dadc;
  color: #1d3557;
  font-size: 40px;
  font-weight: 700;
  margin: 0px;
  padding: 20px;
  border: 2px solid #a8dadc;
`;

export default App;
