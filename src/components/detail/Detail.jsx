import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { getTodoById } from "../../redux/modules/todos";

function Detail() {
  const dispatch = useDispatch();

  const todo = useSelector((state) => state.todos.todo);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getTodoById(Number(id)));
  }, [dispatch, id]);

  return (
    <StDetail className="todoCard">
      <h3 style={{ textAlign: "left" }}>ID : {todo.id}</h3>
      <Link to="/">
        {" "}
        <StGoBackBtn> Go Back </StGoBackBtn>{" "}
      </Link>

      <StContent>
        <h2>title : {todo.title}</h2>
        <p>content : {todo.body}</p>
      </StContent>
    </StDetail>
  );
}

const StDetail = styled.div`
  width: 800px;
  height: 600px;
  border: 2px ridge grey;
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StContent = styled.div`
  text-align: left;
`;

const StGoBackBtn = styled.button`
  width: 100px;
  height: 40px;
  background: none;

  margin: 10px;
  border-radius: 10px;
  border: 2px solid blue;
`;

export default Detail;
