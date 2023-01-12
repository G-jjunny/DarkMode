import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../contexts/ThemeContext";

const Content = styled.div`
  height: 75vh;
  background-color: ${(props) => (props.isDark ? "gray" : "#ffffff")};
  color: ${(props) => (props.isDark ? "#ffff" : "black")};
  text-align: center;
  display: flex;
  p {
    display: block;
  }
  .container {
    margin: auto;
  }
`;

export default function Contents() {
  const { isDark } = useContext(ThemeContext);
  return (
    <Content isDark={isDark}>
      <div className="container">
        <p>react hooks 학습용 프로젝트입니다.</p>
      </div>
    </Content>
  );
}
