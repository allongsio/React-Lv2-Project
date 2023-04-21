import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

const Label = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LabelDiv = styled.div`
  margin: 15px;
  font-size: 20px;
  font-weight: 600;
`;

const InputPairContainer = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(238, 238, 238);
`;

const InputText = styled.span`
  font-size: 18px;
  font-weight: bold;
  margin: 15px;
`;

const InputTitle = styled.input`
  height: 30px;
  width: 270px;
  border: none;
  border-radius: 10px;
`;

const InputContent = styled.input`
  height: 30px;
  width: 270px;
  border: none;
  border-radius: 10px;
`;
const AddButton = styled.button`
  height: 40px;
  width: 140px;
  background-color: rgb(0, 128, 128);
  border: none;
  border-radius: 8px;
  color: white;
  font-weight: bold;
`;

function Input() {
  return (
    <div>
      <Label>
        <LabelDiv>My Todo List</LabelDiv>
        <LabelDiv>React</LabelDiv>
      </Label>
      <InputField></InputField>
    </div>
  );
}

function InputField() {
  const dispatch = useDispatch();
  const titleAndContent = useSelector((state) => state.titleAndContent);
  const MaximumId = useSelector((state) => state.id);
  const onChangeHandler = (event) => {
    if (event.target.id === "title") {
      dispatch({ type: "title", payload: event.target.value });
    } else {
      dispatch({ type: "content", payload: event.target.value });
    }
  };
  const onSubmitHandler = () => {
    dispatch({
      type: "ADD",
      payload: {
        id: MaximumId + 1,
        title: titleAndContent.title,
        content: titleAndContent.content,
        isDone: false,
      },
    });
  };
  return (
    <div>
      <InputPairContainer>
        <div>
          <InputText>제목</InputText>
          <InputTitle
            value={titleAndContent.title}
            id="title"
            onChange={onChangeHandler}
          ></InputTitle>
          <InputText>내용</InputText>
          <InputContent
            value={titleAndContent.content}
            id="content"
            onChange={onChangeHandler}
          ></InputContent>
        </div>
        <div>
          <AddButton onClick={onSubmitHandler}>추가하기</AddButton>
        </div>
      </InputPairContainer>
    </div>
  );
}

export default Input;
