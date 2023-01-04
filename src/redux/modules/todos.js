const ADD_TODO = "ADD_TODO";

const DELETE_TODO = "DELETE_TODO";

const TOGGLE_STATUS_TODO = "TOGGLE_STATUS_TODO";

const GET_TODO_BY_ID = "GET_TODO_BY_ID";

let nextId = 0;

export const addTodo = (title, body) => {
  return {
    type: ADD_TODO,
    payload: {
      id: 2 + nextId++,
      title: title,
      body: body,
      isDone: false,
    },
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

export const toggleStatusTodo = (id) => {
  return {
    type: TOGGLE_STATUS_TODO,
    id,
  };
};

export const getTodoById = (id) => {
  return {
    type: GET_TODO_BY_ID,
    id,
  };
};

// 초기 상태값
const initialState = {
  todos: [
    {
      title: "리액트공부하자",
      body: "너무어려워",
      id: 0,
      isDone: true,
    },
    {
      title: "리액트 마스터!!",
      body: "가즈아ㅏㅏㅏ",
      id: 1,
      isDone: false,
    },
  ],
  todo: {
    title: "",
    body: "",
    id: 0,
    isDone: undefined,
  },
};

// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    case TOGGLE_STATUS_TODO:
      const toggleState = {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, isDone: !todo.isDone } : todo
        ),
      };
      return toggleState;
    case GET_TODO_BY_ID:
      const getInfo = {
        ...state,
        todo: state.todos.find((todo) => {
          return todo.id === action.id;
        }),
      };
      return getInfo;
    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default todos;
