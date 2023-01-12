import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../contexts/ThemeContext";

const Nav = styled.header`
  text-align: center;
  padding: 15px;
  background-color: ${(props) => (props.isDark ? "black" : "lightgray")};
  color: ${(props) => (props.isDark ? "#ffffff" : "black")};
`;

const Header = () => {
  const { isDark } = useContext(ThemeContext);
  return (
    <Nav isDark={isDark}>
      <h1>Welcome To React Hooks</h1>
    </Nav>
  );
};
export default Header;
