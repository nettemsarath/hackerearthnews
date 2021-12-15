import React, { useCallback } from "react";
import styled from "styled-components";

import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const Container = styled.div`
  margin: 2em;
`;

const Section = styled.div`
  margin: 0 2em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Search = () => {
  return (
    <Container>
      <Section>Search ...</Section>
    </Container>
  );
};

export default Search;
