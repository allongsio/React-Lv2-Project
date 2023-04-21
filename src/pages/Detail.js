import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const DetailPageWrapper = styled.div`
  height: 800px;
  width: 1100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DetailCardWrapper = styled.div`
  height: 300px;
  width: 300px;
  border: 1px solid grey;
`;

function Detail() {
  const param = useParams();
  const navigate = useNavigate();
  const todoItem = useSelector((state) => {
    return state.list.filter((item) => item.id == param.id)[0];
  });

  return (
    <DetailPageWrapper>
      <DetailCardWrapper>
        <p>ID : {todoItem.id}</p>
        <h2>{todoItem.title}</h2>
        <p>{todoItem.content}</p>
        <Link to="/">이전으로</Link>
      </DetailCardWrapper>
    </DetailPageWrapper>
  );
}

export default Detail;
