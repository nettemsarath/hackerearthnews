import React, { useCallback, useMemo } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import NewsComp from "components/NewsComp";

const Section = styled.div`
  margin: 0 2em;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
`;

const Publisher = () => {
  const { PUBLISHER } = useParams();
  const history = useHistory();
  const { loading, AllNews, error } = useSelector((state) => state.news);

  const handleNavigation = useCallback((routeTo) => {
    history.push(`/publisher/${routeTo}`);
  }, []);

  const particularPublisherNews = useMemo(() => {
    return AllNews.filter((news) => news.PUBLISHER === PUBLISHER).sort(
      (news, nextnews) => (nextnews.TIMESTAMP > news.TIMESTAMP ? 1 : -1)
    );
  }, [PUBLISHER]);

  return (
    <Section>
      {particularPublisherNews.length
        ? particularPublisherNews.map((news) => (
            <NewsComp
              key={news.ID}
              news={news}
              handleNavigation={handleNavigation}
            />
          ))
        : null}
    </Section>
  );
};

export default Publisher;
