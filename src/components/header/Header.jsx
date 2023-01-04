import styled from "styled-components";
import TodoList from "./../../pages/TodoList";

function Header() {
  return (
    <StHead
      className="black-nav"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <h1 style={{ color: "#fff" }}>TodoList</h1>
      <h2 style={{ color: "#fff", padding: "10px" }}>React</h2>
    </StHead>
  );
}

const StHead = styled.div`
  display: flex;
  background: #000;
  color: #fff;
  padding-left: 20px;
`;

export default Header;
