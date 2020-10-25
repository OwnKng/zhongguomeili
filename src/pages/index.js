import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import Layout from "../Components/Layout";

// import the pages
import { HuTiaoXia, Zhangye, Shangrila, Zhangjiajie, Huangshan } from "./locations";

const Pages = () => {
  const location = useLocation();

  return (
    <>
        <Layout>
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route exact path='/zhangye' component={Zhangye}></Route>
              <Route exact path='/shangrila' component={Shangrila}></Route>
              <Route exact path='/zhangjiajie' component={Zhangjiajie}></Route>
              <Route exact path='/huangshan' component={Huangshan}></Route>
              <Route exact path='/' component={HuTiaoXia}></Route>
            </Switch>
          </AnimatePresence>
        </Layout>
    </>
  );
};

export default Pages;

// 