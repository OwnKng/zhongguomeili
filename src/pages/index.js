import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Layout from "../Components/Layout";

// import the pages
import { HuTiaoXia, Zhangye, Shangrila, Zhangjiajie } from "./locations";

const Pages = () => {
  return (
    <>
      <Router>
        <Layout>
          <Route exact path='/' component={HuTiaoXia}></Route>
          <Route exact path='/zhangye' component={Zhangye}></Route>
          <Route exact path='/shangrila' component={Shangrila}></Route>
          <Route exact path='/zhangjiajie' component={Zhangjiajie}></Route>
        </Layout>
      </Router>
    </>
  );
};

export default Pages;
