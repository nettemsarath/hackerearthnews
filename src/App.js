import React, { useEffect, Suspense } from "react";
import "./App.css";

import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchnewsData } from "slices/news";

import Search from "components/Search";
import Home from "components/Home";
import Publisher from "components/publisher";

const Layout = styled.div`
  padding: 0.5em;
  border: 0px solid;
  margin: 0 auto;
  max-width: 1440px;
  overflow: hidden;
  margin-top: 2em;
`;

const Loader = () => {
  return <div>loading...</div>;
};

function App() {
  console.log("GITHUB PAGES APPP");
  return (
    <Layout>
      <Search />
      <Router>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route path='/publisher/:PUBLISHER' component={Publisher} />
            <Route path='/' exact component={Home} />
          </Switch>
        </Suspense>
      </Router>
    </Layout>
  );
}

export default App;
