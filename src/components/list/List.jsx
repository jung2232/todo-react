import { useSelector } from "react-redux";
import styled from "styled-components";
import WorkingBox from "../todo/Todo";

function List() {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <>
      <div>
        <StH2>하고있🐿️</StH2>
        <StCards>
          {todos.map((todo) => {
            if (!todo.isDone) {
              return <WorkingBox todo={todo} key={todo.id}></WorkingBox>;
            } else {
              return null;
            }
          })}
        </StCards>

        <StH2>끝났🐿️</StH2>
        <StCards>
          {todos.map((todo) => {
            if (todo.isDone) {
              return <WorkingBox todo={todo} key={todo.id}></WorkingBox>;
            } else {
              return null;
            }
          })}
        </StCards>
      </div>
    </>
  );
}

const StH2 = styled.h2`
  text-align: left;
  margin-left: 20px;
`;

const StCards = styled.div`
  display: flex;
  flex-direction: column;
  flex-flow: row wrap;
  align-items: center;
  justify-content: left;
`;

export default List;
