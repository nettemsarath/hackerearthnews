import React from "react";
import { convertTimestampToDate } from "helpers";
import styled from "styled-components";

const NewsDiv = styled.div`
  background: linear-gradient(
      278.66deg,
      rgba(0, 163, 255, 0.06) 6.34%,
      rgba(115, 129, 255, 0.06) 96.64%
    ),
    hsla(0, 0%, 100%, 0.1);
  padding: 20px 10px;
  border-radius: 10px;
  min-width: 200px;
  margin: 1em;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;

  & > div > button {
    padding: 3px 8px;
    margin: 5px 0px;
    border: none;
    outline: none;
    border-radius: 5px;
    background-image: linear-gradient(90deg, #0050ff 0, #0695e5 51%, #0050ff);
    text-align: center;
    color: #fff;
    padding: 6px 10px;
    cursor: pointer;
  }
`;

const NewsComp = ({ news, handleNavigation }) => {
  return (
    <NewsDiv>
      <div> {news.HOSTNAME} </div>
      <div>
        <button onClick={() => handleNavigation(news.PUBLISHER)}>
          {news.PUBLISHER}
        </button>
      </div>

      <div> {convertTimestampToDate(news.TIMESTAMP)} </div>
    </NewsDiv>
  );
};

export default NewsComp;
