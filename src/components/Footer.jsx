import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../contexts/ThemeContext";

const Bottom = styled.div`
  position: relative;
  width: 100%;
  height: 10vh;
  background-color: ${(props) => (props.isDark ? "black" : "lightgray")};
  color: ${(props) => (props.isDark ? "#ffffff" : "black")};

  .abs {
    position: absolute;
    margin: 10px;
    right: 0;
  }
`;

export default function Footer() {
  const { isDark, setIsDark } = useContext(ThemeContext);
  const toggleTheme = () => {
    setIsDark(!isDark);
  };
  return (
    <Bottom isDark={isDark}>
      <button className="btn btn--primary abs" onClick={toggleTheme}>
        다크모드
      </button>
    </Bottom>
  );
}
