import { hover } from "@testing-library/user-event/dist/hover";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addTodo } from "../../redux/modules/todos";
//import './style.css'

function Form() {
  const [titleVal, setTitleVal] = useState("");
  const [contVal, setContVal] = useState("");

  const dispatch = useDispatch();

  //벨류를 없애주는 함수
  const onReset = () => {
    setTitleVal("");
    setContVal("");
  };

  const onSubmitTodos = (e) => {
    // title, body 벨류가 공백이면 리턴
    if ((titleVal === "") & (contVal === "")) return;
    dispatch(addTodo(titleVal, contVal));
    // 리셋함수호출
    onReset();
  };

  return (
    <>
      <StForm id="form">
        <StP>제목</StP>
        <StInput
          onChange={(e) => {
            setTitleVal(e.target.value);
          }}
          value={titleVal}
          required
        />
        <StP>내용</StP>
        <StInput
          onChange={(e) => {
            setContVal(e.target.value);
          }}
          value={contVal}
        />
        <StSubmit
          onClick={() => {
            onSubmitTodos();
          }}
          id="submitBtn"
        >
          올리기
        </StSubmit>
      </StForm>
    </>
  );
}

const StForm = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-radius: 10px;
  border: 1px #ccc solid;
  font-size: 22px;
  font-weight: bold;
`;

const StInput = styled.input`
  height: 25px;
  width: 35%;
  padding: 10px;
  border-radius: 10px;
`;

const StSubmit = styled.button`
  border: none;
  border-radius: 10px;
  background-color: black;

  padding: 10px;

  font-size: 18px;
  font-weight: bold;
  color: white;
  cursor: pointer;
`;

const StP = styled.p`
  font-weight: bold;
`;

export default Form;
