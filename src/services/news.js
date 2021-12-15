import axios from "axios";

import NEWSJSON from "jsondata/newsData.json";
const FETCHNEWSURL = process.env.REACT_APP_FETCHNEWSURL;
const TESTFETCHAPIURL = process.env.REACT_APP_TESTFETCHAPIURL;

export const getNews = async () => {
  try {
    const { data } = await axios.get(TESTFETCHAPIURL);
    return NEWSJSON;
  } catch (error) {
    throw error.response.data;
  }
};
