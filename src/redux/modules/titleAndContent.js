// 초기 상태값
const testInitialState = { title: "", content: "" };

// 리듀서
const titleAndContent = (state = testInitialState, action) => {
  switch (action.type) {
    case "title":
      return { title: action.payload, content: state.content };
    case "content":
      return { title: state.title, content: action.payload };
    case "ADD":
      return { title: "", content: "" };
    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default titleAndContent;
