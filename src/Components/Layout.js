import React from "react";
import { GlobalStyles } from "./GlobalStyles.js";
import { Link } from "react-router-dom";
import { useZoom, useActive } from "./hooks";

// import components
import Zoom from "./Zoom";
import {
  Content,
  Controls,
  Header,
  Desc,
  Title,
  Hero,
  Footer,
} from "./Styled/App.styled";

const Layout = ({ children }) => {
  const { zoom } = useZoom();
  const { active } = useActive();

  const isActive = (location) => {
    return location === active ? "control active" : "control";
  };

  return (
    <>
      <GlobalStyles />
      <Content>
        <Header>
          <Title>中国美丽</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Desc>
          <Hero src='photos/china-map.png' alt='A 3d map of China' />
        </Header>
        <Controls>
          <Link className={isActive("Hutiaoxia")} to=''>
            Hutiaoxia
          </Link>
          <Link className={isActive("Shangrila")} to='shangrila'>
            Shangrila
          </Link>
          <Link className={isActive("Zhangye")} to='zhangye'>
            Zhangye
          </Link>
        </Controls>
        {children}
        <Footer>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Footer>
      </Content>
      {zoom ? <Zoom clicked={zoom} /> : <></>}
    </>
  );
};

export default Layout;
