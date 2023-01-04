import { useDispatch } from "react-redux";
import { deleteTodo, toggleStatusTodo } from "../../redux/modules/todos";
import { Link } from "react-router-dom";
import styled from "styled-components";

function WorkingBox({ todo }) {
  const dispatch = useDispatch();

  const onDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const onToggleTodo = (id) => {
    dispatch(toggleStatusTodo(id));
  };

  return (
    <StTodoBox key={todo.id}>
      <StP>
        <Link to={`/detail/${todo.id}`}>더보기</Link>
      </StP>
      <StH2>{todo.title}</StH2>
      <StP>{todo.body}</StP>
      <StDelBtn onClick={() => onDeleteTodo(todo.id)}>삭제하기</StDelBtn>
      <StDoneBtn onClick={() => onToggleTodo(todo.id)}>
        {todo.isDone ? "취소" : "완료"}
      </StDoneBtn>
    </StTodoBox>
  );
}

const StTodoBox = styled.div`
  width: 300px;
  height: 250px;
  border: 3px solid #000;
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
`;

const StDoneBtn = styled.button`
  font-size: 1em;
  width: 100px;
  height: 50px;
  background: #000;
  color: white;
  margin: 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;

const StDelBtn = styled.button`
  font-size: 1em;
  width: 100px;
  height: 50px;
  background: #000;
  color: white;
  margin: 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;

const StH2 = styled.h2`
  text-align: left;
`;

const StP = styled.p`
  text-align: left;
`;

export default WorkingBox;
