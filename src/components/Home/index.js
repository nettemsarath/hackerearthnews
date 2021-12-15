import React, { useCallback } from "react";
import styled from "styled-components";

import NewsComp from "components/NewsComp";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const Container = styled.div``;

const Section = styled.div`
  margin: 0 2em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

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

const Home = () => {
  const history = useHistory();
  const { loading, AllNews, error } = useSelector((state) => state.news);

  const handleNavigation = useCallback((routeTo) => {
    history.push(`/publisher/${routeTo}`);
  }, []);
  if (loading) {
    return <Container>loading...</Container>;
  }

  return (
    <Container>
      <Section>
        {AllNews.length
          ? AllNews.map((news) => (
              <NewsComp
                key={news.ID}
                news={news}
                handleNavigation={handleNavigation}
              />
            ))
          : null}
      </Section>
    </Container>
  );
};

export default Home;
