// 초기 상태값
export const testInitialState = [
  {
    id: 1,
    title: "리액트 공부하기",
    content: "리덕스 어떻게 하지?",
    isDone: false,
  },
  {
    id: 2,
    title: "nextJS 공부하기",
    content: "이게 뭔데",
    isDone: true,
  },
  {
    id: 3,
    title: "typescript 공부하기",
    content: "이게 뭐냐고",
    isDone: true,
  },
  {
    id: 4,
    title: "aws 공부하기",
    content: "이건 또 어떻게 하는거임?",
    isDone: false,
  },
  {
    id: 5,
    title: "항해 수료하기",
    content: "열심히 해야지",
    isDone: false,
  },
];

// 리듀서
const list = (state = testInitialState, action) => {
  switch (action.type) {
    case "DELETE":
      return state.filter((item) => item.id !== action.payload);
    case "DONE_CHANGE":
      return action.payload;
    case "ADD":
      return [...state, action.payload];
    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default list;
