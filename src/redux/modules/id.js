import { testInitialState } from "./list";
// 초기 상태값

let MaximumId = 0;
testInitialState.map((item) =>
  item.id > MaximumId ? (MaximumId = item.id) : (MaximumId = MaximumId)
);

// 리듀서
const id = (state = MaximumId, action) => {
  switch (action.type) {
    case "ADD":
      return MaximumId + 1;
    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default id;
